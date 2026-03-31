/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelica RO
 * Created on: Mar 2026
 * This program Compares numbers
*/

// creates variables
const number1 : number = randint(0, 99)
const number2 : number = randint(0,99)

// Press A
input.onButtonPressed(Button.A, function() {
  basic.clearScreen()
  basic.showString("#1:" )
  basic.showNumber(number1)

})

// Press B
input.onButtonPressed(Button.B, function() {
  basic.clearScreen()
  basic.showString("#2:" )
  basic.showNumber(number2)
  
})

// Shake
input.onGesture(Gesture.Shake, function() {
  
  if (number1 > number2) { 
    basic.showNumber(number1)
    basic.showString(">")
    basic.showNumber(number2)
  } else {
    basic.showNumber(number1)
    basic.showString("<")
    basic.showNumber(number2)
}
})
