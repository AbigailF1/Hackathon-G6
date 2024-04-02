# Hackathon-G6\
# Backend Project Setup Guide

This guide will walk you through the steps to set up the project on your local machine.

## Prerequisites

Before getting started, ensure you have the following installed:

- Python (version 3.x)
- Git

## Setup Instructions

1. **Set up the virtual environment**: Use the command `python -m venv venv` to create a virtual environment named `venv`.

2. **Activate the virtual environment**: Depending on your operating system, activate the virtual environment using one of the following commands:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`

3. **Navigate to the backend directory**: Use the command `cd backend` to move to the directory containing the backend code.

4. **Navigate to the project directory**: Move to the project directory, such as Academate, using the command `cd Academate`.

5. **Install project dependencies**: Install the required Python packages listed in `requirements.txt` by running `pip install -r requirements.txt`.

6. **Create database migrations**: Generate database migration files using `python manage.py makemigrations`.

7. **Apply database migrations**: Apply the generated database migrations to the database using `python manage.py migrate`.

8. **Create a superuser**: Create a superuser account for accessing the Django admin interface by running `python manage.py createsuperuser`.

9. **Start the development server**: Launch the Django development server by executing `python manage.py runserver`.

## Running the Application

Once the setup is complete, you can access the application by opening a web browser and navigating to [http://localhost:8000](http://localhost:8000).

If the application is running on a different port or host, please use the appropriate URL provided by the development server.

https://hackathon-g6.vercel.app/
