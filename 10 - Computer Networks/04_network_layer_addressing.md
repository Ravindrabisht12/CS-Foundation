# 04. Network Layer: Addressing and Protocols

Besides routing, the Network Layer handles logical addressing and other support functions.

## 1. IP Addressing (IPv4)
- An **IP address** is a 32-bit unique logical address assigned to a device on a network.
- It is usually written in **dotted-decimal notation** (e.g., `192.168.1.1`).
- An IP address is divided into two parts: the **Network ID** and the **Host ID**.

### Classful Addressing (Obsolete)
- **Class A:** `0.0.0.0` to `127.255.255.255`. (Network mask: `255.0.0.0` or `/8`). For very large networks.
- **Class B:** `128.0.0.0` to `191.255.255.255`. (Network mask: `255.255.0.0` or `/16`). For medium-sized networks.
- **Class C:** `192.0.0.0` to `223.255.255.255`. (Network mask: `255.255.255.0` or `/24`). For small networks.
- **Problem:** Inflexible and led to a rapid exhaustion of IP addresses.

### CIDR (Classless Inter-Domain Routing)
- CIDR notation allows for variable-length subnet masking (VLSM).
- It represents an IP address with a suffix indicating the number of bits in the network portion of the address.
- **Example:** `192.168.1.0/24` means the first 24 bits are the network ID, and the remaining 8 bits are for hosts.
- CIDR allows for more efficient allocation of IP addresses and helps to slow the depletion of IPv4 addresses.

## 2. Fragmentation
- Different networks can have different maximum packet sizes, known as the **Maximum Transmission Unit (MTU)**.
- If a router receives a packet that is larger than the MTU of the next network, it must **fragment** the packet into smaller pieces.
- Each fragment is an independent IP packet with its own header.
- The fragments are reassembled at the **destination host**, not at the intermediate routers.
- The IP header contains fields (Identification, Flags, Fragment Offset) to manage fragmentation and reassembly.

## 3. IP Support Protocols

### a) ARP (Address Resolution Protocol)
- **Function:** To map a known IP address to its corresponding MAC (physical) address.
- **How it works:**
  1.  A host wants to send a packet to an IP address on the same local network.
  2.  It broadcasts an **ARP Request** packet containing the target IP address.
  3.  The host with that IP address responds with an **ARP Reply** containing its MAC address.
  4.  The original host caches this IP-to-MAC mapping in its **ARP table** for future use.

### b) DHCP (Dynamic Host Configuration Protocol)
- **Function:** To automatically assign IP addresses and other network configuration parameters (like subnet mask, default gateway, and DNS servers) to devices on a network.
- **How it works (DORA process):**
  1.  **Discover:** A client broadcasts a DHCP Discover message to find a DHCP server.
  2.  **Offer:** DHCP servers on the network respond with a DHCP Offer message, offering an IP address.
  3.  **Request:** The client selects an offer and broadcasts a DHCP Request message to accept it.
  4.  **Acknowledge:** The selected DHCP server sends a DHCP Acknowledge message to confirm the lease.

### c) ICMP (Internet Control Message Protocol)
- **Function:** Used by network devices to send error messages and operational information. It provides feedback about problems in the network environment.
- It is not used for regular data exchange.
- **Common ICMP Messages:**
  - **Echo Request / Echo Reply:** Used by the `ping` utility.
  - **Destination Unreachable:** Sent when a router cannot find a path to the destination.
  - **Time Exceeded:** Sent when the Time-to-Live (TTL) field of a packet reaches zero. Used by `traceroute`.

## 4. NAT (Network Address Translation)
- **Function:** A method of remapping one IP address space into another by modifying network address information in IP packet headers while they are in transit across a traffic routing device.
- It allows multiple devices on a private network (using private IP addresses like `192.168.x.x`, `10.x.x.x`) to share a single public IP address to connect to the internet.
- **How it works:**
  1.  A device on the private network sends a packet to the internet.
  2.  The NAT router replaces the private source IP address with its own public IP address. It also typically changes the source port number, keeping track of the mapping in a **NAT table**.
  3.  When a response comes back, the router uses the NAT table to translate the public destination IP and port back to the original private IP and port and forwards the packet to the correct device.
- **Benefit:** Helps to conserve the limited supply of public IPv4 addresses.

---
Prev ← `03_network_layer_routing.md` | Next → `05_transport_layer.md` | Index: `README.md`
