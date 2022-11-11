# syntax=docker/dockerfile:1
FROM python:3.10-alpine
ENV PYTHONDONTWRITEBYTECODE=1
WORKDIR /code
COPY starships /code/starships
COPY starships_site /code/starships_site
COPY manage.py /code/
COPY requirements.txt /code/
COPY start.sh /code/
RUN pip install -r requirements.txt
CMD ["./start.sh"]

# command to build the image :
# docker build -t starships-app:1.0 --rm=true --no-cache=true .
