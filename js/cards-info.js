const normalCardWidth = document.querySelector(".normal-card").clientWidth;

const cardsInfo = {
    freeParking: {
        left: 0,
        top: 0,
        bottom: 100,
        right: 100,
    },
    redCard1: {
        el: document.querySelector('.sunspear'),
        left: 100,
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 1),
        name: 'Sunspear',
        price: 220,
        mortgage: 120,
        unmortgage: 140,
        rent: 18,
        rentColorSet: 36,
        home1: 90,
        home2: 250,
        home3: 700,
        home4: 875,
        hotel: 1050,
        houseCost: 150,
        color: '#900', //red
        isBought: false,
        removeHouse: 135,
        isMortgaged: false,
        type: 'normal-card'
    },
    topValar: {
        el: document.querySelector('.random-card.valar'),
        left: 100 + (normalCardWidth * 1),
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 2),
        name: 'Valar Morghulis'
    },
    redCard2: {
        el: document.querySelector('.riverrun'),
        left: 100 + (normalCardWidth * 2),
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 3),
        name: 'Riverrun',
        price: 220,
        mortgage: 120,
        unmortgage: 140,
        rent: 18,
        rentColorSet: 36,
        home1: 90,
        home2: 250,
        home3: 700,
        home4: 875,
        hotel: 1050,
        houseCost: 150,
        color: '#900', //red
        isBought: false,
        removeHouse: 135,
        isMortgaged: false,
        type: 'normal-card'
    },
    redCard3: {
        el: document.querySelector('.oldtown'),
        left: 100 + (normalCardWidth * 3),
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 4),
        name: 'Oldtown',
        price: 240,
        mortgage: 120,
        unmortgage: 140,
        rent: 20,
        rentColorSet: 40,
        home1: 100,
        home2: 300,
        home3: 750,
        home4: 925,
        hotel: 1100,
        houseCost: 150,
        color: '#900', //red
        isBought: false,
        removeHouse: 135,
        isMortgaged: false,
        type: 'normal-card'
    },
    targaryen: {
        el: document.querySelector('.targaryen-family'),
        left: 100 + (normalCardWidth * 4),
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 5),
        name: 'Targaryen Family',
        price: 200,
        mortgage: 100,
        unmortgage: 110,
        rent: 25,
        stations2: 50,
        stations3: 100,
        stations4: 200,
        isBought: false,
        color: 'black',
        isMortgaged: false,
        type: 'family-card'
    },
    yellowCard1: {
        el: document.querySelector('.dreadfort'),
        left: 100 + (normalCardWidth * 5),
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 6),
        name: 'Dreadfort',
        price: 260,
        mortgage: 140,
        unmortgage: 160,
        rent: 22,
        rentColorSet: 44,
        home1: 110,
        home2: 330,
        home3: 800,
        home4: 975,
        hotel: 1150,
        houseCost: 150,
        color: 'yellow',
        isBought: false,
        removeHouse: 135,
        isMortgaged: false,
        type: 'normal-card'
    },
    yellowCard2: {
        el: document.querySelector('.the-twins'),
        left: 100 + (normalCardWidth * 6),
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 7),
        name: 'The Twins',
        price: 260,
        mortgage: 140,
        unmortgage: 160,
        rent: 22,
        rentColorSet: 44,
        home1: 110,
        home2: 330,
        home3: 800,
        home4: 975,
        hotel: 1150,
        houseCost: 150,
        color: 'yellow',
        isBought: false,
        removeHouse: 135,
        isMortgaged: false,
        type: 'normal-card' 
    },
    card150Top: {
        el: document.querySelector('.king-landing-station'),
        left: 100 + (normalCardWidth * 7),
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 8),
        name: 'King  Landing  Station',
        rentOneCard: 4,
        rentTwoCard: 10,
        price: 150,
        mortgage: 75,
        unmortgage: 85,
        isBought: false,
        color: 'black',
        isMortgaged: false,
        type: 'special-station'
    },
    yellowCard3: {
        el: document.querySelector('.dragonstone'),
        left: 100 + (normalCardWidth * 8),
        top: 0,
        bottom: 100,
        right: 100 + (normalCardWidth * 9),
        name: 'Dragonstone',
        price: 280,
        mortgage: 140,
        unmortgage: 160,
        rent: 24,
        rentColorSet: 48,
        home1: 120,
        home2: 360,
        home3: 850,
        home4: 1025,
        hotel: 1200,
        houseCost: 150,
        color: 'yellow',
        isBought: false,
        removeHouse: 135,
        isMortgaged: false,
        type: 'normal-card'
    },






    goJail: {
        el: document.querySelector('.go-jail'),
        left: 100 + (normalCardWidth * 9),
        top: 0,
        bottom: 100,
        right: 200 + (normalCardWidth * 9)
    },



    orangeCard1: {
        el: document.querySelector('.dragon-home'),
        left: 0,
        top: 100,
        bottom: 100 + (normalCardWidth * 1),
        right: 100,
        name: 'Dragon Home',
        price: 200,
        mortgage: 90,
        unmortgage: 110,
        rent: 16,
        rentColorSet: 32,
        home1: 80,
        home2: 220,
        home3: 600,
        home4: 800,
        hotel: 1000,
        houseCost: 100,
        color: 'orangered',
        isBought: false,
        removeHouse: 85,
        isMortgaged: false,
        type: 'normal-card'
    },
    orangeCard2: {
        el: document.querySelector('.lannisport'),
        left: 0,
        top: 100 + (normalCardWidth * 1),
        bottom: 100 + (normalCardWidth * 2),
        right: 100,
        name: 'Lannisport',
        price: 180,
        mortgage: 90,
        unmortgage: 110,
        rent: 14,
        rentColorSet: 28,
        home1: 70,
        home2: 200,
        home3: 550,
        home4: 750,
        hotel: 950,
        houseCost: 100,
        color: 'orangered',
        isBought: false,
        removeHouse: 85,
        isMortgaged: false,
        type: 'normal-card'
    },
    leftIron: {
        el: document.querySelector('.random-card.iron-throne'),
        left: 0,
        top: 100 + (normalCardWidth * 2),
        bottom: 100 + (normalCardWidth * 3),
        right: 100,
        name: 'The  Iron  Throne'
    },
    orangeCard3: {
        el: document.querySelector('.casterly-rock'),
        left: 0,
        top: 100 + (normalCardWidth * 3),
        bottom: 100 + (normalCardWidth * 4),
        right: 100,
        name: 'Casterly Rock',
        price: 180,
        mortgage: 90,
        unmortgage: 110,
        rent: 14,
        rentColorSet: 28,
        home1: 70,
        home2: 200,
        home3: 550,
        home4: 750,
        hotel: 950,
        houseCost: 100,
        color: 'orangered',
        isBought: false,
        removeHouse: 85,
        isMortgaged: false,
        type: 'normal-card'
    },
    stark: {
        el: document.querySelector('.stark-family'),
        left: 0,
        top: 100 + (normalCardWidth * 4),
        bottom: 100 + (normalCardWidth * 5),
        right: 100,
        name: 'Stark Family',
        price: 200,
        mortgage: 100,
        unmortgage: 110,
        rent: 25,
        stations2: 50,
        stations3: 100,
        stations4: 200,
        isBought: false,
        color: 'black',
        isMortgaged: false,
        type: 'family-card'
    },
    pinkCard1: {
        el: document.querySelector('.storm-end'),
        left: 0,
        top: 100 + (normalCardWidth * 5),
        bottom: 100 + (normalCardWidth * 6),
        right: 100,
        name: 'Storm End',
        price: 160,
        mortgage: 70,
        unmortgage: 80,
        rent: 12,
        rentColorSet: 24,
        home1: 60,
        home2: 180,
        home3: 500,
        home4: 700,
        hotel: 900,
        houseCost: 100,
        color: 'palevioletred',
        isBought: false,
        removeHouse: 85,
        isMortgaged: false,
        type: 'normal-card'
    },
    pinkCard2: {
        el: document.querySelector('.the-red-keep'),
        left: 0,
        top: 100 + (normalCardWidth * 6),
        bottom: 100 + (normalCardWidth * 7),
        right: 100,
        name: 'The Red Keep',
        price: 140,
        mortgage: 70,
        unmortgage: 80,
        rent: 10,
        rentColorSet: 20,
        home1: 50,
        home2: 150,
        home3: 450,
        home4: 625,
        hotel: 750,
        houseCost: 100,
        color: 'palevioletred',
        isBought: false,
        removeHouse: 85,
        isMortgaged: false,
        type: 'normal-card'
    },
    card150Left: {
        el: document.querySelector('.castle-black-station'),
        left: 0,
        top: 100 + (normalCardWidth * 7),
        bottom: 100 + (normalCardWidth * 8),
        right: 100,
        name: 'Castle Black  Station',
        price: 150,
        mortgage: 75,
        rentOneCard: 4,
        rentTwoCard: 10,
        unmortgage: 85,
        isBought: false,
        color: 'black',
        isMortgaged: false,
        type: 'special-station'
    },
    pinkCard3: {
        el: document.querySelector('.dragonstone-soul'),
        left: 0,
        top: 100 + (normalCardWidth * 8),
        bottom: 100 + (normalCardWidth * 9),
        right: 100,
        name: 'Dragonstone Soul',
        price: 140,
        mortgage: 70,
        unmortgage: 80,
        rent: 10,
        rentColorSet: 20,
        home1: 50,
        home2: 150,
        home3: 450,
        home4: 625,
        hotel: 750,
        houseCost: 100,
        color: 'palevioletred',
        isBought: false,
        removeHouse: 85,
        isMortgaged: false,
        type: 'normal-card'
    },






    greenCard1: {
        el: document.querySelector('.the-arbor'),
        left: 700,
        top: 100,
        bottom: 100 + (normalCardWidth * 1),
        right: 800,
        name: 'The Arbor',
        price: 300,
        mortgage: 160,
        unmortgage: 180,
        rent: 26,
        rentColorSet: 52,
        home1: 130,
        home2: 390,
        home3: 900,
        home4: 1100,
        hotel: 1275,
        houseCost: 200,
        color: 'green',
        isBought: false,
        removeHouse: 175,
        isMortgaged: false,
        type: 'normal-card'
    },
    greenCard2: {
        el: document.querySelector('.yronwood'),
        left: 700,
        top: 100 + (normalCardWidth * 1),
        bottom: 100 + (normalCardWidth * 2),
        right: 800,
        name: 'Yronwood',
        price: 300,
        mortgage: 160,
        unmortgage: 180,
        rent: 26,
        rentColorSet: 52,
        home1: 130,
        home2: 390,
        home3: 900,
        home4: 1100,
        hotel: 1275,
        houseCost: 200,
        color: 'green',
        isBought: false,
        removeHouse: 175,
        isMortgaged: false,
        type: 'normal-card'
    },
    rightIron: {
        el: document.querySelector('.random-card.iron-throne'),
        left: 700,
        top: 100 + (normalCardWidth * 2),
        bottom: 100 + (normalCardWidth * 3),
        right: 800,
        name: 'The  Iron  Throne'
    },
    greenCard3: {
        el: document.querySelector('.blue-dragon'),
        left: 700,
        top: 100 + (normalCardWidth * 3),
        bottom: 100 + (normalCardWidth * 4),
        right: 800,
        name: 'Blue Dragon',
        price: 320,
        mortgage: 160,
        unmortgage: 180,
        rent: 28,
        rentColorSet: 56,
        home1: 150,
        home2: 450,
        home3: 1000,
        home4: 1200,
        hotel: 1400,
        houseCost: 200,
        color: 'green',
        isBought: false,
        removeHouse: 175,
        isMortgaged: false,
        type: 'normal-card'
    },
    baratheon: {
        el: document.querySelector('.baratheon-family'),
        left: 700,
        top: 100 + (normalCardWidth * 4),
        bottom: 100 + (normalCardWidth * 5),
        right: 800,
        name: 'Baratheon Family',
        price: 200,
        mortgage: 100,
        unmortgage: 110,
        rent: 25,
        stations2: 50,
        stations3: 100,
        stations4: 200,
        isBought: false,
        color: 'black',
        isMortgaged: false,
        type: 'family-card'
    },
    rightValar: {
        el: document.querySelector('.random-card.valar'),
        left: 700,
        top: 100 + (normalCardWidth * 5),
        bottom: 100 + (normalCardWidth * 6),
        right: 800,
        name: 'Valar  Morghulis'
    },
    blueCard1: {
        el: document.querySelector('.harrenhal'),
        left: 700,
        top: 100 + (normalCardWidth * 6),
        bottom: 100 + (normalCardWidth * 7),
        right: 800,
        name: 'Harrenhal',
        price: 350,
        mortgage: 200,
        unmortgage: 220,
        rent: 35,
        rentColorSet: 70,
        home1: 175,
        home2: 500,
        home3: 1100,
        home4: 1300,
        hotel: 1500,
        houseCost: 200,
        color: 'rgb(11, 11, 182)',
        isBought: false,
        removeHouse: 175,
        isMortgaged: false,
        type: 'normal-card'
    },
    pay100: {
        el: document.querySelector('.pay-100'),
        left: 700,
        top: 100 + (normalCardWidth * 7),
        bottom: 100 + (normalCardWidth * 8),
        right: 800
    },
    blueCard2: {
        el: document.querySelector('.casterly-rock'),
        left: 700,
        top: 100 + (normalCardWidth * 8),
        bottom: 100 + (normalCardWidth * 9),
        right: 800,
        name: 'Casterly Rock',
        price: 400,
        mortgage: 200,
        unmortgage: 220,
        rent: 50,
        rentColorSet: 100,
        home1: 200,
        home2: 600,
        home3: 1400,
        home4: 1700,
        hotel: 2000,
        houseCost: 200,
        color: 'rgb(11, 11, 182)',
        isBought: false,
        removeHouse: 175,
        isMortgaged: false,
        type: 'normal-card'
    },






    justVisiting: {
        el: document.querySelector('.just-visiting'),
        left: 0,
        top: 700,
        bottom: 800,
        right: 100
    },
    lightBlueCard1: {
        el: document.querySelector('.the-dreadfort'),
        left: 100,
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 1),
        name: 'The Dreadfort',
        price: 120,
        mortgage: 60,
        unmortgage: 70,
        rent: 8,
        rentColorSet: 16,
        home1: 40,
        home2: 100,
        home3: 300,
        home4: 450,
        hotel: 600,
        houseCost: 50,
        color: 'rgb(13, 164, 214)',
        isBought: false,
        removeHouse: 45,
        isMortgaged: false,
        type: 'normal-card'
    },
    lightBlueCard2: {
        el: document.querySelector('.greywater-watch'),
        left: 100 + (normalCardWidth * 1),
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 2),
        name: 'Greywater Watch',
        price: 100,
        mortgage: 60,
        unmortgage: 70,
        rent: 6,
        rentColorSet: 12,
        home1: 30,
        home2: 90,
        home3: 270,
        home4: 400,
        hotel: 550,
        houseCost: 50,
        color: 'rgb(13, 164, 214)',
        isBought: false,
        removeHouse: 45,
        isMortgaged: false,
        type: 'normal-card'
    },
    bottomValar: {
        el: document.querySelector('.random-card.valar'),
        left: 100 + (normalCardWidth * 2),
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 3),
        name: 'Valar  Morghulis'
    },
    lightBlueCard3: {
        el: document.querySelector('.winterfell'),
        left: 100 + (normalCardWidth * 3),
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 4),
        name: 'Winterfell',
        price: 100,
        mortgage: 60,
        unmortgage: 70,
        rent: 6,
        rentColorSet: 12,
        home1: 30,
        home2: 90,
        home3: 270,
        home4: 400,
        hotel: 550,
        houseCost: 50,
        color: 'rgb(13, 164, 214)',
        isBought: false,
        removeHouse: 45,
        isMortgaged: false,
        type: 'normal-card'
    },
    lannister: {
        el: document.querySelector('.lannister-family'),
        left: 100 + (normalCardWidth * 4),
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 5),
        name: 'Lannister Family',
        price: 200,
        mortgage: 100,
        unmortgage: 110,
        rent: 25,
        stations2: 50,
        stations3: 100,
        stations4: 200,
        isBought: false,
        color: 'black',
        isMortgaged: false,
        type: 'family-card'
    },
    pay200: {
        el: document.querySelector('.pay-200'),
        left: 100 + (normalCardWidth * 5),
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 6),
    },
    brownCard1: {
        el: document.querySelector('.the-wall'),
        left: 100 + (normalCardWidth * 6),
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 7),
        name: 'The Wall',
        price: 60,
        mortgage: 30,
        unmortgage: 35,
        rent: 4,
        rentColorSet: 8,
        home1: 20,
        home2: 60,
        home3: 180,
        home4: 320,
        hotel: 450,
        houseCost: 50,
        color: 'rgb(110, 59, 0)',
        isBought: false,
        id: 'brown',
        removeHouse: 45,
        isMortgaged: false,
        type: 'normal-card'
    },
    bottomIron: {
        el: document.querySelector('.random-card.iron-throne'),
        left: 100 + (normalCardWidth * 7),
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 8),
        name: 'The  Iron  Throne'
    },
    brownCard2: {
        el: document.querySelector('.castle-black'),
        left: 100 + (normalCardWidth * 8),
        top: 700,
        bottom: 800,
        right: 100 + (normalCardWidth * 9),
        name: 'Castle Black',
        price: 60,
        mortgage: 30,
        unmortgage: 35,
        rent: 2,
        rentColorSet: 4,
        home1: 10,
        home2: 30,
        home3: 90,
        home4: 160,
        hotel: 250,
        houseCost: 50,
        color: 'rgb(110, 59, 0)',
        isBought: false,
        id: 'brown',
        removeHouse: 45,
        isMortgaged: false,
        type: 'normal-card'
    },
    go: {
        el: document.querySelector('.go'),
        left: 100 + (normalCardWidth * 9),
        top: 700,
        bottom: 800,
        right: 200 + (normalCardWidth * 9),
    }
}

export {
    cardsInfo
}