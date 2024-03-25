import http.server
import os

os.chdir("/home/ivan/PycharmProjects/local_site/")
address = ("", 5500)
server = http.server.HTTPServer(address, http.server.CGIHTTPRequestHandler)
server.serve_forever()