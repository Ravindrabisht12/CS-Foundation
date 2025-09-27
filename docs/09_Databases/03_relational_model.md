# 03. The Relational Model

The relational model is the most widely used data model for database systems. It represents data in the form of **relations** or **tables**.

## 1. Basic Concepts
- **Relation:** A table with columns and rows.
- **Attribute:** A named column of a relation.
- **Domain:** The set of allowed values for each attribute.
- **Tuple:** A row in a relation.
- **Relation Schema:** Specifies the name of a relation, plus the name and domain of each attribute. Example: `Student(student_id: string, name: string, major: string)`.
- **Relation Instance:** A specific instance of a relation, i.e., a set of tuples for that relation. The number of tuples is the **cardinality** of the relation.
- **Degree:** The number of attributes in a relation's schema.

## 2. Keys
Keys are a set of attributes that are used to uniquely identify tuples in a relation.

- **Superkey:** A set of one or more attributes that, taken collectively, allows us to identify uniquely a tuple in a relation.
- **Candidate Key:** A minimal superkey. It is a superkey from which no attribute can be removed without losing the unique identification property. A relation can have multiple candidate keys.
- **Primary Key:** One of the candidate keys that is chosen by the database designer as the principal means of identifying tuples within a relation. The primary key attributes are underlined in the schema.
- **Alternate Key:** A candidate key that is not chosen as the primary key.
- **Foreign Key:** A set of attributes in a relation that is used to refer to the primary key of another relation (or the same relation). This is how relationships between tables are established. The relation containing the foreign key is called the **referencing relation**, and the relation to which it refers is the **referenced relation**.

## 3. Relational Integrity Constraints
Integrity constraints are rules that ensure the data in the database is accurate and consistent.

- **Domain Constraints:** Specify that the value of every attribute in every tuple must be from the domain of that attribute.
- **Key Constraints:** State that no two tuples in a relation can have the same value for the primary key attribute(s). The primary key value cannot be `NULL`.
- **Entity Integrity Constraint:** States that no primary key value can be `NULL`. This is because the primary key is used to identify individual tuples.
- **Referential Integrity Constraint:** A constraint involving two relations. It states that a foreign key value must either match the primary key value of some tuple in the referenced relation or be `NULL`. This ensures that a tuple in one relation that refers to another relation has a corresponding tuple in that relation.

## 4. Mapping ER Model to Relational Model
The conceptual design done with the ER model is converted into a relational schema.

- **Strong Entity Sets:** For each strong entity set with simple attributes, create a relation with the same name and attributes. The primary key of the entity set becomes the primary key of the relation.
- **Weak Entity Sets:** For each weak entity set, create a relation that includes all its simple attributes plus the primary key of its owner entity set. The primary key of this new relation is the combination of the owner's primary key and the weak entity's discriminator.
- **Relationship Sets:**
  - **Many-to-Many:** Create a new relation for the relationship set. This relation includes the primary keys of the participating entity sets as foreign keys. The combination of these foreign keys forms the primary key of the new relation. Any descriptive attributes of the relationship also go into this new table.
  - **One-to-Many / Many-to-One:** The primary key of the "one" side is included as a foreign key in the relation for the "many" side.
  - **One-to-One:** The primary key of either entity set can be included as a foreign key in the other.
- **Composite Attributes:** The simple attributes that make up the composite attribute are included in the relation.
- **Multi-valued Attributes:** Create a new relation for the multi-valued attribute. This new relation includes the primary key of the original entity set (as a foreign key) and the multi-valued attribute itself. The combination of these two forms the primary key of the new relation.

---
Prev ← `02_er_model.md` | Next → `04_relational_algebra_and_calculus.md` | Index: `README.md`
