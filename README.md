# Car-Purchase-website
This is a very simple fullstack demo project for beginners, that demonstrates user registration, login, and account management functionality.The project consist of nodejs,frontend development and mongodb to connect with Databases.

The project is developed using HTML5,CSS3,javaScript ,nodejs,mongodb,mysql languages.

  Features:-
1-User registration
2-User login
3-Displaying user profile information
4-Logging out
5-Deleting user accounts

    Usages:-
1-Open a web browser and navigate to http://localhost:3000.
2-Register a new user account by clicking the "Register" link and filling out the registration form.
3-Log in using the registered account credentials by clicking the "Login" link and filling out the login form.

   Accessing H2 Database :-
This project uses the H2 Database as the default database for development purposes. To access the H2 Database console, follow these steps:

Make sure the backend server is running.

Visit http://localhost:8080/h2-console. In your first login, you may need to enter the default authorization credentials. Default username: myuser, and default password: mypassword.

In the "JDBC URL" field, enter the URL specified in the application.properties file of the backend. The default URL is jdbc:h2:mem:testdb.

Enter your username and password (as specified in the application.properties file) in the "User Name" and "Password" fields, respectively. The default username is sa and the default password is an empty string.

Click "Connect" to access the H2 Database console.

In the H2 Database console, you can view and manage the database tables, execute SQL queries, and monitor the database connections.

Note: The H2 Database is an in-memory database, which means that the data stored in the database will be lost when the backend server is stopped. To persist the data, consider using a different database system (e.g., MySQL, PostgreSQL, MongoDB) and configure the connection settings in the application.properties file.
