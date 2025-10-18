In the final stage of this project, I focused on developing and integrating secure login functionality for The Wild Oasis admin dashboard. 
This process involved implementing a complete authentication system using Express, MongoDB, and JSON Web Tokens (JWT) to ensure that only authorized administrators can access restricted areas. 
On the backend, I designed a User schema to store encrypted credentials, applying hashing and salting techniques to enhance data security. 
Two dedicated API routes were developed to handle account creation and authentication, with JWTs generated upon successful login to maintain secure session validation. 
On the frontend, I created an Angular Authentication Service to manage login states and token storage, enabling the interface to dynamically display “Login” or “Logout” based on user status. 
Furthermore, access to sensitive features such as Add Trip and Edit Trip was restricted to authenticated users.
Completing this feature allowed me to strengthen the project’s overall security architecture while aligning it with professional standards for modern web application development.
