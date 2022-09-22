let Temp = 0
basic.forever(function () {
    Temp = input.temperature() * (1.8 + 32)
    if (Temp >= 104 && input.lightLevel() >= 130) {
        basic.showNumber(Temp)
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.StickFigure)
    } else if (86 <= Temp < 104 || 80 < (input.lightLevel() < 130)) {
        basic.showNumber(Temp)
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Surprised)
    } else {
    	
    }
})
