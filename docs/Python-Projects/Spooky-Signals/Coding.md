---
title: Coding
sidebar_position: 3
---

## Importing Python Libraries

Below `from microbit import *` type `import radio`. This will add the radio library so we can use it within our code.

## Configure the Radio Module

Type the following code below `import radio`. This will turn the radio module on and set the radio group.

```python
radio.on()
radio.config(group=30)
```

:::tip[USING MORE THAN TWO MICRO:BITS]
If you are using more than two micro:bits make sure each pair is set to a different radio group
:::

## Creating the while True Loop

Type the following line of code under `radio.config(group=30)`

`while True:`

Once you press enter your cursor will automatically indent. Start typing the rest of your code from here.

## Creating 'Incoming' Variable

Within the `while loop` create the **incoming** variable and set it to `radio.receive()`. By typing the following code.

```python
incoming = radio.receive()
```

## Creating the Incoming Message

Show a ghost on the display if message is incoming.

```python
if incoming:
    display.show(Image.GHOST)
```

## Creating Outgoing Message

:::info[NOTE]
Make sure the cursor is back in line with the `if` statement.
:::

We are now going to clear the micro:bit display and send the message **GHOST** if the micro:bit detected a 'shake'.

```python
if accelerometer.was_gesture('shake'):
    display.clear()
    radio.send("GHOST")
```

### Completed Code

```python
# Imports go at the top
from microbit import *
import radio

radio.on()
radio.config(group=30)

while True:
  incoming = radio.receive()
  if incoming:
    display.show(Image.GHOST)
  if accelerometer.was_gesture('shake'):
    display.clear()
    radio.send("GHOST")
```

Well done you have now completed the code for Spooky Signals. Let's move on to learn how to download it to the micro:bit.
