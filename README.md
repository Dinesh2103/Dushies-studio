# Dushie-s-Studio

Dushie-s-Studio is a MERN stack application designed to manage users, galleries, and dashboards. This is my first MERN stack application, created to test APIs. The project will be developed further and is aimed to go live and commercial by November.

## Features

- **API Routes:**
  - `/api/v1/products` - Performs all CRUD operations on products.
- **Postman Collection:**
  - Added a pre-configured Postman collection to test the APIs.
- **Database:**
  - Hosted MongoDB and added a `.env` file to connect to the database. Feel free to add or delete products.
- **Schema & Model:**
  - Created a simple schema with validations and a product model using Mongoose.
- **Middleware & Controllers:**
  - Developed middleware, controllers, and models using Express.js.
- **Frontend:**
  - Implemented a basic React UI to add and view products.
  - **TODO:**
    - Implement field and form-level validations.
    - Add functionality to update products.
    - Fix the delete button to update the state; currently requires a page reload after deleting an item.

## Running the Application

1. Run `npm install` in both the `frontend` and `backend` directories to install dependencies.
2. Run `npm run fullstack` to start both the backend and frontend applications simultaneously.
3. Use `npm run frontend` to start only the React frontend and `npm run backend` to start only the backend server.
