var Users = prompt("Rock, Paper or Scissors?");

if (Users === "Rock"){
    console.log("User choice: Rock")
    var PC = ("Rock")
} else if (Users === "Paper"){
    console.log("User choice: Paper")
    var PC = ("Paper")
} else if (Users === "Scissors"){
    console.log("User choice: Scissors")
    var PC = ("Scissors")
}else{
    console.log("Error!")
    console.log("I am cAsE SenSaTiVe!")
    var PC = ("null")
}

var x = (Math.random()*3 + 1 | 0);

if (x === 1){
    console.log("Computer choice: Rock")
    var CC = ("Rock")
} else if (x === 2) {
    console.log("Computer choice: Paper")
    var CC = ("Paper")
} else if (x === 3) {
    console.log("Computer choice: Scissors")
    var CC = ("Scissors")
} else {
    console.log("GG, I dun broke. Please contact the coder ASAP.")
    var CC = ("null")
}

if (CC=="Rock" && PC=="Rock"){
    console.log("Draw, no one wins.")
} else if (CC=="Rock" && PC=="Paper"){
    console.log("User Wins!")
} else if (CC=="Rock" && PC=="Scissors"){
    console.log("Computer Wins!")
} else if (CC=="Paper" && PC=="Rock"){
    console.log("Computer Wins!")
} else if (CC=="Paper" && PC=="Paper"){
    console.log("Draw, no one wins.")
} else if (CC=="Paper" && PC=="Scissors"){
    console.log("User Wins!")
} else if (CC=="Scissors" && PC=="Rock"){
    console.log("User Wins!")
} else if (CC=="Scissors" && PC=="Paper"){
    console.log("Computer Wins!")
} else if (CC=="Scissors" && PC=="Scissors"){
    console.log("Draw, no one wins.")
} else if (CC=="null" && PC=="null"){
    console.log(" ")
} else if (CC=="Rock" && PC=="null"){
    console.log(" ")
} else if (CC=="Paper" && PC=="null"){
    console.log(" ")
} else if (CC=="Scissors" && PC=="null"){
    console.log(" ")
} else {
    console.log(" ")
}
