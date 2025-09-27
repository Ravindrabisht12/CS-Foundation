# 06. Application Layer

The Application Layer is the topmost layer in both the OSI and TCP/IP models. It provides the interface between the applications we use and the underlying network. It defines the protocols that applications use to exchange data.

## 1. DNS (Domain Name System)
- **Function:** To translate human-readable domain names (e.g., `www.google.com`) into machine-readable IP addresses (e.g., `172.217.16.196`).
- It is a distributed database implemented in a hierarchy of **DNS servers**.
- **How it works:**
  1. A user's computer (the resolver) asks its local DNS server for the IP address of a domain.
  2. If the local server doesn't know, it queries a **root DNS server**.
  3. The root server directs it to a **Top-Level Domain (TLD) server** (e.g., for `.com` or `.org`).
  4. The TLD server directs it to the **authoritative DNS server** for that specific domain.
  5. The authoritative server returns the IP address to the resolver, which then caches it.
- DNS uses **UDP** on port 53.

## 2. HTTP (Hypertext Transfer Protocol)
- **Function:** The protocol used for communication between web browsers and web servers. It is the foundation of the World Wide Web.
- **Features:**
  - It is a **stateless** protocol, meaning each request is independent.
  - It uses TCP on port 80 (for HTTP) and port 443 (for HTTPS).
- **HTTP Messages:**
  - **Request Message:** Sent by the client (e.g., `GET /index.html HTTP/1.1`). Contains a request line, headers, and an optional body.
  - **Response Message:** Sent by the server (e.g., `200 OK`). Contains a status line, headers, and the requested resource in the body.
- **HTTP/2:** A major revision that introduced features like multiplexing multiple requests over a single TCP connection to improve performance.

## 3. SMTP (Simple Mail Transfer Protocol)
- **Function:** The standard protocol for sending email. It is used by Mail Transfer Agents (MTAs) to push email from a source to a destination.
- It uses **TCP** on port 25.
- SMTP is a **push protocol**; it cannot be used to pull messages from a server. Other protocols like POP3 (Post Office Protocol) or IMAP (Internet Message Access Protocol) are used by email clients to retrieve emails from a mail server.

## 4. FTP (File Transfer Protocol)
- **Function:** A protocol used to transfer files between a client and a server on a computer network.
- **Unique Feature:** FTP uses **two separate TCP connections**:
  1.  **Control Connection (Port 21):** Used for sending commands and receiving responses (e.g., `USER`, `PASS`, `LIST`, `RETR`). This connection stays open for the entire session.
  2.  **Data Connection:** Used for the actual file transfer. A new data connection is created for each file transferred.
    - **Active Mode:** The server initiates the data connection back to the client.
    - **Passive Mode:** The client initiates the data connection to the server. (More common, as it works better with firewalls).

## 5. Email System
The email system involves several components and protocols:
- **User Agent (UA):** The email client application (e.g., Outlook, Gmail web interface).
- **Mail Transfer Agent (MTA):** The mail server software (e.g., Postfix, Sendmail).
- **Protocols:**
  - **SMTP:** Used for sending email from the user agent to the mail server, and between mail servers.
  - **POP3 (Post Office Protocol 3):** A simple protocol used by a user agent to download emails from a mail server to the local computer. It typically deletes the messages from the server after download. Uses TCP on port 110.
  - **IMAP (Internet Message Access Protocol):** A more advanced protocol for retrieving emails. It allows users to view and manage messages on the server itself, across multiple devices. Messages are kept on the server. Uses TCP on port 143.

---
Prev ← `05_transport_layer.md` | Index: `README.md`
