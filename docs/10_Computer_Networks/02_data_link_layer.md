# 02. Data Link Layer

The Data Link Layer (DLL) is the second layer in the OSI model. It is responsible for reliable, node-to-node delivery of data. It takes the packets from the Network Layer and encapsulates them into **frames** for transmission.

## 1. Framing
Framing is the process of dividing a stream of bits received from the network layer into manageable data units called frames.

**Methods of Framing:**
- **Character Count:** The header of the frame specifies the number of characters in the frame.
  - **Problem:** If the count is corrupted by a transmission error, the receiver loses synchronization.
- **Character Stuffing:** Uses special "flag" bytes to indicate the beginning and end of a frame. If the flag byte appears in the data, a special "escape" character is stuffed before it.
- **Bit Stuffing:** Similar to character stuffing but used with bit-oriented protocols. A special bit pattern (e.g., `01111110`) is used as the flag. If five consecutive 1s appear in the data, the sender stuffs a 0 bit after them. The receiver automatically destuffs the 0 bit.

## 2. Error Detection
Transmission errors are inevitable. The DLL adds redundant information to the frame to detect these errors.

- **Parity Check:**
  - A single parity bit is appended to the data.
  - **Even Parity:** The parity bit is set to make the total number of 1s even.
  - **Odd Parity:** The parity bit is set to make the total number of 1s odd.
  - **Limitation:** Can only detect an odd number of bit errors. It cannot detect an even number of errors.

- **Checksum:**
  - The data is divided into segments of a fixed size.
  - These segments are added together using 1's complement arithmetic.
  - The sum is then complemented to form the checksum, which is sent with the data.
  - The receiver performs the same calculation and compares the result.

- **Cyclic Redundancy Check (CRC):**
  - A powerful and commonly used technique.
  - The sender and receiver agree on a generator polynomial, `G(x)`.
  - The sender performs a polynomial division of the data by `G(x)` and appends the remainder to the data.
  - The receiver divides the incoming frame by `G(x)`. If the remainder is zero, the frame is considered error-free.
  - CRC can detect a wide range of errors, including all single-bit errors, all double-bit errors, and all odd-numbered errors.

## 3. Medium Access Control (MAC)
The MAC sublayer of the DLL is responsible for coordinating access to the shared communication medium.

### a) Random Access Protocols
- **ALOHA:**
  - The simplest protocol. When a station has data to send, it sends it.
  - If two frames collide, they are destroyed. The senders wait a random amount of time and retransmit.
  - **Pure ALOHA:** Stations transmit whenever they have data. Max efficiency is ~18%.
  - **Slotted ALOHA:** Time is divided into slots. Stations can only transmit at the beginning of a slot. This reduces the collision window and doubles the max efficiency to ~37%.

- **CSMA (Carrier Sense Multiple Access):**
  - "Listen before you talk." A station senses the channel before transmitting.
  - **CSMA/CD (Collision Detection):** Used in classic Ethernet. Stations stop transmitting as soon as they detect a collision.
  - **CSMA/CA (Collision Avoidance):** Used in Wi-Fi (802.11). Stations use mechanisms like request-to-send (RTS) and clear-to-send (CTS) to avoid collisions, as detecting them in a wireless environment is difficult.

### b) Controlled Access Protocols
- **Polling:** A master station invites slave stations to transmit one by one.
- **Token Passing:** A special frame called a "token" is passed around the network. A station can only transmit if it holds the token.

### c) Channelization Protocols
- **FDMA (Frequency Division Multiple Access):** The bandwidth is divided into frequency bands.
- **TDMA (Time Division Multiple Access):** Users take turns, each one periodically getting the entire bandwidth for a small burst of time.
- **CDMA (Code Division Multiple Access):** Allows each station to transmit over the entire frequency spectrum all the time, using a unique code to separate different transmissions.

## 4. Ethernet Bridging
- **Bridges** (or Layer 2 Switches) are devices that connect multiple LAN segments.
- They operate at the Data Link Layer.
- A bridge maintains a **MAC address table** to learn which hosts are on which segment.
- When a frame arrives, the bridge looks at the destination MAC address:
  - If the destination is on the same segment as the source, the frame is discarded (filtered).
  - If the destination is on a different segment, the frame is forwarded to that segment.
  - If the destination is unknown, the frame is **flooded** to all segments except the one it came from.
- Bridges help to reduce traffic and collisions by isolating traffic within segments.

---
Prev ← `01_introduction_and_layering.md` | Next → `03_network_layer_routing.md` | Index: `README.md`
