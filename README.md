# 🛒 E-commerce REST API

This is a robust **Backend API** built with **NestJS**, designed to power a modern E-commerce platform. The project features a modular architecture, secure authentication, and complex relational data management to handle everything from product catalogs to order processing.

---

## 🚀 Key Features

* **Modular Architecture:** Separation of concerns using NestJS Modules (Users, Products, Orders, Auth, Categories).
* **Advanced Authentication:** Secure signup and signin flows with password protection.
* **Order Management:** Robust logic for creating and retrieving orders, ensuring data consistency across the platform.
* **File Management:** Integrated `FileUpload` service to handle product images and assets efficiently.
* **Seeder System:** Includes a database seeder to quickly populate products and categories for testing.
* **Data Integrity:** Strict validation using **DTOs (Data Transfer Objects)** and Class-Validator to ensure clean data entry.

---

## 🛠️ Tech Stack

* **Framework:** NestJS (Node.js)
* **Language:** TypeScript
* **Database:** PostgreSQL
* **ORM:** TypeORM
* **Documentation:** Swagger / OpenAPI
* **Tools:** Git Bash, Postman, pgAdmin4

---

## 📊 Database Architecture

The system implements a normalized relational schema for high scalability:
* **Users ↔ Orders:** One-to-Many.
* **Orders ↔ Products:** Many-to-Many (handled via order details).
* **Products ↔ Categories:** Many-to-One.

---

## 👤 Author
* **Itzel Godoy Lopez** - *Fullstack Developer Student*
