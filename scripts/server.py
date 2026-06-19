import http.server
import socketserver
import os
import sys

PORT = 3000
MAX_PORT_ATTEMPTS = 20
DIRECTORY = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def start_server():
    global PORT
    for attempt in range(MAX_PORT_ATTEMPTS):
        try:
            handler = MyHTTPRequestHandler
            # Allow address reuse to avoid port lockups
            socketserver.TCPServer.allow_reuse_address = True
            with socketserver.TCPServer(("", PORT), handler) as httpd:
                print(f"Servidor local iniciado en: http://localhost:{PORT}")
                print(f"Sirviendo archivos desde: {DIRECTORY}")
                print("Presiona Ctrl+C para detener el servidor.")
                sys.stdout.flush()
                httpd.serve_forever()
        except OSError as e:
            if "Address already in use" in str(e) or "[Errno 98]" in str(e) or "[Errno 10048]" in str(e):
                print(f"Puerto {PORT} ocupado. Probando el siguiente puerto...")
                PORT += 1
            else:
                print(f"Error inesperado al iniciar el servidor: {e}")
                sys.exit(1)
    print("No se encontraron puertos libres disponibles.")
    sys.exit(1)

if __name__ == "__main__":
    start_server()
