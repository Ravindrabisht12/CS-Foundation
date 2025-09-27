# 02. The Entity-Relationship (ER) Model

The ER model is a high-level, conceptual data model used for database design. It describes the structure of a database with a set of entities, attributes, and the relationships between those entities.

## 1. Components of the ER Model

### a) Entity and Entity Set
- **Entity:** A "thing" or "object" in the real world that is distinguishable from other objects. For example, a specific student, a specific instructor.
- **Entity Set:** A set of entities of the same type that share the same properties. For example, the set of all students, the set of all instructors.
- In an ER diagram, an entity set is represented by a **rectangle**.

### b) Attributes
- **Attribute:** A descriptive property possessed by each member of an entity set. For example, `student_id`, `name`, `major` for the `Student` entity set.
- In an ER diagram, attributes are represented by **ovals**.

**Types of Attributes:**
- **Simple vs. Composite:**
  - **Composite Attribute:** An attribute that can be divided into smaller subparts. For example, `name` can be divided into `first_name` and `last_name`.
  - **Simple Attribute:** An attribute that cannot be divided.
- **Single-valued vs. Multi-valued:**
  - **Multi-valued Attribute:** An attribute that can have more than one value. For example, `phone_number`. Represented by a **double oval**.
  - **Single-valued Attribute:** An attribute that has a single value.
- **Derived Attribute:** An attribute that can be derived from other attributes. For example, `age` can be derived from `date_of_birth`. Represented by a **dashed oval**.
- **Key Attribute (Primary Key):** An attribute (or set of attributes) that uniquely identifies an entity in an entity set. The key attribute is **underlined**.

### c) Relationships and Relationship Set
- **Relationship:** An association among several entities.
- **Relationship Set:** A set of relationships of the same type.
- In an ER diagram, a relationship set is represented by a **diamond**.

## 2. Cardinality Constraints
Cardinality constraints express the number of entities to which another entity can be associated via a relationship set.

For a binary relationship set between entity sets A and B:
- **One-to-One (1:1):** An entity in A is associated with at most one entity in B, and an entity in B is associated with at most one entity in A.
- **One-to-Many (1:N):** An entity in A is associated with any number of entities in B. An entity in B, however, can be associated with at most one entity in A.
- **Many-to-One (N:1):** An entity in A is associated with at most one entity in B. An entity in B can be associated with any number of entities in A.
- **Many-to-Many (M:N):** An entity in A is associated with any number of entities in B, and an entity in B is associated with any number of entities in A.

## 3. Weak Entity Sets
- A **weak entity set** is an entity set that does not have a sufficient number of attributes to form a primary key.
- It must be associated with another entity set, called the **identifying** or **owner** entity set, in order to be meaningful.
- The relationship associating the weak entity set with the identifying entity set is called the **identifying relationship**.
- The primary key of a weak entity set is formed by the primary key of the identifying entity set plus the weak entity set's **discriminator** (or partial key). The discriminator is the set of attributes that allows the entity to be distinguished from other entities in the same weak entity set.

**ER Diagram Representation:**
- A weak entity set is represented by a **double rectangle**.
- The identifying relationship is represented by a **double diamond**.
- The discriminator of the weak entity set is underlined with a **dashed line**.

## 4. Specialization and Generalization
- **Specialization:** The process of designating subgroupings within an entity set. For example, the `Person` entity set can be specialized into `Student` and `Instructor`. This is a **top-down** design process.
- **Generalization:** The reverse of specialization. A number of entity sets are synthesized into a higher-level entity set based on common features. This is a **bottom-up** design process.
- This is depicted by a **triangle component** labeled "ISA" (is a). For example, a `Student` "is a" `Person`.

---
Prev ← `01_introduction_to_dbms.md` | Next → `03_relational_model.md` | Index: `README.md`
