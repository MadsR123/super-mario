namespace SpriteKind {
    export const Block = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Block, function (sprite, otherSprite) {
    Mario.startEffect(effects.rings)
    pause(1000)
    effects.clearParticles(Mario)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Mario.vy = -120
    pause(400)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let Mario: Sprite = null
tiles.setTilemap(tilemap`level1`)
info.setLife(5)
Mario = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . f f f d d d f d . . . . 
    . . . f d f d d d d f d d d . . 
    . . . f d f f d d d d f d d d . 
    . . . f f d d d d d f f f f . . 
    . . . . . . d d d d d d d . . . 
    . . . . . 2 2 8 2 2 2 2 . . . . 
    . . . . 2 2 2 8 2 2 8 2 2 2 . . 
    . . . 2 2 2 2 8 8 8 8 2 2 2 2 . 
    . . . 1 1 2 8 5 8 8 5 8 2 1 1 . 
    . . . 1 1 1 8 8 8 8 8 8 1 1 1 . 
    . . . 1 1 8 8 8 8 8 8 8 8 1 1 . 
    . . . . . 8 8 8 . . 8 8 8 . . . 
    . . . . e e e . . . . e e e . . 
    . . . e e e e . . . . e e e e . 
    `, SpriteKind.Player)
Mario.ay = 300
let Block_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 5 5 1 1 1 1 1 1 1 1 1 5 . . 
    . . 5 5 1 1 1 1 1 1 1 1 1 5 . . 
    . . 5 5 1 1 1 5 5 5 1 1 1 5 . . 
    . . 5 5 1 1 1 5 5 5 1 1 1 5 . . 
    . . 5 5 5 5 5 5 5 5 1 1 1 5 . . 
    . . 5 5 5 5 5 5 5 5 1 1 1 5 . . 
    . . 5 5 5 5 5 5 5 1 1 1 5 5 . . 
    . . 5 5 5 5 5 5 1 1 1 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 1 1 1 5 5 5 . . 
    . . 5 5 5 5 5 5 1 1 1 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Block)
Block_1.setPosition(375, 210)
let Aktivist_1 = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d 9 d d 9 d d . . . . 
    . . . . . d d f f d d . . . . . 
    . . . . . d f 3 3 f d . . . . . 
    . . . . . . f f f f . . . . . . 
    . . 7 7 7 7 7 f f 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 9 9 7 7 7 7 7 7 . 
    7 7 7 7 7 7 9 9 7 9 7 7 7 7 7 7 
    7 7 7 7 7 9 9 9 9 9 9 7 7 7 7 7 
    1 1 1 7 9 7 7 9 9 7 7 9 7 1 1 1 
    1 1 . 7 9 9 7 9 7 7 7 9 7 . 1 1 
    d d . 7 7 9 9 9 9 9 9 7 7 . d d 
    d d d 7 7 7 9 7 7 9 7 7 7 d d d 
    . d d 7 7 7 7 9 9 7 7 7 7 d d . 
    . . d 7 7 7 7 7 7 7 7 7 7 d . . 
    `, SpriteKind.Enemy)
Aktivist_1.setPosition(250, 220)
Aktivist_1.follow(Mario, 60)
forever(function () {
    scene.cameraFollowSprite(Mario)
    controller.moveSprite(Mario, 80, 0)
})
