---
title: Coding
sidebar_position: 3
---

## Importing Python Libraries

On **line 3** type `import random` and press enter.

## Creating the while True loop

Type the following line of code under `import random`

`while True:`

Once you press enter your cursor will automatically indent. Start typing the rest of your code from here.

## Creating the Rock Paper Scissor Variables

:::info[What is a variable]
Think of a variable as a box that stores information that can be used throughout our program. We give variables a descriptive name so we and others can understand what is going on within our program.
:::

To create the rock paper scissors vairables type the following code:

```python
    Paper = Image("99999:90009:90009:90009:99999")
    Rock = Image("00000:09990:09990:09990:0000")
    Scissors = Image("90099:09099:00900:09099:90099")
```

Your code will look like this:

```python
# Imports go at the top
from microbit import *
import random
while True:
    Paper = Image("99999:90009:90009:90009:99999")
    Rock = Image("00000:09990:09990:09990:0000")
    Scissors = Image("90099:09099:00900:09099:90099")

```

## Creating the on shake Action

To create the on shake action type the following code below the vairables section.

```python
    if accelerometer.was_gesture('shake'):
        choice = random.randint(0,2)
```

Your completed code so far will look like this:

```python
# Imports go at the top
from microbit import *
import random

while True:
    Paper = Image("99999:90009:90009:90009:99999")
    Rock = Image("00000:09990:09990:09990:0000")
    Scissors = Image("90099:09099:00900:09099:90099")
    if accelerometer.was_gesture('shake'):
        choice = random.randint(0,2)
```

## Creating the Choice = 0 Condition

Under the `choice = random.randint(0,2)` line we are going to create an if condition to determine what will happen if choice = 0.

Type the following code:

```python
    if choice == 0:
        display.show(Paper)
```

This will display paper on the LED matrix if choice equals 0.

Completed code so far:

```python
# Imports go at the top
from microbit import *
import random

while True:
    Paper = Image("99999:90009:90009:90009:99999")
    Rock = Image("00000:09990:09990:09990:0000")
    Scissors = Image("90099:09099:00900:09099:90099")
    if accelerometer.was_gesture('shake'):
        choice = random.randint(0,2)
        if choice == 0:
            display.show(Paper)
```

## Creating the Choice = 1 Condition

Under the `display.show(Paper)` line we are going to create an elif condition to determine what will happen if choice = 1.

:::note
Make sure you unindent your code so your cursor is back in line with the if condition.
:::

Type the following code:

```python
    elif choice == 1:
        display.show(Rock)
```

This will display rock on the LED matrix if choice equals 1.

Completed code so far:

```python
# Imports go at the top
from microbit import *
import random

while True:
    Paper = Image("99999:90009:90009:90009:99999")
    Rock = Image("00000:09990:09990:09990:0000")
    Scissors = Image("90099:09099:00900:09099:90099")
    if accelerometer.was_gesture('shake'):
        choice = random.randint(0,2)
        if choice == 0:
            display.show(Paper)
        elif choice == 1:
            display.show(Rock)
```

### Creating the Choice = 2 Condition

Under the `display.show(Rock)` line we are going to create an else condition to determine what will happen if choice = 2.

:::note
Make sure you unindent your code so your cursor is back in line with the elif condition.
:::

Type the following code:

```python
    else:
        display.show(Scissors)
```

This will display scissors on the LED matrix if choice equals 1.

## Completed Code

```python
# Imports go at the top
from microbit import *
import random

while True:
    Paper = Image("99999:90009:90009:90009:99999")
    Rock = Image("00000:09990:09990:09990:0000")
    Scissors = Image("90099:09099:00900:09099:90099")
    if accelerometer.was_gesture('shake'):
        choice = random.randint(0,2)
        if choice == 0:
            display.show(Paper)
        elif choice == 1:
            display.show(Rock)
        else:
            display.show(Scissors)
```

Well done you have now completed the code for the rock, paper scissors game. Let's move on to learn how to download it to the micro:bit.