'''Learning basics of Abastract classes
'''


from abc import ABC, abstractmethod
from math import pi


class Shape(ABC):
    def __init__(self, name) -> None:
        self.size = name

    @abstractmethod
    def area(self): pass

    @abstractmethod
    def perimeter(self): pass


class Square(Shape):
    def __init__(self, name, size) -> None:
        self.size = size
        super().__init__(name=name)

    def area(self):
        return self.area * self.area

    def perimeter(self):
        return 4 * self.size


class Circle(Shape):
    def __init__(self, name, radius) -> None:
        self.radius = radius
        super().__init__(name)

    def area(self):
        return pi * self.radius * self.radius

    def perimeter(self):
        return 1/2 * self.radius
