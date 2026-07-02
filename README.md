# ENEI Interest

Projeto completo para a página de interesse do ENEI 2027.

## Estrutura

```text
backend/          FastAPI + SQLModel + PostgreSQL
frontend/         React + Vite
frontend-design/  Versão estática de referência visual
```

## Backend

```bash
cd backend
cp .env.example .env
make install
make dev
```

A API fica disponível em:

```text
http://localhost:8000
```

Endpoints principais:

```text
GET  /api/health
POST /api/submissions
GET  /api/submissions/quantity
GET  /api/admin/submissions
GET  /api/admin/submissions/export.csv
```

### Docker

```bash
cd backend
cp .env.example .env
docker compose up --build
```

### Ver submissões com API admin

Define `ADMIN_TOKEN` no ficheiro `backend/.env`.

Depois usa:

```bash
curl -H "Authorization: Bearer change_me_to_a_secure_admin_token" http://localhost:8000/api/admin/submissions
```

CSV:

```bash
curl -H "Authorization: Bearer change_me_to_a_secure_admin_token" http://localhost:8000/api/admin/submissions/export.csv -o submissions.csv
```

### Migrations com Alembic

O projeto inclui Alembic para controlar alterações futuras da base de dados.

```bash
cd backend
PYTHONPATH=src alembic upgrade head
```

Em desenvolvimento o backend ainda cria as tabelas automaticamente ao iniciar, para manter o arranque simples.

## Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

O frontend fica disponível em:

```text
http://localhost:5173
```

Por defeito, o frontend usa a API em:

```text
http://localhost:8000
```

Para alterar o URL da API, edita `frontend/.env`:

```text
VITE_API_BASE_URL=http://localhost:8000
```

## Produção

```bash
cd frontend
npm run build
```

A build fica em `frontend/dist/`.

## Testes backend

```bash
cd backend
make test
```
