function Arrow(x,y,color,rotation){
    this.x = x || 0;
    this.y = y || 0;
    this.color = '#ff0' || color;
    this.rotation = 0 || rotation;
}

Arrow.prototype.draw = function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.lineWidth = 2;
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(-50,-25);
    context.lineTo(0,-25);
    context.lineTo(0,-50);
    context.lineTo(50,0);
    context.lineTo(0,50);
    context.lineTo(0,25);
    context.lineTo(-50,25);
    context.lineTo(-50,-25);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
}