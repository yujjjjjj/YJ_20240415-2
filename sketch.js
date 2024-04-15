let c = ["#225", "#0", "#e7decd"];
let shapes = []; // 用於儲存所有形狀的
let speeds = []; // 用於儲存所有形狀的速度
let bg = ["#000000"];
var balls = []  //所有球的資料內容
var ball  //正在處理的球
class ball_class{  //宣告一個ball_class物件，
  constructor(args){  //描述物件的初始值，只有設定物件的資料內容   
    
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("#fdf0d5");

  let cells = 15;
  let offset = width / 20;
  let margin = offset / 20;
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let x = offset + i * (w + margin);
      let y = offset + j * (h + margin);

      let cx = x + w / 2;
      let cy = y + h / 2;
      let d = w;
      let rotate_num = int(random(10));
      rotate_num = rotate_num *20;

      let shape_num = int(random(2));

      shapes.push({x: cx, y: cy, d: d, rotate: rotate_num}); // 將每個物件的信息儲存在數組中
      speeds.push({x: random(-1, 1), y: random(-1, 1)}); // 設置每個物件的隨機速度
    }
  }
}

function draw() {
  background("#fdf0d5");

  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    let speed = speeds[i];

    push();
    translate(shape.x, shape.y);
    rotate(this.rotate_num);

    strokeWeight(15);
    stroke(random(c));
    strokeCap(SQUARE);
    noFill();

    for (let a = 0; a < shape.d * 0.9; a = a + shape.d / 2) {
      arc(0, -shape.d / 2, shape.d - a, shape.d - a, 0, 90);
      arc(0, -shape.d / 2, shape.d - a, shape.d - a, 90, 180);
      line(-shape.d / 2, shape.d / 6 + a / 2, shape.d / 2, shape.d / 6 + a / 2);
    }
    pop();

    // 更新每個物件位置
    shape.x += speed.x;
    shape.y += speed.y;

    // 如果物件碰到螢幕邊框使其反彈
    if (shape.x <= 0 || shape.x >= width) {
      speed.x *= -1;
    }
    if (shape.y <= 0 || shape.y >= height) {
      speed.y *= -1;
    }
  }
}
