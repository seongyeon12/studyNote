let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dinoImg = new Image();
dinoImg.src = 'mario.png';

/* 로그인 */
if (localStorage.hasOwnProperty("userId") == false) {
  let userInput = prompt("이름을 입력하세요")
  localStorage.setItem("userId", userInput);
}

let userId = localStorage.getItem("userId");
let user = document.querySelector("#user")
user.textContent = userId

/* 공룡좌표 */
let dino = {
  x : 10,
  y : 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = 'green'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(dinoImg, this.x, this.y)
  }
}
dino.draw()

let cactusImg = new Image();
cactusImg.src = 'obs.png';
/* let cactusImg2 = new Image();
cactusImg.src = 'blue_obs.png'; */

/* 장애물 */
/* 장애물은 가로 세로 다를 수 있다 -> 클레스로 틀 만들기 */
class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 65;
  }
  draw() { 
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.drawImage(cactusImg, this.x, this.y)
  }
}

let cactus = new Cactus();
cactus.draw()

let SCORE = document.querySelector('#score')

let jump = false;
let topJump = false;
let score = 0;
let timer = 0;
let cactusArr = []
let jumpTimer = 0;
let ani;

/* requestAnimationFrame(모니터 FPS에 따라 반복해주는 함수) */
function frame() {
  ani = requestAnimationFrame(frame)
  timer++
  SCORE.textContent = score++

  /* 캔버스를 지우고 그립니다 */
  ctx.clearRect(0,0, canvas.width, canvas.height)

  /* 장애물 스폰 
  1. 120초마다 장애물 생성
  2. array에 장애물 push 
  3. array 반복문으로 돌면서 장애물 그려줍니다
  */

  if (timer % 200 === 0) {
    let cactus = new Cactus();
    cactusArr.push(cactus)
  }

  cactusArr.forEach((a, i, o) => {
    //x좌표가 0미만시 제거
    if (a.x < 0) {
      o.splice(i, 1)
    }
    a.x--;

    collision(dino, a)
    a.draw()
  })

  // 스페이스바 누르는 상태일 시 실행 (점프 됨)
  if (jump == true) {
    dino.y--
    jumpTimer++
  }
  // 하강
  if (jump == false) {
    // 최저 y설정하고 점프 되도록
    if (dino.y == 200) {
      topJump = false
    }
    if (dino.y < 200) {
      dino.y++;
      console.log(dino.y)
    } 
  }
  // 100프레임 시 중단되어 점프 멈춤
  if (jumpTimer > 100) {
    jump = false;
    jumpTimer = 0;
  }

  dino.draw()
}

frame()

function over() {
  localStorage.removeItem("score")
  localStorage.setItem("score", score);
  window.location.href="over.html";
}

// 충돌 체크 
function collision(dino, cactus) {
  let Xgap = cactus.x - (dino.x + dino.width)
  let Ygap = cactus.y - (dino.y + dino.height)
  if (Xgap < 0 && Ygap < 0) {
    alert("Game over!")
    ctx.clearRect(0, 0, dino.width, dino.height)
    cancelAnimationFrame(ani)
    over()
  }
}

// 스페이스바 누를시 점프
  document.addEventListener("keydown", function(e) {
    if (topJump == false && e.code === 'Space') {
      jump = true
      topJump = true
    }
  })