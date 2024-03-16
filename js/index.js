"use strict";

import { yoneInfo, player1Info, player2Info, player3Info } from './players-info.js';
import { cardsInfo } from './cards-info.js';
import { randomMissions } from './random-missions.js';

let randomNumber = null;
let firstRandomNr, secondRandomNr;
let isHavingEnoughMoney = false;

const yoneMoney = document.querySelector('.player-yone .player__money');
const player1Money = document.querySelector('.player-1 .player__money');
const player2Money = document.querySelector('.player-2 .player__money');
const player3Money = document.querySelector('.player-3 .player__money');

yoneMoney.innerHTML = `$${yoneInfo.money}`;
player1Money.innerHTML = `$${player1Info.money}`;
player2Money.innerHTML = `$${player2Info.money}`;
player3Money.innerHTML = `$${player3Info.money}`;

const rollBtnOpen = document.querySelector(".roll-btn button");
const popupRoll = document.querySelector(".popup-roll");
const rollDiesBtn = document.querySelector(".roll-button button");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const normalCardWidth = document.querySelector(".normal-card").clientWidth;
const bigCardWidth = document.querySelector(".big-card").clientWidth;
const cardPopup = document.querySelector('.buy-card-popup');

const playerYoneIcon = document.querySelector(".players-icons-for-play .player-yone");

const player1Icon = document.querySelector(".players-icons-for-play .player-1");
const player2Icon = document.querySelector(".players-icons-for-play .player-2");
const player3Icon = document.querySelector(".players-icons-for-play .player-3");

rollBtnOpen.addEventListener("click", rollPopupToggle);

function rollPopupToggle() {
  popupRoll.classList.add("active");
  rollBtnOpen.style.display = 'none';
}

const auctionCardsArr = [document.querySelector('.auction-popup .families-stations'),
document.querySelector('.auction-popup .stations150'),
document.querySelector('.auction-popup .normal-card-stations')
];

let playerTurn = yoneInfo;
let playerMoneyTurn = yoneMoney;
let playerIconTurn = playerYoneIcon;
let auctionCompareCounter = 0;
let auctionLastClick = false;

function playersTurn() {
  if(yoneInfo.isBankrupt){
    document.querySelector('.players-icons-for-play .player-yone').style.visibility = 'hidden';
  }
  if(player1Info.isBankrupt){
    document.querySelector('.players-icons-for-play .player-1').style.visibility = 'hidden';
  }
  if(player2Info.isBankrupt){
    document.querySelector('.players-icons-for-play .player-2').style.visibility = 'hidden';
  }
  if(player3Info.isBankrupt){
    document.querySelector('.players-icons-for-play .player-3').style.visibility = 'hidden';
  }
  
  if (playerTurn == yoneInfo) {
    if(!player1Info.isBankrupt){
      playerTurn = player1Info;
      playerMoneyTurn = player1Money;
      playerIconTurn = player1Icon;
      document.querySelector('.whose-turn h1').innerHTML = `Car`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    } else if(!player2Info.isBankrupt){
      playerTurn = player2Info;
      playerMoneyTurn = player2Money;
      playerIconTurn = player2Icon;
      document.querySelector('.whose-turn h1').innerHTML = `Duck`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    } else if(!player3Info.isBankrupt){
      playerTurn = player3Info;
      playerMoneyTurn = player3Money;
      playerIconTurn = player3Icon;
      document.querySelector('.whose-turn h1').innerHTML = `T-rex`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    }
    return;
  }

  if (playerTurn == player1Info) {
    if(!player2Info.isBankrupt){
      playerTurn = player2Info;
      playerMoneyTurn = player2Money;
      playerIconTurn = player2Icon;
      document.querySelector('.whose-turn h1').innerHTML = `Duck`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    } else if(!player3Info.isBankrupt){
      playerTurn = player3Info;
      playerMoneyTurn = player3Money;
      playerIconTurn = player3Icon;
      document.querySelector('.whose-turn h1').innerHTML = `T-rex`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    } else if(!yoneInfo.isBankrupt){
      playerTurn = yoneInfo;
      playerMoneyTurn = yoneMoney;
      playerIconTurn = playerYoneIcon;
      document.querySelector('.whose-turn h1').innerHTML = `Yone`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    }
    return;
  }

  if (playerTurn == player2Info) {
    if(!player3Info.isBankrupt){
      playerTurn = player3Info;
      playerMoneyTurn = player3Money;
      playerIconTurn = player3Icon;
      document.querySelector('.whose-turn h1').innerHTML = `T-rex`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    } else if(!yoneInfo.isBankrupt){
      playerTurn = yoneInfo;
      playerMoneyTurn = yoneMoney;
      playerIconTurn = playerYoneIcon;
      document.querySelector('.whose-turn h1').innerHTML = `Yone`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    } else if(!player1Info.isBankrupt){
      playerTurn = player1Info;
      playerMoneyTurn = player1Money;
      playerIconTurn = player1Icon;
      document.querySelector('.whose-turn h1').innerHTML = `Car`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    }
  }

  if (playerTurn == player3Info) {
    if(!yoneInfo.isBankrupt){
      playerTurn = yoneInfo;
      playerMoneyTurn = yoneMoney;
      playerIconTurn = playerYoneIcon;
      document.querySelector('.whose-turn h1').innerHTML = `Yone`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    } else if(!player1Info.isBankrupt){
      playerTurn = player1Info;
      playerMoneyTurn = player1Money;
      playerIconTurn = player1Icon;
      document.querySelector('.whose-turn h1').innerHTML = `Car`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    } else if(!player2Info.isBankrupt){
      playerTurn = player2Info;
      playerMoneyTurn = player2Money;
      playerIconTurn = player2Icon;
      document.querySelector('.whose-turn h1').innerHTML = `Duck`;
      document.querySelector('.turn-player-name').innerHTML = `Player Turn:<br> <span>${playerTurn.name}</span>`;
      document.querySelector('.turn-player-name span').style.color = `${playerTurn.color}`;
      return;
    }
  } 
}

rollDiesBtn.addEventListener("click", rollDiceEvent);

function rollDiceEvent() {
  rollDiesBtn.removeEventListener("click", rollDiceEvent);

  dice1.classList.add("active-dice");
  dice2.classList.add("active-dice");
  dice1.innerHTML = "";
  dice2.innerHTML = "";
  dice1.style.border = "1px solid black";
  dice2.style.border = "1px solid black";

  setTimeout(() => {
    dice1.classList.remove("active-dice");
    dice2.classList.remove("active-dice");
    dice1.style.border = "none";
    dice2.style.border = "none";
    rollDiesBtn.innerHTML = "Move";

    firstRandomNr = getRandomNumber(1, 6);
    changeDiceImage(dice1);
    secondRandomNr = getRandomNumber(1, 6);
    changeDiceImage(dice2);
    rollDiesBtn.addEventListener("click", moveDice);
  }, 700);
}

function moveDice() {
  rollDiesBtn.removeEventListener("click", moveDice);
  popupRoll.classList.remove('active');

  const interval = setInterval(() => {
    if (playerTurn.top > 700 && playerTurn.left > 100) {
      stepOnBottomCards();
      return;
    }

    if (playerTurn.top > 100 && playerTurn.left < 100) {
      stepOnLeftCards();
      return;
    }

    if (playerTurn.top < 100 && playerTurn.left < 700) {
      stepOnTopCards();
      return;
    }

    if (playerTurn.top < 700 && playerTurn.left > 700) {
      stepOnRightCards();
      walkThroughGo();
      return;
    }
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    rollDiesBtn.addEventListener('click', () => {
      popupRoll.classList.remove('active');
    });
    getOnCard();
  }, 4 * 500);
  ///(firstRandomNr + secondRandomNr)
}

function stepOnRightCards() {
  if (playerTurn.top > cardsInfo['goJail'].top && playerTurn.top < cardsInfo['goJail'].bottom &&
    playerTurn.left > cardsInfo['goJail'].left && playerTurn.left < cardsInfo['goJail'].right) {

    if (playerTurn === yoneInfo || playerTurn === player1Info) {
      playerTurn.top += normalCardWidth + 20;
      playerIconTurn.style.top = `${playerTurn.top}px`;
      return;
    } else {
      playerTurn.top += bigCardWidth - 20;
      playerIconTurn.style.top = `${playerTurn.top}px`;
    }

    return;
  } else if (playerTurn.top > cardsInfo['blueCard2'].top && playerTurn.top < cardsInfo['blueCard2'].bottom &&
    playerTurn.left > cardsInfo['blueCard2'].left && playerTurn.left < cardsInfo['blueCard2'].right) {

    if (playerTurn === yoneInfo) {
      playerTurn.top = 710;
      playerIconTurn.style.top = `${playerTurn.top}px`;

      playerTurn.left = 710;
      playerIconTurn.style.left = `${playerTurn.left}px`;
      return;
    } else if (playerTurn === player1Info) {
      playerTurn.top = 710;
      playerIconTurn.style.top = `${playerTurn.top}px`;

      playerTurn.left = 750;
      playerIconTurn.style.left = `${playerTurn.left}px`;
      return;
    } else if (playerTurn === player2Info) {
      playerTurn.top = 750;
      playerIconTurn.style.top = `${playerTurn.top}px`;

      playerTurn.left = 750;
      playerIconTurn.style.left = `${playerTurn.left}px`;
      return;
    } else if (playerTurn === player3Info) {
      playerTurn.top = 750;
      playerIconTurn.style.top = `${playerTurn.top}px`;

      playerTurn.left = 710;
      playerIconTurn.style.left = `${playerTurn.left}px`;
    }

    return;
  } else {
    playerTurn.top += normalCardWidth + 2;
    playerIconTurn.style.top = `${playerTurn.top}px`;
  }
}

function stepOnTopCards() {
  if (playerTurn.top > cardsInfo['freeParking'].top && playerTurn.top < cardsInfo['freeParking'].bottom &&
    playerTurn.left > cardsInfo['freeParking'].left && playerTurn.left < cardsInfo['freeParking'].right) {

    playerTurn.left += normalCardWidth + 20;
    playerIconTurn.style.left = `${playerTurn.left}px`;
    return;
  } else if (playerTurn.top > cardsInfo['yellowCard3'].top && playerTurn.top < cardsInfo['yellowCard3'].bottom &&
    playerTurn.left > cardsInfo['yellowCard3'].left && playerTurn.left < cardsInfo['yellowCard3'].right) {

    playerTurn.left += normalCardWidth + 20;
    playerIconTurn.style.left = `${playerTurn.left}px`;

    return;
  } else {
    playerTurn.left += normalCardWidth + 2;
    playerIconTurn.style.left = `${playerTurn.left}px`;
  }
}

function stepOnLeftCards() {
  if (playerTurn.top > cardsInfo['justVisiting'].top && playerTurn.top < cardsInfo['justVisiting'].bottom &&
    playerTurn.left > cardsInfo['justVisiting'].left && playerTurn.left < cardsInfo['justVisiting'].right) {

    if (playerTurn === yoneInfo || playerTurn === player1Info) {
      playerTurn.top -= normalCardWidth + 15;
      playerIconTurn.style.top = `${playerTurn.top}px`;
    } else {
      playerTurn.top -= bigCardWidth - 10;
      playerIconTurn.style.top = `${playerTurn.top}px`;
    }

    return;
  } else if (playerTurn.top > cardsInfo['orangeCard1'].top && playerTurn.top < cardsInfo['orangeCard1'].bottom &&
    playerTurn.left > cardsInfo['orangeCard1'].left && playerTurn.left < cardsInfo['orangeCard1'].right) {

    playerTurn.top -= normalCardWidth + 20;
    playerIconTurn.style.top = `${playerTurn.top}px`;

    return;
  } else {
    playerTurn.top -= normalCardWidth + 1;
    playerIconTurn.style.top = `${playerTurn.top}px`;
  }
}

function stepOnBottomCards() {
  if (playerTurn.top > cardsInfo['go'].top && playerTurn.top < cardsInfo['go'].bottom &&
    playerTurn.left > cardsInfo['go'].left && playerTurn.left < cardsInfo['go'].right) {

    if (playerTurn === yoneInfo || playerTurn === player3Info) {
      playerTurn.left -= normalCardWidth + 15;
      playerIconTurn.style.left = `${playerTurn.left}px`;
      return;
    } else {
      playerTurn.left -= bigCardWidth - 5;
      playerIconTurn.style.left = `${playerTurn.left}px`;
    }

    return;
  } else if (playerTurn.top > cardsInfo['lightBlueCard1'].top && playerTurn.top < cardsInfo['lightBlueCard1'].bottom &&
    playerTurn.left > cardsInfo['lightBlueCard1'].left && playerTurn.left < cardsInfo['lightBlueCard1'].right) {

    playerTurn.left -= normalCardWidth + 20;
    playerIconTurn.style.left = `${playerTurn.left}px`;
    return;
  } else {
    playerTurn.left -= normalCardWidth + 1;
    playerIconTurn.style.left = `${playerTurn.left}px`;
  }
}

function walkThroughGo() {
  if (playerTurn.top > cardsInfo['go'].top && playerTurn.top < cardsInfo['go'].bottom &&
    playerTurn.left > cardsInfo['go'].left && playerTurn.left < cardsInfo['go'].right) {

    playerTurn.money += 200;
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
  }
}

function verifyIfPlayerHaveSetOfCards(key) {
  verifyIfPlayerHaveSetOfCardsBody('brownCard1', 'brownCard2', undefined, key);
  verifyIfPlayerHaveSetOfCardsBody('blueCard1', 'blueCard2', undefined, key);

  verifyIfPlayerHaveSetOfCardsBody('redCard1', 'redCard2', 'redCard3', key);
  verifyIfPlayerHaveSetOfCardsBody('yellowCard1', 'yellowCard2', 'yellowCard3', key);
  verifyIfPlayerHaveSetOfCardsBody('orangeCard1', 'orangeCard2', 'orangeCard3', key);
  verifyIfPlayerHaveSetOfCardsBody('pinkCard1', 'pinkCard2', 'pinkCard3', key);
  verifyIfPlayerHaveSetOfCardsBody('lightBlueCard1', 'lightBlueCard2', 'lightBlueCard3', key);
  verifyIfPlayerHaveSetOfCardsBody('greenCard1', 'greenCard2', 'greenCard3', key);
}

let counterBrown1 = 0, counterBrown2 = 0, counterBlue1 = 0, counterBlue2 = 0,
  counterLightBlue1 = 0, counterLightBlue2 = 0, counterLightBlue3 = 0,
  counterPink1 = 0, counterPink2 = 0, counterPink3 = 0, counterOrange1 = 0, counterOrange2 = 0,
  counterOrange3 = 0, counterRed1 = 0, counterRed2 = 0, counterRed3 = 0, counterYellow1 = 0,
  counterYellow2 = 0, counterYellow3 = 0, counterGreen1 = 0, counterGreen2 = 0, counterGreen3 = 0;

let housesToggle = false;

document.querySelector('.player-properties .add-build').addEventListener('click', () => {
  document.querySelector('.player-properties .add-build img').classList.add('toggle-build-active');
  document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');

  housesToggle = false;
});

document.querySelector('.player-properties .remove-build').onclick = () => {
  document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
  document.querySelector('.player-properties .remove-build img').classList.add('toggle-build-active');

  deleteAddHousesIcon();
  housesToggle = true;
};

function verifyIfPlayerHaveSetOfCardsBody(name1, name2, name3) {
  if (name3 !== undefined) {
    if (playerTurn.cards.includes(name1) && playerTurn.cards.includes(name2) && playerTurn.cards.includes(name3)) {
      playerTurn.isHavingSetOfCards = true;

      document.querySelector('.player-properties .add-build').addEventListener('click', plus3Houses);

      function plus3Houses() {
        const card1 = cardsInfo[name1].el.querySelector('.card-color');
        const card2 = cardsInfo[name2].el.querySelector('.card-color');
        const card3 = cardsInfo[name3].el.querySelector('.card-color');
        const arrOfCardsColor = [card1, card2, card3];

        if (card1.classList.contains('row')) {
          card1.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }

        if (card1.classList.contains('column')) {
          card1.style.gridTemplateColumns = '1fr';
          card1.style.gridTemplateRows = 'repeat(5, 1fr)';
        }

        if (card2.classList.contains('row')) {
          card2.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }

        if (card2.classList.contains('column')) {
          card2.style.gridTemplateColumns = '1fr';
          card2.style.gridTemplateRows = 'repeat(5, 1fr)';
        }

        if (card3.classList.contains('row')) {
          card3.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }

        if (card3.classList.contains('column')) {
          card3.style.gridTemplateColumns = '1fr';
          card3.style.gridTemplateRows = 'repeat(5, 1fr)';
        }

        arrOfCardsColor.forEach((el, index) => {
          if (el.innerHTML === '') {
            for (let i = 0; i < 5; i++) {
              const image = document.createElement('img');
              image.src = '../images/builds/add-house-plus.webp';
              image.alt = 'icon';
              switch (index) {
                case 0: {
                  image.id = `${name1}`;
                  break;
                }
                case 1: {
                  image.id = `${name2}`;
                  break;
                }
                case 2: {
                  image.id = `${name3}`;
                  break;
                }
              }
              el.appendChild(image);
            }
          } else {

            for (let i = 0; i < 5; i++) {
              if (card1.children[i] !== undefined && card1.children[i].classList.contains('hotel')) {
                return;
              }

              if (card1.children[i] === undefined) {
                const image = document.createElement('img');
                image.src = '../images/builds/add-house-plus.webp';
                image.alt = 'icon';
                image.id = `${name1}`;
                card1.appendChild(image);
              }
            }

            for (let i = 0; i < 5; i++) {
              if (card2.children[i] !== undefined && card2.children[i].classList.contains('hotel')) {
                return;
              }

              if (card2.children[i] === undefined) {
                const image = document.createElement('img');
                image.src = '../images/builds/add-house-plus.webp';
                image.alt = 'icon';
                image.id = `${name2}`;
                card2.appendChild(image);
              }
            }

            for (let i = 0; i < 5; i++) {
              if (card3.children[i] !== undefined && card3.children[i].classList.contains('hotel')) {
                return;
              }
              if (card3.children[i] === undefined) {
                const image = document.createElement('img');
                image.src = '../images/builds/add-house-plus.webp';
                image.alt = 'icon';
                image.id = `${name3}`;
                card3.appendChild(image);
              }
            }

            el.querySelectorAll('img').forEach(img => {
              img.classList.add('enable');
            });
          }
        });

        function verifyCountersForHouses(counter1, counter2, counter3) {
          if (counter1 - counter2 >= -1 && counter1 - counter2 < 1 &&
            counter1 - counter3 >= -1 && counter1 - counter3 < 1) {
            return true;
          }
          return false;
        }

        document.querySelectorAll('.normal-card.set3 .card-color img').forEach(el => {
          el.onclick = (e) => {
            switch (e.target.id) {
              case 'lightBlueCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterLightBlue1 - counterLightBlue2 === 0 || counterLightBlue1 - counterLightBlue2 === 1) &&
                    (counterLightBlue1 - counterLightBlue3 === 0 || counterLightBlue1 - counterLightBlue3 === 1)) {
                    counterLightBlue1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['lightBlueCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterLightBlue1, counterLightBlue2, counterLightBlue3)) {
                  if (counterLightBlue1 >= 4) {
                    if(playerTurn.money - cardsInfo['lightBlueCard1'].houseCost >= 0){
                      getHotel(e.target, 'lightBlueCard1', counterLightBlue1);
                      playerTurn.money -= cardsInfo['lightBlueCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['lightBlueCard1'].houseCost} to buy one more houses.`);
                    }
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['lightBlueCard1'].houseCost >= 0){
                      if(cardsInfo['lightBlueCard1'].isMortgaged || cardsInfo['lightBlueCard2'].isMortgaged || cardsInfo['lightBlueCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterLightBlue1++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['lightBlueCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['lightBlueCard1'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }

              case 'lightBlueCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterLightBlue2 - counterLightBlue1 === 0 || counterLightBlue2 - counterLightBlue1 === 1) &&
                    (counterLightBlue2 - counterLightBlue3 === 0 || counterLightBlue2 - counterLightBlue3 === 1)) {
                    counterLightBlue2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['lightBlueCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterLightBlue2, counterLightBlue1, counterLightBlue3)) {
                  if (counterLightBlue2 >= 4) {
                    if(playerTurn.money - cardsInfo['lightBlueCard2'].houseCost >= 0){
                      getHotel(e.target, 'lightBlueCard2', counterLightBlue2);
                      playerTurn.money -= cardsInfo['lightBlueCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['lightBlueCard2'].houseCost} to buy one more houses.`);
                    }

                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['lightBlueCard2'].houseCost >= 0){
                      if(cardsInfo['lightBlueCard1'].isMortgaged || cardsInfo['lightBlueCard2'].isMortgaged || cardsInfo['lightBlueCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterLightBlue2++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['lightBlueCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['lightBlueCard2'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'lightBlueCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterLightBlue3 - counterLightBlue2 === 0 || counterLightBlue3 - counterLightBlue2 === 1) &&
                    (counterLightBlue3 - counterLightBlue1 === 0 || counterLightBlue3 - counterLightBlue1 === 1)) {
                    counterLightBlue3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['lightBlueCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterLightBlue3, counterLightBlue2, counterLightBlue1)) {
                  if (counterLightBlue3 >= 4) {
                    if(playerTurn.money - cardsInfo['lightBlueCard3'].houseCost >= 0){
                      getHotel(e.target, 'lightBlueCard3', counterLightBlue3);
                      playerTurn.money -= cardsInfo['lightBlueCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['lightBlueCard3'].houseCost} to buy one more houses.`);
                    }

                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['lightBlueCard3'].houseCost >= 0){
                      if(cardsInfo['lightBlueCard1'].isMortgaged || cardsInfo['lightBlueCard2'].isMortgaged || cardsInfo['lightBlueCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterLightBlue3++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['lightBlueCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['lightBlueCard3'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }

              case 'pinkCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterPink1 - counterPink2 === 0 || counterPink1 - counterPink2 === 1) &&
                    (counterPink1 - counterPink3 === 0 || counterPink1 - counterPink3 === 1)) {
                    counterPink1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['pinkCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterPink1, counterPink2, counterPink3)) {
                  if (counterPink1 >= 4) {
                    if(playerTurn.money - cardsInfo['pinkCard1'].houseCost >= 0){
                      getHotel(e.target, 'pinkCard1', counterPink1);
                      playerTurn.money -= cardsInfo['pinkCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['pinkCard1'].houseCost} to buy one more houses.`);
                    }
                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['pinkCard1'].houseCost >= 0){
                      if(cardsInfo['pinkCard1'].isMortgaged || cardsInfo['pinkCard2'].isMortgaged || cardsInfo['pinkCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterPink1++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['pinkCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['pinkCard1'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'pinkCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterPink2 - counterPink1 === 0 || counterPink2 - counterPink1 === 1) &&
                    (counterPink2 - counterPink3 === 0 || counterPink2 - counterPink3 === 1)) {
                    counterPink2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['pinkCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterPink2, counterPink1, counterPink3)) {
                  if (counterPink2 >= 4) {
                    if(playerTurn.money - cardsInfo['pinkCard2'].houseCost >= 0){
                      getHotel(e.target, 'pinkCard2', counterPink2);
                      playerTurn.money -= cardsInfo['pinkCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['pinkCard2'].houseCost} to buy one more houses.`);
                    }
                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['pinkCard2'].houseCost >= 0){
                      if(cardsInfo['pinkCard1'].isMortgaged || cardsInfo['pinkCard2'].isMortgaged || cardsInfo['pinkCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterPink2++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['pinkCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['pinkCard2'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'pinkCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterPink3 - counterPink2 === 0 || counterPink3 - counterPink2 === 1) &&
                    (counterPink3 - counterPink1 === 0 || counterPink3 - counterPink1 === 1)) {
                    counterPink3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['pinkCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterPink3, counterPink2, counterPink1)) {
                  if (counterPink3 >= 4) {
                    if(playerTurn.money - cardsInfo['pinkCard3'].houseCost >= 0){
                      getHotel(e.target, 'pinkCard3', counterPink3);
                      playerTurn.money -= cardsInfo['pinkCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['pinkCard3'].houseCost} to buy one more houses.`);
                    }
                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['pinkCard3'].houseCost >= 0){
                      if(cardsInfo['pinkCard1'].isMortgaged || cardsInfo['pinkCard2'].isMortgaged || cardsInfo['pinkCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterPink3++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['pinkCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['pinkCard3'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'orangeCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterOrange1 - counterOrange2 === 0 || counterOrange1 - counterOrange2 === 1) &&
                    (counterOrange1 - counterOrange3 === 0 || counterOrange1 - counterOrange3 === 1)) {
                    counterOrange1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['orangeCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterOrange1, counterOrange2, counterOrange3)) {
                  if (counterOrange1 >= 4) {
                    if(playerTurn.money - cardsInfo['orangeCard1'].houseCost >= 0){
                      getHotel(e.target, 'orangeCard1', counterOrange1);
                      playerTurn.money -= cardsInfo['orangeCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['orangeCard1'].houseCost} to buy one more houses.`);
                    }
                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['orangeCard1'].houseCost >= 0){
                      if(cardsInfo['orangeCard1'].isMortgaged || cardsInfo['orangeCard2'].isMortgaged || cardsInfo['orangeCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterOrange1++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['orangeCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['orangeCard1'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'orangeCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterOrange2 - counterOrange1 === 0 || counterOrange2 - counterOrange1 === 1) &&
                    (counterOrange2 - counterOrange3 === 0 || counterOrange2 - counterOrange3 === 1)) {
                    counterOrange2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['orangeCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterOrange2, counterOrange1, counterOrange3)) {
                  if (counterOrange2 >= 4) {
                    if(playerTurn.money - cardsInfo['orangeCard2'].houseCost >= 0){
                      getHotel(e.target, 'orangeCard2', counterOrange2);
                      playerTurn.money -= cardsInfo['orangeCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['orangeCard2'].houseCost} to buy one more houses.`);
                    }
                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['orangeCard2'].houseCost >= 0){
                      if(cardsInfo['orangeCard1'].isMortgaged || cardsInfo['orangeCard2'].isMortgaged || cardsInfo['orangeCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterOrange2++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['orangeCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['orangeCard2'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'orangeCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterOrange3 - counterOrange2 === 0 || counterOrange3 - counterOrange2 === 1) &&
                    (counterOrange3 - counterOrange1 === 0 || counterOrange3 - counterOrange1 === 1)) {
                    counterOrange3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['orangeCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterOrange3, counterOrange2, counterOrange1)) {
                  if (counterOrange3 >= 4) {
                    if(playerTurn.money - cardsInfo['orangeCard3'].houseCost >= 0){
                      getHotel(e.target, 'orangeCard3', counterOrange3);
                      playerTurn.money -= cardsInfo['orangeCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['orangeCard3'].houseCost} to buy one more houses.`);
                    }
                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['orangeCard3'].houseCost >= 0){
                      if(cardsInfo['orangeCard1'].isMortgaged || cardsInfo['orangeCard2'].isMortgaged || cardsInfo['orangeCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterOrange3++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['orangeCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['orangeCard3'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'redCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterRed1 - counterRed2 === 0 || counterRed1 - counterRed2 === 1) &&
                    (counterRed1 - counterRed3 === 0 || counterRed1 - counterRed3 === 1)) {
                    counterRed1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['redCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterRed1, counterRed2, counterRed3)) {
                  if (counterRed1 >= 4) {
                    if(playerTurn.money - cardsInfo['redCard1'].houseCost >= 0){
                      getHotel(e.target, 'redCard1', counterRed1);
                      playerTurn.money -= cardsInfo['redCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['redCard1'].houseCost} to buy one more houses.`);
                    }
                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['redCard1'].houseCost >= 0){
                      if(cardsInfo['redCard1'].isMortgaged || cardsInfo['redCard2'].isMortgaged || cardsInfo['redCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterRed1++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['redCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['redCard1'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'redCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterRed2 - counterRed1 === 0 || counterRed2 - counterRed1 === 1) &&
                    (counterRed2 - counterRed3 === 0 || counterRed2 - counterRed3 === 1)) {
                    counterRed2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['redCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterRed2, counterRed1, counterRed3)) {
                  if (counterRed2 >= 4) {
                    if(playerTurn.money - cardsInfo['redCard2'].houseCost >= 0){
                      getHotel(e.target, 'redCard2', counterRed2);
                      playerTurn.money -= cardsInfo['redCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['redCard2'].houseCost} to buy one more houses.`);
                    }
                   
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['redCard2'].houseCost >= 0){
                      if(cardsInfo['redCard1'].isMortgaged || cardsInfo['redCard2'].isMortgaged || cardsInfo['redCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterRed2++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['redCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['redCard2'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'redCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterRed3 - counterRed2 === 0 || counterRed3 - counterRed2 === 1) &&
                    (counterRed3 - counterRed1 === 0 || counterRed3 - counterRed1 === 1)) {
                    counterRed3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['redCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterRed3, counterRed2, counterRed1)) {
                  if (counterRed3 >= 4) {
                    if(playerTurn.money - cardsInfo['redCard3'].houseCost >= 0){
                      getHotel(e.target, 'redCard3', counterRed3);
                      playerTurn.money -= cardsInfo['redCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['redCard3'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['redCard3'].houseCost >= 0){
                      if(cardsInfo['redCard1'].isMortgaged || cardsInfo['redCard2'].isMortgaged || cardsInfo['redCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterRed3++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['redCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['redCard3'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }

              case 'yellowCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterYellow1 - counterYellow2 === 0 || counterYellow1 - counterYellow2 === 1) &&
                    (counterYellow1 - counterYellow3 === 0 || counterYellow1 - counterYellow3 === 1)) {
                    counterYellow1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['yellowCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterYellow1, counterYellow2, counterYellow3)) {
                  if (counterYellow1 >= 4) {
                    if(playerTurn.money - cardsInfo['yellowCard1'].houseCost >= 0){
                      getHotel(e.target, 'yellowCard1', counterYellow1);
                      playerTurn.money -= cardsInfo['yellowCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['yellowCard1'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['yellowCard1'].houseCost >= 0){
                      if(cardsInfo['yellowCard1'].isMortgaged || cardsInfo['yellowCard1'].isMortgaged || cardsInfo['yellowCard1'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterYellow1++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['yellowCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['yellowCard1'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }

              case 'yellowCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterYellow2 - counterYellow1 === 0 || counterYellow2 - counterYellow1 === 1) &&
                    (counterYellow2 - counterYellow3 === 0 || counterYellow2 - counterYellow3 === 1)) {
                    counterYellow2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['yellowCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterYellow2, counterYellow1, counterYellow3)) {
                  if (counterYellow2 >= 4) {
                    if(playerTurn.money - cardsInfo['yellowCard2'].houseCost >= 0){
                      getHotel(e.target, 'yellowCard2', counterYellow2);
                      playerTurn.money -= cardsInfo['yellowCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['yellowCard2'].houseCost} to buy one more houses.`);
                    }
                    
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['yellowCard2'].houseCost >= 0){
                      if(cardsInfo['yellowCard1'].isMortgaged || cardsInfo['yellowCard1'].isMortgaged || cardsInfo['yellowCard1'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterYellow2++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['yellowCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['yellowCard2'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }

              case 'yellowCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterYellow3 - counterYellow2 === 0 || counterYellow3 - counterYellow2 === 1) &&
                    (counterYellow3 - counterYellow1 === 0 || counterYellow3 - counterYellow1 === 1)) {
                    counterYellow3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['yellowCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterYellow3, counterYellow2, counterYellow1)) {
                  if (counterYellow3 >= 4) {
                    if(playerTurn.money - cardsInfo['yellowCard3'].houseCost >= 0){
                      getHotel(e.target, 'yellowCard3', counterYellow3);
                      playerTurn.money -= cardsInfo['yellowCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['yellowCard3'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['yellowCard3'].houseCost >= 0){
                      if(cardsInfo['yellowCard1'].isMortgaged || cardsInfo['yellowCard1'].isMortgaged || cardsInfo['yellowCard1'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterYellow3++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['yellowCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['yellowCard3'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'greenCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterGreen1 - counterGreen2 === 0 || counterGreen1 - counterGreen2 === 1) &&
                    (counterGreen1 - counterGreen3 === 0 || counterGreen1 - counterGreen3 === 1)) {
                    counterGreen1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['greenCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterGreen1, counterGreen2, counterGreen3)) {
                  if (counterGreen1 >= 4) {
                    if(playerTurn.money - cardsInfo['greenCard1'].houseCost >= 0){
                      getHotel(e.target, 'greenCard1', counterGreen1);
                      playerTurn.money -= cardsInfo['greenCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['greenCard1'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['greenCard1'].houseCost >= 0){
                      if(cardsInfo['greenCard1'].isMortgaged || cardsInfo['greenCard2'].isMortgaged || cardsInfo['greenCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterGreen1++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['greenCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['greenCard1'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'greenCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterGreen2 - counterGreen1 === 0 || counterGreen2 - counterGreen1 === 1) &&
                    (counterGreen2 - counterGreen3 === 0 || counterGreen2 - counterGreen3 === 1)) {
                    counterGreen2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['greenCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterGreen2, counterGreen1, counterGreen3)) {
                  if (counterGreen2 >= 4) {
                    if(playerTurn.money - cardsInfo['greenCard2'].houseCost >= 0){
                      getHotel(e.target, 'greenCard2', counterGreen2);
                      playerTurn.money -= cardsInfo['greenCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['greenCard2'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['greenCard2'].houseCost >= 0){
                      if(cardsInfo['greenCard1'].isMortgaged || cardsInfo['greenCard2'].isMortgaged || cardsInfo['greenCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterGreen2++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['greenCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['greenCard2'].houseCost} to buy one more houses.`);
                    }
                    
                  }
                }
                break;
              }

              case 'greenCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if ((counterGreen3 - counterGreen2 === 0 || counterGreen3 - counterGreen1 === 1) &&
                    (counterGreen3 - counterGreen1 === 0 || counterGreen3 - counterGreen1 === 1)) {
                    counterGreen3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['greenCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterGreen3, counterGreen2, counterGreen1)) {
                  if (counterGreen3 >= 4) {
                    if(playerTurn.money - cardsInfo['greenCard3'].houseCost >= 0){
                      getHotel(e.target, 'greenCard3', counterGreen3);
                      playerTurn.money -= cardsInfo['greenCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['greenCard3'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['greenCard3'].houseCost >= 0){
                      if(cardsInfo['greenCard1'].isMortgaged || cardsInfo['greenCard2'].isMortgaged || cardsInfo['greenCard3'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterGreen3++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['greenCard3'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['greenCard3'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }
            }
          };
        });
      }
    }

  } else {
    if (playerTurn.cards.includes(name1) && playerTurn.cards.includes(name2)) {
      playerTurn.isHavingSetOfCards = true;

      document.querySelector('.player-properties .add-build').addEventListener('click', plus2Houses);

      function plus2Houses() {
        const card1 = cardsInfo[name1].el.querySelector('.card-color');
        const card2 = cardsInfo[name2].el.querySelector('.card-color');
        const arrOfCardsColor = [card1, card2];

        if (card1.classList.contains('row')) {
          card1.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }

        if (card1.classList.contains('column')) {
          card1.style.gridTemplateColumns = '1fr';
          card1.style.gridTemplateRows = 'repeat(5, 1fr)';
        }

        if (card2.classList.contains('row')) {
          card2.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }

        if (card2.classList.contains('column')) {
          card2.style.gridTemplateColumns = '1fr';
          card2.style.gridTemplateRows = 'repeat(5, 1fr)';
        }

        arrOfCardsColor.forEach((el, index) => {
          if (el.innerHTML === '') {
            for (let i = 0; i < 5; i++) {
              const image = document.createElement('img');
              image.src = '../images/builds/add-house-plus.webp';
              image.alt = 'icon';
              switch (index) {
                case 0: {
                  image.id = `${name1}`;
                  break;
                }
                case 1: {
                  image.id = `${name2}`;
                  break;
                }
              }
              el.appendChild(image);
            }
          } else {
            for (let i = 0; i < 5; i++) {
              if (card1.children[i] !== undefined && card1.children[i].classList.contains('hotel')) {
                return;
              }

              if (card1.children[i] === undefined) {
                const image = document.createElement('img');
                image.src = '../images/builds/add-house-plus.webp';
                image.alt = 'icon';
                image.id = `${name1}`;
                card1.appendChild(image);
              }
            }

            for (let i = 0; i < 5; i++) {
              if (card2.children[i] !== undefined && card2.children[i].classList.contains('hotel')) {
                return;
              }

              if (card2.children[i] === undefined) {
                const image = document.createElement('img');
                image.src = '../images/builds/add-house-plus.webp';
                image.alt = 'icon';
                image.id = `${name2}`;
                card2.appendChild(image);
              }
            }

            el.querySelectorAll('img').forEach(img => {
              img.classList.add('enable');
            });
          }
        });

        document.querySelectorAll('.normal-card.set2 .card-color img').forEach(el => {
          el.onclick = (e) => {
            switch (e.target.id) {
              case 'brownCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if (counterBrown1 - counterBrown2 === 0 || counterBrown1 - counterBrown2 === 1) {
                    counterBrown1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['brownCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (counterBrown1 - counterBrown2 < 1 || counterBrown1 - counterBrown2 > 1) {
                  if (counterBrown1 >= 4) {
                    if(playerTurn.money - cardsInfo['brownCard1'].houseCost >= 0){
                      getHotel(e.target, 'brownCard1', counterBrown1);
                      playerTurn.money -= cardsInfo['brownCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['brownCard1'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['brownCard1'].houseCost >= 0){
                      if(cardsInfo['brownCard1'].isMortgaged || cardsInfo['brownCard2'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterBrown1++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['brownCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['brownCard1'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }
              case 'brownCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if (counterBrown2 - counterBrown1 === 0 || counterBrown2 - counterBrown1 === 1) {
                    counterBrown2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['brownCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (counterBrown2 - counterBrown1 < 1 || counterBrown2 - counterBrown1 > 1) {
                  if (counterBrown2 >= 4) {
                    if(playerTurn.money - cardsInfo['brownCard2'].houseCost >= 0){
                      getHotel(e.target, 'brownCard2', counterBrown2);
                      playerTurn.money -= cardsInfo['brownCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['brownCard2'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['brownCard2'].houseCost >= 0){
                      if(cardsInfo['brownCard1'].isMortgaged || cardsInfo['brownCard2'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterBrown2++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['brownCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['brownCard2'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }

              case 'blueCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if (counterBlue1 - counterBlue2 === 0 || counterBlue1 - counterBlue2 === 1) {
                    counterBlue1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['blueCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (counterBlue1 - counterBlue2 < 1 || counterBlue1 - counterBlue2 > 1) {
                  if (counterBlue1 >= 4) {
                    if(playerTurn.money - cardsInfo['blueCard1'].houseCost >= 0){
                      getHotel(e.target, 'blueCard1', counterBlue1);
                      playerTurn.money -= cardsInfo['blueCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['blueCard1'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['blueCard1'].houseCost >= 0){
                      if(cardsInfo['blueCard1'].isMortgaged || cardsInfo['blueCard2'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterBlue1++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['blueCard1'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['blueCard1'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }

              case 'blueCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if (counterBlue2 - counterBlue1 === 0 || counterBlue2 - counterBlue1 === 1) {
                    counterBlue2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['blueCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (counterBlue2 - counterBlue1 < 1 || counterBlue2 - counterBlue1 > 1) {
                  if (counterBlue2 >= 4) {
                    if(playerTurn.money - cardsInfo['blueCard2'].houseCost >= 0){
                      getHotel(e.target, 'blueCard2', counterBlue2);
                      playerTurn.money -= cardsInfo['blueCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['blueCard2'].houseCost} to buy one more houses.`);
                    }
                  
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    if(playerTurn.money - cardsInfo['blueCard2'].houseCost >= 0){
                      if(cardsInfo['blueCard1'].isMortgaged || cardsInfo['blueCard2'].isMortgaged){
                        alert('Sorry but one of the cards from that set is MORTGAGED.');
                        return;
                      }
                      counterBlue2++;
                      e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                      playerTurn.money -= cardsInfo['blueCard2'].houseCost;
                      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    } else {
                      alert(`You dont have $${cardsInfo['blueCard2'].houseCost} to buy one more houses.`);
                    }
                  }
                }
                break;
              }
            }
          };
        });
      }
    }
  }

  if (playerTurn.isHavingSetOfCards) {
    document.querySelector('.player-properties .add-build').classList.add('active-btns-build');
    document.querySelector('.player-properties .remove-build').classList.add('active-btns-build');
  } else {
    document.querySelector('.player-properties .add-build').classList.remove('active-btns-build');
    document.querySelector('.player-properties .remove-build').classList.remove('active-btns-build');
  }
}

function getHotel(el, id, counter) {
  if (el.parentNode.classList.contains('row')) {
    el.parentNode.style.gridTemplateColumns = '1fr';
  }

  if (el.parentNode.classList.contains('column')) {
    el.parentNode.style.gridTemplateColumns = '1fr';
    el.parentNode.style.gridTemplateRows = '1fr';
  }

  const parentNode = el.parentNode;
  el.parentNode.innerHTML = '';

  const image = document.createElement('img');
  image.src = '../images/builds/hotel.webp';
  image.alt = 'icon';
  image.setAttribute('class', 'hotel');

  parentNode.appendChild(image);

  image.onclick = () => {
    if (housesToggle) {
      parentNode.innerHTML = '';

      if (parentNode.classList.contains('row')) {
        parentNode.style.gridTemplateColumns = 'repeat(5, 1fr)';
      }

      if (parentNode.classList.contains('column')) {
        parentNode.style.gridTemplateColumns = '1fr';
        parentNode.style.gridTemplateRows = 'repeat(5, 1fr)';
      }


      for (let i = 0; i < 4; i++) {
        const img = document.createElement('img');
        img.src = '../images/builds/house.webp';
        img.alt = 'icon';
        img.id = `${id}`;
        img.setAttribute('class', 'house');
        parentNode.appendChild(img);
      }

      counter--;
      playerTurn.money += cardsInfo[id].removeHouse;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    }
  }
}

const stationCardPopup = document.querySelector('.stations-popup');

function deleteAddHousesIcon() {
  const addHousesIcons = document.querySelectorAll('.normal-card .card-color img');

  addHousesIcons.forEach(img => {
    if (img.src === 'http://127.0.0.1:5500/images/builds/add-house-plus.webp') {
      img.classList.add('disable');
      img.classList.remove('enable');
    }
  });
}

function getOnCard() {
  setTimeout(() => {
    for (const key in cardsInfo) {
      if (playerTurn.top >= cardsInfo[key].top && playerTurn.top <= cardsInfo[key].bottom &&
        playerTurn.left >= cardsInfo[key].left && playerTurn.left <= cardsInfo[key].right) {

        if (key !== 'go' && key !== 'bottomIron' && key !== 'pay200' &&
          key !== 'lannister' && key !== 'bottomValar' && key !== 'justVisiting' &&
          key !== 'pay100' && key !== 'rightValar' && key !== 'baratheon' &&
          key !== 'rightIron' && key !== 'card150Top' && key !== 'card150Left' && key !== 'stark' &&
          key !== 'leftIron' && key !== 'goJail' && key !== 'pay200' &&
          key !== 'targaryen' && key !== 'topValar' &&
          key !== 'freeParking') {

          if (!cardsInfo[key].isBought) {
            console.log(playerTurn.name + ' left ' + playerTurn.left);
            console.log(playerTurn.name + ' top ' + playerTurn.top);
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              rollDiesBtn.addEventListener("click", rollDiceEvent);
              rollPopupToggle();
              playersTurn();
              if(playerTurn.isInJail){
                jail();
                return;
              }
              rollDiesBtn.innerHTML = "Roll";
              dice1.innerHTML = '';
              dice2.innerHTML = '';
              rollDiesBtn.addEventListener('click', () => {
                popupRoll.classList.add('active');
              });

              verifyIfPlayerHaveSetOfCards(key);
            }
            showInfoPopupCard(cardsInfo[key].color, cardsInfo[key].name, cardsInfo[key].price,
              cardsInfo[key].mortgage, cardsInfo[key].rent, cardsInfo[key].rentColorSet, cardsInfo[key].home1,
              cardsInfo[key].home2, cardsInfo[key].home3, cardsInfo[key].home4, cardsInfo[key].hotel, cardsInfo[key].houseCost);

            cardPopup.querySelector('.buy-card-popup .buy button').onclick = () => {
              if(playerTurn.money - cardsInfo[key].price > 0){
                buyCard(playerTurn, key, playerMoneyTurn, cardsInfo);
                cardPopup.classList.remove('active-card');
                document.querySelector('.player-properties .end-turn').classList.add('active-btn');
                verifyIfPlayerHaveSetOfCards(key);
              } else {
                alert(`U dont have $${cardsInfo[key].price} to buy "${cardsInfo[key].name}" card.`)
              }
            };

            cardPopup.querySelector('.buy-card-popup .auction button').onclick = () => {
              document.querySelector('.auction-popup').classList.add('active-auction');
              auctionCardsArr.forEach(el => {
                el.classList.remove('active-card-auction');
              });

              document.querySelector('.normal-card-stations').classList.add('active-card-auction');
              setInfoNormalCard();
              cardPopup.classList.remove('active-card');
              offerMoreMoneyAuction();
            }

            function setInfoNormalCard() {
              document.querySelector('.normal-card-stations .card-title').innerHTML = `${cardsInfo[key].name}`;
              document.querySelector('.normal-card-stations .purchase-price .price').innerHTML = `$${cardsInfo[key].price}`;
              document.querySelector('.normal-card-stations .mortgage-value .price').innerHTML = `$${cardsInfo[key].mortgage}`;
              document.querySelector('.normal-card-stations .rent-price .price').innerHTML = `$${cardsInfo[key].rent}`;
              document.querySelector('.normal-card-stations .rent-price-full-color .price').innerHTML = `$${cardsInfo[key].rentColorSet}`;
              document.querySelector('.normal-card-stations .rent-with-1-house .price').innerHTML = `$${cardsInfo[key].home1}`;
              document.querySelector('.normal-card-stations .rent-with-2-house .price').innerHTML = `$${cardsInfo[key].home2}`;
              document.querySelector('.normal-card-stations .rent-with-3-house .price').innerHTML = `$${cardsInfo[key].home3}`;
              document.querySelector('.normal-card-stations .rent-with-4-house .price').innerHTML = `$${cardsInfo[key].home4}`;
              document.querySelector('.normal-card-stations .rent-with-1-hotel .price').innerHTML = `$${cardsInfo[key].hotel}`;
              document.querySelector('.normal-card-stations .house-price').innerHTML = `$${cardsInfo[key].houseCost}`;
              document.querySelector('.normal-card-stations .hotel-price').innerHTML = `$${cardsInfo[key].houseCost}`;
            }

            document.querySelector('.buy-card-popup .buy-or-auction').style.display = 'flex';
          }

          if (cardsInfo[key].isBought) {
            console.log(playerTurn.name + ' left ' + playerTurn.left);
            console.log(playerTurn.name + ' top ' + playerTurn.top);
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.buy-card-popup').classList.remove('active-card');
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();

              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
              if(playerTurn.isInJail){
                jail();
                return;
              }
              rollDiesBtn.addEventListener("click", rollDiceEvent);
              rollPopupToggle();
              rollDiesBtn.innerHTML = "Roll";
              dice1.innerHTML = '';
              dice2.innerHTML = '';
              rollDiesBtn.addEventListener('click', () => {
                popupRoll.classList.add('active');
              });
            };

            document.querySelector('.buy-card-popup .buy-or-auction').style.display = 'none';
            
            document.querySelector('.player-properties .pay-btn').onclick = () => {
              verifyIfPlayerHaveSetOfCards(key);
              cardPopup.classList.remove('active-card');
              payRent(key);
              if(isHavingEnoughMoney){
                document.querySelector('.player-properties .pay-btn').classList.remove('active-btn');
                document.querySelector('.player-properties .end-turn').classList.add('active-btn');
              }
            }

            if(cardsInfo[key].isMortgaged){
              document.querySelector('.player-properties .end-turn').classList.add('active-btn');
              document.querySelector('.player-properties .pay-btn').classList.remove('active-btn');
            } else {
              document.querySelector('.player-properties .pay-btn').classList.add('active-btn');
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            }
            showInfoPopupCard(cardsInfo[key].color, cardsInfo[key].name, cardsInfo[key].price,
              cardsInfo[key].mortgage, cardsInfo[key].rent, cardsInfo[key].rentColorSet, cardsInfo[key].home1,
              cardsInfo[key].home2, cardsInfo[key].home3, cardsInfo[key].home4, cardsInfo[key].hotel, cardsInfo[key].houseCost);
          }

          popupRoll.classList.remove('active');
          cardPopup.classList.add('active-card');
          rollBtnOpen.removeEventListener("click", rollPopupToggle);
        }

        function verifyIfGetBankrupt(){
          let sumMoney = 0;

          playerTurn.cards.forEach(card => {
            if(!cardsInfo[card].isMortgaged){
              sumMoney += cardsInfo[card].mortgage;
            }
          });

          sumMoney += playerTurn.money;

          if(payMoney > sumMoney){
            playerTurn.isBankrupt = true;
            alert(`Player ${playerTurn.name} doesnt have enough money to pay. He is declared BANKRUPT.`);
          }
        }

        if (key === 'pay200') {
          document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
          document.querySelector('.player-properties .pay-btn').classList.add('active-btn');

          document.querySelector('.player-properties .pay-btn').onclick = () => {
            if(!(playerTurn.money - 200 >= 0)){
              alert(`You dont have $200 money to pay.`);
              return;
            }

            document.querySelector('.player-properties .pay-btn').classList.remove('active-btn');
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');

            playerTurn.money -= 200;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
          }

          document.querySelector('.player-properties .end-turn').onclick = () => {
            document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            playersTurn();
            if(playerTurn.isInJail){
              jail();
              return;
            }
            rollDiesBtn.addEventListener("click", rollDiceEvent);
            rollPopupToggle();
            rollDiesBtn.innerHTML = "Roll";
            dice1.innerHTML = '';
            dice2.innerHTML = '';
            rollDiesBtn.addEventListener('click', () => {
              popupRoll.classList.add('active');
            });
          }

          return;
        }

        if (key === 'pay100') {
          document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
          document.querySelector('.player-properties .pay-btn').classList.add('active-btn');

          document.querySelector('.player-properties .pay-btn').onclick = () => {
            if(!(playerTurn.money - 100 >= 0)){
              alert(`You dont have $100 money to pay.`);
              return;
            }

            document.querySelector('.player-properties .pay-btn').classList.remove('active-btn');
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');

            playerTurn.money -= 100;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
          }

          document.querySelector('.player-properties .end-turn').onclick = () => {
            document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            playersTurn();
            if(playerTurn.isInJail){
              jail();
              return;
            }
            rollDiesBtn.addEventListener("click", rollDiceEvent);
            rollPopupToggle();
            rollDiesBtn.innerHTML = "Roll";
            dice1.innerHTML = '';
            dice2.innerHTML = '';
            rollDiesBtn.addEventListener('click', () => {
              popupRoll.classList.add('active');
            });
          }

          return;
        }

        if(key === 'goJail'){
          alert(`Ups. Player ${playerTurn.name} is going in the jail.`);

          document.querySelector('.player-properties .end-turn').classList.add('active-btn');
          playerTurn.isInJail = true;
          playerTurn.counterJail = 3;

          switch (playerTurn.name) {
            case yoneInfo.name: {
              yoneInfo.left = 17;
              yoneInfo.top = 710;
              document.querySelector('.players-icons-for-play .player-yone').style.left = `17px`;
              document.querySelector('.players-icons-for-play .player-yone').style.top = `710px`;
              break;
            }
            case player1Info.name: {
              player1Info.left = 44;
              player1Info.top = 710;
              document.querySelector('.players-icons-for-play .player-1').style.left = `44px`;
              document.querySelector('.players-icons-for-play .player-1').style.top = `710px`;
              break;
            }
            case player2Info.name: {
              player2Info.left = 44;
              player2Info.top = 750;
              document.querySelector('.players-icons-for-play .player-2').style.left = `44px`;
              document.querySelector('.players-icons-for-play .player-2').style.top = `750px`;
              break;
            }
            case player3Info.name: {
              player3Info.left = 17;
              player3Info.top = 750;
              document.querySelector('.players-icons-for-play .player-3').style.left = `17px`;
              document.querySelector('.players-icons-for-play .player-3').style.top = `750px`;
              break;
            }
          }
        }


        if(key === 'justVisiting'){
          jail();
        }

        function jail() {
          defaultJailValues();
          if (playerTurn.isInJail) {
            if (playerTurn.counterJail === 3) {
              playerTurn.counterJail--;
              addEndTurn();
            } else {
              document.querySelector('.jail-popup').classList.add('active-jail-menu');
              document.querySelector('.jail-popup .jail-info span').innerHTML = `${playerTurn.counterJail}`;
              document.querySelector('.jail-popup .roll').classList.add('active-btn-roll');
              document.querySelector('.jail-popup .move').classList.add('hidden');
              document.querySelector('.jail-popup .end-turn-jail').classList.add('end-turn-active');
              document.querySelector('.jail-popup .pay').classList.add('active-btn-pay');

              let isPay = false;
              let isRoll = true;

              if(playerTurn.counterJail === 0){
                document.querySelector('.jail-popup .end-turn-jail').classList.remove('end-turn-active');
                document.querySelector('.jail-popup .pay').classList.remove('active-btn-pay');
              }

              document.querySelector('.jail-popup .pay').onclick = () => {
                if(playerTurn.money - 50 >= 0){
                  isPay = true;
                  playerTurn.isInJail = false;
                  playerTurn.counterJail = 0;
                  document.querySelector('.jail-popup .roll').innerHTML = 'Roll';
                  playerTurn.money -= 50;
                  playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  document.querySelector('.jail-popup .end-turn-jail').classList.remove('end-turn-active');
                  document.querySelector('.jail-popup .pay').classList.remove('active-btn-pay');
                } else {
                  alert('You dont have $50 to pay.');
                }
              }

              document.querySelector('.jail-popup .end-turn-jail').onclick = () => {
                defaultJailValues();
                playerTurn.counterJail--;
                document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
                playersTurn();
                if(playerTurn.isInJail){
                  jail();
                  return;
                }
                document.querySelector('.jail-popup').classList.remove('active-jail-menu');
                rollDiesBtn.addEventListener("click", rollDiceEvent);
                rollPopupToggle();
                rollDiesBtn.innerHTML = "Roll";
                dice1.innerHTML = '';
                dice2.innerHTML = '';
                rollDiesBtn.addEventListener('click', () => {
                  popupRoll.classList.add('active');
                });
    
                verifyIfPlayerHaveSetOfCards(key);
              }

              document.querySelector('.jail-popup .options .roll').onclick = () => {
                console.log(isRoll);
                if(isRoll){
                  isRoll = false;
                  document.querySelector('.jail-popup .dice1').classList.add("active-dice");
                  document.querySelector('.jail-popup .dice2').classList.add("active-dice");
                  document.querySelector('.jail-popup .dice1').innerHTML = "";
                  document.querySelector('.jail-popup .dice2').innerHTML = "";
  
                  setTimeout(() => {
                    document.querySelector('.jail-popup .dice1').classList.remove("active-dice");
                    document.querySelector('.jail-popup .dice2').classList.remove("active-dice");
  
                    firstRandomNr = getRandomNumber(1, 6);
                    changeDiceImage(document.querySelector('.jail-popup .dice1'));
                    secondRandomNr = getRandomNumber(1, 6);
                    changeDiceImage(document.querySelector('.jail-popup .dice2'));
  
                    if (isPay) {
                      document.querySelector('.jail-popup .move').classList.remove('hidden');
                      document.querySelector('.jail-popup .options .move').onclick = () => {
                        moveDice();
                        playerTurn.isInJail = false;
                        playerTurn.counterJail = 0;
                        document.querySelector('.jail-popup').classList.remove('active-jail-menu');
                      };
                    }
  
                    if (firstRandomNr === secondRandomNr) {
                      playerTurn.counterJail = 0;
                      playerTurn.isInJail = false;
                      document.querySelector('.jail-popup .options .roll').classList.remove('active-btn-roll');
                      document.querySelector('.jail-popup .options .move').classList.remove('hidden');
                      document.querySelector('.jail-popup .options .end-turn-jail').classList.remove('end-turn-active');
                      document.querySelector('.jail-popup .pay').classList.remove('active-btn-pay');
                      document.querySelector('.jail-popup .options .move').onclick = () => {
                        moveDice();
                        document.querySelector('.jail-popup').classList.remove('active-jail-menu');
                      };
                      return;
                    } else {
                      document.querySelector('.jail-popup .pay').classList.remove('active-btn-pay');
                      document.querySelector('.jail-popup .options .roll').classList.remove('active-btn-roll');
                    }
  
                    if (playerTurn.counterJail === 0) {
                      document.querySelector('.jail-popup .options .roll').classList.remove('active-btn-roll');
                      document.querySelector('.jail-popup .options .move').classList.remove('hidden');
                      document.querySelector('.jail-popup .options .move').onclick = () => {
                        if (!(playerTurn.money - 50 >= 0)) {
                          return;
                        }
                        playerTurn.isInJail = false;
                        playerTurn.counterJail = 0;
                        playerTurn.money -= 50;
                        playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                        moveDice();
                        document.querySelector('.jail-popup').classList.remove('active-jail-menu');
                      };
                    }
                  }, 700);
                }
              };
            }
          }

          if (!playerTurn.isInJail) {
            addEndTurn();
          }
          console.log(playerTurn.name + ' ' + playerTurn.counterJail);
        }

        function defaultJailValues(){
          document.querySelector('.jail-popup .dice1').innerHTML = '';
          document.querySelector('.jail-popup .dice2').innerHTML = '';
          document.querySelector('.jail-popup .player-name').innerHTML = playerTurn.name;
          document.querySelector('.jail-popup .player-name').style.color = playerTurn.color;
          document.querySelector('.jail-popup .options .roll').classList.add('active-btn-roll');
          document.querySelector('.jail-popup .options .end-turn-jail').classList.add('end-turn-active');
          document.querySelector('.jail-popup .pay').classList.add('active-btn-pay');
          document.querySelector('.jail-popup .options .move').classList.add('hidden');
          document.querySelector('.jail-popup .options .roll').innerHTML = `Roll a double`;
        }

        function addEndTurn() {
          document.querySelector('.jail-popup').classList.remove('active-jail-menu');
          document.querySelector('.player-properties .end-turn').classList.add('active-btn');
          document.querySelector('.player-properties .end-turn').onclick = () => {
            document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
            deleteAddHousesIcon();
            document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            playersTurn();
            if(playerTurn.isInJail){
              jail();
              return;
            }
            document.querySelector('.jail-popup').classList.remove('active-jail-menu');
            rollDiesBtn.addEventListener("click", rollDiceEvent);
            rollPopupToggle();
            rollDiesBtn.innerHTML = "Roll";
            dice1.innerHTML = '';
            dice2.innerHTML = '';
            rollDiesBtn.addEventListener('click', () => {
              popupRoll.classList.add('active');
            });

            verifyIfPlayerHaveSetOfCards(key);
          }
        }

        if (key === 'go' || key === 'pay100' ||
          key === 'pay200' || key === 'freeParking') {
          document.querySelector('.player-properties .end-turn').onclick = () => {
            document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
            document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
            deleteAddHousesIcon();
            document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            playersTurn();
            if(playerTurn.isInJail){
              jail();
              return;
            }
            rollDiesBtn.addEventListener("click", rollDiceEvent);
            rollPopupToggle();
            rollDiesBtn.innerHTML = "Roll";
            document.querySelector('.dice1').innerHTML = '';
            document.querySelector('.dice2').innerHTML = '';
            rollDiesBtn.addEventListener('click', () => {
              popupRoll.classList.add('active');
            });
            
            verifyIfPlayerHaveSetOfCards(key);
          }

          rollBtnOpen.removeEventListener("click", rollPopupToggle);
          document.querySelector('.player-properties .end-turn').classList.add('active-btn');
        }

        if (key === 'lannister' || key === 'baratheon' || key === 'stark' || key === 'targaryen') {
          stationCardPopup.classList.add('active');
          stationCardPopup.querySelector('.name').innerHTML = cardsInfo[key].name;
          stationCardPopup.querySelector('.price span:last-of-type').innerHTML = `$${cardsInfo[key].price}`;
          stationCardPopup.querySelector('.mortgage-value span:last-of-type').innerHTML = `$${cardsInfo[key].mortgage}`;
          popupRoll.classList.remove('active');
          rollBtnOpen.removeEventListener("click", rollPopupToggle);

          if (!cardsInfo[key].isBought) {
            document.querySelector('.stations-popup .buy-or-auction').style.display = 'flex';
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
              if(playerTurn.isInJail){
                jail();
                return;
              }
              rollDiesBtn.addEventListener("click", rollDiceEvent);
              rollPopupToggle();
              rollDiesBtn.innerHTML = "Roll";
              dice1.innerHTML = '';
              dice2.innerHTML = '';
              rollDiesBtn.addEventListener('click', () => {
                popupRoll.classList.add('active');
              });

              verifyIfPlayerHaveSetOfCards(key);
            }
            document.querySelector('.stations-popup .buy button').onclick = () => {
              if(playerTurn.money - cardsInfo[key].price > 0){
                buyCard(playerTurn, key, playerMoneyTurn, cardsInfo);
                stationCardPopup.classList.remove('active');
                document.querySelector('.player-properties .end-turn').classList.add('active-btn');
              } else {
                alert(`U dont have $${cardsInfo[key].price} to buy "${cardsInfo[key].name}" card.`)
              }
            }

            document.querySelector('.stations-popup .auction button').onclick = () => {
              document.querySelector('.auction-popup').classList.add('active-auction');
              auctionCardsArr.forEach(el => {
                el.classList.remove('active-card-auction');
              });

              document.querySelector('.families-stations').classList.add('active-card-auction');
              setInfoFamiliesCard();
              stationCardPopup.classList.remove('active');

              offerMoreMoneyAuction();
            }

            function setInfoFamiliesCard() {
              document.querySelector('.auction-popup .families-stations .name').innerHTML = `${cardsInfo[key].name}`;
              document.querySelector('.auction-popup .families-stations .price .value').innerHTML = `$${cardsInfo[key].price}`;
              document.querySelector('.auction-popup .families-stations .mortgage-value .value').innerHTML = `$${cardsInfo[key].mortgage}`;
              document.querySelector('.auction-popup .families-stations .rent .value').innerHTML = `$${cardsInfo[key].rent}`;
              document.querySelector('.auction-popup .families-stations .two-stations .value').innerHTML = `$${cardsInfo[key].stations2}`;
              document.querySelector('.auction-popup .families-stations .three-stations .value').innerHTML = `$${cardsInfo[key].stations3}`;
              document.querySelector('.auction-popup .families-stations .four-stations .value').innerHTML = `$${cardsInfo[key].stations4}`;
            }
          }
          if (cardsInfo[key].isBought) {
            document.querySelector('.stations-popup .buy-or-auction').style.display = 'none';
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');

            document.querySelector('.player-properties .pay-btn').onclick = () => {
              verifyIfPlayerHaveSetOfCards(key);
              cardPopup.classList.remove('active-card');
              payRent(key);
              console.log(isHavingEnoughMoney);
              if(isHavingEnoughMoney){
                console.log('yep');
                document.querySelector('.player-properties .pay-btn').classList.remove('active-btn');
                document.querySelector('.player-properties .end-turn').classList.add('active-btn');
              }
            }

            if(cardsInfo[key].isMortgaged){
              document.querySelector('.player-properties .end-turn').classList.add('active-btn');
              document.querySelector('.player-properties .pay-btn').classList.remove('active-btn');
            } else {
              document.querySelector('.player-properties .pay-btn').classList.add('active-btn');
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            }

            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              stationCardPopup.classList.remove('active');
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
              if(playerTurn.isInJail){
                jail();
                return;
              }
              rollDiesBtn.addEventListener("click", rollDiceEvent);
              rollPopupToggle();
              rollDiesBtn.innerHTML = "Roll";
              dice1.innerHTML = '';
              dice2.innerHTML = '';
              rollDiesBtn.addEventListener('click', () => {
                popupRoll.classList.add('active');
              });

              verifyIfPlayerHaveSetOfCards(key);
            };
          }
        }

        if (key === 'bottomIron' || key === 'bottomValar' || key === 'rightValar' ||
          key === 'rightIron' || key === 'leftIron' || key === 'topValar') {

          document.querySelector('.player-properties .end-turn').onclick = () => {
            deleteAddHousesIcon();
            document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            playersTurn();
            if(playerTurn.isInJail){
              jail();
              return;
            }
            rollDiesBtn.addEventListener("click", rollDiceEvent);
            rollPopupToggle();
            rollDiesBtn.innerHTML = "Roll";
            dice1.innerHTML = '';
            dice2.innerHTML = '';
            rollDiesBtn.addEventListener('click', () => {
              popupRoll.classList.add('active');
            });

            verifyIfPlayerHaveSetOfCards(key);
          }
          //getRandomNumber(0, randomMissions.length - 1)
          let randomNr = getRandomNumber(0, randomMissions.length - 1);
          document.querySelector('.random-card-popup__inner .name').innerHTML = `<h1>${cardsInfo[key].name}</h1>`;
          document.querySelector('.random-card-popup__inner .mission').innerHTML = `<h4>${randomMissions[randomNr]}</h4>`;
          document.querySelector('.random-card-popup').classList.add('active');
          rollBtnOpen.removeEventListener("click", rollPopupToggle);
          popupRoll.classList.remove('active');

          document.querySelector('.random-card-popup button').onclick = () => {
            switch(randomMissions[randomNr]){
              case 'You inherit $100': {
                playerTurn.money += 100;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'You have won second prize in a beauty contest. Collect $10':{
                playerTurn.money += 10;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'You are assessed for street repair. $40 per house. $115 per hotel': {
                let payMoney = 0;
                playerTurn.cards.forEach(card => {
                  if(cardsInfo[card].el.querySelector('.card-color') !== null){
                    if(cardsInfo[card].el.querySelector('.card-color').children !== null){
                      const childrenArr = Array.from(cardsInfo[card].el.querySelector('.card-color').children);
                      
                      childrenArr.forEach(img => {
                        if(img.classList.contains('house')){
                          payMoney += 40;
                        }
                        if(img.classList.contains('hotel')){
                          payMoney += 115;
                        }
                      });
                    }
                  }
                });
                if(playerTurn.money - payMoney >= 0){
                  playerTurn.money -= payMoney;
                  playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                } else {
                  alert(`You dont have $${payMoney} to pay.`);
                  return;
                }
                break;
              }
              case 'Make general repairs on all your property. For each house pay $25. For each hotel pay $100': {
                let payMoney = 0;
                playerTurn.cards.forEach(card => {
                  if(cardsInfo[card].el.querySelector('.card-color') !== null){
                    if(cardsInfo[card].el.querySelector('.card-color').children !== null){
                      const childrenArr = Array.from(cardsInfo[card].el.querySelector('.card-color').children);
                      
                      childrenArr.forEach(img => {
                        if(img.classList.contains('house')){
                          payMoney += 25;
                        }
                        if(img.classList.contains('hotel')){
                          payMoney += 100;
                        }
                      });
                    }
                  }
                });
                if(playerTurn.money - payMoney >= 0){
                  playerTurn.money -= payMoney;
                  playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                } else {
                  alert(`You dont have $${payMoney} to pay.`);
                  return;
                }
                break;
              }
              case 'Receive $25 consultancy fee': {
                playerTurn.money += 25;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'Pay school fees of $50': {
                if(playerTurn.money - 50 >= 0){
                  playerTurn.money -= 50;
                  playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                } else {
                  alert(`You dont have $50 to pay.`);
                  return;
                }
                break;
              }
              case 'Pay hospital fees of $100': {
                if(playerTurn.money - 100 >= 0){
                  playerTurn.money -= 100;
                  playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                } else {
                  alert(`You dont have $50 to pay.`);
                  return;
                }
                break;
              }
              case 'Life insurance matures. Collect $100': {
                playerTurn.money += 100;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;  
              }
              case 'It is your birthday. Collect $10 from every player': {
                let collectMoney = 0;
                
                verifyPlayers(yoneInfo, player1Info, player2Info, player3Info);
                verifyPlayers(player1Info, yoneInfo, player2Info, player3Info);
                verifyPlayers(player2Info, player1Info, yoneInfo, player3Info);
                verifyPlayers(player3Info, player1Info, player2Info, yoneInfo);

                function verifyPlayers(currentPlayer, player1, player2, player3){
                  switch(playerTurn){
                    case currentPlayer: {
                      if(!player1.isBankrupt){
                        collectMoney += 10;
                      }
                      if(!player2.isBankrupt){
                        collectMoney += 10;
                      }
                      if(!player3.isBankrupt){
                        collectMoney += 10;
                      }
                      break;
                    }
                  }
                }

                playerTurn.money += collectMoney;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'Income tax refund. Collect $20': {
                playerTurn.money += 20;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'Holiday fund matures. Receive $100': {
                playerTurn.money += 100;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'From sale of stock you get $50': {
                playerTurn.money += 50;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'The fee of doctor. Pay $50': {
                if(playerTurn.money - 50 >= 0){
                  playerTurn.money -= 50;
                  playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                } else {
                  alert(`You dont have $50 to pay.`);
                  return;
                }
                break;
              }
              case 'Bank error in your favor. Collect $200': {
                playerTurn.money += 200;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'Advance to Go (Collect $200)': {
                if(playerTurn == yoneInfo){
                  playerTurn.left = 710;
                  playerTurn.top = 710;
                  document.querySelector('.players-icons-for-play .player-yone').style.left = `710px`;
                  document.querySelector('.players-icons-for-play .player-yone').style.top = `710px`;
                }
                if(playerTurn == player1Info){
                  playerTurn.left = 750;
                  playerTurn.top = 710;
                  document.querySelector('.players-icons-for-play .player-1').style.left = `750px`;
                  document.querySelector('.players-icons-for-play .player-1').style.top = `710px`;
                }
                if(playerTurn == player2Info){
                  playerTurn.left = 750;
                  playerTurn.top = 750;
                  document.querySelector('.players-icons-for-play .player-2').style.left = `750px`;
                  document.querySelector('.players-icons-for-play .player-2').style.top = `750px`;
                }
                if(playerTurn == player3Info){
                  playerTurn.left = 710;
                  playerTurn.top = 750;
                  document.querySelector('.players-icons-for-play .player-3').style.left = `710px`;
                  document.querySelector('.players-icons-for-play .player-3').style.top = `750px`;
                }

                playerTurn.money += 200;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'Collect $10 from the bank': {
                playerTurn.money += 10;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'Pay $50 to each player': {
                const players = [yoneInfo, player1Info, player2Info, player3Info];
                let counter = 0;
                players.forEach(player => {
                  if(!player['isBankrupt']){
                    counter++;
                  }
                });

                if(playerTurn.money - ((counter - 1) * 50) >= 0){
                  playerTurn.money -= ((counter - 1) * 50);
                  playerMoneyTurn.innerHTML = `$${playerTurn.money}`;

                  addMoney(yoneInfo, player1Info, player1Money, player2Info, player2Money, player3Info, player3Money);
                  addMoney(player1Info, yoneInfo, yoneMoney, player2Info, player2Money, player3Info, player3Money);
                  addMoney(player2Info, player1Info, player1Money, yoneInfo, yoneMoney, player3Info, player3Money);
                  addMoney(player3Info, player1Info, player1Money, player2Info, player2Money, yoneInfo, yoneMoney);
                } else {
                  alert(`You dont have $${((counter - 1) * 50)} to pay.`);
                  return;
                }

                function addMoney(currentPlayer, player1, player1HTML, player2, player2HTML,  player3, player3HTML){
                  switch(playerTurn){
                    case currentPlayer: {
                      if(!player1.isBankrupt){
                        player1.money += 50;
                        player1HTML.innerHTML = `$${player1.money}`;
                      }
                      if(!player2.isBankrupt){
                        player2.money += 50;
                        player2HTML.innerHTML = `$${player2.money}`;
                      }
                      if(!player3.isBankrupt){
                        player3.money += 50;
                        player3HTML.innerHTML = `$${player3.money}`;
                      }
                    }
                  }
                }
                break;
              }
              case 'Your building loan matures. Collect $150': {
                playerTurn.money += 150;
                playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                break;
              }
              case 'Go to Jail.': {
                alert(`Ups. Player ${playerTurn.name} is going in the jail.`);

                document.querySelector('.player-properties .end-turn').classList.add('active-btn');
                playerTurn.isInJail = true;
                playerTurn.counterJail = 2;

                switch (playerTurn.name) {
                  case yoneInfo.name: {
                    yoneInfo.left = 17;
                    yoneInfo.top = 710;
                    document.querySelector('.players-icons-for-play .player-yone').style.left = `17px`;
                    document.querySelector('.players-icons-for-play .player-yone').style.top = `710px`;
                    break;
                  }
                  case player1Info.name: {
                    player1Info.left = 44;
                    player1Info.top = 710;
                    document.querySelector('.players-icons-for-play .player-1').style.left = `44px`;
                    document.querySelector('.players-icons-for-play .player-1').style.top = `710px`;
                    break;
                  }
                  case player2Info.name: {
                    player2Info.left = 44;
                    player2Info.top = 750;
                    document.querySelector('.players-icons-for-play .player-2').style.left = `44px`;
                    document.querySelector('.players-icons-for-play .player-2').style.top = `750px`;
                    break;
                  }
                  case player3Info.name: {
                    player3Info.left = 17;
                    player3Info.top = 750;
                    document.querySelector('.players-icons-for-play .player-3').style.left = `17px`;
                    document.querySelector('.players-icons-for-play .player-3').style.top = `750px`;
                    break;
                  }
                }
                break;
              }
              case 'Advance to Stark Family. If the card is bought you wont pay taxes else if it isnt bought you wont be able to buy it.': {
                switch(playerTurn){
                  case yoneInfo: {
                    goToCard(17, 366);
                    break;
                  }
                  case player1Info: {
                    goToCard(44, 366);
                    break;
                  }
                  case player2Info: {
                    goToCard(44, 398);
                    break;
                  }
                  case player3Info: {
                    goToCard(17, 398);
                    break;
                  }
                }
                break;
              }
              case 'Advance to Dragon Home. If the card is bought you wont pay taxes else if it isnt bought you wont be able to buy it.': {
                switch(playerTurn){
                  case yoneInfo: {
                    goToCard(17, 102);
                    break;
                  }
                  case player1Info: {
                    goToCard(44, 102);
                    break;
                  }
                  case player2Info: {
                    goToCard(44, 134);
                    break;
                  }
                  case player3Info: {
                    goToCard(17, 134);
                    break;
                  }
                }
                break;
              }
              case "King's Landing Station. If the card is bought you wont pay taxes else if it isnt bought you wont be able to buy it.": {
                switch(playerTurn){
                  case yoneInfo: {
                    goToCard(571, 17);
                    break;
                  }
                  case player1Info: {
                    goToCard(598, 17);
                    break;
                  }
                  case player2Info: {
                    goToCard(598, 49);
                    break;
                  }
                  case player3Info: {
                    goToCard(571, 49);
                    break;
                  }
                }
                break;
              }
              case 'Advance to The Arbor. If the card is bought you wont pay taxes else if it isnt bought you wont be able to buy it.': {
                switch(playerTurn){
                  case yoneInfo: {
                    goToCard(723, 102);
                    break;
                  }
                  case player1Info: {
                    goToCard(750, 102);
                    break;
                  }
                  case player2Info: {
                    goToCard(750, 127);
                    break;
                  }
                  case player3Info: {
                    goToCard(723, 127);
                    break;
                  }
                }
                break;
              }
            }
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');
            document.querySelector('.random-card-popup').classList.remove('active');
          };
        }

        function goToCard(coord1, coord2){
          switch (playerTurn.name) {
            case yoneInfo.name: {
              yoneInfo.left = coord1;
              yoneInfo.top = coord2;
              document.querySelector('.players-icons-for-play .player-yone').style.left = `${coord1}px`;
              document.querySelector('.players-icons-for-play .player-yone').style.top = `${coord2}px`;
              break;
            }
            case player1Info.name: {
              player1Info.left = coord1;
              player1Info.top = coord2;
              document.querySelector('.players-icons-for-play .player-1').style.left = `${coord1}px`;
              document.querySelector('.players-icons-for-play .player-1').style.top = `${coord2}px`;
              break;
            }
            case player2Info.name: {
              player2Info.left = coord1;
              player2Info.top = coord2;
              document.querySelector('.players-icons-for-play .player-2').style.left = `${coord1}px`;
              document.querySelector('.players-icons-for-play .player-2').style.top = `${coord2}px`;
              break;
            }
            case player3Info.name: {
              player3Info.left = coord1;
              player3Info.top = coord2;
              document.querySelector('.players-icons-for-play .player-3').style.left = `${coord1}px`;
              document.querySelector('.players-icons-for-play .player-3').style.top = `${coord2}px`;
              break;
            }
          }
        }

        if (key === 'card150Top' || key === 'card150Left') {
          document.querySelector('.stations-150-popup').classList.add('active');
          document.querySelector('.stations-150-popup .name').innerHTML = `${cardsInfo[key].name}`;
          document.querySelector('.stations-150-popup .price span:last-of-type').innerHTML = `$${cardsInfo[key].price}`;
          document.querySelector('.stations-150-popup .mortgage-value span:last-of-type').innerHTML = `$${cardsInfo[key].mortgage}`;
          rollBtnOpen.removeEventListener("click", rollPopupToggle);
          popupRoll.classList.remove('active');

          if (!cardsInfo[key].isBought) {
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
              if(playerTurn.isInJail){
                jail();
                return;
              }
              rollDiesBtn.addEventListener("click", rollDiceEvent);
              rollPopupToggle();
              rollDiesBtn.innerHTML = "Roll";
              dice1.innerHTML = '';
              dice2.innerHTML = '';
              rollDiesBtn.addEventListener('click', () => {
                popupRoll.classList.add('active');
              });

              verifyIfPlayerHaveSetOfCards(key);
            }
            document.querySelector('.stations-150-popup .buy button').onclick = () => {
              if(playerTurn.money - cardsInfo[key].price > 0){
                buyCard(playerTurn, key, playerMoneyTurn, cardsInfo);
                document.querySelector('.player-properties .end-turn').classList.add('active-btn');
                document.querySelector('.stations-150-popup').classList.remove('active');
                const buyOrAuction = document.querySelector('.buy-or-auction');
                buyOrAuction.style.display = 'flex !important';
              } else {
                alert(`U dont have $${cardsInfo[key].price} to buy "${cardsInfo[key].name}" card.`)
              }
            }

            document.querySelector('.stations-150-popup .auction button').onclick = () => {
              document.querySelector('.auction-popup').classList.add('active-auction');
              auctionCardsArr.forEach(el => {
                el.classList.remove('active-card-auction');
              });
              document.querySelector('.stations150').classList.add('active-card-auction');
              setInfo150StationCards();
              document.querySelector('.stations-150-popup').classList.remove('active');

              offerMoreMoneyAuction();
            }

            function setInfo150StationCards() {
              document.querySelector('.auction-popup .stations150 .name').innerHTML = `${cardsInfo[key].name}`;
              document.querySelector('.auction-popup .stations150 .price .value').innerHTML = `$${cardsInfo[key].price}`;
              document.querySelector('.auction-popup .stations150 .mortgage-value .value').innerHTML = `$${cardsInfo[key].mortgage}`;
            }
          }

          if (cardsInfo[key].isBought) {
            const buyOrAuction = document.querySelector('.buy-or-auction');
            buyOrAuction.style.display = 'none !important';
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');
            document.querySelector('.stations-150-popup .buy-or-auction').style.display = 'none';

            document.querySelector('.player-properties .pay-btn').onclick = () => {
              verifyIfPlayerHaveSetOfCards(key);
              cardPopup.classList.remove('active-card');
              payRent(key);
              console.log(isHavingEnoughMoney);
              if(isHavingEnoughMoney){
                console.log('yep');
                document.querySelector('.player-properties .pay-btn').classList.remove('active-btn');
                document.querySelector('.player-properties .end-turn').classList.add('active-btn');
              }
            }

            if(cardsInfo[key].isMortgaged){
              document.querySelector('.player-properties .end-turn').classList.add('active-btn');
              document.querySelector('.player-properties .pay-btn').classList.remove('active-btn');
            } else {
              document.querySelector('.player-properties .pay-btn').classList.add('active-btn');
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            }

            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              document.querySelector('.stations-150-popup').classList.remove('active');
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
              if(playerTurn.isInJail){
                jail();
                return;
              }
              rollDiesBtn.addEventListener("click", rollDiceEvent);
              rollPopupToggle();
              rollDiesBtn.innerHTML = "Roll";
              dice1.innerHTML = '';
              dice2.innerHTML = '';
              rollDiesBtn.addEventListener('click', () => {
                popupRoll.classList.add('active');
              });

              verifyIfPlayerHaveSetOfCards(key);
            };
          }
        }

        function offerMoreMoneyAuction() {
          let counter = 8;
          let yoneOfferedMoney = 0, player1OfferedMoney = 0, player2OfferedMoney = 0, player3OfferedMoney = 0;
          let biggestOffert = 0;
          const filter = [yoneOfferedMoney, player1OfferedMoney, player2OfferedMoney, player3OfferedMoney];

          const intervalAuction = setInterval(() => {
            if (counter === 0) {
              filter.forEach(number => {
                if (biggestOffert === number) {
                  auctionCompareCounter++;
                }
              });
              console.log('interval is called');

              if (auctionCompareCounter > 1) {
                auctionCompareCounter = 0;
                auctionLastClick = true;

                if (biggestOffert !== yoneOfferedMoney) {
                  document.querySelector('.auction-popup .player-yone').classList.remove('active-player');
                }

                if (biggestOffert !== player1OfferedMoney) {
                  document.querySelector('.auction-popup .player-1').classList.remove('active-player');
                }

                if (biggestOffert !== player2OfferedMoney) {
                  document.querySelector('.auction-popup .player-2').classList.remove('active-player');
                }

                if (biggestOffert !== player3OfferedMoney) {
                  document.querySelector('.auction-popup .player-3').classList.remove('active-player');
                }

                alert('The last chance to buy the card. Who is gonna offer the last and biggest offert will get the card!');
              } else {
                hideTheAuction(key);
                auctionLastClick = false;
              }

              auctionCompareCounter = 0;
              verifyIfPlayerHaveSetOfCards(key);
              clearInterval(intervalAuction);
              return;
            }
            counter--;
            document.querySelector('.auction-popup .timer').innerHTML = `${counter}`;
          }, 1000);

          document.querySelector('.auction-popup .player-yone .offered').innerHTML = `$${yoneOfferedMoney}`;
          document.querySelector('.auction-popup .player-1 .offered').innerHTML = `$${player1OfferedMoney}`;
          document.querySelector('.auction-popup .player-2 .offered').innerHTML = `$${player2OfferedMoney}`;
          document.querySelector('.auction-popup .player-3 .offered').innerHTML = `$${player3OfferedMoney}`;

          document.querySelector('.auction-popup .player-yone .plus10 button').onclick = () => {
            if(yoneInfo.money - (yoneOfferedMoney + 10) >= 0){
              yoneOfferedMoney += 10;
              filter[0] = yoneOfferedMoney;
              document.querySelector('.auction-popup .player-yone .offered').innerHTML = `$${yoneOfferedMoney}`;
              counter = 9;
              getBiggestOffert();
  
              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${yoneInfo.name} doesnt have enough money for making a bigger offert.`);
            }
            
          }

          document.querySelector('.auction-popup .player-yone .plus50 button').onclick = () => {
            if(yoneInfo.money - (yoneOfferedMoney + 50) >= 0){
              yoneOfferedMoney += 50;
              filter[0] = yoneOfferedMoney;
              counter = 9;
              getBiggestOffert();
              document.querySelector('.auction-popup .player-yone .offered').innerHTML = `$${yoneOfferedMoney}`;

              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${yoneInfo.name} doesnt have enough money for making a bigger offert.`);
            }
            
          }

          document.querySelector('.auction-popup .player-yone .plus100 button').onclick = () => {
            if(yoneInfo.money - (yoneOfferedMoney + 100) >= 0){
              yoneOfferedMoney += 100;
              filter[0] = yoneOfferedMoney;
              counter = 9;
              getBiggestOffert();
              document.querySelector('.auction-popup .player-yone .offered').innerHTML = `$${yoneOfferedMoney}`;
  
              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${yoneInfo.name} doesnt have enough money for making a bigger offert.`);
            }
          
          }


          document.querySelector('.auction-popup .player-1 .plus10 button').onclick = () => {
            if(player1Info.money - (player1OfferedMoney + 10) >= 0){
              player1OfferedMoney += 10;
              filter[1] = player1OfferedMoney;
              document.querySelector('.auction-popup .player-1 .offered').innerHTML = `$${player1OfferedMoney}`;
              counter = 9;
              getBiggestOffert();
  
              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player1Info.name} doesnt have enough money for making a bigger offert.`);
            }
          }

          document.querySelector('.auction-popup .player-1 .plus50 button').onclick = () => {
            if(player1Info.money - (player1OfferedMoney + 50) >= 0){
              player1OfferedMoney += 50;
              filter[1] = player1OfferedMoney;
              counter = 9;
              getBiggestOffert();
              document.querySelector('.auction-popup .player-1 .offered').innerHTML = `$${player1OfferedMoney}`;

              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player1Info.name} doesnt have enough money for making a bigger offert.`);
            }
            
          }

          document.querySelector('.auction-popup .player-1 .plus100 button').onclick = () => {
            if(player1Info.money - (player1OfferedMoney + 100) >= 0){
              player1OfferedMoney += 100;
              filter[1] = player1OfferedMoney;
              counter = 9;
              getBiggestOffert();
              document.querySelector('.auction-popup .player-1 .offered').innerHTML = `$${player1OfferedMoney}`;

              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player1Info.name} doesnt have enough money for making a bigger offert.`);
            }
          }


          document.querySelector('.auction-popup .player-2 .plus10 button').onclick = () => {
            if(player2Info.money - (player2OfferedMoney + 10) >= 0){
              player2OfferedMoney += 10;
              filter[2] = player2OfferedMoney;
              document.querySelector('.auction-popup .player-2 .offered').innerHTML = `$${player2OfferedMoney}`;
              counter = 9;
              getBiggestOffert();

              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player2Info.name} doesnt have enough money for making a bigger offert.`);
            }
            
          }

          document.querySelector('.auction-popup .player-2 .plus50 button').onclick = () => {
            if(player2Info.money - (player2OfferedMoney + 50) >= 0){
              player2OfferedMoney += 50;
              filter[2] = player2OfferedMoney;
              counter = 9;
              getBiggestOffert();
              document.querySelector('.auction-popup .player-2 .offered').innerHTML = `$${player2OfferedMoney}`;

              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player2Info.name} doesnt have enough money for making a bigger offert.`);
            }
            
          }

          document.querySelector('.auction-popup .player-2 .plus100 button').onclick = () => {
            if(player2Info.money - (player2OfferedMoney + 100) >= 0){
              player2OfferedMoney += 100;
              filter[2] = player2OfferedMoney;
              counter = 9;
              getBiggestOffert();
              document.querySelector('.auction-popup .player-2 .offered').innerHTML = `$${player2OfferedMoney}`;
  
              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player2Info.name} doesnt have enough money for making a bigger offert.`);
            }
            
          }


          document.querySelector('.auction-popup .player-3 .plus10 button').onclick = () => {
            if(player3Info.money - (player3OfferedMoney + 10) >= 0){
              player3OfferedMoney += 10;
              filter[3] = player3OfferedMoney;
              document.querySelector('.auction-popup .player-3 .offered').innerHTML = `$${player3OfferedMoney}`;
              counter = 9;
              getBiggestOffert();

              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player3Info.name} doesnt have enough money for making a bigger offert.`);
            }
            
          }

          document.querySelector('.auction-popup .player-3 .plus50 button').onclick = () => {
            if(player3Info.money - (player3OfferedMoney + 50) >= 0){
              player3OfferedMoney += 50;
              filter[3] = player3OfferedMoney;
              counter = 9;
              getBiggestOffert();
              document.querySelector('.auction-popup .player-3 .offered').innerHTML = `$${player3OfferedMoney}`;

              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player3Info.name} doesnt have enough money for making a bigger offert.`);
            }
            
          }

          document.querySelector('.auction-popup .player-3 .plus100 button').onclick = () => {
            if(player3Info.money - (player3OfferedMoney + 100) >= 0){
              player3OfferedMoney += 100;
              filter[3] = player3OfferedMoney;
              counter = 9;
              getBiggestOffert();
              document.querySelector('.auction-popup .player-3 .offered').innerHTML = `$${player3OfferedMoney}`;
  
              if (auctionLastClick) {
                hideTheAuction(key);
              }
            } else {
              counter = 9;
              alert(`Player ${player3Info.name} doesnt have enough money for making a bigger offert.`);
            }
          
          }

          function hideTheAuction(key) {
            auctionLastClick = false;
            document.querySelector('.auction-popup').classList.remove('active-auction');
            document.querySelector('.auction-popup .player-yone').classList.add('active-player');
            document.querySelector('.auction-popup .player-1').classList.add('active-player');
            document.querySelector('.auction-popup .player-2').classList.add('active-player');
            document.querySelector('.auction-popup .player-3').classList.add('active-player');
            ownerOfCard();
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');
            verifyIfPlayerHaveSetOfCards(key);
          }

          function ownerOfCard() {

            if (biggestOffert == yoneOfferedMoney) {
              buyAuctionCard(yoneInfo, key, yoneMoney);
            }

            if (biggestOffert == player1OfferedMoney) {
              buyAuctionCard(player1Info, key, player1Money);
            }

            if (biggestOffert == player2OfferedMoney) {
              buyAuctionCard(player2Info, key, player2Money);
            }

            if (biggestOffert == player3OfferedMoney) {
              buyAuctionCard(player3Info, key, player3Money);
            }
          }

          function buyAuctionCard(player, key, playerMoney) {
            player.cards.push(key);
            player.money -= biggestOffert;
            playerMoney.innerHTML = `$${player.money}`;
            cardsInfo[key].isBought = true;
            cardsInfo[key].el.style.color = `${player.color}`;
            cardsInfo[key].el.style.fontWeight = `bold`;
          }

          function getBiggestOffert() {
            biggestOffert = yoneOfferedMoney;
            filter.forEach(nr => {
              if (biggestOffert <= nr) {
                biggestOffert = nr;
              }
            });

            document.querySelector('.auction-popup .show-money .max-money .money').innerHTML = `$${biggestOffert}`;
          }
        }
      }
    }
  }, 600);
}

function getOnCard150Left(payerInfo, playerMoney, boughtCard) {
  if (payerInfo.cards.includes('card150Top')) {
    if(!(playerTurn.money - cardsInfo[boughtCard].rentTwoCard >= 0)){
      alert(`You dont have $${cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr)} money to pay.`);
      return;
    }
    playerTurn.money -= cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr);
    payerInfo.money += cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr);
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    playerMoney.innerHTML = `$${payerInfo.money}`;
    isHavingEnoughMoney = true;
    console.log(playerTurn.name + ' payed');
    console.log('Payed' + ` ${cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr)}`);
  } else {
    if(!(playerTurn.money - cardsInfo[boughtCard].rentTwoCard >= 0)){
      alert(`You dont have $${cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr)} money to pay.`);
      return;
    }
    playerTurn.money -= cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr);
    payerInfo.money += cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr);
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    playerMoney.innerHTML = `$${payerInfo.money}`;
    isHavingEnoughMoney = true;
    console.log(playerTurn.name + ' payed');
    console.log('Payed' + ` ${cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr)}`);
  }
}

function getOnCard150Top(payerInfo, playerMoney, boughtCard) {
  if (payerInfo.cards.includes('card150Left')) {
    if(!(playerTurn.money - cardsInfo[boughtCard].rentTwoCard >= 0)){
      alert(`You dont have $${cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr)} money to pay.`);
      return;
    }
    playerTurn.money -= cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr);
    payerInfo.money += cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr);
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    playerMoney.innerHTML = `$${payerInfo.money}`;
    isHavingEnoughMoney = true;
    console.log(playerTurn.name + ' payed');
    console.log('Payed' + ` ${cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr)}`);
  } else {
    if(!(playerTurn.money - cardsInfo[boughtCard].rentTwoCard >= 0)){
      alert(`You dont have $${cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr)} money to pay.`);
      return;
    }
    playerTurn.money -= cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr);
    payerInfo.money += cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr);
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    playerMoney.innerHTML = `$${payerInfo.money}`;
    isHavingEnoughMoney = true;
    console.log(playerTurn.name + ' payed');
    console.log('Payed' + ` ${cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr)}`);
  }
}

function payRentFamilies(payerInfo, playerMoney, boughtCard) {
  let counter = 0;

  if (payerInfo.cards.includes('lannister')) {
    counter++;
  }

  if (payerInfo.cards.includes('baratheon')) {
    counter++;
  }

  if (payerInfo.cards.includes('stark')) {
    counter++;
  }

  if (payerInfo.cards.includes('targaryen')) {
    counter++;
  }

  switch (counter) {
    case 1: {
      if(!(playerTurn.money - cardsInfo[boughtCard].rent >= 0)){
        alert(`You dont have $${cardsInfo[boughtCard].rent} money to pay.`);
        return;
      }
      playerTurn.money -= cardsInfo[boughtCard].rent;
      payerInfo.money += cardsInfo[boughtCard].rent;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${payerInfo.money}`;
      isHavingEnoughMoney = true;
      console.log(playerTurn.name + ' payed');
      console.log('Payed' + ` ${cardsInfo[boughtCard].rent}`);
      break;
    }
    case 2: {
      if(!(playerTurn.money - cardsInfo[boughtCard].stations2 >= 0)){
        alert(`You dont have $${cardsInfo[boughtCard].stations2} money to pay.`);
        return;
      }
      playerTurn.money -= cardsInfo[boughtCard].stations2;
      payerInfo.money += cardsInfo[boughtCard].stations2;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${payerInfo.money}`;
      isHavingEnoughMoney = true;
      console.log(playerTurn.name + ' payed');
      console.log('Payed' + ` ${cardsInfo[boughtCard].stations2}`);
      break;
    };
    case 3: {
      if(!(playerTurn.money - cardsInfo[boughtCard].stations3 >= 0)){
        alert(`You dont have $${cardsInfo[boughtCard].stations3} money to pay.`);
        return;
      }
      playerTurn.money -= cardsInfo[boughtCard].stations3;
      payerInfo.money += cardsInfo[boughtCard].stations3;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${payerInfo.money}`;
      isHavingEnoughMoney = true;
      console.log(playerTurn.name + ' payed');
      console.log('Payed' + ` ${cardsInfo[boughtCard].stations3}`);
      break;
    }
    case 4: {
      if(!(playerTurn.money - cardsInfo[boughtCard].stations3 >= 0)){
        alert(`You dont have $${cardsInfo[boughtCard].stations3} money to pay.`);
        return;
      }
      playerTurn.money -= cardsInfo[boughtCard].stations4;
      payerInfo.money += cardsInfo[boughtCard].stations4;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${payerInfo.money}`;
      console.log(playerTurn.name + ' payed');
      console.log('Payed' + ` ${cardsInfo[boughtCard].stations4}`);
      isHavingEnoughMoney = true;
      break;
    };
  }
}

function verifyIfPlayerHaveAllCards(player, playerMoney, boughtCard) {
  verifyColorSet2Cards(player, playerMoney, boughtCard, 'brownCard1', 'brownCard2', counterBrown1, counterBrown2);
  verifyColorSet2Cards(player, playerMoney, boughtCard, 'blueCard1', 'blueCard2', counterBlue1, counterBlue2);

  verifyColorSet3Cards(player, playerMoney, boughtCard, 'redCard1', 'redCard2', 'redCard3', counterRed1, counterRed2, counterRed3);
  verifyColorSet3Cards(player, playerMoney, boughtCard, 'yellowCard1', 'yellowCard2', 'yellowCard3', counterYellow1, counterYellow2, counterYellow3);
  verifyColorSet3Cards(player, playerMoney, boughtCard, 'orangeCard1', 'orangeCard2', 'orangeCard3', counterOrange1, counterOrange2, counterOrange3);
  verifyColorSet3Cards(player, playerMoney, boughtCard, 'pinkCard1', 'pinkCard2', 'pinkCard3', counterPink1, counterPink2, counterPink3);
  verifyColorSet3Cards(player, playerMoney, boughtCard, 'greenCard1', 'greenCard2', 'greenCard3', counterGreen1, counterGreen2, counterGreen3);
  verifyColorSet3Cards(player, playerMoney, boughtCard, 'lightBlueCard1', 'lightBlueCard2', 'lightBlueCard3', counterLightBlue1, counterLightBlue2, counterLightBlue3);
}

function verifyColorSet3Cards(player, playerMoney, boughtCard, name1, name2, name3, counter1, counter2, counter3) {
  if (boughtCard === name1 || boughtCard === name2 || boughtCard === name3) {
    if (player.cards.includes(name1) && player.cards.includes(name2) && player.cards.includes(name3)) {
      if (boughtCard === name1 && boughtCard !== name2 && boughtCard !== name3 && counter1 > 0) {
        switch (counter1) {
          case 1: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home1 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home1}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home2 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home2}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home3 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home3}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home4 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home4}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
            if(!(playerTurn.money - cardsInfo[boughtCard].hotel >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].hotel}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].hotel;
            player.money += cardsInfo[boughtCard].hotel;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
        }
        return;
      }
      if (boughtCard !== name1 && boughtCard === name2 && boughtCard !== name3 && counter2 > 0) {
        switch (counter2) {
          case 1: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home1 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home1}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home2 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home2}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home3 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home3}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home4 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home4}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
            if(!(playerTurn.money - cardsInfo[boughtCard].hotel >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].hotel}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].hotel;
            player.money += cardsInfo[boughtCard].hotel;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
        }
        return;
      }
      if (boughtCard !== name1 && boughtCard !== name2 && boughtCard === name3 && counter3 > 0) {
        switch (counter3) {
          case 1: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home1 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home1}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home2 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home2}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home3 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home3}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home4 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home4}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
            if(!(playerTurn.money - cardsInfo[boughtCard].hotel >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].hotel}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].hotel;
            player.money += cardsInfo[boughtCard].hotel;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
        }
        return;
      }
      if(!(playerTurn.money - cardsInfo[boughtCard].rentColorSet >= 0)){
        alert(`You have to pay $${cardsInfo[boughtCard].rentColorSet}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
        isHavingEnoughMoney = false;
        return;
      }

      isHavingEnoughMoney = true;
      playerTurn.money -= cardsInfo[boughtCard].rentColorSet;
      player.money += cardsInfo[boughtCard].rentColorSet;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${player.money}`;
      console.log(playerTurn.name + ' payed');
      return;
    } else {
      if(!(playerTurn.money - cardsInfo[boughtCard].rent >= 0)){
        alert(`You have to pay $${cardsInfo[boughtCard].rent}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
        isHavingEnoughMoney = false;
        return;
      }

      isHavingEnoughMoney = true;
      playerTurn.money -= cardsInfo[boughtCard].rent;
      player.money += cardsInfo[boughtCard].rent;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${player.money}`;
      console.log(playerTurn.name + ' payed');
    }
  }
}

function verifyColorSet2Cards(player, playerMoney, boughtCard, name1, name2, counter1, counter2) {
  if (boughtCard === name1 || boughtCard === name2) {
    if (player.cards.includes(name1) && player.cards.includes(name2)) {
      if (boughtCard === name1 && boughtCard !== name2 && counter1 > 0) {
        switch (counter1) {
          case 1: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home1 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home1}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home2 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home2}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home3 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home3}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home4 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home4}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
            if(!(playerTurn.money - cardsInfo[boughtCard].hotel >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].hotel}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].hotel;
            player.money += cardsInfo[boughtCard].hotel;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
        }
        return;
      }
      if (boughtCard !== name1 && boughtCard === name2 && counter2 > 0) {
        switch (counter2) {
          case 1: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home1 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home1}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home2 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home2}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home3 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home3}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            if(!(playerTurn.money - cardsInfo[boughtCard].home4 >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].home4}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
            if(!(playerTurn.money - cardsInfo[boughtCard].hotel >= 0)){
              alert(`You have to pay $${cardsInfo[boughtCard].hotel}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
              isHavingEnoughMoney = false;
              return;
            }

            isHavingEnoughMoney = true;
            playerTurn.money -= cardsInfo[boughtCard].hotel;
            player.money += cardsInfo[boughtCard].hotel;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
        }
        return;
      }
      if(!(playerTurn.money - cardsInfo[boughtCard].rentColorSet >= 0)){
        alert(`You have to pay $${cardsInfo[boughtCard].rentColorSet}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
        isHavingEnoughMoney = false;
        console.log(boughtCard);
        return;
      }
      isHavingEnoughMoney = true;
      playerTurn.money -= cardsInfo[boughtCard].rentColorSet;
      player.money += cardsInfo[boughtCard].rentColorSet;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${player.money}`;
      console.log(playerTurn.name + ' payed');
      return;
    } else {
      if(!(playerTurn.money - cardsInfo[boughtCard].rent >= 0)){
        alert(`You have to pay $${cardsInfo[boughtCard].rent}. You dont have enough money to pay! Advice: Sell one or more cards to a player to get money or mortgage one or more cards.`);
        isHavingEnoughMoney = false;
        console.log(boughtCard);
        return;
      }
      isHavingEnoughMoney = true;
      playerTurn.money -= cardsInfo[boughtCard].rent;
      player.money += cardsInfo[boughtCard].rent;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${player.money}`;
      console.log(playerTurn.name + ' payed');
    }
  }
}

function payRent(boughtCard) {
  yoneInfo.cards.forEach(item => {
    if (boughtCard === item && boughtCard === 'card150Left') {
      getOnCard150Left(yoneInfo, yoneMoney, boughtCard);
      return;
    } else if (boughtCard === item && boughtCard === 'card150Top') {
      getOnCard150Top(yoneInfo, yoneMoney, boughtCard);
      return;
    }

    if (boughtCard === item && (boughtCard === 'lannister' || boughtCard === 'baratheon' ||
      boughtCard === 'stark' || boughtCard === 'targaryen')) {
      payRentFamilies(yoneInfo, yoneMoney, boughtCard);
      return;
    }

    if (item === boughtCard) {
      verifyIfPlayerHaveAllCards(yoneInfo, yoneMoney, boughtCard);
    }
  });

  player1Info.cards.forEach(item => {
    if (boughtCard === item && boughtCard === 'card150Left') {
      getOnCard150Left(player1Info, player1Money, boughtCard);
      return;
    } else if (boughtCard === item && boughtCard === 'card150Top') {
      getOnCard150Top(player1Info, player1Money, boughtCard);
      return;
    }

    if (boughtCard === item && (boughtCard === 'lannister' || boughtCard === 'baratheon' ||
      boughtCard === 'stark' || boughtCard === 'targaryen')) {
      payRentFamilies(player1Info, player1Money, boughtCard);
      return;
    }

    if (item === boughtCard) {
      verifyIfPlayerHaveAllCards(player1Info, player1Money, boughtCard);
    }
  });

  player2Info.cards.forEach(item => {
    if (boughtCard === item && boughtCard === 'card150Left') {
      getOnCard150Left(player2Info, player2Money, boughtCard);
      return;
    } else if (boughtCard === item && boughtCard === 'card150Top') {
      getOnCard150Top(player2Info, player2Money, boughtCard);
      return;
    }

    if (boughtCard === item && (boughtCard === 'lannister' || boughtCard === 'baratheon' ||
      boughtCard === 'stark' || boughtCard === 'targaryen')) {
      payRentFamilies(player2Info, player2Money, boughtCard);
      return;
    }

    if (item === boughtCard) {
      verifyIfPlayerHaveAllCards(player2Info, player2Money, boughtCard);
    }
  });

  player3Info.cards.forEach(item => {
    if (boughtCard === item && boughtCard === 'card150Left') {
      getOnCard150Left(player3Info, player3Money, boughtCard);
      return;
    } else if (boughtCard === item && boughtCard === 'card150Top') {
      getOnCard150Top(player3Info, player3Money, boughtCard);
      return;
    }

    if (boughtCard === item && (boughtCard === 'lannister' || boughtCard === 'baratheon' ||
      boughtCard === 'stark' || boughtCard === 'targaryen')) {
      payRentFamilies(player3Info, player3Money, boughtCard);
      return;
    }

    if (item === boughtCard) {
      verifyIfPlayerHaveAllCards(player3Info, player3Money, boughtCard);
    }
  });
}

function buyCard(player, key, playerMoney, cardInfo) {
  player.cards.push(key);
  player.money -= cardsInfo[key].price;
  playerMoney.innerHTML = `$${player.money}`;
  cardInfo[key].isBought = true;
  cardInfo[key].el.style.color = `${player.color}`;
  cardInfo[key].el.style.fontWeight = `bold`;
}

function showInfoPopupCard(bgcolor, title, price, mortgage,
  rent, fullRent, house1, house2, house3, house4, hotel1, housePrice) {
  const popupCardColor = cardPopup.querySelector('.card-color');
  const popupCardPurchasePrice = cardPopup.querySelector('.purchase-price .price');
  const popupCardmortgage = cardPopup.querySelector('.mortgage-value .price');
  const popupCardRent = cardPopup.querySelector('.rent-price .price');
  const popupCardRentFull = cardPopup.querySelector('.rent-price-full-color .price');
  const popupCardRent1house = cardPopup.querySelector('.rent-with-1-house .price');
  const popupCardRent2house = cardPopup.querySelector('.rent-with-2-house .price');
  const popupCardRent3house = cardPopup.querySelector('.rent-with-3-house .price');
  const popupCardRent4house = cardPopup.querySelector('.rent-with-4-house .price');
  const popupCardRent1hotel = cardPopup.querySelector('.rent-with-1-hotel .price');
  const houseCost = cardPopup.querySelector('.houses-cost .house-price');
  const hotelCost = cardPopup.querySelector('.hotel-cost .hotel-price');

  popupCardColor.style.backgroundColor = `${bgcolor}`;
  popupCardColor.innerHTML = `${title}`;
  popupCardPurchasePrice.innerHTML = `$${price}`;
  popupCardmortgage.innerHTML = `$${mortgage}`;
  popupCardRent.innerHTML = `$${rent}`;
  popupCardRentFull.innerHTML = `$${fullRent}`;
  popupCardRent1house.innerHTML = `$${house1}`;
  popupCardRent2house.innerHTML = `$${house2}`;
  popupCardRent3house.innerHTML = `$${house3}`;
  popupCardRent4house.innerHTML = `$${house4}`;
  popupCardRent1hotel.innerHTML = `$${hotel1}`;
  houseCost.innerHTML = `$${housePrice}`;
  hotelCost.innerHTML = `$${housePrice}`;
}

function changeDiceImage(el) {
  switch (randomNumber) {
    case 1:
      el.innerHTML = `<img src="./images/dice/dice1.png" alt="dice">`;
      break;
    case 2:
      el.innerHTML = `<img src="./images/dice/dice2.png" alt="dice">`;
      break;
    case 3:
      el.innerHTML = `<img src="./images/dice/dice3.png" alt="dice">`;
      break;
    case 4:
      el.innerHTML = `<img src="./images/dice/dice4.png" alt="dice">`;
      break;
    case 5:
      el.innerHTML = `<img src="./images/dice/dice5.png" alt="dice">`;
      break;
    case 6:
      el.innerHTML = `<img src="./images/dice/dice6.png" alt="dice">`;
      break;
  }
}

function ownedCards(player, parent){
  parent.innerHTML = '';

  player.cards.forEach(card => {
    
    add2Places('brownCard1', 'brownCard2');
    add2Places('brownCard2', 'brownCard1');
    add2Places('blueCard1', 'blueCard2');
    add2Places('blueCard2', 'blueCard1');
    add3Places('redCard1', 'redCard2', 'redCard3');
    add3Places('redCard2', 'redCard1', 'redCard3');
    add3Places('redCard3', 'redCard2', 'redCard1');
    add3Places('yellowCard1', 'yellowCard2', 'yellowCard3');
    add3Places('yellowCard2', 'yellowCard1', 'yellowCard3');
    add3Places('yellowCard3', 'yellowCard2', 'yellowCard1');
    add3Places('orangeCard1', 'orangeCard2', 'orangeCard3');
    add3Places('orangeCard2', 'orangeCard1', 'orangeCard3');
    add3Places('orangeCard3', 'orangeCard2', 'orangeCard1');
    add3Places('pinkCard1', 'pinkCard2', 'pinkCard3');
    add3Places('pinkCard2', 'pinkCard1', 'pinkCard3');
    add3Places('pinkCard3', 'pinkCard2', 'pinkCard1');
    add3Places('greenCard1', 'greenCard2', 'greenCard3');
    add3Places('greenCard2', 'greenCard1', 'greenCard3');
    add3Places('greenCard3', 'greenCard2', 'greenCard1');
    add3Places('lightBlueCard1', 'lightBlueCard2', 'lightBlueCard3');
    add3Places('lightBlueCard2', 'lightBlueCard1', 'lightBlueCard3');
    add3Places('lightBlueCard3', 'lightBlueCard2', 'lightBlueCard1');

    if(card === 'targaryen' || card === 'lannister' || card === 'baratheon' || card === 'stark' || card === 'card150Left' || card === 'card150Top'){
      add();
    }
    

    function add3Places(firstCard, secondCard, thirdCard){
      if(card === firstCard){
        if(cardsInfo[firstCard].el.querySelector('.card-color').innerHTML === '' && 
          cardsInfo[secondCard].el.querySelector('.card-color').innerHTML === '' &&
          cardsInfo[thirdCard].el.querySelector('.card-color').innerHTML === ''){
          add();
        } else {
          const el1 = cardsInfo[firstCard].el.querySelectorAll('.card-color img');
          const el2 = cardsInfo[secondCard].el.querySelectorAll('.card-color img');
          const el3 = cardsInfo[thirdCard].el.querySelectorAll('.card-color img');
          let isEl1 = false;
          let isEl2 = false;
          let isEl3 = false;
  
          el1.forEach(img => {
            if(img.src !== 'http://127.0.0.1:5500/images/builds/add-house-plus.webp'){
              isEl1 = true;
              return;
            }
          });
  
          el2.forEach(img => {
            if(img.src !== 'http://127.0.0.1:5500/images/builds/add-house-plus.webp'){
              isEl2 = true;
              return;
            }
          });

          el3.forEach(img => {
            if(img.src !== 'http://127.0.0.1:5500/images/builds/add-house-plus.webp'){
              isEl2 = true;
              return;
            }
          });
  
          if(isEl1 || isEl2 || isEl3){
          } else {
            add();
          }
        }
      }
    }

    function add2Places(firstCard, secondCard){
      if(card === firstCard){
        if(cardsInfo[firstCard].el.querySelector('.card-color').innerHTML === '' && 
          cardsInfo[secondCard].el.querySelector('.card-color').innerHTML === ''){
          add();
        } else {
          const el1 = cardsInfo[firstCard].el.querySelectorAll('.card-color img');
          const el2 = cardsInfo[secondCard].el.querySelectorAll('.card-color img');
          let isEl1 = false;
          let isEl2 = false;
  
          el1.forEach(img => {
            if(img.src !== 'http://127.0.0.1:5500/images/builds/add-house-plus.webp'){
              isEl1 = true;
              return;
            }
          });
  
          el2.forEach(img => {
            if(img.src !== 'http://127.0.0.1:5500/images/builds/add-house-plus.webp'){
              isEl2 = true;
              return;
            }
          });
  
          if(isEl1 || isEl2){
          } else {
            add();
          }
        }
      }
    }

    function add(){
      const option = document.createElement('option');
      option.value = cardsInfo[card].name;
      option.innerHTML = cardsInfo[card].name;
      option.style.backgroundColor = cardsInfo[card].color;
      parent.appendChild(option);
    }
  });
}

let tradeWith;

document.querySelector('.deal-popup .left-side #range-money').addEventListener('input', () => {
  const value = document.querySelector('.deal-popup .left-side #range-money').value;
  const result = Math.round((value * playerTurn.money) / 100);
  document.querySelector('.deal-popup .left-side .money').innerHTML = `$${result}`;
});

document.querySelector('.deal-popup .right-side #range-money').addEventListener('input', () => {
  let result;
  const value = document.querySelector('.deal-popup .right-side #range-money').value;

  if(tradeWith === 'Yone'){
    result = Math.round((value * yoneInfo.money) / 100);
  }

  if(tradeWith === 'Car'){
    result = Math.round((value * player1Info.money) / 100);
  }

  if(tradeWith === 'Duck'){
    result = Math.round((value * player2Info.money) / 100);
  }

  if(tradeWith === 'T-rex'){
    result = Math.round((value * player3Info.money) / 100);
  }

  document.querySelector('.deal-popup .right-side .money').innerHTML = `$${result}`;
});

document.querySelector('.player-properties .deal img').addEventListener('click', () => {
  document.querySelector('.deal-popup').classList.add('active-deal');
  document.querySelector('.deal-popup .left-side').classList.remove('active-player-for-trade');
  document.querySelector('.deal-popup .right-side').classList.remove('active-player-for-trade');

  const playersElement = document.querySelector('.deal-popup #players');
  playersElement.innerHTML = '';
  const players = [yoneInfo, player1Info, player2Info, player3Info];

  switch (playerTurn) {
    case yoneInfo: {
      players.forEach(player => {
        if (player === yoneInfo) {
          ownedCards(yoneInfo, document.querySelector('.deal-popup #offer-current'));
          return;
        } else {
          const option = document.createElement('option');
          option.value = `${player.name}`;
          option.innerHTML = `${player.name}`;
          playersElement.appendChild(option);
        }
      });
      document.querySelector('.deal-popup .current-player').innerHTML = yoneInfo.name;
      break;
    }
    case player1Info: {
      players.forEach(player => {
        if (player === player1Info) {
          ownedCards(player1Info, document.querySelector('.deal-popup #offer-current'));
          return;
        } else {
          const option = document.createElement('option');
          option.value = `${player.name}`;
          option.innerHTML = `${player.name}`;
          playersElement.appendChild(option);
        }
      });
      document.querySelector('.deal-popup .current-player').innerHTML = player1Info.name;
      break;
    }
    case player2Info: {
      players.forEach(player => {
        if (player === player2Info) {
          ownedCards(player2Info, document.querySelector('.deal-popup #offer-current'));
          return;
        } else {
          const option = document.createElement('option');
          option.value = `${player.name}`;
          option.innerHTML = `${player.name}`;
          playersElement.appendChild(option);
        }
      });
      document.querySelector('.deal-popup .current-player').innerHTML = player2Info.name;
      break;
    }
    case player3Info: {
      players.forEach(player => {
        if (player === player3Info) {
          ownedCards(player3Info, document.querySelector('.deal-popup #offer-current'));
          return;
        } else {
          const option = document.createElement('option');
          option.value = `${player.name}`;
          option.innerHTML = `${player.name}`;
          playersElement.appendChild(option);
        }
      });
      document.querySelector('.deal-popup .current-player').innerHTML = player3Info.name;
      break;
    }
  }
});

document.querySelector('.deal-popup .submit button').addEventListener('click', () => {
  document.querySelector('.deal-popup .right-side').classList.remove('hidden');
  tradeWith = document.querySelector('#players').value;

  document.querySelector('.deal-popup .right-side .offer-to-player').innerHTML = tradeWith;
  document.querySelector('.deal-popup .right-side .money').innerHTML = `$0`;
  document.querySelector('.deal-popup .right-side .range-style').value = `0`;

  if (tradeWith === yoneInfo.name) {
    ownedCards(yoneInfo, document.querySelector('.deal-popup .right-side #offered-to'));
  }
  if (tradeWith === player1Info.name) {
    ownedCards(player1Info, document.querySelector('.deal-popup .right-side #offered-to'));
  }
  if (tradeWith === player2Info.name) {
    ownedCards(player2Info, document.querySelector('.deal-popup .right-side #offered-to'));
  }
  if (tradeWith === player3Info.name) {
    ownedCards(player3Info, document.querySelector('.deal-popup .right-side #offered-to'));
  }
});

document.querySelector('.deal-popup .offer-btn button').addEventListener('click', () => {
  if(!document.querySelector('.deal-popup .right-side').classList.contains('hidden')){
    document.querySelector('.deal-popup .decision').classList.add('active');
    document.querySelector('.deal-popup .decision .title').innerHTML = `Player ${playerTurn.name} is making an offer to ${tradeWith}`;
  }
});

document.querySelector('.deal-popup .decision .decline').addEventListener('click', () => {
  document.querySelector('.deal-popup .decision').classList.remove('active');
});

function exchangeCards(pushToPlayer, arrayOfCards, popToPlayer){
  if(arrayOfCards.length){
    pushToPlayer.cards = pushToPlayer.cards.concat(arrayOfCards);
    popToPlayer.cards = popToPlayer.cards.filter(value => !arrayOfCards.includes(value));
  }

  if(pushToPlayer.cards.length){
    pushToPlayer.cards.forEach(card => {
      cardsInfo[card].el.style.color = pushToPlayer.color;
      cardsInfo[card].el.style.fontWeight = 'bold';
    });
  }

  if(pushToPlayer.cards.length){
    popToPlayer.cards.forEach(card => {
      cardsInfo[card].el.style.color = popToPlayer.color;
      cardsInfo[card].el.style.fontWeight = 'bold';
    });
  }
}

document.querySelector('.deal-popup .decision .accept').addEventListener('click', () => {
  const selector1 = document.querySelector('.deal-popup #offer-current');
  const selector2 = document.querySelector('.deal-popup #offered-to');

  document.querySelector('.deal-popup .decision').classList.remove('active');
  document.querySelector('.deal-popup').classList.remove('active-deal');
  document.querySelector('.deal-popup .right-side').classList.add('hidden');

  let selectedValues1 = [];
  let selectedValues2 = [];
  
  for (let i = 0; i < selector1.options.length; i++) {
    let option = selector1.options[i];

    if (option.selected) {
      selectedValues1.push(option.value);
    }
  }

  for (let i = 0; i < selector2.options.length; i++) {
    let option = selector2.options[i];

    if (option.selected) {
      selectedValues2.push(option.value);
    }
  }

  const moneyPlayer1 = parseInt((document.querySelector('.deal-popup .left-side .money').innerHTML).slice(1));
  const moneyPlayer2 = parseInt((document.querySelector('.deal-popup .right-side .money').innerHTML).slice(1));

  if(moneyPlayer1 > moneyPlayer2){
    const money = moneyPlayer1 - moneyPlayer2;
    switch(tradeWith){
      case yoneInfo.name: {
        yoneInfo.money += money;
        playerTurn.money -= money;

        document.querySelector('.player-yone .player__money').innerHTML = `$${yoneInfo.money}`;

        switch(playerTurn.name){
          case player1Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(yoneInfo, selectedValues1, player1Info);
            exchangeCards(playerTurn, selectedValues2, player1Info);
            document.querySelector('.player-1 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player2Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(yoneInfo, selectedValues1, player2Info);
            exchangeCards(playerTurn, selectedValues2, player2Info);
            document.querySelector('.player-2 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player3Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(yoneInfo, selectedValues1, player3Info);
            exchangeCards(playerTurn, selectedValues2, player3Info);
            document.querySelector('.player-3 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
        }
        
        break;
      }
      case player1Info.name: {
        player1Info.money += money;
        playerTurn.money -= money;

        document.querySelector('.player-1 .player__money').innerHTML = `$${player1Info.money}`;

        switch(playerTurn.name){
          case yoneInfo.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player1Info, selectedValues1, yoneInfo);
            exchangeCards(playerTurn, selectedValues2, yoneInfo);
            document.querySelector('.player-yone .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player2Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player1Info, selectedValues1, player2Info);
            exchangeCards(playerTurn, selectedValues2, player2Info);
            document.querySelector('.player-2 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player3Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player1Info, selectedValues1, player3Info);
            exchangeCards(playerTurn, selectedValues2, player3Info);
            document.querySelector('.player-3 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
        }
        break;
      }
      case player2Info.name: {
        exchangeCards(player2Info, selectedValues1);
        exchangeCards(playerTurn, selectedValues2);
        player2Info.money += money;
        playerTurn.money -= money;

        document.querySelector('.player-2 .player__money').innerHTML = `$${player2Info.money}`;

        switch(playerTurn.name){
          case yoneInfo.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);
            exchangeCards(player2Info, selectedValues1, yoneInfo);
            exchangeCards(playerTurn, selectedValues2, yoneInfo);
            document.querySelector('.player-yone .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player1Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player2Info, selectedValues1, player1Info);
            exchangeCards(playerTurn, selectedValues2, player1Info);
            document.querySelector('.player-1 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player3Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player2Info, selectedValues1, player3Info);
            exchangeCards(playerTurn, selectedValues2, player3Info);
            document.querySelector('.player-3 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
        }

        break;
      }
      case player3Info.name: {
        player3Info.money += money;
        playerTurn.money -= money;

        document.querySelector('.player-3 .player__money').innerHTML = `$${player2Info.money}`;

        switch(playerTurn.name){
          case yoneInfo.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player3Info, selectedValues1, yoneInfo);
            exchangeCards(playerTurn, selectedValues2, yoneInfo);
            document.querySelector('.player-yone .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player1Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player3Info, selectedValues1, player1Info);
            exchangeCards(playerTurn, selectedValues2, player1Info);
            document.querySelector('.player-1 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player2Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player3Info, selectedValues1, player2Info);
            exchangeCards(playerTurn, selectedValues2, player2Info);
            document.querySelector('.player-2 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
        }

        break;
      }
    }
  } else if(moneyPlayer1 < moneyPlayer2){
    const money = moneyPlayer2 - moneyPlayer1;
    switch(tradeWith){
      case yoneInfo.name: {
        yoneInfo.money -= money;
        playerTurn.money += money;

        document.querySelector('.player-yone .player__money').innerHTML = `$${yoneInfo.money}`;

        switch(playerTurn.name){
          case player1Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(yoneInfo, selectedValues1, player1Info);
            exchangeCards(playerTurn, selectedValues2, player1Info);
            document.querySelector('.player-1 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player2Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(yoneInfo, selectedValues1, player2Info);
            exchangeCards(playerTurn, selectedValues2, player2Info);
            document.querySelector('.player-2 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player3Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(yoneInfo, selectedValues1, player3Info);
            exchangeCards(playerTurn, selectedValues2, player3Info);
            document.querySelector('.player-3 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
        }
        
        break;
      }
      case player1Info.name: {
        player1Info.money -= money;
        playerTurn.money += money;

        document.querySelector('.player-1 .player__money').innerHTML = `$${player1Info.money}`;

        switch(playerTurn.name){
          case yoneInfo.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player1Info, selectedValues1, yoneInfo);
            exchangeCards(playerTurn, selectedValues2, yoneInfo);
            document.querySelector('.player-yone .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player2Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player1Info, selectedValues1, player2Info);
            exchangeCards(playerTurn, selectedValues2, player2Info);
            document.querySelector('.player-2 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player3Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player1Info, selectedValues1, player3Info);
            exchangeCards(playerTurn, selectedValues2, player3Info);
            document.querySelector('.player-3 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
        }
        break;
      }
      case player2Info.name: {
        player2Info.money -= money;
        playerTurn.money += money;

        document.querySelector('.player-2 .player__money').innerHTML = `$${player2Info.money}`;

        switch(playerTurn.name){
          case yoneInfo.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player2Info, selectedValues1, yoneInfo);
            exchangeCards(playerTurn, selectedValues2, yoneInfo);
            document.querySelector('.player-yone .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player1Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player2Info, selectedValues1, player1Info);
            exchangeCards(playerTurn, selectedValues2, player1Info);
            document.querySelector('.player-1 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player3Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player2Info, selectedValues1, player3Info);
            exchangeCards(playerTurn, selectedValues2, player3Info);
            document.querySelector('.player-3 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
        }

        break;
      }
      case player3Info.name: {
        player3Info.money -= money;
        playerTurn.money += money;

        document.querySelector('.player-3 .player__money').innerHTML = `$${player2Info.money}`;

        switch(playerTurn.name){
          case yoneInfo.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player3Info, selectedValues1, yoneInfo);
            exchangeCards(playerTurn, selectedValues2, yoneInfo);
            document.querySelector('.player-yone .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player1Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player3Info, selectedValues1, player1Info);
            exchangeCards(playerTurn, selectedValues2, player1Info);
            document.querySelector('.player-1 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
          case player2Info.name:{
            selectedValues1 = changeNameOfArrayCards(selectedValues1);
            selectedValues2 = changeNameOfArrayCards(selectedValues2);  
            exchangeCards(player3Info, selectedValues1, player2Info);
            exchangeCards(playerTurn, selectedValues2, player2Info);
            document.querySelector('.player-2 .player__money').innerHTML = `$${playerTurn.money}`;
            break;
          }
        }

        break;
      }
    }
  } else {
    switch(tradeWith){
      case yoneInfo.name: {
        selectedValues1 = changeNameOfArrayCards(selectedValues1);
        selectedValues2 = changeNameOfArrayCards(selectedValues2);
        exchangeCards(yoneInfo, selectedValues1, playerTurn);
        exchangeCards(playerTurn, selectedValues2, yoneInfo);
        break;
      }
      case player1Info.name: {
        selectedValues1 = changeNameOfArrayCards(selectedValues1);
        selectedValues2 = changeNameOfArrayCards(selectedValues2);
        exchangeCards(player1Info, selectedValues1, playerTurn);
        exchangeCards(playerTurn, selectedValues2, player1Info);
        break;
      }
      case player2Info.name: {
        selectedValues1 = changeNameOfArrayCards(selectedValues1);
        selectedValues2 = changeNameOfArrayCards(selectedValues2);
        exchangeCards(player2Info, selectedValues1);
        exchangeCards(playerTurn, selectedValues2);
        break;
      }
      case player3Info.name: {
        selectedValues1 = changeNameOfArrayCards(selectedValues1);
        selectedValues2 = changeNameOfArrayCards(selectedValues2);
        exchangeCards(player3Info, selectedValues1, playerTurn);
        exchangeCards(playerTurn, selectedValues2, player3Info);
        break;
      }
    }
  }

  document.querySelector('.deal-popup .right-side #range-money').value = 0;
  document.querySelector('.deal-popup .left-side #range-money').value = 0;
  document.querySelector('.deal-popup .right-side .money').innerHTML = `$0`;
  document.querySelector('.deal-popup .left-side .money').innerHTML = `$0`;
});

function changeNameOfArrayCards(arr){
  let newArray = [];
  arr.forEach(card => {
    for (const key in cardsInfo) {
      if(cardsInfo[key].name !== undefined && cardsInfo[key].name === card){
        newArray.push(key);
      }
    }
  });
  return newArray;
}

document.querySelector('.deal-popup .close').addEventListener('click', () => {
  document.querySelector('.deal-popup').classList.remove('active-deal');
  document.querySelector('.deal-popup .right-side').classList.add('hidden');
  document.querySelector('.deal-popup .right-side #range-money').value = 0;
  document.querySelector('.deal-popup .left-side #range-money').value = 0;
  document.querySelector('.deal-popup .right-side .money').innerHTML = `$0`;
  document.querySelector('.deal-popup .left-side .money').innerHTML = `$0`;
  document.querySelector('.deal-popup .decision').classList.remove('active');
});

document.querySelector('.player-properties .mortgage img').addEventListener('click', () => {
  document.querySelector('.mortgage-popup').classList.add('active');
  document.querySelector('.mortgage-popup .player-name').innerHTML = playerTurn.name;

  const radio1 = document.querySelectorAll('.mortgage-popup label input')[0];
  const radio2 = document.querySelectorAll('.mortgage-popup label input')[1];
  radio1.checked = true;

  const cardsForMortgage = {
    cards: []
  }

  const cardsForUnmortgage = {
    cards: []
  }

  if(radio1.checked){
    playerTurn.cards.forEach(card => {
      if(!cardsInfo[card].isMortgaged){
        cardsForMortgage.cards.push(card);
      }
    });
    ownedCards(cardsForMortgage, document.querySelector('.mortgage-popup #mortgage-cards'));
    cardsForMortgage.cards = [];
  }

  if(radio2.checked){
    playerTurn.cards.forEach(card => {
      if(cardsInfo[card].isMortgaged){
        cardsForUnmortgage.cards.push(card);
      }
    });
    ownedCards(cardsForUnmortgage, document.querySelector('.mortgage-popup #mortgage-cards'));
    cardsForUnmortgage.cards = [];
  }

  radio1.onclick = () => {
    playerTurn.cards.forEach(card => {
      if(!cardsInfo[card].isMortgaged){
        cardsForMortgage.cards.push(card);
      }
    });
    ownedCards(cardsForMortgage, document.querySelector('.mortgage-popup #mortgage-cards'));
    cardsForMortgage.cards = [];
  }
  
  radio2.onclick = () => {
    playerTurn.cards.forEach(card => {
      if(cardsInfo[card].isMortgaged){
        cardsForUnmortgage.cards.push(card);
      }
    });
    ownedCards(cardsForUnmortgage, document.querySelector('.mortgage-popup #mortgage-cards'));
    cardsForUnmortgage.cards = [];
  }
});

document.querySelector('.mortgage-popup .mortgage-cards-btn').addEventListener('click', () => {
  document.querySelector('.mortgage-popup').classList.remove('active');
  const selectedNode = document.querySelector('.mortgage-popup #mortgage-cards');
  let selectedCards = [];

  for (let i = 0; i < selectedNode.options.length; i++) {
    let option = selectedNode.options[i];

    if (option.selected) {
      selectedCards.push(option.value);
    }
  }

  selectedCards = changeNameOfArrayCards(selectedCards);
  selectedCards.forEach(card => {
    if(!cardsInfo[card].isMortgaged){
      cardsInfo[card].isMortgaged = true;
      playerTurn.money += cardsInfo[card].mortgage;
      console.log(playerTurn.money);
      switch(playerTurn.name){
        case yoneInfo.name : {
          document.querySelector('.player-yone .player__money').innerHTML = `$${playerTurn.money}`;
          break; 
        }
        case player1Info.name : {
          document.querySelector('.player-1 .player__money').innerHTML = `$${playerTurn.money}`;
          break; 
        }
        case player2Info.name : {
          document.querySelector('.player-2 .player__money').innerHTML = `$${playerTurn.money}`;
          break; 
        }
        case player3Info.name : {
          document.querySelector('.player-3 .player__money').innerHTML = `$${playerTurn.money}`;
          break; 
        }
      }
      cardsInfo[card].el.querySelector('.card-name').innerHTML = `Mortgaged <br> ${cardsInfo[card].name}`;
    } else {
      cardsInfo[card].isMortgaged = false;
      playerTurn.money -= cardsInfo[card].unmortgage;

      switch(playerTurn.name){
        case yoneInfo.name : {
          document.querySelector('.player-yone .player__money').innerHTML = `$${playerTurn.money}`;
          break; 
        }
        case player1Info.name : {
          document.querySelector('.player-1 .player__money').innerHTML = `$${playerTurn.money}`;
          break; 
        }
        case player2Info.name : {
          document.querySelector('.player-2 .player__money').innerHTML = `$${playerTurn.money}`;
          break; 
        }
        case player3Info.name : {
          document.querySelector('.player-3 .player__money').innerHTML = `$${playerTurn.money}`;
          break; 
        }
      }

      cardsInfo[card].el.querySelector('.card-name').innerHTML = `${cardsInfo[card].name}`;
    }
  });


  console.log(selectedCards);

  if(document.querySelector(".mortgage-popup #mortgage").checked){
    alert('Selected cards were mortgaged.');
  } else {
    alert('Selected cards were unmortgaged.');
  }
  
});

document.querySelector('.mortgage-popup .close').addEventListener('click', () => {
  document.querySelector('.mortgage-popup').classList.remove('active');
});

function getRandomNumber(min, max) {
  randomNumber = Math.floor(Math.random() * max) + min;
  return randomNumber;
}