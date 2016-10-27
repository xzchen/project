window.onload = function () {
	var toDoText = document.getElementById('toDoText');
	var toDoing = document.getElementById('toDoing');
	var finishList = document.getElementById('finishList');
	var toDoingCount = document.getElementById('toDoingCount');
	var finishListCount = document.getElementById('finishListCount');
	toDoText.onkeydown = function (ev) {
		var ev = ev || event;
		var keyCode = ev.keyCode;
		if (keyCode == 13 && toDoText.value.trim()!= "") {
			var li = document.createElement("li");
			li.innerHTML = "<input type='checkbox'>" + toDoText.value + "<span></span>";
			toDoing.appendChild(li);
			toDoText.value = "";
			toDoingCount.innerHTML = +toDoingCount.innerHTML + 1;
		}
	}
	toDoing.onclick = function () {
		var ev = ev || event;
		var target = ev.srcElement || ev.target;
		if (target.nodeName == "INPUT") {
			finishList.appendChild(target.parentNode);
			toDoingCount.innerHTML = +toDoingCount.innerHTML - 1;
			finishListCount.innerHTML = +finishListCount.innerHTML + 1;
		}
		if (target.nodeName == "SPAN") {
			toDoing.removeChild(target.parentNode);
			toDoingCount.innerHTML = +toDoingCount.innerHTML - 1;
		}
	}
	finishList.onclick = function () {
		var ev = ev || event;
		var target = ev.srcElement || ev.target;
		if (target.nodeName == "INPUT") {
			toDoing.appendChild(target.parentNode);
			toDoingCount.innerHTML = +toDoingCount.innerHTML + 1;
			finishListCount.innerHTML = +finishListCount.innerHTML - 1;
		}
		if (target.nodeName == "SPAN") {
			finishList.removeChild(target.parentNode);
			finishListCount.innerHTML = +finishListCount.innerHTML - 1;
		}
	}
}