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

	///////// Above will be deleten once AI is working

	var player = "X";
	var cpu = "O";
	
	
	$("#player-cpu").html("Player -> " + player + " CPU -> " + cpu);



	var gridSystem = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8"];
	var clicked = [	0, 0, 0, 
									0, 0, 0, 
									0, 0, 0];

	$(".btn-selector").click(function(event) {
		player = $(this).html();
		if(player === "X"){
			cpu = "O";
		}else{
			cpu = "X";
		}
		$("#player-cpu").html("Player -> " + player + " CPU -> " + cpu)
	});


	for (var i = 0; i < gridSystem.length; i++) {
		$(gridSystem[i]).click(function(event) {
			var alt;
			$(".btn-selector").attr('disabled', 'enabled');

			if (!clicked[this.id]) {
				$(this).find('p').html(alt = alternator());	
				clicked[this.id] = alt;	
			}else{
				console.log("Not Allowed!");
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
					$("#who-won").html("X Wins!");
					resetGame();
				}
				if (winO >= 3) {
					$("#who-won").html("O Wins!");
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
		$(".btn-selector").removeAttr('disabled');
	}

});