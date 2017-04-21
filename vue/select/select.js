Vue.component("custom-select",{
	props: ["btn-value","ul-text"],
	data() { //因为有多个组件,data不能是对象。因为对象是深度copy
		return {
			ulShow: true,
			inputValue: ""
		}
	},
	template: 
		`<div>
		<input type="text" :value="inputValue" disabled>
		<input type="button" :value="btnValue" @click="ulShow = !ulShow">
		<custom-ul :lists="ulText" v-show="ulShow" @receive="showLiText"></custom-ul>
	</div>`,
	// 父组件在使用子组件的地方用 v-on 来监听子组件触发的事件：
	methods: {
		//当子组件的触发了li的点击事件，通过$emit去触发receive事件。
		showLiText(index) {
			//通过$parent $children等操作多个组件同时changeValue
			//TODO 把它们关联起来组件 
			//test
			// for (var i = 0; i < this.$parent.$children.length) {
			// 	this.$parent.$children[i].inputValue = this.$parent.citys[index];
			// }
			
			this.$parent.$children[0].inputValue = this.$parent.citys[index];
			this.$parent.$children[1].inputValue = this.$parent.AQIs[index];
			this.$parent.$children[2].inputValue = this.$parent.ranking[index];
		}
	}
})

Vue.component("custom-ul",{
	props: ["lists"],
	template: 
		`<ul><li v-for="(listText, listIndex) in lists" @click="showLiText(listIndex)">{{listText}}</li></ul>`,
		//通过v-for提供index参数。方便同步修改三者数据
	methods: {
		showLiText(index){
			//触发当前实例上的事件，把事件沿着作用域链向上派送。
			this.$emit("receive", index)
		}
	}
})
