//model
let botChoice; 
let playerChoice;
let kpb = ["kniv", "pistol", "bombe"];
let result;
let bombe = "img/bomb.png";
let pistol = "img/gun-png.png";
let kniv = "img/kniv.png";
//Hjelpevariabel for både view og controller
let main = document.querySelector("main");



//view




//controller

const random = Math.floor(Math.random() * kpb.length);
console.log(random, kpb[random]);



// Kniv banker bombe
// pistol banker kniv
// bombe banker pistol
function getResult() {
  
    //spiller sine valg
    if ( playerChoice === "kniv" && botChoice === "bombe") {
       
    } else if (playerChoice === "kniv" && botChoice === "pistol") {
        result = "Du vant"
    } else if ( playerChoice === "bombe" && botChoice === "pistol") {
        result = "Du vant"
    } else if ( playerChoice === "pistol" && botChoice === "kniv") {
        result = "Du vant"


    //bot sine valg
    } else if (botChoice === "kniv" && playerChoice === "pistol") {
        result = "Du tapte, prøv igjen"
    } else if ( botChoice === "bombe" && playerChoice === "pistol") {
        result = "Du tapte, prøv igjen"
    } else if ( botChoice === "pistol" && playerChoice === "kniv") {
        result = "Du tapte, prøv igjen"

    } else (playerChoice === botChoice) {
        result = "Uavgjort"
    }

        








 
// function setBotChoice()      {
//     let blankIndexes = Array.from(board.keys()).filter(i => board[i] === '');
//     if (blankIndexes.length === 0) return;
//     let random = Math.floor(Math.random() * blankIndexes.length);
//     let blankIndex = blankIndexes[random];
//     board[blankIndex] = 'o';


//     if (you===computer){
//          console.log ("It's a tie!");
//     } else if (you==="bombe" && computer === "kniv" || you === "pistol" && computer==="bombe"||you==="kniv"&&computer==="Pistol") {
//          console.log ("You've won!");
//     } else {
//          console.log ("You've lost!");
    // }
// }
    