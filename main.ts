function Start_Level () {
    scene.setBackgroundColor(randint(3, 7))
    Count = 0
    for (let index = 0; index <= 10 + Level; index++) {
        Pizza = sprites.create(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `, SpriteKind.Food)
        Pizza.setPosition(randint(20, 140), randint(20, 100))
    }
    mySprite.say("Level" + Level, 1000)
    info.startCountdown(30 - Level / 4)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Count += 1
    info.changeScoreBy(1)
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray, 200)
    if (Count > 10 + Level) {
        Level += 1
        music.jumpUp.play()
        Start_Level()
    } else {
        music.playMelody("C5 A B G A F G E ", 120)
    }
})
let Pizza: Sprite = null
let Count = 0
let mySprite: Sprite = null
let Level = 0
game.splash("Hurry", "GET ALL THE PIZZA")
Level = 1
mySprite = sprites.create(img`
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 d d d d d d d d 3 3 . . 
    . 3 3 d d b f d d f b d d 3 3 . 
    . 3 3 d d 1 2 d d 2 1 d d 3 3 . 
    . 3 3 3 d d d d d d d d 3 3 3 . 
    3 3 3 3 3 d d d d d d 3 3 3 3 3 
    . . d d 9 9 9 9 9 9 9 9 d d . . 
    . . d d 9 9 9 5 9 9 9 9 d d . . 
    . . d d 9 9 9 9 9 9 9 9 d d . . 
    . . . . 9 9 9 5 9 9 9 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 9 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 70, 70)
Start_Level()
