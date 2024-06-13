## IPC Methods

## Sockets
### Overview

-   **Definition**: Sockets are endpoints for sending and receiving data across a network.
-   **Types**: Typically, TCP/IP sockets are used for communication over a network, but UNIX domain sockets can be used for communication between processes on the same machine.

### Advantages

-   **Network Communication**: Sockets can be used for communication between processes on different machines over a network.
-   **Flexibility**: Sockets support both connection-oriented (TCP) and connectionless (UDP) communication.
-   **Scalability**: Suitable for building scalable network applications, such as web servers and chat applications.
-   **Established Standards**: Sockets follow well-established network communication standards.

#### Disadvantages

-   **Complexity**: Can be more complex to set up and manage compared to pipes.
-   **Overhead**: Network protocols (especially TCP) can introduce additional overhead and latency compared to local IPC mechanisms.

### Example Use Cases

-   Communication between a web server and a client browser.
-   Data exchange between distributed systems.
-   Building chat applications or multiplayer games.

## Pipes
### Overview

-   **Definition**: Pipes are a mechanism for unidirectional or bidirectional data flow between processes.
-   **Types**: Named pipes (FIFOs) and anonymous pipes.

### Advantages

-   **Simplicity**: Easier to set up for communication between processes on the same machine.
-   **Low Overhead**: Generally faster with lower latency compared to network-based communication.
-   **File System Integration**: Named pipes can be accessed like regular files, providing a simple interface for IPC.

#### Disadvantages

-   **Local Only**: Pipes are limited to communication between processes on the same machine.
-   **Less Flexible**: Not suitable for complex networking tasks or communication over a network.
-   **Limited Functionality**: Lacks some of the advanced features and flexibility offered by sockets.

#### Example Use Cases

-   Communication between a parent process and child processes.
-   Simple IPC for tasks like logging or data transfer between local processes.

### PYTHON-JS SOCKETS

-   **Python Server**:

    - Imports [Python socket](https://docs.python.org/3/library/socket.html):
    - The server listens on `localhost:9999` for incoming TCP connections.
    -   When a client connects, the server receives data, processes it (converts to uppercase), and sends the processed data back to the client.
    -   The server continues to run indefinitely, handling each connection in sequence.
-   **Node.js Client**:

    - Imports [Node net](https://nodejs.org/api/net.html#net)
    - The client connects to the server on `localhost:9999`.
    -   It sends a message ("Hello, server!") to the server.
    -   It waits for a response from the server, prints the response, and then closes the connection.
