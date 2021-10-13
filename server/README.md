#Prerequisites
Python3


##To run the Backend application

cd server

python3 -m venv env

source env/bin/activate

pip install -r requirements.txt

cd ad_platform

python manage.py makemigrations

python manage.py migrate

python manage.py runserver


##To create admin (optional)
python manage.py createsuperuser --email admin@example.com --username admin
