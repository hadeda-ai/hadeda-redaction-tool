### Instructions for running the API locally

1. Install Python `3.8.5` on your system.

2. Create a virtual environment using `conda` or `venv`

3. Activate the environment and install the required packages as shown in `requirements.txt`

   ```bash
   pip install -r requirements.txt
   ```

4. Migrate your models to the Database. We will use a local Database, SQLite which is the default database for Django. Navigate to the project folder, ensure that you are in the directory where `manage.py` file exists and run the following command:

   ```bash
   python manage.py migrate
   ```

   This will create the tables we require in the SQL database.

5. This is the last step, to run the app just use:

   ```python
   python manage.py runserver
   ```

   The server should start running and the API will now be available at `http://127.0.0.1:8000/`

6. You can use the `Django REST Framework` interface or use something like `Postman` to send your requests.