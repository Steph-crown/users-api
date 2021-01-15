# users-api
This is a REST API that registers, gets, update, deletes users and also get a list of all users



# currency-rates-api

Link: https://usersapi12.herokuapp.com//


## Usage


> GET ```/api/users```

This returns a list of all the saved users

A successful response for the above request should return the following schema (of course with a more up-to-date values)

```jsx
{
    "data": [
        {
            "_id": "6000015559daa311b00c37d3",
            "firstname": "Steph",
            "lastname": "Crown",
            "email": "emmanuelstephen024@gmail.com",
            "mobile": "+2349090194796",
            "id": "hrxj0jo33e",
            "__v": 0
        }, 
        ...
    ]
}
```



> POST ```/api/user```

This request should go along with a body object with the following keys:

```jsx
    "firstname" - String,
    "lastname"  - String,
    "email"     - String (Valid Email Address),
    "mobile"    - String
```

This saves a user to the database and returns the user object

A successful response for the above request should return the following schema (of course with a more up-to-date values)

```jsx
{
    "data": {
        "_id": "6001a3a32a3950370c49ed5a",
        "firstname": "Adebisi",
        "lastname": "Crown",
        "email": "emmanuelstephen024@gmail.com",
        "mobile": "2349090",
        "id": "inwmcnz31m8",
        "__v": 0
    }
}
```



> GET ```/api/user/:id```

This value of :id is a valid id of any user object in the database. 

This request returns a user object of the user with the id stated by the endpoint

A successful response for the above request should return the following schema (of course with a more up-to-date values)

```jsx
{
    "data": {
        "_id": "6001a4b1a8ba8b002215aabf",
        "firstname": "Toke",
        "lastname": "Crown",
        "email": "emmanuelstephen024@gmail.com",
        "mobile": "2349090",
        "id": "yfba8qjee77",
        "__v": 0
    }
}
```



> PATCH ```/api/user/:id```

This request should go along with a body object with any or all the following keys, along with a valid id parameter in the route:

```jsx
    "firstname" - String,
    "lastname"  - String,
    "email"     - String (Valid Email Address),
    "mobile"    - String
```

This edits a user in the database and returns the user object

A successful response for the above request should return the following schema (of course with a more up-to-date values)

```jsx
{
    "data": {
        "_id": "6001a3a32a3950370c49ed5a",
        "firstname": "Adebisi",
        "lastname": "Crown",
        "email": "emmanuelstephen024@gmail.com",
        "mobile": "2349090",
        "id": "inwmcnz31m8",
        "__v": 0
    }
}
```



> DELETE ```/api/user/:id```

This value of :id is a valid id of any user object in the database. 

This deletes a user in the database and returns the user object

A successful response for the above request should return the following schema (of course with a more up-to-date values)

```jsx
{
    "data": {
        "_id": "6001a3a32a3950370c49ed5a",
        "firstname": "Adebisi",
        "lastname": "Crown",
        "email": "emmanuelstephen024@gmail.com",
        "mobile": "2349090",
        "id": "inwmcnz31m8",
        "__v": 0
    }
}
```
