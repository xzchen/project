window.onload = function () {
	var imgs = document.querySelectorAll("main img");
	var imgsHref = []  //记录每张展示demo图片所关联的a的在线demo链接
	var imgsSrc = [];
	var showImageContainer = document.getElementById('showImageContainer');
	var showImages = showImageContainer.getElementsByTagName('img');
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].index = i;  //根据此上传的index从imgsHref下获得链接地址
		imgsHref.push(imgs[i].parentNode.getElementsByTagName('a')[0].href)
		imgsSrc.push(imgs[i].src.replace("png","gif"))
		imgs[i].onmouseover = function (i) {
			showImageContainer.style.zIndex = 0;
			for (var i = 0; i < showImages.length; i++) {
				showImages[i].style.zIndex = 0;
			}
			showImages[this.index].style.zIndex = 1;
		}
	}

	for (var i = 0; i < showImages.length; i++) {
		showImages[i].index = i;
		showImages[i].onclick = function () {
			this.parentNode.href = imgsHref[this.index];
		}
	}
	showImageContainer.onclick = function () {
		this.style.zIndex =  -1;
	}
}

// TODO
// 完成所有视频的录制。做成gif图。