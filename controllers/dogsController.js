import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDogs = async (req, res) => {
  try {
    const dogs = await prisma.dog.findMany();
    res.json(dogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch dogs" });
  }
};

export const createDog = async (req, res) => {
  try {
    const { name, breed, age } = req.body;
    const dog = await prisma.dog.create({ data: { name, breed, age: Number(age) } });
    res.status(201).json(dog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create dog" });
  }
};

export const updateDog = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, breed, age } = req.body;
    const existing = await prisma.dog.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: "Dog not found" });
    const updated = await prisma.dog.update({ where: { id }, data: { name, breed, age: Number(age) } });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update dog" });
  }
};

export const deleteDog = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const existing = await prisma.dog.findUnique({ where: { id } });
    if (!existing) return res.status(404).json({ error: "Dog not found" });
    const removed = await prisma.dog.delete({ where: { id } });
    res.json(removed);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete dog" });
  }
};
