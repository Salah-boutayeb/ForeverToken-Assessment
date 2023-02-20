def hello_wold(n):
    for i in range(n):
        if i % 3 == 0:
            print("Hello")
        elif i % 5 == 0:
            print("World")
        elif i % 7 == 0:
            print("Yoo")
        else:
            print(i)    

hello_wold(100)