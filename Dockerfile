FROM python:3.10.7-slim-buster

RUN python -m venv /opt/venv
# Make sure we use the virtualenv:
ENV PATH="/opt/venv/bin:$PATH"

RUN pip install --upgrade pip

WORKDIR /app

# create group and user
RUN adduser --system --group app
# set ownership and permissions
RUN chown -R app:app .

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

USER app