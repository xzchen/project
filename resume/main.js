window.onload = function () {
	var imgs = document.querySelectorAll("main img");
	var imgsHref = []  //记录每张展示demo图片所关联的a的在线demo链接
	var imgsSrc = [];
	var showImages = document.getElementById('showImages');
	var showImage = document.getElementById("showImage");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].index = i;  //根据此上传的index从imgsHref下获得链接地址
		imgsHref.push(imgs[i].parentNode.getElementsByTagName('a')[0].href)
		imgsSrc.push(imgs[i].src.replace("png","gif"))
		imgs[i].onmouseover = function (i) {
			// showImage.src = this.index!==0?this.src:imgs[1].src;  //onmouseover状态出现大图展示demo动态效果。其余的还没录，先就这样。
			// 这里视频没录制完成，先这么写着。
			if (this.index === 0 || this.index === 2) {
				showImage.src = imgsSrc[this.index]
			}
			else {
				showImage.src = this.src
			}  
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
		showImage.src = "";
	}
}

// TODO
// 完成所有视频的录制。做成gif图。