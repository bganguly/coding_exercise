Answer to a Coding Exercise
===============

UserTesting uses this exercise as part of it's interviewing process for coding related positions.

# Lockerz

Write a program for managing locker reservations at a hotel concierge
desk. Customers leave bags with the concierge, who then uses your
program to determine in which locker to place the bag. The program
tells the concierge the number of the locker in which to place the
bag, and prints a ticket to give to the customer. Upon return, the
customer provides the ticket, and the concierge uses that to look up
the corresponding locker, retrieve the bag, and return it to the
customer.

There are 1000 small lockers, 1000 medium-­‐sized lockers, and 1000
large lockers (it’s a big Vegas hotel). You can assume that all
checked bags fit into one of these three sizes. The program should
always assign the smallest available locker that fits the bag.

# Lockerz Solution

The general approach is that there will be three javascript arrays with 1000
elements each that represent the three types of lockers. The program initialises
the arrays with 0's and as each bag is assigned to a locker of the appropriate
type, the appropriate array element is set to 1.

For assigning a bag to a locker, the three locker types are 'looked=up'
