// TODO 测试slot
/*Vue.component('child', {
	props: ['todoList'],
	
	template: `
	<div>
		
		<slot name="tips">
			<p v-if="!doingLength">没有代做的事项</p>
			<p v-else>正在进行<span>{{doingLength}}</span></p>
		</slot>
		

		<slot name="todos" v-for="todo,index in todoList" :flag="todo.flag" :title="todo.flag" >
			<li>
				<input type="checkbox" @click="todo.flag = !todo.flag">
				<p @click="showEdit(todo)">
					{{todo.text}}
					<input 
					type="text" 
					v-show="todo === edit" 
					v-model:value="todo.text"
					v-focus="todo === edit"
					@blur="changeValue(todo)"
					@keyup.enter="changeValue(todo)"
					@keyup.esc="todo.text =oldText;edit = ''">
				</p>
				<span @click="todoList.splice(index,1)"></span>
			</li>	
		</slot>
		
		<slot name="test" v-for="todo in todoList" :flag="todo.flag">

		</slot>
  	</div>
	`,

	// <slot name="todo"
 //    v-for="item in todoList"
 //    :text="item.text" :flag="item.flag">
   		
 //  	</slot>
 	data: {
 		edit() {
 			return ();
 		}
 	},
	computed: {
		doingLength() {
			return todoList.filter(function (item){
				return item.flag === false;
			}).length
		}
	},
	methods: {
		showEdit() {

		}
	}

})*/

//全局注册了focus指令。 el：指令所绑定的元素，可以用来操作DOM
//binding一个对象，其中value属性就指令绑定的值 expression运算后的值
Vue.directive('focus', {
	update(el, binding) {
		if (binding.value) {
			el.focus()
		}
	}
})
//如果用户的localStorage里面不存在todoList项。我们就预设一个。
if (!localStorage.hasOwnProperty('todoList')) {
	localStorage.setItem('todoList', '[{"text":"这里写你未完成的任务","flag":false},{"text":"支持修改，删除操作","flag":true}]')
}

var todoList = JSON.parse(localStorage.getItem('todoList'))  //从字符串中解析出JSON对象
new Vue({
	el: '#app',
	data: {
		newTodoText: '', 
		todoList: todoList,
		edit: '',
		oldText: '',
	},
	methods: {
		createNewTodo() {
			if (this.newTodoText) {
				this.todoList.push({text: this.newTodoText, flag: false})
				this.newTodoText = '';
			}
			else {
				alert('不能输入空项目');
				return;
			}
		},
		showEdit(todo) {
			this.edit = todo;   //edit引用todo，这样todo改变edit也会改变
			this.oldText = todo.text; //showEidt里记录下原有的值，当用户不想修改的时候按住esc可以直接返回oldText的值
		},
		changeValue(todo) {
			if (!todo.text) {
				alert("项目不能为空")
				todo.text = this.oldText;  //changeValue的时候只修改值而不改变flag状态，所以就直接改text就好（v-model指令是双向绑定。这是为空的情况）。
			}
			this.edit = '';   //对象的引用，一个对象置空后不影响另一对象。
		}
	},
	watch: {
		todoList: {
			handler() {
				localStorage.setItem('todoList', JSON.stringify(this.todoList))
			},
			deep: true  //保证监听数组内部值的变化
		}
	},
	computed: {
		doingLength() {
			return this.todoList.filter(item => item.flag === false).length; //计算属性。根据todo.flag过滤
		},
		doneLength() {
			return this.todoList.filter(item => item.flag === true).length;
		}
	}
})