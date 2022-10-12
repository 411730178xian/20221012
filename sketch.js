function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255) //框顏色
  noFill()  //不要充滿顏色
  ellipse(25,25,50) //在座標(25,25)畫一個直徑50圓
  rectMode(CENTER) //以方框中心點為座標點
  rect(25+(i*50),25+(j*50),25)
  // rect(25,25,50) //方框座標
  // ellipse(50,50,25)

  // ellipse(25+(1*50),25,50)
  // rect(25+(1*50),25,50)
  // ellipse(50+(1*50),50,25)

  // for(var i=0;i<(width/50);i=i+1) //i=i+1等於i++ 
  // {
  //ellipse(25+(i*50),25,50)
  // rect(25+(i*50),25,50)
  // ellipse(50+(i*50),50,25)
  // }

  for(var j=0;j<(height/50);j++) {
    for(var i=0;i<(width/50);i=i+1)
    {
      ellipse(25+(i*50),25+(j*50),50+mouseX/10)
      stroke("#D96DC9")
      rect(25+(i*50),25+(j*50),50)
      stroke("#EBF8FF")
      ellipse(50+(i*50),50+(j*50),25+mouseY/5)
      stroke("#527A74")
      rect(25+(i*50),25+(j*50),25)
      stroke("#8332AC")
      stroke(255)
    }

  }

}
