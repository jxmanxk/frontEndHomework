/*
 * @Author: 陈少雄_xio 
 * @Date: 2019-05-10 14:39:28 
 * @Last Modified by: 陈少雄_xio
 * @Last Modified time: 2019-05-13 17:19:56
 */
<template>
	<div class="index_1st">
		<xio_dropdown :data="dropdown_list" :isInput="false" @getReturnDataFn="getReturnDataFn" ></xio_dropdown>
	</div>
</template>

<script>
import xio_dropdown from "../components_simple/xio_dropdown";
export default {
	data () {
		return {
			dropdown_list: [
				{
					name: '广东省广州市',
				},
				{
					name: '北京市',
				},
				{
					name: '天津市',
				},
				{
					name: '香港特别行政区',
				},
				{
					name: '澳门特别行政区',
				},
				{
					name: '重庆市',
				},
				{
					name: '上海市',
				}
			],
			returnData: {},
		}
	},
	components:{xio_dropdown},
	created() {
		
	},
	computed: {

	},
	mounted(){

	},
	methods:{
		getReturnDataFn(data){
			this.$set(this.returnData,data.key,data.val);
		}
	},
	watch:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index_1st {
	
}
</style>
