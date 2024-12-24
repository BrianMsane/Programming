from typing import Callable


def decorator_function(original_function: Callable):
    """
    Args:
        original_function: the function being deocrated
    """

    def wrapper_function():
        print("Wrapper executed before the original function")
        return original_function()

    return wrapper_function


@decorator_function
def display():
    print("Display function ran")


display()


def logger(func: Callable):
    def wrapper(*args, **kwargs):
        print(f"Logging: {func.__name__} was called")
        return func(*args, **kwargs)

    return wrapper


@logger
def add(x, y):
    return x + y


result = add(3, 4)
print(result)


def decorator1(func: Callable):
    def wrapper():
        print("Decorator 1")
        return func()

    return wrapper


def decorator2(func: Callable):
    def wrapper():
        print("Decorator 2")
        return func()

    return wrapper


@decorator1
@decorator2
def greet():
    print("Hello!")


greet()


def repeat(num_times):
    def decorator(func: Callable):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = func(*args, **kwargs)
            return result

        return wrapper

    return decorator


@repeat(num_times=3)
def greet(name):
    print(f"Hello, {name}!")


greet("Alice")
