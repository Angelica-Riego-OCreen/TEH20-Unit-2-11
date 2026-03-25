/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelica RO
 * Created on: Mar 2026
 * This program Compares numbers
*/

// creates variables
let Number1 : number = (0,99)
let Number2 : number = (0,99)

// Press A
input.onButtonPressed(Button.A, function() {
  basic.clearScreen()
  basic.showString("#1:" )
  basic.showNumber(Number1)

})

// Press B
input.onButtonPressed(Button.B, function() {
  basic.clearScreen()
  basic.showString("#2:" )
  basic.showNumber(Number2)
  
})

// Shake
input.onGesture(Gesture.Shake, function() {
  
  if (Number1 > Number2) { 
    basic.showNumber(Number1)
    basic.showString(">")
    basic.showNumber(Number2)
  } else {
    basic.showNumber(Number1)
    basic.showString("<")
    basic.showNumber(Number2)
}
})
