# Run API in development mode
install:
	pip install -r requirements.txt

dev:
	PYTHONPATH=src fastapi dev src/main.py

# Run API in production mode
prod:
	PYTHONPATH=src fastapi run src/main.py

test:
	PYTHONPATH=src pytest

docker-build:
	docker build -t enei-interest .

docker-run:
	docker run -p 8000:8000 --env-file .env enei-interest

compose:
	docker compose up --build -d