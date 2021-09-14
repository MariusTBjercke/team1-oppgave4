// Our own function for creating elements dynamically (refactoring)
function createElem(typeOfElement, parentVar, innerHTML, attrName, attrValue) {
    const element = document.createElement(typeOfElement);
    element.innerHTML = innerHTML;
    attrName = attrName ? element.setAttribute(attrName, attrValue) : attrName;
    parentVar.appendChild(element);
    return element;
}

function playRound(e) {

    if (e.target.id != "weapons-container") {
        const random = Math.floor(Math.random() * kpb.length);
        // Check the ID of the target we are clicking on (weapon of choice) and assign to variable
        playerChoice = e.target.id;
        botChoice = kpb[random];
        getResult(playerChoice, botChoice);

        if (round > 2) {
            wrapper.removeChild(gameStatus);
            wrapper.removeChild(tie);
        }

        // Show the player a scaled up version of their weapon of choice
        if (e.target.id === "pistol") {
            e.target.style.width = "120px";
            e.target.style.height = "70px";
        } else {
            e.target.style.width = "120px";
            e.target.style.height = "120px";
        }

        // Wait 1 second, then scale up bot's weapon
        setTimeout(() => {
            let botChoiceImg = document.getElementById(botChoice);

            if (botChoice === "pistol") {
                botChoiceImg.style.width = "120px";
                botChoiceImg.style.height = "70px";
            } else {
                botChoiceImg.style.width = "120px";
                botChoiceImg.style.height = "120px";
            }
        }, 1000);

        // Show loading GIF before view updates to normal
        const loading = createElem("div", loaderGif, null, "class", "loading");

        // Wait x milliseconds before executing the show() function
        setTimeout(show, 3000);
    }

}

function checkForWinner() {

    if (players[0] >= 3) {
        winner = players[0];
    } else if (players[1] >= 3) {
        winner = players[1];
    }

}

// Kniv banker bombe
// pistol banker kniv
// bombe banker pistol
function getResult(player, bot) {

    //spiller sine valg
    if (player === bot) {
        tieText = "Uavgjort!";
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