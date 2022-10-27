import BLOCKS from "./blocks.js";

// DOM
const playground = document.querySelector(".playground > ul")
const gameText = document.querySelector(".game-text")
const scoreDisplay = document.querySelector(".score")
const restartBtn = gameText.querySelector("button")
// Setting
const GAME_ROMS = 20;
const GAME_COLS = 10;

// variables 
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

// 4개모양 배열 (옆 위 아래)

const movingItem = {
  type: "",
  direction: 3,
  top: 0,
  left: 0,
}

init()

// functions
function init() {
  tempMovingItem = {...movingItem};
  for (let i = 0; i < GAME_ROMS; i++) {
    prependNewLine()
  }
  generateNewBlock()
}

function prependNewLine() {
  const li = document.createElement("li")
  const ul = document.createElement("ul")
  for (let j = 0; j < GAME_COLS; j++) {
    const matrix = document.createElement("li")
    ul.prepend(matrix)
  }
  li.prepend(ul)
  playground.prepend(li)
}

// 블럭 선택해 그려주는 함수
function renderBlocks(moveType = "") {
  const { type, direction, top, left } = tempMovingItem;
  
  // 전에 있던 블록 반복문으로 삭제 
  const movingBlocks = document.querySelectorAll(".moving")
  movingBlocks.forEach(moving => {
    moving.classList.remove(type, "moving");
  })
  BLOCKS[type][direction].some(block => {
    const x = block[0] + left;
    const y = block[1] + top;

    const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;

    const isAvailble = checkEmpty(target)
    if (isAvailble) {
      target.classList.add(type, "moving")
    } else {
      tempMovingItem = { ...movingItem }
      if (moveType === 'retry') {
        clearInterval(downInterval)
        showGameoverText()
      }
      // 재귀 무한 방지 (콜스택 에러)
      setTimeout(() => {
        renderBlocks('retry');
        // 옆이 아닌 밑 처리
        if (moveType === "top") {
          seizeBlock()
        }
      }, 0)
      return true;
    }
  });
  movingItem.left = left;
  movingItem.top = top;
  movingItem.direction = direction;
}

function seizeBlock() {
  const movingBlocks = document.querySelectorAll(".moving")

  movingBlocks.forEach(moving => {
    moving.classList.remove("moving")
    moving.classList.add("seized")
  })
  checkMatch()
}

function checkMatch() {
  const childNodes = playground.childNodes;
  childNodes.forEach(child => {
    let matched = true;
    child.children[0].childNodes.forEach(li => {
      if (!li.classList.contains("seized")) {
        matched = false;
      }
    })
    if (matched) {
      child.remove();
      prependNewLine()
      scoreDisplay.innerText = ++score;
    }
  })

  generateNewBlock()
}
/* 밑에 닿을 시 새로운 블럭 생성 */
function generateNewBlock() {
  clearInterval(downInterval)

  downInterval = setInterval(() => {
    moveBlock('top', 1)
  }, duration)

  const blockArray = Object.entries(BLOCKS)
  const randomIndex = Math.floor(Math.random() * blockArray.length)
  
  movingItem.type = blockArray[randomIndex][0];
  movingItem.top = 0;
  movingItem.left = 0;
  movingItem.direction = 0;
  tempMovingItem = {...movingItem}
  renderBlocks()
}

// 공간을 넘어갔는지 체크
function checkEmpty(target) {
  if (!target || target.classList.contains("seized")) {
    return false
  }

  return true
}

function moveBlock(moveType, amount) {
  tempMovingItem[moveType] += amount;
  renderBlocks(moveType)
}

function chageDirection() {
  tempMovingItem.direction += 1;

  // 4가지 경우 수 다 쓸 경우 초기화시켜서 처음 모습으로
  if (tempMovingItem.direction === 4) {
    tempMovingItem.direction = 0
  }

  renderBlocks()
}

function dropBlock() {
  clearInterval(downInterval)
  downInterval = setInterval(() => {
    moveBlock("top", 1)
  }, 10)
}

// 게임오버
function showGameoverText() {
  gameText.style.display = "block"
}

// event handling 
document.addEventListener("keydown", e => {
  switch(e.key) {
    case 'ArrowRight': 
      moveBlock("left", 1)
      break;

    case 'ArrowLeft':
      moveBlock("left", -1)
      break;

    case ' ':
      chageDirection()
      break;

    case 'ArrowDown':
      moveBlock("top", 1)
      break;

    case 'Control':
      dropBlock()
      break;

    default:
      break;
  }
})
// 게임 종료 후 리스타트 버튼 처리
restartBtn.addEventListener("click", () => {
  playground.innerHTML = "";
  gameText.style.display = "none"
  init()
})
/* 47:06 테트리스 js */