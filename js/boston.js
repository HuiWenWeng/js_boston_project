let rounds;
document.querySelector(".submit").addEventListener("click", function(){
	rounds = document.querySelector(".textInput").value;
	document.querySelector(".textInput").disabled = true;
	document.querySelector(".submit").disabled = true;
	firstPlayer()
	/* do later: error if rounds is not an odd number*/
})

let rollDie = () => {
	console.log(Math.floor(Math.random() * 6)+1)
}

let firstPlayer = () => {
	var firstPlayerList = document.getElementsByClassName("firstPlayer").classList
	for (let i = 0; i < firstPlayerList.length; i++){
		firstPlayerList[i].classList.remove("hidden")
	}
}
