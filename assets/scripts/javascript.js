$(document).ready(function() {

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
			$("#who-won").html("");
			$(".btn-selector").attr('disabled', 'enabled');

			if (!clicked[this.id]) {
				$(this).find('p').html(player);	
				clicked[this.id] = player;	
				if(checkWin(clicked)){
					aiMove();
					checkWin(clicked);
				}
			}else{
				console.log("Not Allowed!");
			}
			console.log(clicked);
		});
	}

	function aiMove(){
		var random = Math.floor(Math.random() * (9 - 0)) + 0;
		var x = true;
		var y = 0;
		while(x){

			if(clicked[random] === 0){
				clicked[random] = cpu;
				console.log("clicked[" + random + "]" + " = " + cpu);
				$(gridSystem[random]).find('p').html(cpu);
				x = false;
			}else{
				random++; 
				if (random > 8) {random = 0;}
				console.log("had to switch cpu choice from " + (random - 1) + " to " + random);
			}
			y++;
			if(y > 9){
				x = false;
				$("#who-won").html("It's a Tie!");
				resetGame();
			}
		}
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
					return false;
				}
				if (winO >= 3) {
					$("#who-won").html("O Wins!");
					console.log("O won!");
					resetGame();
					return false;
				}
			}
		}
		return true;
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