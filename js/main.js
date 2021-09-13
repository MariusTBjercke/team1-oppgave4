//model
let botChoice; 
let playerChoice;
let kpb = ["kniv", "pistol", "bombe"];
let round = 1;
let tieText = "";
// 0 = player, 1 = bot
let players = [0, 0];
//Hjelpevariabel for både view og controller
let main = document.querySelector("main");

//view
show();
function show() {

    // Reset HTML og utfør alt under på nytt
    main.innerHTML = '';

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "header-wrapper");

    const headerTitle = document.createElement("h1");
    headerTitle.innerText = "Kniv, pistol, bombe.";

    const subTitle = document.createElement("h2");
    subTitle.innerText = "Laget av team 1.";

    const roundText = document.createElement("h3");
    roundText.innerText = "Runde: " + round;

    const playerScore = document.createElement("h3");
    playerScore.innerText = "Spiller: " + players[0];
    
    const botScore = document.createElement("h3");
    botScore.innerText = "Bot: " + players[1];
    
    const weaponsTitle = document.createElement("h4");
    weaponsTitle.innerText = "Velg et våpen:";

    const weaponsContainer = document.createElement("div");
    weaponsContainer.setAttribute("id", "weapons-container");
    weapons = weaponsContainer;

    const kniv = document.createElement("div");
    kniv.setAttribute("id", "kniv");

    const pistol = document.createElement("div");
    pistol.setAttribute("id", "pistol");

    const bombe = document.createElement("div");
    bombe.setAttribute("id", "bombe");

    const tie = document.createElement("h2");
    tie.innerText = tieText;

    // Setup HTML elements
    main.appendChild(wrapper);
    wrapper.appendChild(headerTitle);
    wrapper.appendChild(subTitle);
    wrapper.appendChild(roundText);
    wrapper.appendChild(playerScore);
    wrapper.appendChild(botScore);
    wrapper.appendChild(weaponsTitle);
    wrapper.appendChild(weaponsContainer);
    weaponsContainer.appendChild(kniv);
    weaponsContainer.appendChild(pistol);
    weaponsContainer.appendChild(bombe);
    wrapper.appendChild(tie);

    // Events
    weaponsContainer.addEventListener("click", playRound, false);
}

//controller

function playRound(e) {

    const random = Math.floor(Math.random() * kpb.length);
    playerChoice = e.target.id;
    botChoice = kpb[random];
    getResult(playerChoice, botChoice);

    show();

}



// Kniv banker bombe
// pistol banker kniv
// bombe banker pistol
function getResult(player, bot) {
  
    //spiller sine valg
    if (player === bot) {
        tieText = "Det ble uavgjort!";
    }
    else if (player == 'kniv') {
        if (bot == 'pistol') {
            players[1]++;

        } else {
            players[0]++;
        }
        tieText = "";
    }
    else if (player == 'bombe') {
        if (bot == 'kniv') {
            players[1]++
        } else {
            players[0]++
        }
        tieText = "";
    }
    else if (player == 'pistol') {
        if (bot == 'bombe') {
            players[1]++
        } else {
            players[0]++
        }
        tieText = "";
    }

    round++;

}