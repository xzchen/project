window.onload = function () {
	document.getElementById('imgTodoList').src = "https://raw.githubusercontent.com/xzchen/project/gh-pages/Vue/toDoList/toDoList.gif";
	var imgs = document.querySelectorAll("main img");
	var imgsHref = []  //记录每张展示demo图片所关联的a的在线demo链接
	var showImages = document.getElementById('showImages');
	var showImage = document.getElementById("showImage");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].index = i;  //根据此上传的index从imgsHref下获得链接地址
		imgsHref.push(imgs[i].parentNode.getElementsByTagName('a')[0].href)
		imgs[i].onclick = function () {
			showImage.src = this.src;
			showImage.index = this.index;
			showImages.style.zIndex = 0;
		}
	}

	showImage.onclick = function (ev) {
		ev = ev || window.event;
		this.parentNode.href = imgsHref[this.index];
		if (ev.stopPropagation) {
			ev.stopPropagation();
		}
		else {
			ev.cancelBubble = true;
		}
	}

	showImages.onclick = function () {
		this.style.zIndex =  -1;
	}
}

