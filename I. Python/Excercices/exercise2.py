#2 Rock, papper, scissors
import random

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''
paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''
scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

your_chose = int(input("What do u choose? Type 0 for Rock, 1 for Paper or 2 for Scissors?\n"))
if (your_chose == 0):
  print(f"You chose {rock}")
if (your_chose == 1):
  print(f"You chose {paper}")
if (your_chose == 2):
  print(f"You chose {scissors}")

computer_chose = random.randint(0,2)
if (computer_chose == 0):
  print(f"Computer chose {rock}")
elif (computer_chose == 1):
  print(f"Computer chose {paper}")
elif (computer_chose == 2):
  print(f"Computer chose {scissors}")
else:
  print("Invalid number")

print("Result:")
if (your_chose == computer_chose):
  print("It's Draw")
elif (your_chose == 1 and computer_chose == 0 or your_chose == 2 and computer_chose == 1 or your_chose == 0 and computer_chose == 2):
  print("You win!")
elif(your_chose == 0 and computer_chose == 1 or your_chose == 1 and computer_chose == 2 or your_chose == 2 and computer_chose == 0):
  print("You lost!")
else:
  print("Invalid number")