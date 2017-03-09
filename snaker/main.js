window.onload = function () {
	var home = document.getElementById('home');
	var score = document.getElementById('score');
	//生成td格子
	var arrTd1 = function () {
		var str = "";
		for (let i = 0; i < 20; i++) {
			str += "<tr>"
			for (let j = 0; j < 20; j++) {
				str += "<td></td>"
			}
			str += "</tr>";
		}
		home.innerHTML = str;

		var arrTd = [];
		for (let i = 0; i < 20; i++) {
			arrTd[i] = [];
		}
		var arrTdCount = home.getElementsByTagName("td");
		var count = 0;
		for (let i = 0, len = arrTd.length; i< len; i++) {
			for (let j = 0; j < len; j++) {
				arrTd[i].push(arrTdCount[count])
				count++;
			}
		}
		return arrTd;
	}

	var arrTd = arrTd1();

	var snake;
	function newSnake() {
		//初始化蛇身数据数组
		function initSnake() {
			let len = 5;
			var snake = [];
			snake[0] = {		//定义蛇头
				y:5,			//蛇头所在y坐标
				x:5,			//蛇头所在x坐标
			}
			for (let i = 1; i < 4; i++) {
				snake[i] = new Object;
				snake[i].x = snake[i - 1].x - 1;
				snake[i].y = snake[0].y;
			}
			return snake;
		}

		snake = initSnake();
		snake.direction = 1;	//蛇的方向。0-3分别为上—左。
		snake.flag="false"; 	//代表游戏是否结束，false代表未结束
		const length = 25;
	}

	newSnake();
	//生成蛇身图像
	for (let i = 0; i < snake.length; i++) {
		arrTd[snake[i].y][snake[i].x].className = "cover";
	}

	//随机产生食物
	function newFood() {
		var x = Math.floor(Math.random() * 20);
		var y = Math.floor(Math.random() * 20);
		while (arrTd[y][x].className == "cover") {		//已经被蛇身占领的格子不能产生食物
			x = Math.floor(Math.random() * 20);
			y = Math.floor(Math.random() * 20);
		}
		arrTd[y][x].className = "food";
		score.innerHTML = +score.innerHTML + 1;   //计分。（每产生1次新食物代表之前食物被吃掉，得1分。）
	}
	newFood();

	//开始游戏键对应程序
	var start = document.getElementById('start');
	start.onclick = function () {
		var timer = null;//方向键产生的运动定时器
		var delayTimer = null;
		setTimeout(function(){    //只在开始执行一次的延时定时器
			delayTimer = setInterval(function(){
				move(snake.direction, 1);
			},300)
		},300);
		window.onkeydown = function (ev) {
			if (snake.flag === "true") {
				return;
			}
			ev = ev || window.event;
			var keyCode = ev.keyCode || ev.which || ev.charCode
			if (keyCode >= 37 && keyCode <= 40) {
				if (snake.flag === "true") {
					clearInterval(delayTimer);
					return;
				}
			}
			if (snake.direction == 0 || snake.direction == 2) {
				if (keyCode == 37) {
					clearInterval(delayTimer);
					setTimeout(function(){
						clearInterval(timer);
						timer = setInterval(function(){
							if (snake.flag === "true") {
								clearInterval(timer)
							}
							else {
								snake.direction = 3;
								move(snake.direction, -1);
							}
						},300);
					},300)
				}
				if (keyCode == 39) {
					
					clearInterval(delayTimer);
					setTimeout(function(){
						clearInterval(timer);
						timer = setInterval(function(){
							if (snake.flag === "true") {
								clearInterval(timer)
							}
							else {
								snake.direction = 1;
								move(snake.direction, 1);
							}
						},300);
					},300)
				}
			}
			else {
				if (keyCode == 38) {
					clearInterval(delayTimer);
					
					
					setTimeout(function(){
						clearInterval(timer);
						timer = setInterval(function(){
							if (snake.flag === "true") {
								clearInterval(timer)
							}
							else {
								snake.direction = 0;
								move(snake.direction, -1);
							}
						},300);
					},300)
				}
				if (keyCode == 40) {
					clearInterval(delayTimer);
					setTimeout(function(){
						clearInterval(timer);
						timer = setInterval(function(){
							if (snake.flag === "true") {
								clearInterval(timer)
							}
							else {
								snake.direction = 2;
								move(snake.direction, 1);
							}
						},300);
					},300)
				}
			}
		}
	}

	/**
	 * [move description]
	 * @param  {[number]} direction [是根据蛇头snake[0].diretion来确认方向的。0-3代表上-左]
	 * @return {[type]}           [description]
	 */
	function move(direction, speed) {
		if (snake.flag === "true") {
			return;
		}
		//判断是上下还是左右方向移动
		if (direction == 0 || direction == 2) {   //如果是上下方向
			//则Y坐标超越边界判定失败
			if (snake[0].y + speed < 0 || snake[0].y + speed >= 20) {
				snake.flag = "true";
				alert("GAME OVER")
				return;
			}
			//上下方向要吃掉食物就要把蛇头所在的Y坐标切换下。根据speed判断是上移1格还是下移1格
			if(arrTd[snake[0].y + speed][snake[0].x].className == "food") {
				snake.unshift({y:snake[0].y + speed, x:snake[0].x});
				arrTd[snake[0].y][snake[0].x].className = "cover";
				newFood();
			}
			snake.unshift({y:snake[0].y + speed,x:snake[0].x})  //直接把下一格添加到snake数组里面，成为蛇头。（移动而重新生成的蛇头）
			isGameOver(speed)
		}
		//左右方向是类似的，只是去修改X坐标。
		else {
			if (snake[0].x + speed < 0 || snake[0].x + speed >= 20) {
				snake.flag = "true";
				alert("GAME OVER")
				return;
			}
			if(arrTd[snake[0].y][snake[0].x + speed].className == "food") {
				snake.unshift({y:snake[0].y, x:snake[0].x + speed});
				arrTd[snake[0].y][snake[0].x].className = "cover";
				newFood();
			}
			snake.unshift({y:snake[0].y,x:snake[0].x + speed});
			isGameOver()
		}
		
	}

	//不是通过吃到食物而只是因为移动而重新生成的蛇头去检测是否碰倒了蛇身，否的话就用图形表现出样式。是的话就退出游戏。
	function isGameOver() {
		if (arrTd[snake[0].y][snake[0].x].className == "cover") {  //检测蛇头是否撞上了蛇身。
			alert("GAME OVER")
			snake.flag = "true";
			return;
		}
		else {
			//删除蛇尾最后一个。
			arrTd[snake[snake.length - 1].y][snake[snake.length - 1].x].className = "";
			snake.pop();
		}
		arrTd[snake[0].y][snake[0].x].className = "cover";
	}
}


/*
1.执行延迟（停顿问题）
2.小蛇判断失败的功能。
3.速度执行
4.把延迟去掉。
*/