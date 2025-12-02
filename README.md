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

데이터베이스(Prisma + PostgreSQL)

- 이 프로젝트는 Prisma v6를 사용하도록 설정되어 있습니다.
- 로컬에서 Postgres 또는 원격 Postgres(예: Render Postgres)를 사용하세요.
- `.env.example`를 참고해 `DATABASE_URL`을 설정한 후 Prisma 마이그레이션 또는 `prisma db push`를 실행하세요.

간단한 시작 절차 (Postgres 연결 후):

1. 의존성 설치

```powershell
npm install
```

2. Prisma 클라이언트 생성 및 DB 스키마 적용

```powershell
npm run prisma:generate
npm run prisma:migrate
```

또는 테스트용으로 스키마를 강제로 DB로 푸시하려면:

```powershell
npm run prisma:dbpush
```

DBeaver로 연결하기

- DBeaver에서 `Database` → `New Database Connection` → PostgreSQL 선택
- `Host`, `Port`, `Database`, `Username`, `Password`에 `.env`의 `DATABASE_URL` 정보를 넣고 연결하세요.
