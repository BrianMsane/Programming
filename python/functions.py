def calculator(a: int, b: int, op: str):
    if op in ("+", "plus", "add", "addition"):
        return a + b
    elif op in ("-", "minus", "subtract", "subtraction"):
        return a - b
    elif op in ("/", "quotient", "divide", "division"):
        return a / b
    elif op in ("*", "product", "times", "multiply", "multiplication"):
        return a * b
    elif op in ("%", "modulus", "remainder"):
        return a % b
    elif op in ("//", "floor division"):
        return a // b
    else:
        return "Oops!"


print("Enter two numbers and an operation to be made on them")
num1 = int(input())
num2 = int(input())
op = input()

print(calculator(num1, num2, op))


# generators
def odd_squares_sum(limit):
    current_odd = 1
    total_sum = 0

    while True:
        total_sum += current_odd**2
        yield total_sum
        current_odd += 2


limit = 10  # Set your desired limit
generator = odd_squares_sum(limit)

for _ in range(limit):
    print(next(generator))
