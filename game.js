a = [[0,0,0],[0,0,0],[0,0,0]];
count = 0;
clickable = true;
isGameOver = false;
whichState = 1;
function changeImage(x,y){
	
	if(clickable == true){
		var id = x.toString() + y.toString();
		if(whichState == 1 && a[x][y] == 0){
			document.getElementById(id).src = 'cross.jpg';
			a[x][y] = whichState;
			count++;
		}
		else if(whichState == -1 && a[x][y] == 0){
			document.getElementById(id).src = 'zero.png';
			a[x][y] = whichState;
			count++;
		}

		whichState *= -1;
		
		if(count == 9){
			alert("Game draw!\nReset to play again!");
			clickable = false;
			return;
		}

		if(count>=3){
			for(var i=0;i<3;++i)
				if(a[i][0] == a[i][1] && a[i][1] == a[i][2] && a[i][0] != 0 && isGameOver == false)
					isGameOver = true;

			for(var i=0;i<3;++i)
				if(a[0][i] == a[1][i] && a[1][i] == a[2][i] && a[0][i] != 0 && isGameOver == false)
					isGameOver = true;

			if(a[0][0] == a[1][1] && a[1][1] == a[2][2] && a[0][0] != 0 && isGameOver == false)
				isGameOver = true;

			if(a[0][2] == a[1][1] && a[1][1] == a[2][0] && a[0][2] != 0 && isGameOver == false)
				isGameOver = true;
		}

		if(isGameOver == true){
			clickable = false;
			if(whichState == -1)
				player = 1;
			else 
				player = 2;
			alert("Player "+player+" wins.\nGame over!\nReset to play again!");
			return;
		}
	}
}

function resetGame(){
	count = 0;
	clickable = true;
	isGameOver = false;
	whichState = 1;
	a = [[0,0,0],[0,0,0],[0,0,0]];
	for(var i=0;i<3;++i)
		for(var j=0;j<3;++j){
			var id = i.toString() + j.toString();
			document.getElementById(id).src = 'blank.jpg';
		}
}
