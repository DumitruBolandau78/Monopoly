"use strict";

import { yoneInfo, player1Info, player2Info, player3Info } from './players-info.js';
import { cardsInfo } from './cards-info.js';
import { randomMissions } from './random-missions.js';

let randomNumber = null;
let firstRandomNr, secondRandomNr;

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
  if (playerTurn == yoneInfo) {
    playerTurn = player1Info;
    playerMoneyTurn = player1Money;
    playerIconTurn = player1Icon;
    document.querySelector('.whose-turn h1').innerHTML = `Car`;
    return;
  }

  if (playerTurn == player1Info) {
    playerTurn = player2Info;
    playerMoneyTurn = player2Money;
    playerIconTurn = player2Icon;
    document.querySelector('.whose-turn h1').innerHTML = `Duck`;
    return;
  }

  if (playerTurn == player2Info) {
    playerTurn = player3Info;
    playerMoneyTurn = player3Money;
    playerIconTurn = player3Icon;
    document.querySelector('.whose-turn h1').innerHTML = `T-rex`;
    return;
  }

  if (playerTurn == player3Info) {
    playerTurn = yoneInfo;
    playerMoneyTurn = yoneMoney;
    playerIconTurn = playerYoneIcon;
    document.querySelector('.whose-turn h1').innerHTML = `Yone`;
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
  }, (firstRandomNr + secondRandomNr) * 500);
  ///(firstRandomNr + secondRandomNr)
}

let a = 6;


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
    playerTurn.top -= normalCardWidth + 2;
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
    playerTurn.left -= normalCardWidth + 1.8;
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

        if(card1.classList.contains('row')){
          card1.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }
  
        if(card1.classList.contains('column')){
          card1.style.gridTemplateColumns = '1fr';
          card1.style.gridTemplateRows = 'repeat(5, 1fr)';
        }

        if(card2.classList.contains('row')){
          card2.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }
  
        if(card2.classList.contains('column')){
          card2.style.gridTemplateColumns = '1fr';
          card2.style.gridTemplateRows = 'repeat(5, 1fr)';
        }

        if(card3.classList.contains('row')){
          card3.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }
  
        if(card3.classList.contains('column')){
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

            for(let i = 0; i < 5; i++){
              if(card1.children[i] !== undefined && card1.children[i].classList.contains('hotel')){
                return;
              }

              if(card1.children[i] === undefined){
                const image = document.createElement('img');
                image.src = '../images/builds/add-house-plus.webp';
                image.alt = 'icon';
                image.id = `${name1}`;
                card1.appendChild(image);
              }
            }

            for(let i = 0; i < 5; i++){
              if(card2.children[i] !== undefined && card2.children[i].classList.contains('hotel')){
                return;
              }

              if(card2.children[i] === undefined){
                const image = document.createElement('img');
                image.src = '../images/builds/add-house-plus.webp';
                image.alt = 'icon';
                image.id = `${name2}`;
                card2.appendChild(image);
              }
            }

            for(let i = 0; i < 5; i++){
              if(card3.children[i] !== undefined && card3.children[i].classList.contains('hotel')){
                return;
              }
              if(card3.children[i] === undefined){
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
                  if((counterLightBlue1 - counterLightBlue2 === 0 || counterLightBlue1 - counterLightBlue2 === 1) &&
                    (counterLightBlue1 - counterLightBlue3 === 0 || counterLightBlue1 - counterLightBlue3 === 1)){
                    counterLightBlue1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['lightBlueCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterLightBlue1, counterLightBlue2, counterLightBlue3)) {
                  if (counterLightBlue1 >= 4) {
                    getHotel(e.target, 'lightBlueCard1', counterLightBlue1);
                    playerTurn.money -= cardsInfo['lightBlueCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterLightBlue1++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['lightBlueCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'lightBlueCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterLightBlue2 - counterLightBlue1 === 0 || counterLightBlue2 - counterLightBlue1 === 1) &&
                    (counterLightBlue2 - counterLightBlue3 === 0 || counterLightBlue2 - counterLightBlue3 === 1)){
                    counterLightBlue2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['lightBlueCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterLightBlue2, counterLightBlue1, counterLightBlue3)) {
                  if (counterLightBlue2 >= 4) {
                    getHotel(e.target, 'lightBlueCard2', counterLightBlue2);
                    playerTurn.money -= cardsInfo['lightBlueCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterLightBlue2++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['lightBlueCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'lightBlueCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterLightBlue3 - counterLightBlue2 === 0 || counterLightBlue3 - counterLightBlue2 === 1) &&
                    (counterLightBlue3 - counterLightBlue1 === 0 || counterLightBlue3 - counterLightBlue1 === 1)){
                    counterLightBlue3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['lightBlueCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterLightBlue3, counterLightBlue2, counterLightBlue1)) {
                  if (counterLightBlue3 >= 4) {
                    getHotel(e.target, 'lightBlueCard3', counterLightBlue3);
                    playerTurn.money -= cardsInfo['lightBlueCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterLightBlue3++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['lightBlueCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'pinkCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterPink1 - counterPink2 === 0 || counterPink1 - counterPink2 === 1) &&
                    (counterPink1 - counterPink3 === 0 || counterPink1 - counterPink3 === 1)){
                      counterPink1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['pinkCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterPink1, counterPink2, counterPink3)) {
                  if (counterPink1 >= 4) {
                    getHotel(e.target, 'pinkCard1', counterPink1);
                    playerTurn.money -= cardsInfo['pinkCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterPink1++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['pinkCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'pinkCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterPink2 - counterPink1 === 0 || counterPink2 - counterPink1 === 1) &&
                    (counterPink2 - counterPink3 === 0 || counterPink2 - counterPink3 === 1)){
                      counterPink2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['pinkCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterPink2, counterPink1, counterPink3)) {
                  if (counterPink2 >= 4) {
                    getHotel(e.target, 'pinkCard2', counterPink2);
                    playerTurn.money -= cardsInfo['pinkCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterPink2++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['pinkCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'pinkCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterPink3 - counterPink2 === 0 || counterPink3 - counterPink2 === 1) &&
                    (counterPink3 - counterPink1 === 0 || counterPink3 - counterPink1 === 1)){
                      counterPink3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['pinkCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterPink3, counterPink2, counterPink1)) {
                  if (counterPink3 >= 4) {
                    getHotel(e.target, 'pinkCard3', counterPink3);
                    playerTurn.money -= cardsInfo['pinkCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterPink3++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['pinkCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'orangeCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterOrange1 - counterOrange2 === 0 || counterOrange1 - counterOrange2 === 1) &&
                    (counterOrange1 - counterOrange3 === 0 || counterOrange1 - counterOrange3 === 1)){
                      counterOrange1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['orangeCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterOrange1, counterOrange2, counterOrange3)) {
                  if (counterOrange1 >= 4) {
                    getHotel(e.target, 'orangeCard1', counterOrange1);
                    playerTurn.money -= cardsInfo['orangeCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterOrange1++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['orangeCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'orangeCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterOrange2 - counterOrange1 === 0 || counterOrange2 - counterOrange1 === 1) &&
                    (counterOrange2 - counterOrange3 === 0 || counterOrange2 - counterOrange3 === 1)){
                      counterOrange2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['orangeCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterOrange2, counterOrange1, counterOrange3)) {
                  if (counterOrange2 >= 4) {
                    getHotel(e.target, 'orangeCard2', counterOrange2);
                    playerTurn.money -= cardsInfo['orangeCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterOrange2++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['orangeCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'orangeCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterOrange3 - counterOrange2 === 0 || counterOrange3 - counterOrange2 === 1) &&
                    (counterOrange3 - counterOrange1 === 0 || counterOrange3 - counterOrange1 === 1)){
                      counterOrange3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['orangeCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterOrange3, counterOrange2, counterOrange1)) {
                  if (counterOrange3 >= 4) {
                    getHotel(e.target, 'orangeCard3', counterOrange3);
                    playerTurn.money -= cardsInfo['orangeCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterOrange3++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['orangeCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'redCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterRed1 - counterRed2 === 0 || counterRed1 - counterRed2 === 1) &&
                    (counterRed1 - counterRed3 === 0 || counterRed1 - counterRed3 === 1)){
                      counterRed1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['redCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterRed1, counterRed2, counterRed3)) {
                  if (counterRed1 >= 4) {
                    getHotel(e.target, 'redCard1', counterRed1);
                    playerTurn.money -= cardsInfo['redCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterRed1++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['redCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'redCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterRed2 - counterRed1 === 0 || counterRed2 - counterRed1 === 1) &&
                    (counterRed2 - counterRed3 === 0 || counterRed2 - counterRed3 === 1)){
                      counterRed2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['redCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterRed2, counterRed1, counterRed3)) {
                  if (counterRed2 >= 4) {
                    getHotel(e.target, 'redCard2', counterRed2);
                    playerTurn.money -= cardsInfo['redCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterRed2++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['redCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'redCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterRed3 - counterRed2 === 0 || counterRed3 - counterRed2 === 1) &&
                    (counterRed3 - counterRed1 === 0 || counterRed3 - counterRed1 === 1)){
                      counterRed3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['redCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterRed3, counterRed2, counterRed1)) {
                  if (counterRed3 >= 4) {
                    getHotel(e.target, 'redCard3', counterRed3);
                    playerTurn.money -= cardsInfo['redCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterRed3++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['redCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'yellowCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterYellow1 - counterYellow2 === 0 || counterYellow1 - counterYellow2 === 1) &&
                    (counterYellow1 - counterYellow3 === 0 || counterYellow1 - counterYellow3 === 1)){
                      counterYellow1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['yellowCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterYellow1, counterYellow2, counterYellow3)) {
                  if (counterYellow1 >= 4) {
                    getHotel(e.target, 'yellowCard1', counterYellow1);
                    playerTurn.money -= cardsInfo['yellowCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterYellow1++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['yellowCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'yellowCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterYellow2 - counterYellow1 === 0 || counterYellow2 - counterYellow1 === 1) &&
                    (counterYellow2 - counterYellow3 === 0 || counterYellow2 - counterYellow3 === 1)){
                      counterYellow2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['yellowCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterYellow2, counterYellow1, counterYellow3)) {
                  if (counterYellow2 >= 4) {
                    getHotel(e.target, 'yellowCard2', counterYellow2);
                    playerTurn.money -= cardsInfo['yellowCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterYellow2++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['yellowCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'yellowCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterYellow3 - counterYellow2 === 0 || counterYellow3 - counterYellow2 === 1) &&
                    (counterYellow3 - counterYellow1 === 0 || counterYellow3 - counterYellow1 === 1)){
                      counterYellow3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['yellowCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterYellow3, counterYellow2, counterYellow1)) {
                  if (counterYellow3 >= 4) {
                    getHotel(e.target, 'yellowCard3', counterYellow3);
                    playerTurn.money -= cardsInfo['yellowCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterYellow3++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['yellowCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'greenCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterGreen1 - counterGreen2 === 0 || counterGreen1 - counterGreen2 === 1) &&
                    (counterGreen1 - counterGreen3 === 0 || counterGreen1 - counterGreen3 === 1)){
                      counterGreen1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['greenCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterGreen1, counterGreen2, counterGreen3)) {
                  if (counterGreen1 >= 4) {
                    getHotel(e.target, 'greenCard1', counterGreen1);
                    playerTurn.money -= cardsInfo['greenCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterGreen1++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['greenCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'greenCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterGreen2 - counterGreen1 === 0 || counterGreen2 - counterGreen1 === 1) &&
                    (counterGreen2 - counterGreen3 === 0 || counterGreen2 - counterGreen3 === 1)){
                      counterGreen2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['greenCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterGreen2, counterGreen1, counterGreen3)) {
                  if (counterGreen2 >= 4) {
                    getHotel(e.target, 'greenCard2', counterGreen2);
                    playerTurn.money -= cardsInfo['greenCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterGreen2++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['greenCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'greenCard3': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if((counterGreen3 - counterGreen2 === 0 || counterGreen3 - counterGreen1 === 1) &&
                    (counterGreen3 - counterGreen1 === 0 || counterGreen3 - counterGreen1 === 1)){
                      counterGreen3--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['greenCard3'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (verifyCountersForHouses(counterGreen3, counterGreen2, counterGreen1)) {
                  if (counterGreen3 >= 4) {
                    getHotel(e.target, 'greenCard3', counterGreen3);
                    playerTurn.money -= cardsInfo['greenCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterGreen3++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['greenCard3'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
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

        if(card1.classList.contains('row')){
          card1.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }
  
        if(card1.classList.contains('column')){
          card1.style.gridTemplateColumns = '1fr';
          card1.style.gridTemplateRows = 'repeat(5, 1fr)';
        }

        if(card2.classList.contains('row')){
          card2.style.gridTemplateColumns = 'repeat(5, 1fr)';
        }
  
        if(card2.classList.contains('column')){
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
            for(let i = 0; i < 5; i++){
              if(card1.children[i] !== undefined && card1.children[i].classList.contains('hotel')){
                return;
              }

              if(card1.children[i] === undefined){
                const image = document.createElement('img');
                image.src = '../images/builds/add-house-plus.webp';
                image.alt = 'icon';
                image.id = `${name1}`;
                card1.appendChild(image);
              }
            }

            for(let i = 0; i < 5; i++){
              if(card2.children[i] !== undefined && card2.children[i].classList.contains('hotel')){
                return;
              }

              if(card2.children[i] === undefined){
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
                  if(counterBrown1 - counterBrown2 === 0 || counterBrown1 - counterBrown2 === 1) {
                    counterBrown1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['brownCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (counterBrown1 - counterBrown2 < 1 || counterBrown1 - counterBrown2 > 1) {
                  if (counterBrown1 >= 4) {
                    getHotel(e.target, 'brownCard1', counterBrown1);
                    playerTurn.money -= cardsInfo['brownCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterBrown1++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['brownCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }
              case 'brownCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if(counterBrown2 - counterBrown1 === 0 || counterBrown2 - counterBrown1 === 1){
                    counterBrown2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['brownCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }
                  
                if (counterBrown2 - counterBrown1 < 1 || counterBrown2 - counterBrown1 > 1) {
                  if (counterBrown2 >= 4) {
                    getHotel(e.target, 'brownCard2', counterBrown2);
                    playerTurn.money -= cardsInfo['brownCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterBrown2++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['brownCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'blueCard1': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if(counterBlue1 - counterBlue2 === 0 || counterBlue1 - counterBlue2 === 1){
                    counterBlue1--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['blueCard1'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (counterBlue1 - counterBlue2 < 1 || counterBlue1 - counterBlue2 > 1) {
                  if (counterBlue1 >= 4) {
                    getHotel(e.target, 'blueCard1', counterBlue1);
                    playerTurn.money -= cardsInfo['blueCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterBlue1++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['blueCard1'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                }
                break;
              }

              case 'blueCard2': {
                if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp' && housesToggle) {
                  if(counterBlue2 - counterBlue1 === 0 || counterBlue2 - counterBlue1 === 1){
                    counterBlue2--;
                    el.parentNode.removeChild(el);
                    playerTurn.money += cardsInfo['blueCard2'].removeHouse;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                  }
                  return;
                }

                if (counterBlue2 - counterBlue1 < 1 || counterBlue2 - counterBlue1 > 1) {
                  if (counterBlue2 >= 4) {
                    getHotel(e.target, 'blueCard2', counterBlue2);
                    playerTurn.money -= cardsInfo['blueCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
                    return;
                  } else if (e.target.src === 'http://127.0.0.1:5500/images/builds/house.webp') {
                    return;
                  } else {
                    counterBlue2++;
                    e.target.src = '../images/builds/house.webp'; e.target.setAttribute('class', 'house');
                    playerTurn.money -= cardsInfo['blueCard2'].houseCost;
                    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
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
  if(el.parentNode.classList.contains('row')){
    el.parentNode.style.gridTemplateColumns = '1fr';
  }

  if(el.parentNode.classList.contains('column')){
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
    if(housesToggle){
      parentNode.innerHTML = '';

      if(parentNode.classList.contains('row')){
        parentNode.style.gridTemplateColumns = 'repeat(5, 1fr)';
      }

      if(parentNode.classList.contains('column')){
        parentNode.style.gridTemplateColumns = '1fr';
        parentNode.style.gridTemplateRows = 'repeat(5, 1fr)';
      }
      
      
      for(let i = 0; i < 4; i++){
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
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              rollDiesBtn.addEventListener("click", rollDiceEvent);
              rollPopupToggle();
              playersTurn();
              rollDiesBtn.innerHTML = "Roll";
              dice1.innerHTML = '';
              dice2.innerHTML = '';
              rollDiesBtn.addEventListener('click', () => {
                popupRoll.classList.add('active');
              });

              verifyIfPlayerHaveSetOfCards(key);
            }
            showInfoPopupCard(cardsInfo[key].color, cardsInfo[key].name, cardsInfo[key].price,
              cardsInfo[key].mortage, cardsInfo[key].rent, cardsInfo[key].rentColorSet, cardsInfo[key].home1,
              cardsInfo[key].home2, cardsInfo[key].home3, cardsInfo[key].home4, cardsInfo[key].hotel, cardsInfo[key].houseCost);

            cardPopup.querySelector('.buy-card-popup .buy button').onclick = () => {
              buyCard(playerTurn, key, playerMoneyTurn, cardsInfo);
              cardPopup.classList.remove('active-card');
              document.querySelector('.player-properties .end-turn').classList.add('active-btn');

              verifyIfPlayerHaveSetOfCards(key);
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
              document.querySelector('.normal-card-stations .mortage-value .price').innerHTML = `$${cardsInfo[key].mortage}`;
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
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              cardPopup.classList.remove('active-card');
              payRent(key);
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
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

            document.querySelector('.buy-card-popup .buy-or-auction').style.display = 'none';
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');
            showInfoPopupCard(cardsInfo[key].color, cardsInfo[key].name, cardsInfo[key].price,
              cardsInfo[key].mortage, cardsInfo[key].rent, cardsInfo[key].rentColorSet, cardsInfo[key].home1,
              cardsInfo[key].home2, cardsInfo[key].home3, cardsInfo[key].home4, cardsInfo[key].hotel, cardsInfo[key].houseCost);
          }

          popupRoll.classList.remove('active');
          cardPopup.classList.add('active-card');
          rollBtnOpen.removeEventListener("click", rollPopupToggle);
        }

        if (key === 'pay200') {
          playerTurn.money -= 200;
          playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
        }

        if (key === 'pay100') {
          playerTurn.money -= 100;
          playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
        }

        if (key === 'justVisiting' || key === 'go' || key === 'pay100' ||
          key === 'pay200' || key === 'freeParking' || key === 'goJail') {
          document.querySelector('.player-properties .end-turn').onclick = () => {
            document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
            deleteAddHousesIcon();
            document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
            playersTurn();
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

          rollBtnOpen.removeEventListener("click", rollPopupToggle);
          document.querySelector('.player-properties .end-turn').classList.add('active-btn');
        }

        if (key === 'lannister' || key === 'baratheon' || key === 'stark' || key === 'targaryen') {
          stationCardPopup.classList.add('active');
          stationCardPopup.querySelector('.name').innerHTML = cardsInfo[key].name;
          stationCardPopup.querySelector('.price span:last-of-type').innerHTML = `$${cardsInfo[key].price}`;
          stationCardPopup.querySelector('.mortage-value span:last-of-type').innerHTML = `$${cardsInfo[key].mortage}`;
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
              buyCard(playerTurn, key, playerMoneyTurn, cardsInfo);
              stationCardPopup.classList.remove('active');
              document.querySelector('.player-properties .end-turn').classList.add('active-btn');
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
              document.querySelector('.auction-popup .families-stations .mortage-value .value').innerHTML = `$${cardsInfo[key].mortage}`;
              document.querySelector('.auction-popup .families-stations .rent .value').innerHTML = `$${cardsInfo[key].rent}`;
              document.querySelector('.auction-popup .families-stations .two-stations .value').innerHTML = `$${cardsInfo[key].stations2}`;
              document.querySelector('.auction-popup .families-stations .three-stations .value').innerHTML = `$${cardsInfo[key].stations3}`;
              document.querySelector('.auction-popup .families-stations .four-stations .value').innerHTML = `$${cardsInfo[key].stations4}`;
            }
          }
          if (cardsInfo[key].isBought) {
            document.querySelector('.stations-popup .buy-or-auction').style.display = 'none';
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              stationCardPopup.classList.remove('active');
              payRent(key);
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
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

          document.querySelector('.random-card-popup__inner .name').innerHTML = `<h1>${cardsInfo[key].name}</h1>`;
          document.querySelector('.random-card-popup__inner .mission').innerHTML = `<h4>${randomMissions[getRandomNumber(0, randomMissions.length - 1)]}</h4>`;
          document.querySelector('.random-card-popup').classList.add('active');
          rollBtnOpen.removeEventListener("click", rollPopupToggle);
          popupRoll.classList.remove('active');

          document.querySelector('.random-card-popup button').onclick = () => {
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');
            document.querySelector('.random-card-popup').classList.remove('active');
          };
        }

        if (key === 'card150Top' || key === 'card150Left') {
          document.querySelector('.stations-150-popup').classList.add('active');
          document.querySelector('.stations-150-popup .name').innerHTML = `${cardsInfo[key].name}`;
          document.querySelector('.stations-150-popup .price span:last-of-type').innerHTML = `$${cardsInfo[key].price}`;
          document.querySelector('.stations-150-popup .mortage-value span:last-of-type').innerHTML = `$${cardsInfo[key].mortage}`;
          rollBtnOpen.removeEventListener("click", rollPopupToggle);
          popupRoll.classList.remove('active');

          if (!cardsInfo[key].isBought) {
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
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
              buyCard(playerTurn, key, playerMoneyTurn, cardsInfo);
              document.querySelector('.player-properties .end-turn').classList.add('active-btn');
              document.querySelector('.stations-150-popup').classList.remove('active');
              const buyOrAuction = document.querySelector('.buy-or-auction');
              buyOrAuction.style.display = 'flex !important';
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
              document.querySelector('.auction-popup .stations150 .mortage-value .value').innerHTML = `$${cardsInfo[key].mortage}`;
            }
          }

          if (cardsInfo[key].isBought) {
            const buyOrAuction = document.querySelector('.buy-or-auction');
            buyOrAuction.style.display = 'none !important';
            document.querySelector('.player-properties .end-turn').classList.add('active-btn');
            document.querySelector('.stations-150-popup .buy-or-auction').style.display = 'none';
            document.querySelector('.player-properties .end-turn').onclick = () => {
              document.querySelector('.player-properties .add-build img').classList.remove('toggle-build-active');
              document.querySelector('.player-properties .remove-build img').classList.remove('toggle-build-active');
              deleteAddHousesIcon();
              document.querySelector('.stations-150-popup').classList.remove('active');
              payRent(key);
              document.querySelector('.player-properties .end-turn').classList.remove('active-btn');
              playersTurn();
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
            yoneOfferedMoney += 10;
            filter[0] = yoneOfferedMoney;
            document.querySelector('.auction-popup .player-yone .offered').innerHTML = `$${yoneOfferedMoney}`;
            counter = 9;
            getBiggestOffert();

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }

          document.querySelector('.auction-popup .player-yone .plus50 button').onclick = () => {
            yoneOfferedMoney += 50;
            filter[0] = yoneOfferedMoney;
            counter = 9;
            getBiggestOffert();
            document.querySelector('.auction-popup .player-yone .offered').innerHTML = `$${yoneOfferedMoney}`;

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }

          document.querySelector('.auction-popup .player-yone .plus100 button').onclick = () => {
            yoneOfferedMoney += 100;
            filter[0] = yoneOfferedMoney;
            counter = 9;
            getBiggestOffert();
            document.querySelector('.auction-popup .player-yone .offered').innerHTML = `$${yoneOfferedMoney}`;

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }


          document.querySelector('.auction-popup .player-1 .plus10 button').onclick = () => {
            player1OfferedMoney += 10;
            filter[1] = player1OfferedMoney;
            document.querySelector('.auction-popup .player-1 .offered').innerHTML = `$${player1OfferedMoney}`;
            counter = 9;
            getBiggestOffert();

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }

          document.querySelector('.auction-popup .player-1 .plus50 button').onclick = () => {
            player1OfferedMoney += 50;
            filter[1] = player1OfferedMoney;
            counter = 9;
            getBiggestOffert();
            document.querySelector('.auction-popup .player-1 .offered').innerHTML = `$${player1OfferedMoney}`;

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }

          document.querySelector('.auction-popup .player-1 .plus100 button').onclick = () => {
            player1OfferedMoney += 100;
            filter[1] = player1OfferedMoney;
            counter = 9;
            getBiggestOffert();
            document.querySelector('.auction-popup .player-1 .offered').innerHTML = `$${player1OfferedMoney}`;

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }


          document.querySelector('.auction-popup .player-2 .plus10 button').onclick = () => {
            player2OfferedMoney += 10;
            filter[2] = player2OfferedMoney;
            document.querySelector('.auction-popup .player-2 .offered').innerHTML = `$${player2OfferedMoney}`;
            counter = 9;
            getBiggestOffert();

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }

          document.querySelector('.auction-popup .player-2 .plus50 button').onclick = () => {
            player2OfferedMoney += 50;
            filter[2] = player2OfferedMoney;
            counter = 9;
            getBiggestOffert();
            document.querySelector('.auction-popup .player-2 .offered').innerHTML = `$${player2OfferedMoney}`;

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }

          document.querySelector('.auction-popup .player-2 .plus100 button').onclick = () => {
            player2OfferedMoney += 100;
            filter[2] = player2OfferedMoney;
            counter = 9;
            getBiggestOffert();
            document.querySelector('.auction-popup .player-2 .offered').innerHTML = `$${player2OfferedMoney}`;

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }


          document.querySelector('.auction-popup .player-3 .plus10 button').onclick = () => {
            player3OfferedMoney += 10;
            filter[3] = player3OfferedMoney;
            document.querySelector('.auction-popup .player-3 .offered').innerHTML = `$${player3OfferedMoney}`;
            counter = 9;
            getBiggestOffert();

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }

          document.querySelector('.auction-popup .player-3 .plus50 button').onclick = () => {
            player3OfferedMoney += 50;
            filter[3] = player3OfferedMoney;
            counter = 9;
            getBiggestOffert();
            document.querySelector('.auction-popup .player-3 .offered').innerHTML = `$${player3OfferedMoney}`;

            if (auctionLastClick) {
              hideTheAuction(key);
            }
          }

          document.querySelector('.auction-popup .player-3 .plus100 button').onclick = () => {
            player3OfferedMoney += 100;
            filter[3] = player3OfferedMoney;
            counter = 9;
            getBiggestOffert();
            document.querySelector('.auction-popup .player-3 .offered').innerHTML = `$${player3OfferedMoney}`;

            if (auctionLastClick) {
              hideTheAuction(key);
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
    playerTurn.money -= cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr);
    payerInfo.money += cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr);
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    playerMoney.innerHTML = `$${payerInfo.money}`;
    console.log(playerTurn.name + ' payed');
    console.log('Payed' + ` ${cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr)}`);
  } else {
    playerTurn.money -= cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr);
    payerInfo.money += cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr);
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    playerMoney.innerHTML = `$${payerInfo.money}`;
    console.log(playerTurn.name + ' payed');
    console.log('Payed' + ` ${cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr)}`);
  }
}

function getOnCard150Top(payerInfo, playerMoney, boughtCard) {
  if (payerInfo.cards.includes('card150Left')) {
    playerTurn.money -= cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr);
    payerInfo.money += cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr);
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    playerMoney.innerHTML = `$${payerInfo.money}`;
    console.log(playerTurn.name + ' payed');
    console.log('Payed' + ` ${cardsInfo[boughtCard].rentTwoCard * (firstRandomNr + secondRandomNr)}`);
  } else {
    playerTurn.money -= cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr);
    payerInfo.money += cardsInfo[boughtCard].rentOneCard * (firstRandomNr + secondRandomNr);
    playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
    playerMoney.innerHTML = `$${payerInfo.money}`;
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
      playerTurn.money -= cardsInfo[boughtCard].rent;
      payerInfo.money += cardsInfo[boughtCard].rent;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${payerInfo.money}`;
      console.log(playerTurn.name + ' payed');
      console.log('Payed' + ` ${cardsInfo[boughtCard].rent}`);
      break;
    }
    case 2: {
      playerTurn.money -= cardsInfo[boughtCard].stations2;
      payerInfo.money += cardsInfo[boughtCard].stations2;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${payerInfo.money}`;
      console.log(playerTurn.name + ' payed');
      console.log('Payed' + ` ${cardsInfo[boughtCard].stations2}`);
      break;
    };
    case 3: {
      playerTurn.money -= cardsInfo[boughtCard].stations3;
      payerInfo.money += cardsInfo[boughtCard].stations3;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${payerInfo.money}`;
      console.log(playerTurn.name + ' payed');
      console.log('Payed' + ` ${cardsInfo[boughtCard].stations3}`);
      break;
    }
    case 4: {
      playerTurn.money -= cardsInfo[boughtCard].stations4;
      payerInfo.money += cardsInfo[boughtCard].stations4;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${payerInfo.money}`;
      console.log(playerTurn.name + ' payed');
      console.log('Payed' + ` ${cardsInfo[boughtCard].stations4}`);
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
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
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
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
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
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
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
      playerTurn.money -= cardsInfo[boughtCard].rentColorSet;
      player.money += cardsInfo[boughtCard].rentColorSet;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${player.money}`;
      console.log(playerTurn.name + ' payed');
      return;
    } else {
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
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
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
            playerTurn.money -= cardsInfo[boughtCard].home1;
            player.money += cardsInfo[boughtCard].home1;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 2: {
            playerTurn.money -= cardsInfo[boughtCard].home2;
            player.money += cardsInfo[boughtCard].home2;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 3: {
            playerTurn.money -= cardsInfo[boughtCard].home3;
            player.money += cardsInfo[boughtCard].home3;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 4: {
            playerTurn.money -= cardsInfo[boughtCard].home4;
            player.money += cardsInfo[boughtCard].home4;
            playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
            playerMoney.innerHTML = `$${player.money}`;
            console.log(playerTurn.name + ' payed');
            break;
          }
          case 5: {
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
      playerTurn.money -= cardsInfo[boughtCard].rentColorSet;
      player.money += cardsInfo[boughtCard].rentColorSet;
      playerMoneyTurn.innerHTML = `$${playerTurn.money}`;
      playerMoney.innerHTML = `$${player.money}`;
      console.log(playerTurn.name + ' payed');
      return;
    } else {
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

function showInfoPopupCard(bgcolor, title, price, mortage,
  rent, fullRent, house1, house2, house3, house4, hotel1, housePrice) {
  const popupCardColor = cardPopup.querySelector('.card-color');
  const popupCardPurchasePrice = cardPopup.querySelector('.purchase-price .price');
  const popupCardMortage = cardPopup.querySelector('.mortage-value .price');
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
  popupCardMortage.innerHTML = `$${mortage}`;
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

document.querySelector('.player-properties .deal img').addEventListener('click',  () => {
  document.querySelector('.deal-popup').classList.add('active-deal');
  document.querySelector('deal-popup .left-side').classList.remove('active-player-for-trade');
  document.querySelector('deal-popup .right-side').classList.remove('active-player-for-trade');

  const playersElement = document.querySelector('.deal-popup #players');
  playersElement.innerHTML = '';
  const players = [yoneInfo, player1Info, player2Info, player3Info];

  switch(playerTurn){
    case yoneInfo: {
      players.forEach(player => {
        if(player === yoneInfo){
          return;
        } else {
          const option = document.createElement('option');
          option.value = `${player.name}`;
          option.innerHTML = `${player.name}`;
          playersElement.appendChild(option);
        }
      });
      document.querySelector('.deal-popup .current-player').innerHTML = 'Yone';
      break;
    }
    case player1Info: {
      players.forEach(player => {
        if(player === player1Info){
          return;
        } else {
          const option = document.createElement('option');
          option.value = `${player.name}`;
          option.innerHTML = `${player.name}`;
          playersElement.appendChild(option);
        }
      });
      break;
    }
    case player2Info: {
      players.forEach(player => {
        if(player === player2Info){
          return;
        } else {
          const option = document.createElement('option');
          option.value = `${player.name}`;
          option.innerHTML = `${player.name}`;
          playersElement.appendChild(option);
        }
      });
      break;
    }
    case player3Info: {
      players.forEach(player => {
        if(player === player3Info){
          return;
        } else {
          const option = document.createElement('option');
          option.value = `${player.name}`;
          option.innerHTML = `${player.name}`;
          playersElement.appendChild(option);
        }
      });
      break;
    }
  }
});

document.querySelector('.deal-popup .submit button').addEventListener('click',  () => {
  document.querySelector('deal-popup .left-side').classList.add('active-player-for-trade');
  document.querySelector('deal-popup .right-side').classList.add('active-player-for-trade');

  switch(document.querySelector('#players').value){
    case 'Yone': {
      document.querySelector('.deal-popup .offer-to-player').innerHTML = 'Yone';
      yoneInfo.cards.forEach(card => {
        
      });


      break;
    }
  }
});

document.querySelector('.deal-popup .close').addEventListener('click',  () => {
  document.querySelector('.deal-popup').classList.remove('active-deal');
});

function getRandomNumber(min, max) {
  randomNumber = Math.floor(Math.random() * max) + min;
  return randomNumber;
}