# Django-ReacttJS-Blog-Website

## This is a blg website With a Django backend, using Postgresql as a database using the the cloud platform, Railway.app for hosting, the frontend is made up of React.js with Django Rest APIS used to connect the backend to the frontend.

### It includes also WYSIWYG editor on the Django Admin which which makes it very very easy to create blogs posts, delete those blog posts, edit them when necessary and also to update the content of the blog posts.

## TO ACCESS THIS REPO, DO THE FOLLOWING

CLONE THIS REPO
`git clone https://github.com/GoitsemangLebane/Django-ReacttJS-Blog-Website.git`

#make sure you have the **PYTHON** AND **NODEJS & NPM** installed in your system to be able to run this project.

#BACKEND
on the command line, move to the directory of the backend folder using `cd`

##create a virtual environment to install your dependencies, we will call this one *venv*
`python3 -m venv venv`

activate the virtual environment
`venv\Scripts\activate`

Run the requirements.txt to install all the necessary frameworks and libraries
`pip install -r requirements.txt`

##ensure you have internet connection as the postgresql database is hosted on a cloud platform
Run the server to activate your backend
`python manage.py runserver`

#FRONTEND

RUN:
`npm install`
this will install all the required frontend packages

then RUN:
`npm start` 
to start the development server on your local machine.
