scene.setBackgroundColor(1)
scene.setBackgroundImage(assets.image`Menu`)
let car1 = sprites.create(assets.image`car2`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`car3`, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(car1)
controller.moveSprite(car1)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        car1.setImage(assets.image`car2`)
    }
    if (controller.left.isPressed()) {
        car1.setImage(assets.image`car3`)
    }
    if (controller.up.isPressed()) {
        car1.setImage(assets.image`car0`)
    }
    if (controller.down.isPressed()) {
        car1.setImage(assets.image`car1`)
    }
})
