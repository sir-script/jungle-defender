/**
 * Prieth Matthias, fhs33735
 * Rainer Michael, fhs33736
 */
define(function(){
    var g_resources = [
        {
            //tmx-Object for all Images
            name: "battlezone",
            type: "tmx",
            src: "data/battlezone.tmx"
        },
        {
            name: "metatiles32x32",
            type: "image",
            src: "data/battlezone_tileset/metatiles32x32.png"
        },
        {
            //gamefieldSprite1
            name: "TileB",
            type: "image",
            src: "data/battlezone_tileset/TileB.png"
        },
        {
            //gamefieldSprite2
            name: "JungleTileA2",
            type: "image",
            src: "data/battlezone_tileset/rainforest/1/JungleTileA2.png"
        },
        {
            //gamefieldSprite3
            name: "Wilderness-Jungle-04",
            type: "image",
            src: "data/battlezone_tileset/rainforest/2/Wilderness-Jungle-04.png"
        },
        {
            //gamefieldSprite4
            name: "Terrain",
            type: "image",
            src: "data/battlezone_tileset/terrain/Terrain.png"
        },
        {
            //gamefieldSprite5
            name: "JunglePlants",
            type: "image",
            src: "data/battlezone_tileset/rainforest/1/junglePlants.png"
        },
        {
            //animalPlayer1
            name: "Gorilla",
            type: "image",
            src: "data/sprite/mainPlayer/monkey/Gorilla.png"
        },
        {
            //Player images
            name: "chars",
            type: "image",
            src: "data/sprite/chars.png"
        },
         {
         //MilitaryPlayer images
         name: "Military",
         type: "image",
         src: "data/sprite/mainPlayer/military/Military.png"
         },
        {
            //Enemy images
            name: "Enemy",
            type: "image",
            src: "data/sprite/Enemy.png"
        },
        {
            //fruitBomb image
            name: "GreenCoconut",
            type: "image",
            src: "data/sprite/weapons/fruitBomb/GreenCoconut.png"
        },
        {
            //normalBomb image
            name: "Waterbomb",
            type: "image",
            src: "data/sprite/weapons/bomb/Waterbomb.png"
        },
        {
            //explosion image
            name: "Explosion",
            type: "image",
            src: "data/sprite/explosions/Explosion.png"
        },
        // game font
        {
            name: "32x32_font",
            type: "image",
            src: "data/sprite/32x32_font.png"
        },
        // monkey previewpicture
        {
            name: "MilitaryPreview",
            type: "image",
            src: "data/sprite/mainPlayer/preview/faceMilitary.png"
        },
        // military previewpicture
        {
            name: "MonkeyPreview",
            type: "image",
            src: "data/sprite/mainPlayer/preview/faceMonkey.png"
        }
    ];
    return g_resources;
});
