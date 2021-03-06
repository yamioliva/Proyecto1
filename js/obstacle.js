function Obstacle(game) {
  this.game = game;
  this.height = 15;
  this.minWidth = this.game.canvas.width * 0.1;
  this.maxWidth = this.game.canvas.width * 0.2;
  this.width = this.minWidth + Math.floor(Math.random() * (this.maxWidth - this.minWidth));
  this.x = Math.floor(Math.random() * (this.game.canvas.width - this.width));
  this.y = this.game.canvas.height;
  this.img = new Image();
  this.img.src = "img/roca.png";
}

Obstacle.prototype.draw = function() {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Obstacle.prototype.move = function() {
  this.y -= 5;
};
