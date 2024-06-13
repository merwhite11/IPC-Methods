import socket

class MyTCPHandler:
    def handle(self, client_socket):
        try:
            # Receive data from the client
            data = client_socket.recv(1024).strip()
            print(f"Received: {data.decode('utf-8')}")

            # Process data (e.g., convert to uppercase)
            response = data.upper()

            # Send response back to the client
            client_socket.sendall(response)
        finally:
            # Close the connection
            client_socket.close()

if __name__ == "__main__":
    HOST, PORT = "localhost", 9999

    # Create a TCP/IP socket
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    # Bind the socket to the address and port
    server.bind((HOST, PORT))

    # Listen for incoming connections
    server.listen(1)
    print(f"Server listening on {HOST}:{PORT}")

    while True:
        # Wait for a connection
        client_socket, client_address = server.accept()
        print(f"Connection from {client_address}")

        # Handle the connection
        handler = MyTCPHandler()
        handler.handle(client_socket)