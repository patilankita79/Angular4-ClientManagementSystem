# Angular4-Client Management System
A client panel/ client management system - a single page application, developed using Angular 4 for front-end and Google's firebase for backend.
<hr>
Firebase gives cloud NoSQL database along with authetication methods. User will be able to login, manage their client. All the clients will have basic information and balance they owe.  
Settings component => to disable registration for the whole system
<hr>

## Firebase Setup
1.Go to https://firebase.google.com/ and log in <br>
2. Go to console -> Add Project <br>
3. Enable authentication => Sign in method => Set the status of provider - "Email/Password" to enable<br>
<img src = "" />4. <b>Database</b> - all the clients will be stored here. You have to have client.json <br>
Make the database public by changing the rules<br>
<img src = "" />5.Adding initial user to the firebase => Go to authentication -> Add user

<hr>
Bootstrap the project

```
npm install bootstrap@4.0.0-alpha.6 jquery tether --save
```
Include the bootstrap path in "styles" and jquery, tether, bootstrap javascript file path in "scripts" in angular-cli.json

<hr>

## Generating components

1. Dashboard

```
ng g component components/dashboard
```
2.
Inside Dashboard, Client component will be there

```
ng g component components/clients
```

3. Inside Client component, there are client details

```
ng g component components/clientDetails
```

4. 
```
ng g component components/addClient
```
5.
```
ng g component components/editClient
```

6.
```
ng g component components/navbar
```

7.
```
ng g component components/sidebar
```

8.
```
ng g component components/login
```

9.
```
ng g component components/register
```

10.
```
ng g component components/settings
```

11. A component for page not found, if we try to go a route that doesn't exist, 
```
ng g component components/pageNotFound
```













