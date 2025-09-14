let wins=0;
let losses=0;
let ties=0;
while(true){
const choice = prompt("enter rock,paper,scissor  (or q to quit)");
if(choice == "q"){
    break;
}
if (choice !=="rock" &&choice !=="paper" && choice !=="scissor"){ 
    console.log("please enter a valid choice");
    continue;
}
const choices =["rock","paper","scissor"]
const randomindex=Math.round(Math.random()*2)
const computerChoice = choices[randomindex];
console.log( "the computer chose:" ,computerChoice);


if (computerChoice == choice){
    console.log("draw!");
    ties++;
}else if (
    (choice === "palyer" && computerChoice === "rock") ||
    (choice === "rock"&& computerChoice === "paper") ||
    (choice === "sicssor" && computerChoice === "paper")
){
    console.log("won!");
    wins++;
}
else{
    console.log("loss")
    losses++;
}
}
console.log(`"wins" ${wins} ,"loss" ${losses}, "ties" ${ties}`);