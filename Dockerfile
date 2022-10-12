# syntax=docker/dockerfile:1
FROM python:3.10-alpine
ENV PYTHONDONTWRITEBYTECODE=1
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY starships_root /code/
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
