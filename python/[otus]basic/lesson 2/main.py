def secondary():
    print('secondary')

def add(a, b):
    return a + b

def afterPass():
    res = ...
    pass
    print('After Pass', res)

def main():
    secondary()
    print('main',  add(5, 3))
    afterPass()
    pass 

main()