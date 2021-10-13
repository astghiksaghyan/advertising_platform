Prerequisites

Python3



cd server 
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt

cd /advertising_platform/server/ad_platform
python manage.py migrate

python manage.py createsuperuser --email admin@example.com --username admin
123456
