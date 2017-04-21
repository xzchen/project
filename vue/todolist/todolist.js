new Vue({
	el:"#toDoList",
	data:{
		createToDo:"v-model执行双向绑定，根据这里的数据去添加到doingLists数组里",
		editText: "",
		oldText: "", //取消编辑前，记录之前存储的内容
		doingLists:[
			{
				text: "doingLists和doneLists数组里包含的都是多个json对象。键text的值存放的是文本",
				flag: false
			},
			{
				text: "键flag的值类型是boolean，因为勾选后checkbox会又标识，通过设置flag强行使得checkbox为未勾选状态",
				flag: false
			}
		],
		doneLists:[
			{
				text: "执行delete操作会删除当前list，勾选checkbox只会在doingLists和doneLists之间交换数据",
				flag: false
			},
			{
				text: "每个list支持编辑。失焦和回车的时候提交修改",
				flag: false
			},
			{
				text: "按ESC可以退出编辑，返还原始list文本",
				flag: false
			}
		]
	},
	methods:{
		fnCreateToDo(){
			//这里的this指的是当前Vue实例
			if(this.createToDo.trim()) {  //如果不是添加的空任务就确认push到doingLists数组
				var json = {
					text: this.createToDo.trim(),
					flag: false
				}
				this.doingLists.push(json);
				this.createToDo = "";
			}
		
		},
		//doingToDone和doneToDoing方法可以整合为1个。想不到合适的，暂时就这样了。
		doingToDone(doing) {
			doing.flag = false;
			this.doneLists.push(this.doingLists.splice(this.doingLists.indexOf(doing), 1)[0])
		},
		doneToDoing(done) {
			done.flag = false;
			this.doingLists.push(this.doneLists.splice(this.doingLists.indexOf(done), 1)[0])
		},
		deleteList(list, lists){
			lists.splice(lists.indexOf(list), 1);
		},
		showEditInput(list) {
			//对象的复制是引用空间，这里。
			this.editText = list;
			this.oldText = list.text;
		}
	},
	directives: {
		"focus": {
			update(el, binding) {
				//如果元素上绑定的表达式为真 editText === doing || done；
				if (binding.value) {
					el.focus();
				}
			}
		}
	}
})
