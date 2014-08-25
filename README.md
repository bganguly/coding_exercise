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

For assigning a bag to a locker, the three locker types are 'looked=up' starting
with the smallest bagtype first. Once an empty slot is found (as evidenced by a
0 in the array element), that slot is updated to 1, and the slot number and the
locker types are returnes as an object and passed to a helper print function
that simulates printing a ticket for the customer (does a console.log).

For retreiving a stored bag from a locker, the lockernumber and the lockertype
are read in (these should be available from the ticket that the customer has),
and the appropriate slot is then set to 0.
