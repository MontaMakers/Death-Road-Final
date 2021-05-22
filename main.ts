scene.setBackgroundColor(1)
scene.setBackgroundImage(assets.image`Menu`)
let car1 = sprites.create(assets.image`car0`, SpriteKind.Player)
let humo = sprites.create(assets.image`humo1`, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(car1)
tiles.placeOnTile(car1, tiles.getTileLocation(7, 32))
controller.moveSprite(car1)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        car1.setImage(assets.image`car1`)
    }
    if (controller.left.isPressed()) {
        car1.setImage(assets.image`car6`)
    }
    if (controller.up.isPressed()) {
        car1.setImage(assets.image`car0`)
    }
    if (controller.down.isPressed()) {
        car1.setImage(assets.image`car3`)
    }
})
