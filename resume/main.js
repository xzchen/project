window.onload = function () {
	var imgs = document.querySelectorAll("main img");
	var imgsHref = []  //记录每张展示demo图片所关联的a的在线demo链接
	var imgsSrc = [];
	var showImageContainer = document.getElementById('showImageContainer');
	var showImages = showImageContainer.getElementsByTagName('img');

	//TODO图片预加载之后记得修改命名之类。。函数逻辑太重复。修改
	var progress = document.getElementById('progress');
	var imgCount = 0;

	var showImagesSrc = [
		"images/todolist.gif",
		"images/tmall.png",
		"images/square.gif",
		"images/form-component.png",
		"images/calendar.png",
		"images/snaker.png",
		"images/tree.png",
	]
	for (var i = 0; i < showImagesSrc.length; i++) {
		var imgObj = new Image()
		imgObj.index = i;
		imgObj.onload = function () {
			console.log(this.src)
			showImages[this.index].src =  this.src;
			var percent = Math.round((imgCount+1) / showImagesSrc.length * 100)
			progress.style.width = percent + "%";
			progress.innerText = percent + "%";
			if (imgCount >= showImagesSrc.length - 1) {
				document.getElementById('coverBackground').style.zIndex = 0;
			}
			imgCount++;

		}
		imgObj.onerror = function () {
			console.log('error')
		}
		imgObj.src = showImagesSrc[i]

		showImages[i].src = showImagesSrc[i]
	}

	for (var i = 0; i < imgs.length; i++) {
		imgs[i].index = i;  //根据此上传的index从imgsHref下获得链接地址
		imgsHref.push(imgs[i].parentNode.getElementsByTagName('a')[0].href)
		imgsSrc.push(imgs[i].src.replace("png","gif"))
		imgs[i].onmouseover = function (i) {
			showImageContainer.style.zIndex = 0;
			for (var i = 0; i < showImages.length; i++) {
				showImages[i].style.display = 'none';  //这边如果仍使用z-index，因为某些图片不能完全覆盖某些图片的问题，会看到其他图片。
				//如果使用opacity。实际上点击的都是最后一张图片。
			}
			showImages[this.index].style.display = 'block';
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