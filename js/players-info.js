const yoneInfo = {
  name: 'Yone',
  left: 710,
  top: 710,
  money: 600,
  cards: [],
  color: '#900',
  isHavingSetOfCards: false,
  isInJail: false,
  counterJail: 0,
  isBankrupt: false
};

const player1Info = {
  name: 'Car',
  left: 750,
  top: 710,
  money: 300,
  cards: ['brownCard1', 'brownCard2'],
  color: 'blue',
  isHavingSetOfCards: false,
  isInJail: false,
  counterJail: 0,
  isBankrupt: false
};

const player2Info = {
  name: 'Duck',
  left: 750,
  top: 750,
  money: 300,
  cards: [],
  color: 'green',
  isHavingSetOfCards: false,
  isInJail: false,
  counterJail: 0,
  isBankrupt: true
};

const player3Info = {
  name: 'T-rex',
  left: 710,
  top: 750,
  money: 600,
  cards: [],
  color: 'rgb(138, 3, 138)',
  isHavingSetOfCards: false,
  isInJail: false,
  counterJail: 0,
  isBankrupt: false
};

export {
    yoneInfo,
    player1Info,
    player2Info,
    player3Info
}