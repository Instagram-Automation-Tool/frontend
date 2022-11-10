---
description: >-
  Describe the technical stack in our Instagram project development. Analyse
  existing software suitable for our development. Discuss the choices with
  stakeholders.
---

# Instagram Tool - Stack Description

### <mark style="color:blue;">Project description</mark>

Create a dashboard application where user will be able to connect their Instagram account and perform automated processes such as following, liking, adding comments and other tasks that will increase the user's Instagram account awareness.

### <mark style="color:blue;">Frontend</mark>

One of the main technical requirements for our project was to create the dashboard application using Angular.&#x20;

Angular is a platform and framework for **building single-page client applications using HTML and TypeScript**. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.&#x20;

This was a "must" from our stakeholder as their current Linkedin dashboard application is built with Angular and it would ease their working process in future development.

#### _<mark style="color:purple;">Design</mark>_

As the project is developed in Agile manner, there was no need for us to come up with a completely new design from scratch, as there are a lot of well designed and organised dashboard templates that are built on Angular. The project owner agreed with the approach and gave us green light on starting to already implement some user stories, rather than spend time on design that later on might be adjusted by their company.

<figure><img src=".gitbook/assets/Screenshot 2022-10-12 at 13.50.33.png" alt=""><figcaption><p>Angular dahsboard template</p></figcaption></figure>

#### _<mark style="color:purple;">Angular</mark>_&#x20;

The modular structure of Angular arranges the code into different modules so all services and components are divided into different groups when you construct them. In Angular coding, you can separate functionality into reusable pieces of code.

Here’re some set of rules that you need to follow to make your project comply with the standard Angular style guide

* Per file, the code must not exceed from **400** lines limit
* Per function, the code must not exceed from **75** lines
* Utilise custom prefix to prevent element name collisions with components in other apps and with native HTML elements.
* If the values of the variables are intact, declare it with const
* Names of properties and methods should be in lower camel case
* Always leave one empty line between imports and module such as third party and application imports and third-party module and custom module
* We shouldn’t name our interfaces with the **starting capital I letter** as we do in some programming languages.

It is very important not to create more than one component, service, directive… inside a single file. Every file should be responsible for a **single functionality**. By doing this, we are keeping our files clean, readable, and maintainable.

Using interfaces is a perfect way of describing our object literals. If our object is an interface type, it is obligated to implement all of the interface’s properties.

TypeScript will show an error if an object doesn’t contain all of the interface’s properties.

<figure><img src="https://blogs.halodoc.io/content/images/2021/04/carbon--39-.png" alt=""><figcaption></figcaption></figure>

Utilizing lazy load the modules can enhance productivity. Lazy Load is a built-in feature in Angular which helps us with loading the things on demand. When have used LazyLoad it helps in reducing the size of the application by abstaining from unnecessary file from loading. Following are the modules, which are been used in angular apps widely

* Multi Modules
* Routing Modules
* Shared Modules
* Lazy Load Modules

### <mark style="color:blue;">Backend</mark>

Another requirment from the stakeholder was to use Django for our backend development.&#x20;

Essentially **Django is a web-framework that is built using Python**, the programming language. Python is the language used to program in, and Django is a framework that helps abstract away and ease some of the routine tasks that webmasters encounter often.

<figure><img src=".gitbook/assets/django-angular-12-crud-example-rest-framework-architecture (1).png" alt=""><figcaption></figcaption></figure>

More detailed explanation in next document:
