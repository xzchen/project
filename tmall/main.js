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
		headerBar.style.top = 0 + "px";
	}
	else {
		headerBar.style.top = -50 + "px";
	}
}
var aa = anchorBar.getElementsByTagName('a');
for (var i = 0; i < aa.length; i++) {
	
	aa[i].onclick = function () {
		console.log(this.href)
		console.log(this.target)
		var index = this.href.indexOf("#")
		
		var targetId = this.href.slice(this.href.indexOf("#") + 1);
		
		
		var targetDom = document.getElementById(targetId);
		
		
		// console.log(targetDom.offsetHeight)
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var targetTop = targetDom.offsetTop - 35;
		console.log(targetTop  + " targetTop")
		console.log(scrollTop  + " scrollTop")
		speed3 = (targetTop - scrollTop) / 10;

		console.log(speed3)
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

// var btn = document.querySelector(".sk-button");
// var b2 = document.querySelector(".J_RefreshStatus");
// setInterval(function (){
// 	btn.click();
// 	b2.click();
// 	console.log(1)
// },100)

// Q1 .anchor-bar 自滚动active状态。。？。。
// Q2出现滚动条后左右移动。。右边间距问题？

// 
// 
/*var ss = {
  fixAllLinks: function() {
    // Get a list of all links in the page
    var allLinks = document.getElementsByTagName('a');
    // Walk through the list
    for (var i=0;i<allLinks.length;i++) {
      var lnk = allLinks;
      if ((lnk.href && lnk.href.indexOf('#') != -1) && 
          ( (lnk.pathname == location.pathname) ||
            ('/'+lnk.pathname == location.pathname) ) && 
          (lnk.search == location.search)) {
        // If the link is internal to the page (begins in #)
        // then attach the smoothScroll function as an onclick
        // event handler
        ss.addEvent(lnk,'click',ss.smoothScroll);
      }
    }
  },

  smoothScroll: function(e) {
    // This is an event handler; get the clicked on element,
    // in a cross-browser fashion
    if (window.event) {
      target = window.event.srcElement;
    } else if (e) {
      target = e.target;
    } else return;

    // Make sure that the target is an element, not a text node
    // within an element
    if (target.nodeName.toLowerCase() != 'a') {
      target = target.parentNode;
    }
  
    // Paranoia; check this is an A tag
    if (target.nodeName.toLowerCase() != 'a') return;
  
    // Find the <a name> tag corresponding to this href
    // First strip off the hash (first character)
    anchor = target.hash.substr(1);
    // Now loop all A tags until we find one with that name
    var allLinks = document.getElementsByTagName('a');
    var destinationLink = null;
    for (var i=0;i<allLinks.length;i++) {
      var lnk = allLinks;
      if (lnk.name && (lnk.name == anchor)) {
        destinationLink = lnk;
        break;
      }
    }
    if (!destinationLink) destinationLink = document.getElementById(anchor);

    // If we didn't find a destination, give up and let the browser do
    // its thing
    if (!destinationLink) return true;
  
    // Find the destination's position
    var destx = destinationLink.offsetLeft; 
    var desty = destinationLink.offsetTop;
    var thisNode = destinationLink;
    while (thisNode.offsetParent && 
          (thisNode.offsetParent != document.body)) {
      thisNode = thisNode.offsetParent;
      destx += thisNode.offsetLeft;
      desty += thisNode.offsetTop;
    }
  
    // Stop any current scrolling
    clearInterval(ss.INTERVAL);
  
    cypos = ss.getCurrentYPos();
  
    ss_stepsize = parseInt((desty-cypos)/ss.STEPS);
    ss.INTERVAL =
setInterval('ss.scrollWindow('+ss_stepsize+','+desty+',"'+anchor+'")',10);
  
    // And stop the actual click happening
    if (window.event) {
      window.event.cancelBubble = true;
      window.event.returnValue = false;
    }
    if (e && e.preventDefault && e.stopPropagation) {
      e.preventDefault();
      e.stopPropagation();
    }
  },

  scrollWindow: function(scramount,dest,anchor) {
    wascypos = ss.getCurrentYPos();
    isAbove = (wascypos < dest);
    window.scrollTo(0,wascypos + scramount);
    iscypos = ss.getCurrentYPos();
    isAboveNow = (iscypos < dest);
    if ((isAbove != isAboveNow) || (wascypos == iscypos)) {
      // if we've just scrolled past the destination, or
      // we haven't moved from the last scroll (i.e., we're at the
      // bottom of the page) then scroll exactly to the link
      window.scrollTo(0,dest);
      // cancel the repeating timer
      clearInterval(ss.INTERVAL);
      // and jump to the link directly so the URL's right
      location.hash = anchor;
    }
  },

  getCurrentYPos: function() {
    if (document.body && document.body.scrollTop)
      return document.body.scrollTop;
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    if (window.pageYOffset)
      return window.pageYOffset;
    return 0;
  },

  addEvent: function(elm, evType, fn, useCapture) {
    // addEvent and removeEvent
    // cross-browser event handling for IE5+,  NS6 and Mozilla
    // By Scott Andrew
    if (elm.addEventListener){
      elm.addEventListener(evType, fn, useCapture);
      return true;
    } else if (elm.attachEvent){
      var r = elm.attachEvent("on"+evType, fn);
      return r;
    } else {
      alert("Handler could not be removed");
    }
  } 
}*/

/*ss.STEPS = 25;

ss.addEvent(window,"load",ss.fixAllLinks);*/
