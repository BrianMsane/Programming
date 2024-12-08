# for...else loop (else part gets executed when we have looped through everything without hitting break)


names = ["brian", "thando", "kuhle"]


def find_name(start: str, end: str):
    global names
    for name in names:
        if name.startswith(start) and name.endswith(end):
            print("Found")
            break
    else:
        print("Not Found")


find_name(start="b", end="n")


# arbitrary arguments
def multiply(*args):
    total = 1
    for number in args:
        total *= number
    else:
        print(total)


multiply(1, 2, 3, 4, 5, 6)


# kwargs -> keyword arguments
def repeat(**kwargs):
    print(kwargs)


repeat(name="Brian", surname="Msane")
