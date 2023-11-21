const emojis = [
  [
    "🐯",
    "🐯",
    "🐮",
    "🐮",
    "☕",
    "☕",
    "🍉",
    "🍉",
    ],
  [
    "🐱",
    "🐱",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
  ],
  [
    "🍕",
    "🍕",
    "🥚",
    "🥚",
    "🫓",
    "🫓",
    "🥪",
    "🥪",
    "🌮",
    "🌮",
    "🥧",
    "🥧",
    "🍪",
    "🍪",
    "🥮",
    "🥮",
    "🍦",
    "🍦",
    "🍰",
    "🍰",
    "☕",
    "☕",
    "🍉",
    "🍉",
    "🍓",
    "🍓",
    "🍎",
    "🍎",
    "🍊",
    "🍊",
    "🍑",
    "🍑",
  ],
  [
    "👨",
    "👨",
    "🕵️‍♂️",
    "🕵️‍♂️",
    "👮",
    "👮",
    "👩‍🏫",
    "👩‍🏫",
    "👨‍🏫",
    "👨‍🏫",
    "👨‍⚖️",
    "👨‍⚖️",
    "👨‍🎓",
    "👨‍🎓",
    "👩‍⚖️",
    "👩‍⚖️",
    "👩‍🎓",
    "👩‍🎓",
    "👩‍✈️",
    "👩‍✈️",
    "🚶‍♀️",
    "🚶‍♀️",
    "🤾",
    "🤾",
    "🏃",
    "🏃",
    "🤾‍♀️",
    "🤾‍♀️",
  ]
]


let openCards = [];
let levelGame 
// choose level
console.log(emojis[1]);

function addListenerHitBox() {
  const levels = document.querySelectorAll('.level')
  levels.forEach((level) => {
    level.addEventListener('click', (e) => {
      chooseLevel(e.target.id)
    })
  })
}

function chooseLevel(level) {
  
  if(level === 'beginner-level') {
    levelGame = 1
    createCards(emojis[1])
  } else if(level === 'intermediate-level') {
    levelGame = 2
    createCards(emojis[2])
  } else if(level === 'advanced-level') {
    levelGame = 3
    createCards(emojis[3])
  } else {
    levelGame = 0
    createCards(emojis[0])
  }

}

// memory game
function createCards(emojisId) {
  let shuffleEmojis = emojisId.sort(() => (Math.random() > 0.5 ? 2 : -1));

  document.querySelector('.choose-level').style.display = 'none'
  
  document.querySelector('.container').style.visibility = 'visible'

  for (let i = 0; i < emojisId.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
  }
}

function handleClick() {
  if (openCards.length < 2) {
    this.classList.add('boxOpen');
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }

}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  } else {
    openCards[0].classList.remove('boxOpen');
    openCards[1].classList.remove('boxOpen');
  }

  openCards = [];

  if (document.querySelectorAll('.boxMatch').length === emojis[levelGame].length) {
    alert('Você venceu !');
  }
}

function initialize() {
  addListenerHitBox()
}

initialize()