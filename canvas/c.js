// pencil = myCanvas.getContext('2d');
	// pencil.moveTo(0,100);
	// pencil.lineTo(200,100);
	// pencil.stroke();
	// var x;
	// var y;
	var ctx = myCanvas.getContext('2d');
	function drawCircle()
	{
		// var c = document.getElementById('myCanvas');
			ctx.beginPath();
			ctx.arc(95,50,40,0,2*Math.PI);
			ctx.stroke();
			// ctx.fillStyle='rgb(200,0,0)';
			// ctx.fillRect='rgb(10,10,50,50)';

			// ctx.fillStyle='rgb(0,0,200,0.5)';
			// ctx.fillRect='rgb(30,30,50,50)'


		// pencil=myCanvas.getContext('2d');
		// pencil.moveTo(x,y);
		// pencil.lineTo(event.x,event.y);
		// pencil.stroke();
	}
	function drawRectangle()
	{
		ctx.moveTo(10,10);
		ctx.lineTo(10,200);
		ctx.stroke();
		ctx.moveTo(10,200);
		ctx.lineTo(300,200);
		ctx.stroke();
		ctx.moveTo(300,10);
		ctx.lineTo(300,200);
		ctx.stroke();
		ctx.moveTo(300,10);
		ctx.lineTo(10,10);
		ctx.stroke();
		// ctx.moveTo(200,200);
		// ctx.lineTo(100,200);
		// ctx.stroke();

	}

	function drawTriangle()
	{
		ctx.moveTo(90,10);
		ctx.lineTo(10,200);
		ctx.stroke();
		ctx.moveTo(90,10);
		ctx.lineTo(200,200);
		ctx.stroke();
		ctx.moveTo(10,200);
		ctx.lineTo(200,200);
		ctx.stroke();
	}

	function drawSquare()
	{
		ctx.moveTo(10,10);
		ctx.lineTo(10,200);
		ctx.stroke();
		ctx.moveTo(10,10);
		ctx.lineTo(200,10);
		ctx.stroke();
		ctx.moveTo(200,10);
		ctx.lineTo(200,200);
		ctx.stroke();
		ctx.moveTo(200,200);
		ctx.lineTo(10,200);
		ctx.stroke();
		// ctx.strokeRect();
		// ctx.fillRect(0,0,150,75);
		// ctx.stroke();
		// ctx.fillStyle="#FF0000";
		// ctx.fillRect(0,0,150,75);
	}