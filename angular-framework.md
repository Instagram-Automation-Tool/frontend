---
description: Explain the "how" and "why" of using Angular in our project.
---

# Angular Framework

## Why Angular?

**Angular** is an open-source front-end framework developed by Google for creating dynamic modern web apps. It uses JavaScript-based TypeScript programming language to eliminate dispensable code and ensure lighter and faster apps.

<figure><img src="https://preprod.grazitti.com/assets/2018/06/8-Proven-Reasons-You-Need-Angular-01.png" alt=""><figcaption></figcaption></figure>

Main reasons to use Angular for frontend development:

* Angular is supported by **Google**. Google provides continuous development,  maintenance, scalability and documentation for further developers.
* Angular applications are built using **TypeScript** language, a superscript for JavaScript, which ensures higher security as it supports types, primitives and interfaces. It helps catch and eliminate errors early in the process while writing the code or performing maintenance tasks.
* Angular provides declarative UI by using HTML to define the UI of the application. This allows developers to just let Angular handle the rendering cycle and not worry about programmatic flow and what and when the UI components render first.
* Angular has a simplified Model-View-Controller architecture.&#x20;

Angular framework is based on components that begin in the same style. For instance, each **component** places the code in a component class or defines a **`@Component`** . These components are small interface elements independent of each other and offer several benefits, including:

* **Reusability:** The component-based structure of Angular makes the components highly reusable across the app. You can build the UI (User Interface) with moving parts while also ensuring a smooth development process for developers.
* **Simplified Unit-Testing:** Being independent of each other, the components make unit testing much easier.
* **Improved Readability:** Consistency in coding makes reading the code a piece of cake for new developers on an ongoing project. This adds to their productivity and overall efficiency of the project.
* **Ease of Maintenance:** Decoupled components are replaceable with better implementations. Simply put, it enables efficient code maintenance and update.

## Instagram User Dashboard

Our task for the project is to create an "admin panel" type of application where user will login and get access to multiple features. This requires a lot of designing and UI investigation. For the sake of delivering more user functionality, which will bring more business value to our stakeholders, we decided to investigate existing dashboard templates and adjust it to our needs.

<figure><img src=".gitbook/assets/Screenshot 2022-11-09 at 14.51.48.png" alt=""><figcaption></figcaption></figure>

This approach was discussed with our product owner and agreed to move forward.

## Angular x Django&#x20;

Now that the backend authentication flow was created, time to implement it with our dashboard.

_**Task 1**_:&#x20;

Task 2: call the&#x20;





## NGRX - state management

Our application requires managing application state including server-side data provided from our Django backend API. Usually we could use the Angular provided services, which is presented as one centralized file that can be injected in other components. This would work fine for small applications, but it can become unstable when components start&#x20;

