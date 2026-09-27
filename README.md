# Express.js, MongoDB & Mongoose — Create and Retrieve Users

A backend development assignment demonstrating how to build REST APIs using **Express.js**, **MongoDB**, and **Mongoose** for creating and retrieving user data.

---

## 👩‍💻 Student Details

| Details | Information |
|---|---|
| **Name** | Rashmeet Kaur Nanade |
| **Roll Number** | 150096725165 |
| **Course** | B.Tech Computer Science & Engineering |
| **Subject** | Backend Development |
| **Assignment** | Assignment 8 |

---

## 📌 1. Introduction

This assignment demonstrates the integration of **Express.js, MongoDB, and Mongoose** to create and retrieve user data through REST APIs.

The application provides APIs to:- 

- Create a new user
- Store user data in MongoDB
- Retrieve all users from MongoDB
- Test backend APIs using Thunder Client

The project follows a structured backend architecture by separating the **schema, model, routes, and server configuration**.

---

## 🎯 2. Objectives

The main objectives of this assignment are:-

- To create an Express.js backend application.
- To connect Express.js with MongoDB using Mongoose.
- To create a Mongoose schema for users.
- To create a Mongoose model.
- To organize backend code using separate folders.
- To create a POST API for storing users.
- To create a GET API for retrieving users.
- To store and retrieve data from MongoDB.
- To test REST APIs using Thunder Client.

---

## 📁 3. Folder Structure

The project follows a structured backend architecture with separate folders for the schema, model, and routes.

```text
express-mongodb-mongoose-assignment8/
│
├── model/
│   └── userModel.js
│
├── router/
│   └── userRouter.js
│
├── schema/
│   └── userSchema.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

### Folder Responsibilities

| File / Folder | Purpose |
|---|---|
| `server.js` | Creates the Express server and handles the MongoDB connection |
| `schema/userSchema.js` | Defines the Mongoose user schema |
| `model/userModel.js` | Creates and exports the User model |
| `router/userRouter.js` | Contains the user API routes |
| `package.json` | Contains project dependencies and scripts |
| `.gitignore` | Prevents unnecessary files such as `node_modules` from being uploaded |

### Folder Structure Screenshot

<img width="194" height="322" alt="01-folder-structure" src="https://github.com/user-attachments/assets/f5c11982-dff4-4b11-ac03-d322e9435627" />


---

## 🛠️ 4. Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JavaScript**
- **Thunder Client**
- **MongoDB Compass**

---

## 🍃 5. MongoDB Configuration

The application connects to MongoDB using Mongoose.

### Database

```text
userdb
```

### MongoDB Connection

```text
mongodb://127.0.0.1:27017/userdb
```

### Collection

```text
users
```

The MongoDB database stores the user documents created through the POST API.

### MongoDB Connection Screenshot

<img width="995" height="429" alt="server-connection" src="https://github.com/user-attachments/assets/814bf66f-6fa9-4b32-9ec0-b10c0086e646" />


---

## 👤 6. User Schema

The user schema is created using Mongoose.

### User Fields

| Field | Data Type | Required |
|---|---|---|
| `name` | String | Yes |
| `email` | String | Yes |
| `age` | Number | Yes |
| `course` | String | Yes |

The `email` field is configured as **unique** to prevent duplicate email addresses.

The schema also uses timestamps for storing creation and update information.

---

## 🚀 7. Create User API

A **POST** request is used to create and store a new user in MongoDB.

### Endpoint

```http
POST http://localhost:3000/api/users
```

### Request Body

```json
{
  "name": "Rashmeet",
  "email": "rashmeet00@gmail.com",
  "age": 20,
  "course": "B.Tech"
}
```

The request sends the user information to the Express.js server, which creates a new document in the MongoDB `users` collection.

### POST Request Screenshot

<img width="996" height="632" alt="post-create-user" src="https://github.com/user-attachments/assets/fe33b95d-9ca2-4f08-b341-ef01a7629131" />
<img width="487" height="340" alt="post-create-user2" src="https://github.com/user-attachments/assets/129421f8-4ed1-4830-98c7-4e6e4e312bfa" />


---

## 🍃 8. Data Stored in MongoDB

After successfully sending the POST request, the user data is stored in the MongoDB `users` collection.

MongoDB automatically generates a unique `_id` for each document.

### MongoDB Stored Data Screenshot

<img width="1470" height="571" alt="data-stored" src="https://github.com/user-attachments/assets/80851a5e-48a7-4dd8-8ddc-0cd85c66e071" />


---

## 🔎 9. Retrieve Users API

A **GET** request is used to retrieve all users stored in MongoDB.

### Endpoint

```http
GET http://localhost:3000/api/users
```

The API returns the stored users in JSON format.

### Example Response

```json
[
  {
    "_id": "generated-mongodb-id",
    "name": "Rashmeet",
    "email": "rashmeet00@gmail.com",
    "age": 20,
    "course": "B.Tech",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
]
```

### GET Request Screenshot

<img width="995" height="627" alt="get-users" src="https://github.com/user-attachments/assets/aba80477-4c08-40ae-9858-91cc423b925a" />


---

## 🧪 10. API Testing

The REST APIs were tested using **Thunder Client**.

| Method | Endpoint | Purpose |
|---|---|---|
| `POST` | `/api/users` | Create and store a new user |
| `GET` | `/api/users` | Retrieve all users |

---

## ▶️ 11. How to Run the Project

### Step 1 — Clone the Repository

```bash
git clone https://github.com/krashmeet033-sys/express-mongodb-mongoose-assignment8.git
```

### Step 2 — Navigate to the Project

```bash
cd express-mongodb-mongoose-assignment8
```

### Step 3 — Install Dependencies

```bash
npm install
```

### Step 4 — Start MongoDB

Make sure MongoDB is running locally.

### Step 5 — Start the Server

```bash
node server.js
```

The application runs on:

```text
http://localhost:3000
```

---

## 📚 12. Learning Outcomes

Through this assignment, I learned how to:

- Create an Express.js server.
- Connect Node.js with MongoDB using Mongoose.
- Create a Mongoose schema.
- Create and use a Mongoose model.
- Separate backend logic into schema, model, and router files.
- Handle POST requests.
- Handle GET requests.
- Store documents in MongoDB.
- Retrieve documents from MongoDB.
- Test REST APIs using Thunder Client.
- Structure a backend project in a clean and organized manner.

---

## 📸 13. Screenshots

The following screenshots show the complete execution and working of the Assignment 8 application.

### 📁 Project Structure
Shows the organized project structure containing the `schema`, `model`, `router`, and server files.

### 🖥️ Server Execution
Shows the Express server running successfully on port `3000` and the successful MongoDB connection.

### ➕ Create User — POST API
Shows the `POST /api/users` request in Thunder Client with a `201 Created` response and successfully created user data.

### 📋 Retrieve Users — GET API
Shows the `GET /api/users` request returning the stored user data with a `200 OK` response.

### 🍃 MongoDB Compass
Shows the created user document stored successfully inside the `userdb` database and `users` collection in MongoDB Compass.

---

## ✅ 14. Conclusion

This assignment successfully demonstrates how **Express.js, MongoDB, and Mongoose** can be integrated to create and retrieve user data through REST APIs.

The project uses a structured backend architecture with separate **schema, model, and router** files. User data is stored in MongoDB through a POST request and retrieved using a GET request.

The assignment also provided practical experience in backend API development, MongoDB integration, Mongoose models, project organization, and API testing using Thunder Client.
