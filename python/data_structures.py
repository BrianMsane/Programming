# different ways of initializing lists
names = []
names.append("brian")
names.append("msane")
names.append("thandokuhle")

odd_numbers = list(range(1, 21, 2))
letters = list("Thandokuhle   Brian   Msane  ".strip())
print(letters[-1])
print(letters[:11:2])  # specify a step of 2
