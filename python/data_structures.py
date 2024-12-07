from array import array
from pprint import pprint
from collections import namedtuple
from dataclasses import dataclass

# different ways of initializing lists
names = []
names.append("brian")
names.append("msane")
names.append("thandokuhle")

print(id(names))  # print the location of a variable

# list unpacking
# ensure that the number of variables equals the number of items in the list
first, second, third = names
first, second, *other = names
first, *other, last = names  # try any valid combination

odd_numbers = list(range(1, 21, 2))
letters = list("Thandokuhle   Brian   Msane  ".strip())
print(letters[-1])
print(letters[:11:2])  # specify a step of 2

pairs = list(zip(names, ["msane", "msane", "msane"]))
print(pairs)


sentence = "This is a common interview question"


def most_repeated(text: str):
    # find the most repeated character
    chars_num = {}
    for char in list(text):
        no = 0
        for i in list(text):
            if char == i:
                no += 1
        chars_num.update({char: no})

    for key, value in chars_num.items():
        if value == max(list(chars_num.values())):
            return chars_num[key], key


pprint(most_repeated(sentence))


# extending the basic classes


class Text(str):
    def duplicate(self):
        return self + self


class TrackableList(list):
    def append(self, object):
        print("Append called")
        return super().append(object)


# data classes (do not have any methods/behaviour - they only have data)


Point = namedtuple("Point", ["x", "y"])
p1 = Point(x=1, y=7)  # pass keyword attribute


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


@dataclass
class Point:
    x: int
    y: int
