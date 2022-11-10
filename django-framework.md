---
description: This document will present the "why" and "how" of using Django framework.
---

# Django Framework

## <mark style="color:blue;">Introduction</mark>

Django is an open-source framweork used for creating backend application based on Python. It's goal was to simplify development process, aiming for simplicity, flexibility and scalability.&#x20;

&#x20;Django presents following featuers:

* Relatively simple syntax&#x20;
* It has its own web server during development
* Uses Model-View-Controller core architecture
* Has HTTP libraries
* Middleware support
* Easy to use Python unit test framework

Security is also a top priority for Django. It has built-in securtiy system that helps developers to avoid common security issues such as clickjacking, cross-site scripting, SQL injection.

It is also time-tested by a big and supportive community accross multiple forums, channels. It is well documented for an open-source framework and is maintained on a high level, being regularly updated.&#x20;

Django is used in projects that need to handle large volumes of data, user interactions or heavy traffic, yet it's simple enough to scale up a smaller project. Some of the big companies in industry that use Django are Instagram, Spotify, Washington Post, Dropbox and many more.&#x20;



## <mark style="color:blue;">Implementation</mark>

Django REST framework helps us build RESTful Web Services flexibly. To install the package, run the command in terminal:

```
pip install djangorestframework
```

To create a new Django project:

```
django-admin startproject InstagramAutomationProject
```

We created a new database using Azure Coud Web Services and linked our Django project to it in the `settings.py` file:

<figure><img src=".gitbook/assets/Screenshot 2022-11-03 at 08.33.26.png" alt=""><figcaption></figcaption></figure>

Settings.py file contains more project settings such as configuration for CORS, middleware class to listen in on responses, used applications, timezone, language, authenticaion configuration and more.&#x20;

To set up a new application inside our Django project, run following command:

```python
python manage.py IgBotPrj
```

<figure><img src=".gitbook/assets/Screenshot 2022-11-03 at 08.41.00.png" alt=""><figcaption></figcaption></figure>

To simplify, we created <mark style="color:purple;">`IgBotPrj`</mark> as our Django project. The <mark style="color:purple;">`IgBotApp`</mark> is our automation app for Instagram and <mark style="color:purple;">`account`</mark> is used for JWT authentication on the fronted.

<mark style="color:purple;">`IgBotEnv`</mark> is our virtual environment for Python. It's not a must to use a VE, but it's considered best practice. Virtual environments are  used for dependency management and isolation, ease of installing and using Python packages without system-administrator access, and automated testing of Python software across multiple Python versions. So it keeps our package dependencies clean across multiple projects. To create a VE run the commands:

```python
1. python -m venv <env name>
2. source <EnvName>/bin/activate
```

## Authentication

To create a new app inside our project:path

```
python manage.py startapp account
```



This created a new <mark style="color:purple;">`account`</mark> folder in our IG project folder. To link our app to the project:&#x20;

{% code title="settings.py" %}
```
INSTALLED_APPS = [
    ...
    'account.apps.AccountsConfig'
]
```
{% endcode %}

Time to create a custom user model. To do this, use the Django's <mark style="color:orange;">`AbstractBaseUser`</mark> class. This allows having full control of the model by overriding the model shipped by Django. So inside the account/models.py create our model:

<figure><img src=".gitbook/assets/Screenshot 2022-11-03 at 08.59.47.png" alt=""><figcaption></figcaption></figure>

It's a simple model containing the basic props: email, username, full\_name, DoB, etc, but with enforced email and username.&#x20;

A very important method is the <mark style="color:orange;">`tokens`</mark> property. It uses `RefreshToken` from [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/) to create a set of tokens to recognise a user.

Set JWT as the default REST Framework's Default authentication class in our `settings.py`:

<figure><img src=".gitbook/assets/Screenshot 2022-11-03 at 09.13.09.png" alt=""><figcaption></figcaption></figure>

Make Django aware of our custom <mark style="color:orange;">`User`</mark> model by appending the following to our <mark style="color:purple;">`settings.py`</mark> file:e

```
AUTH_USER_MODEL = "account.User"
```

Now, its safe to run migrations and create the database:

{% code lineNumbers="true" %}
```
python manage.py makemigrations
    Migrations for 'accounts':
        accounts/migrations/0001_initial.py
            - Create model User
python manage.py migrate //this will create the DB
```
{% endcode %}



**Serialisers -** in Django REST Framework are responsible for converting objects into data types understandable by javascript and front-end frameworks.

**Views -**  are **Python functions or classes that receive a web request and return a web response**. The response can be a simple HTTP response, an HTML template response, or an HTTP redirect response that redirects a user to another page.

To make endpoints, create a `urls.py` in the <mark style="color:purple;">`account`</mark> app and add the paths to the corresponding views.

<figure><img src=".gitbook/assets/Screenshot 2022-11-03 at 09.10.34.png" alt=""><figcaption></figcaption></figure>

`path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh'` is important to help recreate `access` tokens for existing users who want to login.

So for each path there is a corresponding view that we created before that will perform the functionality. For example if accesses the `'login/'` endpoint, we will be calling the code from the LoginAPIView that we created in the views folder.&#x20;

```
python manage.py runserver
```

This will run the Django project on a local server with default port 8000. So in the fronted, if we want to access the endpoints, we will make HTTP requests to our local host: `http:localhost:8000/<endpoint>`
