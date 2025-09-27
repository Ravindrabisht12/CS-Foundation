# 01. Introduction and Layering

## 1. Concept of Layering
In computer networking, layering is a design principle used to divide the complex task of communication into smaller, more manageable parts called **layers**. Each layer is responsible for a specific set of functions and provides services to the layer above it.

**Advantages of Layering:**
- **Modularity:** It breaks down the complex problem of networking into simpler, independent components. This makes design, implementation, and maintenance easier.
- **Interoperability:** As long as a layer provides the defined services to the layer above and uses the services of the layer below, its internal implementation can be changed without affecting other layers. This promotes competition and innovation.
- **Standardization:** It allows for the standardization of network protocols.

## 2. Protocol Stacks

A protocol stack is a specific implementation of the layered network architecture. The two most important models are the OSI model and the TCP/IP model.

### a) The OSI (Open Systems Interconnection) Model
The OSI model is a conceptual framework that standardizes the functions of a telecommunication or computing system in terms of seven abstraction layers.

1.  **Physical Layer:** Transmits raw bits over a communication channel. Deals with mechanical and electrical specifications of the interface and transmission medium.
2.  **Data Link Layer:** Responsible for node-to-node delivery of frames. It handles framing, physical addressing (MAC addresses), error control, and flow control.
3.  **Network Layer:** Responsible for the source-to-destination delivery of packets across multiple networks (routing). It handles logical addressing (IP addresses) and routing.
4.  **Transport Layer:** Responsible for process-to-process delivery of the entire message. It provides services like connection-oriented communication, reliability, flow control, and congestion control (e.g., TCP, UDP).
5.  **Session Layer:** Manages sessions between applications. It handles dialog control, token management, and synchronization.
6.  **Presentation Layer:** Responsible for translation, compression, and encryption. It ensures that information sent by the application layer of one system is readable by the application layer of another system.
7.  **Application Layer:** Provides services directly to the user applications (e.g., HTTP, FTP, SMTP).

### b) The TCP/IP Protocol Stack
The TCP/IP model is a more practical model that is used in the real-world internet. It consists of four layers.

1.  **Link Layer (or Network Interface Layer):** Combines the functions of the OSI Physical and Data Link layers.
2.  **Internet Layer:** Corresponds to the OSI Network Layer. It uses the Internet Protocol (IP) for addressing and routing.
3.  **Transport Layer:** Corresponds to the OSI Transport Layer. It uses TCP (Transmission Control Protocol) and UDP (User Datagram Protocol).
4.  **Application Layer:** Combines the functions of the OSI Session, Presentation, and Application layers.

| OSI Model | TCP/IP Model |
|---|---|
| Application | Application |
| Presentation | |
| Session | |
| Transport | Transport |
| Network | Internet |
| Data Link | Link |
| Physical | |

## 3. Switching Techniques
Switching is the process of forwarding packets from a source to a destination.

### a) Circuit Switching
- A dedicated communication path (a **circuit**) is established between the two stations through the nodes of the network.
- The entire path is reserved for the duration of the communication.
- **Example:** The traditional telephone network.
- **Advantages:** Guaranteed bandwidth, no congestion for the established circuit.
- **Disadvantages:** Inefficient (the dedicated path is idle if no data is being sent), long connection setup time.

### b) Packet Switching
- Data is broken down into small blocks called **packets**.
- Each packet is sent independently through the network. Packets may take different routes to the destination.
- The nodes (routers) use a **store-and-forward** mechanism.
- **Example:** The Internet.
- **Advantages:** Efficient use of network bandwidth, more robust (can route around failed links).
- **Disadvantages:** Can lead to network congestion, variable delays (jitter).

### c) Virtual Circuit Switching
- A compromise between circuit switching and packet switching.
- A pre-planned route is established before any data packets are sent (the **virtual circuit**).
- All packets belonging to the same virtual circuit follow this pre-planned route.
- However, the channel is not dedicated. Packets from different virtual circuits can be interleaved on the same link.
- It has a connection setup phase and a data transfer phase.
- **Example:** ATM (Asynchronous Transfer Mode), Frame Relay.

---
Next → `02_data_link_layer.md` | Index: `README.md`
