# 🛒 E-commerce REST API

Esta es una **API de Backend** robusta construida con **NestJS**, diseñada para potenciar una plataforma de comercio electrónico moderna. El proyecto cuenta con una arquitectura modular, autenticación segura y una gestión de datos relacionales compleja para manejar desde catálogos de productos hasta el procesamiento de pedidos.

---

## 🚀 Características Clave

* **Arquitectura Modular:** Separación de responsabilidades mediante módulos de NestJS (Users, Products, Orders, Auth, Categories).
* **Autenticación Avanzada:** Flujos seguros de registro e inicio de sesión con protección de contraseñas.
* **Gestión de Pedidos:** Lógica robusta para la creación y recuperación de órdenes, garantizando la consistencia de los datos en toda la plataforma.
* **Gestión de Archivos:** Servicio de `FileUpload` integrado para manejar imágenes de productos y activos de manera eficiente.
* **Sistema de Seeders:** Incluye un seeder de base de datos para poblar rápidamente productos y categorías para pruebas.
* **Integridad de Datos:** Validación estricta mediante **DTOs (Data Transfer Objects)** y Class-Validator para asegurar la entrada de datos limpios.

---

## 🛠️ Stack Tecnológico

* **Framework:** NestJS (Node.js)
* **Lenguaje:** TypeScript
* **Base de Datos:** PostgreSQL
* **ORM:** TypeORM
* **Documentación:** Swagger / OpenAPI
* **Herramientas:** Git Bash, Postman, pgAdmin4

---

## 📊 Arquitectura de Base de Datos

El sistema implementa un esquema relacional normalizado para una alta escalabilidad:
* **Usuarios ↔ Pedidos:** Uno a Muchos.
* **Pedidos ↔ Productos:** Muchos a Muchos (gestionado a través de detalles de pedido).
* **Productos ↔ Categorías:** Muchos a Uno.

---

## 👤 Autor
* **Itzel Godoy Lopez** - *Desarrollador Fullstack*
