---
title: Coding
sidebar_position: 4
---

## Creating the while True loop

Type the following line of code under `from microbit import *`

`while True:`

Once you press enter your cursor will automatically indent. Start typing the rest of your code from here.

## Turning the Red LED On

Type the following code to turn the red led on for 1 second.

``` python
pin0.write_digital(1)
sleep(1000)
```

## Turning the Yellow LED on

Type the following code to turn the yellow LED on for 1 second. The red LED will also stay on.

``` Python
pin1.write_digital(1)
sleep(1000)
```

## Turning the Red and Yellow LEDs Off

The following code will turn the yellow and red LEDs off ready for the green LED to turn on.

```Python
pin0.write_digital(0)
pin1.write_digital(0)
```

## Turning the Green LED On

The following code will turn the green LED on for 1 second.

``` Python
pin2.write_digital(1)
sleep(1000)
```

## Turning the Green LED off & Yellow LED On

The following code will turn the green LED off and the yellow LED on for 1 second.

``` Python
pin2.write_digital(0)
pin1.write_digital(1)
sleep(1000)
```

## Turning the Yellow LED Off

The following code will turn the yellow LED off.

``` Python
pin1.write_digital(0)
```

Here is our completed code:

``` Python
from microbit import *

while True:
  pin0.write_digital(1)
  sleep(1000)
  pin1.write_digital(1)
  sleep(1000)
  pin0.write_digital(0)
  pin1.write_digital(0)
  pin2.write_digital(1)
  sleep(1000)
  pin2.write_digital(0)
  pin1.write_digital(1)
  sleep(1000)
  pin1.write_digital(0)
```

Well done you have now completed the code for the Traffic Lights. Let's move on to learn how to download it to the micro:bit.