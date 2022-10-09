FROM python:3.10.7-slim-buster

# create group and user
RUN adduser --system --group app
# set ownership and permissions
# RUN chown -R app:app .

RUN python -m venv /opt/venv
# Make sure we use the virtualenv:
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /home/app

RUN pip install --upgrade pip

COPY --chown=app:app requirements.txt .
RUN pip install -r requirements.txt

COPY --chown=app:app . .

USER app