import hashlib

string = "hello"
x=hashlib.sha256(string.encode()).hexdigest()
print(x)