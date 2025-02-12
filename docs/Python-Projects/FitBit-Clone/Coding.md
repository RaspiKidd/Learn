---
title: Coding
sidebar_position: 3
---

## Importing Python Libraries

On line 3 type the following code to import the time library.

```python
import time
```

Press enter to start a new line of code.

## Creating Variables

:info[What is a Variable]
Think of a variable as a box that stores information that can be used throughout our program. We give variables a descriptive name so we and others can understand what is going on within our program.
:

Type the following code to create the **steps** variable and set it to **0**.

```python
steps = 0
```

## Creating the while True loop

Type the following line of code under `steps = 0`

```python
while True:
```

Once you press enter your cursor will automatically indent. Start typing the rest of your code from here.

## Adding 1 to Steps

Let's create the if function to detect when the micro:bit was shaken and add 1 to our steps variable.

```python
if accelerometer.was_gesture('shake'):
    steps += 1
```

Press Enter and make sure the cursor is lined up with the if statement. (this can normally be done by pressing **delete** once)

## Pausing the Code

We need to pause our code here or when we try to reset the step counter our program will be running too quickly and not detect the button press.

```python
sleep(500)
```

This pauses our code for half a second.

## Resetting Our Step Counter to 0

Now that we have got our steps increaing by one when the micro:bit detects it's been shaken. At the start of a new walk or day we will want to start from 0 again.

Let's create some code that will set steps back to 0 when the A button has been pressed.

```python
if button_a.was_pressed():
    steps = 0
```

Press Enter on your keyboard and make sure that the cursor is back in line with the **if statement**.

## Displaying the Steps

The last thing we need to do is display the number of steps on the micro:bit LED Matrix.

To do this type:

```python
display.scroll(steps)
```

## Completed Code

We have now completed our code and it should look like this:

```python
# Imports go at the top
from microbit import *

steps=0

while True:
    if accelerometer.was_gesture('shake'):
        steps += 1
    sleep(500)
    if button_a.was_pressed():
        steps = 0
    display.scroll(steps)
```

Well done you have now completed the code for the rock, paper scissors game. Let's move on to learn how to download it to the micro:bit.