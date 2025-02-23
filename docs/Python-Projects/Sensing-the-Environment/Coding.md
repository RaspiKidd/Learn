---
title: Coding
sidebar_position: 3
---

## Creating the while True loop

Type the following line of code under `from microbit import *`

`while True:`

Once you press enter your cursor will automatically indent. Start typing the rest of your code from here.

## Temperature Sensing

Type the following code, which will enable us to detect the temperature when we shake the micro:bit.

```python
if accelerometer.is_gesture('shake'):
    display.scroll(temperature())
```

## Light Sensing

Type the following code, which will enable us to detect the light level of our environment. Make sure that the cursor is lined up with the `if`.

```python
if button_a.is_pressed():
    if display.read_light_level() < 100:
      display.show(Image.HAPPY)
    else:
      display.clear()
    sleep(2000)
```

## Compass Sensing

Type the following code, which will allow us to detect the direction we are facing. Make sure the cursor is lined up with `if button_a.is_pressed():`.

```python
if button_b.is_pressed():
    display.scroll(compass.heading())
```

## Completed Code

```python
# Imports go at the top
from microbit import *

while True:
  if accelerometer.is_gesture('shake'):
    display.scroll(temperature())
  if button_a.is_pressed():
    if display.read_light_level() < 100:
      display.show(Image.HAPPY)
    else:
      display.clear()
    sleep(2000)
  if button_b.is_pressed():
    display.scroll(compass.heading())
```

We are now ready to download the code to our micro:bit so we can go out and sense our environment.
