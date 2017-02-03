$(document).ready(function() {
	
 var playerOrCpu = ["X", "O"];

 var altern = true;
	function alternator(){
		if(altern){
			altern = false;
			return playerOrCpu[0];
		}else{
			altern = true;
			return playerOrCpu[1];
		}
	}

	$("#player-cpu").html("Player -> " + playerOrCpu[0] + " CPU -> " + playerOrCpu[1]);



	var gridSystem = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8"]
	var clicked = [	0, 0, 0, 
									0, 0, 0, 
									0, 0, 0]

	for (var i = 0; i < gridSystem.length; i++) {
		$(gridSystem[i]).click(function(event) {
			var alt = alternator();
			if (!clicked[this.id]) {
				$(this).find('p').html(alt);	
				clicked[this.id] = alt;	
			}else{
				console.log("Not Allowed!")
			}
			console.log(clicked);
			checkWin(clicked);
		});
	}

	function checkWin(arr) {
		var winArrays = [	[	1,1,1,
												0,0,0,
												0,0,0],

											[ 0,0,0,
												1,1,1,
												0,0,0],

											[ 0,0,0,
												0,0,0,
												1,1,1],

											[ 1,0,0,
												1,0,0,
												1,0,0],

											[ 0,1,0,
												0,1,0,
												0,1,0],

											[ 0,0,1,
												0,0,1,
												0,0,1],

											[ 1,0,0,
												0,1,0,
												0,0,1],

											[ 0,0,1,
												0,1,0,
												1,0,0]
											]
		for (var i = 0; i < winArrays.length; i++) {
			var winX = 0;
			var winO = 0;
			for (var j = 0; j < winArrays[i].length; j++) {

				if(winArrays[i][j] && arr[j] == "X") {winX++;}
				if(winArrays[i][j] && arr[j] == "O") {winO++;}

				if (winX >= 3) {
					console.log("X won!");
					resetGame();
				}
				if (winO >= 3) {
					console.log("O won!");
					resetGame();
				}
			}
		}
	}

	function resetGame (){
		for (var i = 0; i < gridSystem.length; i++) {
			$(gridSystem[i]).find('p').html("");
		}
		clicked = [ 0,0,0,
								0,0,0,
								0,0,0];
	}

});