# Dogs API

간단한 강아지 REST API입니다. 데이터는 메모리(배열)에 저장됩니다.

설치 및 실행:

```powershell
cd c:\Users\asd\Desktop\test
npm install
npm start
```

엔드포인트:

- `GET /` : { message: '안녕하세요 개같은나라입니다.' }
- `GET /dogs` : 강아지 리스트
- `POST /dogs` : 강아지 추가 (body: `name`, `breed`, `age`)
- `PUT /dogs/:id` : 강아지 수정 (body: `name`, `breed`, `age`)
- `DELETE /dogs/:id` : 강아지 삭제

주의: DB 미사용, 서버 재시작 시 데이터 초기화됩니다.
