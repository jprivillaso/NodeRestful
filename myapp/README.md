# Using

    - AngularJs
    - ExpressJs
    - NodeJs
    - MongoDb

Run this command to generate npm_modules

    npm install

This will generate a folder called npm_modules

# Database

The application uses MongoDB. Run the following command to access the database
The following are the information required for the database:

    - Database name: restApp
    - Collection name: userlist

Create a single user to test the application

    db.userList.insert(user: 'username', password: 'mypasswd');
