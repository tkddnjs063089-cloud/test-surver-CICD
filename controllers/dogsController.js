let dogs = [];
let nextId = 1;

export const getDogs = (req, res) => {
  res.json(dogs);
};

export const createDog = (req, res) => {
  const { name, breed, age } = req.body;
  const dog = { id: nextId++, name, breed, age };
  dogs.push(dog);
  res.status(201).json(dog);
};

export const updateDog = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, breed, age } = req.body;
  const idx = dogs.findIndex((d) => d.id === id);
  if (idx === -1) return res.status(404).json({ error: "Dog not found" });
  dogs[idx] = { id, name, breed, age };
  res.json(dogs[idx]);
};

export const deleteDog = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = dogs.findIndex((d) => d.id === id);
  if (idx === -1) return res.status(404).json({ error: "Dog not found" });
  const removed = dogs.splice(idx, 1)[0];
  res.json(removed);
};
