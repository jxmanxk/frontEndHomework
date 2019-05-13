/*
 * @Author: 陈少雄_xio 
 * @Date: 2019-05-10 14:39:28 
 * @Last Modified by: 陈少雄_xio
 * @Last Modified time: 2019-05-10 19:12:17
 */
<template>
	<div class="xio_sidebar_list">
		<div class="xio_sidebar_list_item flex flex-ver" :class="{'act': selectIdx == index}" v-for="(item,index) in list" :key="index" @click="jump(item,index)">
			<div class="xio_sidebar_list_item_tx flex-1">{{item.name}}</div>
			<div class="xio_sidebar_list_item_icon" :style="{'backgroundImage': 'url('+ item.iconUrl +')'}"></div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			selectIdx: 0
		}
	},
	props:['config'],
	computed: {
		list(){
			return this.config
		}
	},
	mounted(){

	},
	methods:{
		jump(item,index){
			this.selectIdx = index;
			this.$emit('jump',item);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.xio_sidebar_list {
		
		.xio_sidebar_list_item {
			min-height: 50px;
			padding: 0 10px;
			box-sizing: border-box;
			border-bottom: 1px solid #000;
			color: #000;
			cursor: pointer;
			&.act {
				background-color: rgba(0,0,0,.1);
			}
			.xio_sidebar_list_item_tx {
				font-size: 14px;
			}
			.xio_sidebar_list_item_icon {
				width: 7px;
				height: 12px;
				background-position: 50%;
				background-repeat: no-repeat;
				background-size: 100%;
			}
		}
	}
</style>
