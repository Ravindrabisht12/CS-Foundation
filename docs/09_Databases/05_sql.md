# 05. SQL (Structured Query Language)

SQL is the standard language for relational database management systems. It is used to create, manage, and query databases.

## 1. SQL Commands Categories

- **Data Definition Language (DDL):** Used to define the database schema.
  - `CREATE`: To create databases, tables, views, etc.
  - `ALTER`: To alter the structure of the database.
  - `DROP`: To delete databases, tables, etc.
  - `TRUNCATE`: To remove all records from a table, but not the table itself.

- **Data Manipulation Language (DML):** Used for accessing and manipulating data.
  - `SELECT`: To retrieve data from a database.
  - `INSERT`: To insert data into a table.
  - `UPDATE`: To update existing data within a table.
  - `DELETE`: To delete records from a database table.

- **Data Control Language (DCL):** Used to control access to data in the database.
  - `GRANT`: To give a user access privileges to the database.
  - `REVOKE`: To withdraw access privileges given with the `GRANT` command.

- **Transaction Control Language (TCL):** Used to manage transactions in the database.
  - `COMMIT`: To save the work done.
  - `ROLLBACK`: To restore the database to the last committed state.
  - `SAVEPOINT`: To create points within groups of transactions to which you can later roll back.

## 2. Basic `SELECT` Query Structure
```sql
SELECT [DISTINCT] attribute_list
FROM table_list
[WHERE predicate]
[GROUP BY attribute_list]
[HAVING predicate]
[ORDER BY attribute_list [ASC | DESC]];
```

- **`SELECT`**: Specifies the columns to be returned. `DISTINCT` eliminates duplicate rows.
- **`FROM`**: Specifies the table(s) from which to retrieve the data.
- **`WHERE`**: Filters rows based on a specified condition.
- **`GROUP BY`**: Groups rows that have the same values in specified columns into summary rows. Often used with aggregate functions.
- **`HAVING`**: Filters groups based on a specified condition (used after `GROUP BY`).
- **`ORDER BY`**: Sorts the result set in ascending (`ASC`) or descending (`DESC`) order.

## 3. Aggregate Functions
Aggregate functions perform a calculation on a set of values and return a single value.
- `COUNT()`: Returns the number of rows.
- `SUM()`: Returns the sum of a set of values.
- `AVG()`: Returns the average value.
- `MIN()`: Returns the minimum value.
- `MAX()`: Returns the maximum value.

**Example:**
```sql
-- Find the number of students and their average GPA in each major
SELECT major, COUNT(student_id), AVG(gpa)
FROM Students
GROUP BY major
HAVING COUNT(student_id) > 10; -- Only show majors with more than 10 students
```

## 4. Joins
Joins are used to combine rows from two or more tables based on a related column between them.
- **`INNER JOIN`**: Returns records that have matching values in both tables.
- **`LEFT JOIN` (or `LEFT OUTER JOIN`)**: Returns all records from the left table, and the matched records from the right table. The result is `NULL` from the right side if there is no match.
- **`RIGHT JOIN` (or `RIGHT OUTER JOIN`)**: Returns all records from the right table, and the matched records from the left table.
- **`FULL JOIN` (or `FULL OUTER JOIN`)**: Returns all records when there is a match in either the left or right table.

**Example:**
```sql
SELECT Students.name, Enrolled.course_id
FROM Students
INNER JOIN Enrolled ON Students.student_id = Enrolled.student_id;
```

## 5. Subqueries (Nested Queries)
A subquery is a query nested inside another query.
- Can be used in `WHERE`, `HAVING`, `FROM` clauses.
- **`IN` / `NOT IN`**: Checks if a value is present in the results of a subquery.
- **`EXISTS` / `NOT EXISTS`**: Checks if a subquery returns any rows.

**Example:**
```sql
-- Find the names of students enrolled in 'CS101'
SELECT name
FROM Students
WHERE student_id IN (SELECT student_id FROM Enrolled WHERE course_id = 'CS101');
```

## 6. Views
A view is a virtual table based on the result-set of an SQL statement.
- It contains rows and columns, just like a real table.
- The fields in a view are fields from one or more real tables in the database.
- Views can be used to simplify complex queries, provide a level of security, and present data from a different perspective.

```sql
CREATE VIEW CS_Students AS
SELECT student_id, name
FROM Students
WHERE major = 'CS';
```

---
Prev ← `04_relational_algebra_and_calculus.md` | Next → `06_normalization.md` | Index: `README.md`
