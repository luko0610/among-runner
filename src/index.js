import "phaser";
import pkg from "phaser/package.json";
import background from "img/background.png";
import ground from "img/ground.png";

// This is the entry point of your game.

const width = 800;
const height = 600;

const config = {
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  width,
  height,
  type: Phaser.FIT,
  scene: { preload, create, update },
};

const game = new Phaser.Game(config);
let groundPiecePhysics = [];
let floorBeginX = 0;

function preload() {
  this.load.image("background", background);
  this.load.image("ground", ground);
}

function create() {
  //  Set the camera and physics bounds to be the size of 4x4 bg images
  this.cameras.main.setBounds(0, 0, width * 2, height * 2);
  this.physics.world.setBounds(0, 0, width * 2, height * 2);

  this.background = this.add.image(0, 0, "background").setOrigin(0);
  initGround(this);
}

let initGround = (that) => {
  that.groundPieces = [];
  let g = that.add.image(0 * width, height - 75, "ground").setOrigin(0);
  g.setDisplaySize(width, 75);
  that.groundPiece1 = g;
  g = that.add.image(1 * width, height - 75 - 75, "ground").setOrigin(0);
  g.setDisplaySize(width, 75);
  that.groundPiece2 = g;
};

function update(delta) {
  if (this.groundPiece1.x < width) {
    this.groundPiece1.setPosition(
      this.groundPiece1.x + delta * 0.0001,
      this.groundPiece1.y
    );
  } else {
    this.groundPiece1.setPosition(0, this.groundPiece1.y).setOrigin(0);
  }

  if (this.groundPiece2.x < width) {
    this.groundPiece2.setPosition(
      this.groundPiece2.x + delta * 0.0001,
      this.groundPiece2.y
    );
  } else {
    this.groundPiece2.setPosition(0, this.groundPiece2.y).setOrigin(0);
  }
}
