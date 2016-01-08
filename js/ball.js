function Ball(x,y,radius,color){
    this.radius = radius || 40;
    this.color = color || '#ff0';
    this.x = x || 0;
    this.y = y || 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
}

Ball.prototype.draw = function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX,this.scaleY);
    context.lineWidth = this.lineWidth;
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(0,0,this.radius,0,Math.PI * 2,true);
    context.closePath();
    context.fill();
    this.lineWidth && context.stroke();
    context.restore();
}