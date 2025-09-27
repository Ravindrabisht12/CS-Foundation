# 05. Transport Layer

The Transport Layer is the fourth layer in the OSI model. It provides logical communication between **processes** running on different hosts. While the network layer provides source-to-destination delivery, the transport layer provides process-to-process delivery.

## 1. Transport Layer Services
- **Port Numbers:** The transport layer uses port numbers to identify the communicating applications. A port is a 16-bit number. The combination of an IP address and a port number is called a **socket**.
- **Connection-Oriented vs. Connectionless Service:**
  - **Connection-Oriented (TCP):** Establishes a connection before sending data. It is reliable.
  - **Connectionless (UDP):** Does not establish a connection. It is unreliable.
- **Reliable Data Transfer:** Ensures that data is delivered correctly and in order.
- **Flow Control:** Prevents a fast sender from overwhelming a slow receiver.
- **Congestion Control:** A mechanism to control the amount of data injected into the network to prevent the network from becoming congested.

## 2. UDP (User Datagram Protocol)
- A simple, connectionless transport protocol.
- It provides a "best-effort" service, meaning it does not guarantee delivery, order, or error checking.
- **UDP Header:** Very simple, containing only source port, destination port, length, and checksum.
- **When to use UDP:**
  - For applications that are sensitive to delay but can tolerate some packet loss (e.g., real-time video streaming, online gaming, DNS).
  - When the overhead of establishing a connection is not desirable.

## 3. TCP (Transmission Control Protocol)
- A reliable, connection-oriented protocol. It provides a byte-stream service.

### a) TCP Connection Establishment
- TCP uses a **three-way handshake** to establish a connection:
  1.  **SYN:** The client sends a segment with the `SYN` (synchronize) flag set to the server.
  2.  **SYN-ACK:** The server replies with a segment containing both the `SYN` and `ACK` (acknowledgment) flags.
  3.  **ACK:** The client sends a final `ACK` segment back to the server. The connection is now established.

### b) Reliable Data Transfer
- **Sequence Numbers and Acknowledgments (ACKs):** TCP numbers the bytes in the data stream. The receiver sends acknowledgments to confirm receipt of data. If an ACK is not received within a certain time, the sender retransmits the data.
- **Pipelining:** TCP allows the sender to have multiple "in-flight" (unacknowledged) packets in the network to improve efficiency.

### c) Flow Control
- TCP uses a **sliding window** protocol for flow control.
- The receiver advertises a **receive window (rwnd)** size in its acknowledgments, telling the sender how much buffer space it has available.
- The sender ensures that the amount of unacknowledged data does not exceed the advertised receive window.

### d) Congestion Control
- TCP assumes that packet loss is due to network congestion.
- It uses a **congestion window (cwnd)** to regulate the rate at which it sends data.
- **Algorithms:**
  - **Slow Start:** The `cwnd` starts at 1 Maximum Segment Size (MSS) and increases exponentially (doubles) with each ACK received.
  - **Congestion Avoidance:** When the `cwnd` reaches a certain threshold (`ssthresh`), it switches to a linear increase (additive increase).
  - **Fast Retransmit:** If the sender receives three duplicate ACKs for the same segment, it assumes the next segment was lost and retransmits it immediately without waiting for a timeout.
  - **Fast Recovery:** After a fast retransmit, the `cwnd` is halved (multiplicative decrease), and the algorithm enters the congestion avoidance phase.

### e) TCP Connection Termination
- Uses a **four-way handshake**:
  1.  **FIN:** One side sends a `FIN` segment to indicate it has no more data to send.
  2.  **ACK:** The other side acknowledges the `FIN`.
  3.  **FIN:** The other side, when it is also ready to close, sends its own `FIN` segment.
  4.  **ACK:** The first side acknowledges the second `FIN`.

## 4. Sockets
- A **socket** is an endpoint for communication. It is an abstraction through which an application can send and receive data.
- A socket is identified by an IP address and a port number.
- The **socket API** provides a set of functions that applications can use to create and manage sockets (e.g., `socket()`, `bind()`, `listen()`, `accept()`, `connect()`, `send()`, `recv()`).

---
Prev ← `04_network_layer_addressing.md` | Next → `06_application_layer.md` | Index: `README.md`
