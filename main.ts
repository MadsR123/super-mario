controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -1000
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 3 3 3 3 . . . 
    . . . . . . . . . . 3 . 3 . . . 
    . . . . . . . . . . 3 . 3 . . . 
    . . . . . . . . . . . 3 3 . . . 
    . . . . . . . . . . . 3 3 . . . 
    . . . 3 . 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 . . . . . 3 . . . . 
    . . . 3 . . 3 3 3 . 3 . . . . . 
    . . . 3 3 . . . . . 3 . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
forever(function () {
    mySprite.setVelocity(0, 70)
    scene.cameraFollowSprite(mySprite)
    info.setLife(3)
    controller.moveSprite(mySprite, 24, 27)
})
