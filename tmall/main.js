window.onresize = function () {
	if(window.innerWidth <= 1210) {
		document.getElementById('footer').className = "footer w1210";
	}
	else if (window.innerWidth <= 1260){
		document.getElementById('footer').className = "footer";
		document.getElementsByTagName("body")[0].className = "w990";
		console.log(document.querySelector(".anchor-bar"))
	}
	else {
		document.getElementById('footer').className = "footer";
		document.getElementsByTagName("body")[0].className = "w1230";
	}
	if (window.innerWidth >= 1360 && (document.body.scrollTop || document.documentElement.scrollTop) >= 600) {
		document.querySelector(".anchor-bar").style.display = "block";
	}
	else {
		document.querySelector(".anchor-bar").style.display = "none";
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
		if (forecastText.offsetTop <= -40) {
			speed = -speed;
			forecastText.style.top = -40 + "px";
		}
		var scrollTimer = setInterval(function(){
			forecastText.style.top = forecastText.offsetTop + speed +"px" 
			count++
			if (count === 10) {
				clearInterval(scrollTimer);
				forecastText.style.top = 0;
			}
		},30)
	},3000)

	// anchor字幕滚动
	var anchorBannerText = document.querySelectorAll(".anchor-banner-text");
	var li = [];
	for (var i =0; i < anchorBannerText.length; i++) {
		anchorLi = anchorBannerText[i].getElementsByTagName('li');
		li = li.concat(anchorLi)
	}
	
	for (var i = 0; i < li.length; i++) {
		li[i][0].style.marginTop = 0;
		scrollText(i);
		function scrollText(i) {
			var condition = 1;
			setInterval(function () {
				// 每两次之后换方向移动。一次上/下移动30px
				scrollSpeed = condition / 2 > 1?3:-3;
				var num = 0;
				var textScrollTimer = setInterval(function(){
					if (num == 10) {
						clearInterval(textScrollTimer);

					}
					else {
						num++
						li[i][0].style.marginTop = parseInt(li[i][0].style.marginTop) + scrollSpeed + "px"
						var temp = li[i][0].innerText;
						li[i][0].innerText = li[i][2].innerText;
						li[i][2].innerText = temp;
					}
				},30)
				condition++;
				condition = condition == 5?1:condition;
			},5000)
		}
	}
}

var headerBar = document.getElementById('header-bar');
var anchorBar = document.getElementById('anchor-bar');
window.onscroll = function () {
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if (scrollTop < 600) {
		anchorBar.style.display = "none";
	}
	else {
		if (window.innerWidth >= 1360) {
			anchorBar.style.display = "block";
		}
	}
	if (scrollTop >= 789) {
		//不然就遮住了顶部啊。。
		headerBar.display = "fixed";
		headerBar.style.top = 0 + "px";
	}
	else {
		headerBar.display = "none";
		headerBar.style.top = -150 + "px";
	}
}
var aa = anchorBar.getElementsByTagName('a');
for (var i = 0; i < aa.length; i++) {
	//点击左侧锚链接，滚到到它所对应的位置。（JS运动，不会直接跳转到）
	aa[i].onclick = function () {
		var index = this.href.indexOf("#")
		var targetId = this.href.slice(this.href.indexOf("#") + 1);
		var targetDom = document.getElementById(targetId);
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var targetTop = targetDom.offsetTop - 35;
		speed3 = (targetTop - scrollTop) / 10;   //运动次数固定，根据不同距离计算speed
		var timm = setInterval(function () {
			scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if (Math.abs(targetTop - scrollTop) < Math.abs(speed3)) {
				clearInterval(timm);
			}
			else {
				var z = scrollTop + speed3;
				window.scrollTo(0, z);
			}
		},30)
		return false;
	}
}

// TODO
// 翻牌效果

// Q1 .anchor-bar 自滚动active状态。。？。。
// Q2出现滚动条后左右移动。。右边间距问题？
