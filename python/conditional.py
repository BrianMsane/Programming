"""Learn about conditional statements"""


def fizz_buzz(number: int):
    if number % 5 == 0 and number % 3 == 0:
        return "Fizz-buzz"
    elif number % 5 == 0:
        return "Buzz"
    elif number % 3 == 0:
        return "Fizz"
    else:
        return number


number = int(input("Number: "))
output = fizz_buzz(number)
print(output)
