window.onresize = function () {
	if (window.innerWidth >= 1260) {
		document.getElementsByTagName("body")[0].className = "w1230";
	}
	else {
		document.getElementsByTagName("body")[0].className = "w990";
	}
}

window.onload = function () {
	//搜索框的 下input的plachholder处理
	var mallQuery = document.getElementById("mall-query")
	var mallQueryLabel = document.getElementById("mall-query-label")
	var mallQuery2 = document.getElementById("mall-query2")
	var mallQueryLabel2 = document.getElementById("mall-query-label2")
	
	mallQuery.onfocus = function () {
		var value = mallQuery.value.trim();
		if (value === "") {
			mallQueryLabel.style.visibility = "visible";
		}
		mallQuery.onkeydown = function (ev) {
			ev = ev || window.event;
			var keyCode = ev.keyCode || ev.which || ev.charCode;
			var value = mallQuery.value;
			var valueTrim = value.trim();
			if ((keyCode === 8 && value === "") || value.trim() === "") {
				mallQueryLabel.style.visibility = "hidden";
			}
		}
	}
	mallQuery.onblur = function () {
		var value = mallQuery.value.trim();
		if (value === "") {
			mallQueryLabel.style.visibility = "visible";
		}
	}

	mallQuery2.onfocus = function () {
		var value = mallQuery2.value.trim();
		if (value === "") {
			mallQueryLabel2.style.visibility = "visible";
		}
		mallQuery2.onkeydown = function (ev) {
			ev = ev || window.event;
			var keyCode = ev.keyCode || ev.which || ev.charCode;
			var value = mallQuery2.value;
			var valueTrim = value.trim();
			if ((keyCode === 8 && value === "") || value.trim() === "") {
				mallQueryLabel2.style.visibility = "hidden";
			}
		}
	}
	mallQuery2.onblur = function () {
		var value = mallQuery2.value.trim();
		if (value === "") {
			mallQueryLabel2.style.visibility = "visible";
		}
	}

	// bannerSliders切换选项卡
	function selectBanner() {
		var banner = document.getElementById("banner");
		var bannerSliders = document.getElementById("banner-sliders").getElementsByTagName('li');;
		var bannerImgs = document.getElementById("banner-imgs").getElementsByTagName("li");
		var count = 1;   //用来做选项卡切换的index

		for (var i = 0; i < bannerSliders.length; i++) {
			bannerSliders[i].index = i;
			bannerSliders[i].onmouseover = function () {
				bannerSlider(this.index)
			}
			function bannerSlider(currentIndex) {
				for (var i = 0; i < bannerSliders.length; i++) {
					bannerSliders[i].className = "";
				}
				bannerSliders[currentIndex].className = "selected";
				for (var j = 0; j < bannerImgs.length; j++) {
					bannerImgs[j].style.zIndex = 0;
				}
				bannerImgs[currentIndex].style.zIndex = 1;
				switch (currentIndex) {
					case 0:
						banner.style.backgroundColor="#1069f0";
						break;
					case 1:
						banner.style.backgroundColor="#ff5e9b";
						break;
					case 3:
						banner.style.backgroundColor="#e8e8e8";
						break;
					case 2:
						banner.style.backgroundColor="#fdaf00";
						break;
					case 4:
						banner.style.backgroundColor="#ff493b";
						break;
					case 5:
						banner.style.backgroundColor="#ffc702";
						break;
				}
				count = currentIndex + 1;
			}
		}
		setInterval(function () {
			if (count === bannerSliders.length) {
				count = 0;
			}
			bannerSlider(count);
		}, 5000)
	}
	selectBanner()

	// 直播入口小图（li）hover切换大图（li）和自滚动字幕
	var smList = document.getElementById('sm-list');
	var lgLists = document.getElementById('lg-list').getElementsByTagName('li');
	var smLists = document.getElementById('sm-list').getElementsByTagName('li');
	var previous = document.getElementById('previous-mask');
	var next = document.getElementById('next-mask');
	var forecastText = document.getElementById('forecast-text');
	var timer = null;
	next.onclick = function () {
		clearInterval(timer)
		this.style.zIndex = 0;
		timer = setInterval(function(){
			//设定每次移动数值41。因为有margin-left：-4px;
			smList.style.left = smList.offsetLeft - 37 +"px";
			if (smList.offsetLeft <= -492) {
				smList.style.left = -492 + "px";
				clearInterval(timer);
				previous.style.zIndex = 1;
			}
		},30)
	}
	previous.onclick = function () {
		clearInterval(timer)
		this.style.zIndex = 0;
		timer = setInterval(function(){
			smList.style.left = smList.offsetLeft + 45 +"px";
			if (smList.offsetLeft >= 0) {
				smList.style.left = 0 + "px";
				clearInterval(timer);
				next.style.zIndex = 1;
			}
		},30)
	}
	for (var i = 0; i < smLists.length; i++) {
		smLists[i].index = i;
		smLists[i].onmouseover = function () {
			for (var i = 0; i < smLists.length; i++) {
				smLists[i].getElementsByTagName('img')[1].style.display="none";
				lgLists[i].style.zIndex = 0;
			}
			this.getElementsByTagName('img')[1].style.display="block";
			lgLists[this.index].style.zIndex = 1;
		}
	}

	setInterval(function(){
		var count = 0;
		var speed = -4;
		if (forecastText.offsetTop === -40) {
			speed = -speed;
		}
		var scrollTimer = setInterval(function(){
			forecastText.style.top = forecastText.offsetTop + speed +"px" 
			count++
			if (count === 10) {
				clearInterval(scrollTimer);
			}
		},30)
	},3000)

	var scroll = document.body.scrollTop;
}

var headerBar = document.getElementById('header-bar');
var scrollBar = document.getElementById('scroll-bar');
window.onscroll = function () {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop < 600) {
		scrollBar.style.display = "none";
	}
	else {
		scrollBar.style.display = "block";
	}
	if (scrollTop >= 789) {
		headerBar.style.top = 0 + "px";
	}
	else {
		headerBar.style.top = -50 + "px";
	}
}

