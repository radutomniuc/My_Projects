#1 Suma impartita la nr de persoane + tip => rezultatul . Format function
print("Welcome to the tip calculator.")
a = float(input("What was the total bill? \n$"))
b = float(input("How many people to split the bill?\n"))
c = float(input("What percentage tip would you like to give? 10, 12 or 15?"))
d = a/b+(a/b)*c/100
final = round(d, 2)
final = "{:.2f}".format(d)
print("Each person should pay: ", final)