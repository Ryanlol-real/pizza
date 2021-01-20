def on_on_overlap(sprite, otherSprite):
    global Count, Level
    Count += 1
    Pizza.destroy()
    otherSprite.start_effect(effects.spray)
    music.play_melody("C5 A B G A F G E ", 120)
    if Count > 10 + Level:
        Level += 1
        music.jump_up.play()
        Start_Level()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def Start_Level():
    global Count, Pizza
    scene.set_background_color(randint(3, 7))
    Count = 0
    index = 0
    while index <= 10 + Level:
        Pizza = sprites.create(img("""
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
            """),
            SpriteKind.food)
        Pizza.set_position(randint(20, 140), randint(20, 100))
        index += 1
    mySprite.say("Level" + str(Level), 1000)
    info.start_countdown(30 - Level / 4)
Pizza: Sprite = None
Count = 0
mySprite: Sprite = None
Level = 0
game.splash("Hurry", "GET ALL THE PIZZA")
Level = 1
mySprite = sprites.create(img("""
        . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 2 d d 2 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f b b 5 5 b b f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 70, 70)
Start_Level()