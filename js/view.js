show();
function show() {

    // Reset HTML and execute everything below
    main.innerHTML = '';

    const arcade = createElem("div", main, null, "class", "arcade-wrapper");
    wrapper = createElem("div", arcade, null, "class", "wrapper");

    // If we have a winner, display winner img. Else if loser, show loser img, else show game
    checkForWinner();
    if (winner === players[0]) {
        const winnerImg = createElem("div", wrapper, null, "class", "winner");
    } else if (winner === players[1]) {
        const loserImg = createElem("div", wrapper, null, "class", "loser");
    } else {
        // Set up HTML dynamically
        const scoreBoard = createElem("div", wrapper, null, "class", "scoreboard");
        const roundText = createElem("h3", scoreBoard, round, "class", "round-text");
        const playerScore = createElem("h3", scoreBoard, players[0], "class", "player-score");
        const botScore = createElem("h3", scoreBoard, players[1], "class", "bot-score");
        const weaponsTitle = createElem("h4", wrapper, "Velg et våpen:");
        const weaponsContainer = createElem("div", wrapper, null, "id", "weapons-container");
        const kniv = createElem("div", weaponsContainer, null, "id", "kniv");
        const pistol = createElem("div", weaponsContainer, null, "id", "pistol");
        const bombe = createElem("div", weaponsContainer, null, "id", "bombe");
        loaderGif = createElem("div", wrapper, null);
        gameStatus = round > 1 ? gameStatus = createElem("h4", wrapper, "Det ble <span>" + playerChoice + "</span> mot <span>" + botChoice + "</span>!", "class", "game-status") : gameStatus;
        tie = createElem("h2", wrapper, tieText);

        // Events
        weaponsContainer.addEventListener("click", playRound, false);
    }

}