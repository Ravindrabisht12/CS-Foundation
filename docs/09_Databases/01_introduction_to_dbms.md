# 01. Introduction to Database Management Systems (DBMS)

## 1. What is a Database?
A **database** is an organized collection of structured information, or data, typically stored electronically in a computer system.

## 2. What is a DBMS?
A **Database Management System (DBMS)** is software that allows users to define, create, maintain, and control access to the database. It acts as an interface between the user and the database.

**Examples of DBMS:** MySQL, PostgreSQL, Oracle, SQL Server, MongoDB.

## 3. DBMS vs. File Systems
Before DBMS, data was typically stored in file systems. However, this approach has several major disadvantages:

- **Data Redundancy and Inconsistency:** The same information may be duplicated in several files. This redundancy leads to higher storage costs and inconsistency if the data is updated in one file but not another.
- **Difficulty in Accessing Data:** Conventional file systems do not provide convenient query languages. Retrieving specific data requires writing a new program for each new task.
- **Data Isolation:** Data is scattered in various files, and the files may be in different formats, making it difficult to write new application programs to retrieve the appropriate data.
- **Integrity Problems:** The data values stored in the database must satisfy certain types of consistency constraints (e.g., the balance of a bank account may not fall below a prescribed value). It is difficult to enforce these constraints in file systems.
- **Atomicity Problems:** A computer system, like any other device, is subject to failure. It is crucial that if a failure occurs during a data modification, the data is restored to the consistent state that existed before the failure. For example, a fund transfer must be **atomic**—it must happen in its entirety or not at all.
- **Concurrent Access Anomalies:** When multiple users access and update the data concurrently, it can lead to inconsistent data.
- **Security Problems:** Enforcing security constraints (who can access what data) is difficult in a file system.

A DBMS solves all these problems.

## 4. Levels of Abstraction
A major purpose of a DBMS is to provide users with an abstract view of the data.

- **Physical Level (Internal Level):** The lowest level of abstraction, which describes **how** the data is actually stored. It deals with complex low-level data structures.
- **Logical Level (Conceptual Level):** The next higher level, which describes **what** data is stored in the database and what relationships exist among that data. The entire database is described in terms of a small number of relatively simple structures.
- **View Level (External Level):** The highest level of abstraction, which describes only **part** of the entire database for a particular group of users. It simplifies their interaction with the system. The system may provide many views for the same database.

## 5. Data Models
A data model is a collection of conceptual tools for describing data, data relationships, data semantics, and consistency constraints.

- **Relational Model:** The most widely used model. Data is organized into **tables** (relations). Each table has rows (tuples) and columns (attributes).
- **Entity-Relationship (ER) Model:** A high-level, conceptual data model. It is primarily used for database design. It models the world as a collection of **entities** and **relationships** between them.
- **Object-Based Data Model:** Extends the ER model with notions of encapsulation, methods (functions), and object identity.
- **Semistructured Data Model (XML):** Permits the specification of data where individual data items of the same type may have different sets of attributes.
- **Hierarchical Model:** Data is organized into a tree-like structure.
- **Network Model:** A more flexible extension of the hierarchical model, allowing many-to-many relationships in a graph-like structure.

---
Next → `02_er_model.md` | Index: `README.md`
