/*
 * @Author: 陈少雄_xio 
 * @Date: 2019-05-13 11:16:15 
 * @Last Modified by: 陈少雄_xio
 * @Last Modified time: 2019-05-13 18:31:33
 */

<template>
	<div class="drop_down_box">
		<div class="input_box flex flex-ver flex-wrap" @mouseleave="dropdownMoveleave($event)">
			<!-- ↓↓↓↓↓↓↓↓↓↓ 带input的下拉选择框（结果显示并可修改） -->
			<div class="input_box_block flex flex-ver" v-if="isInput">
				<input 
				ref="input" 
				type="text" 
				class="input_box_block_input flex-1" 
				placeholder="请选择" 
				v-model="select" 
				@input="inputComm($event)" 
				@focus="inputFocus($event)" 
				>
				<i class="iconfont" :class="[show?'xio_arrow_up':'xio_arrow_down']"></i>
			</div>
			<!-- ↑↑↑↑↑↑↑↑↑↑ 带input的下拉选择框 -->

			<!-- ↓↓↓↓↓↓↓↓↓↓ 下拉选择框（结果显示） -->
			<div class="input_box_block flex flex-ver" v-else @click="dropdownToggle($event)">
				<div class="input_box_block_input flex-1">{{select?select:'请选择'}}</div>
				<i class="iconfont" :class="[show?'xio_arrow_up':'xio_arrow_down']"></i>
			</div>
			<!-- ↑↑↑↑↑↑↑↑↑↑ 下拉选择框（结果显示） -->

			<!-- ↓↓↓↓↓↓↓↓↓↓ 下拉选择列表 -->
			<transition name="dropdown_list">
				<div class="input_box_dropdown-block" v-show="show" >
					<div class="input_box_dropdown">
						<div class="input_box_dropdown_item flex flex-center" v-for="(item,index) in list" :key="index" @click="dropdownChoose(item)">
							<div class="flex flex-ver">
								<i class="iconfont xio_page_turning_right"></i>
								<div>{{item.name}}</div>
							</div>
						</div>
						<div class="input_box_dropdown_arrow"></div>
					</div>
				</div>
			</transition>
			<!-- ↑↑↑↑↑↑↑↑↑↑ 下拉选择列表 -->
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			show: false,//下拉列表显示，默认隐藏
			select: '',//选择结果
		}
	},
	// 页面传输参数
	// data 下拉列表数组
	// isInput 是否带input框的下拉列表，默认为普通不带input框
	props:['data','isInput'],
	computed: {
		// 下拉列表数组
		list(){
			return this.data
		}
	},
	mounted(){

	},
	methods:{
		// 下拉展开收起
		dropdownToggle(e){
			this.show = !this.show
		},
		// 下拉选择结果
		dropdownChoose(item){
			this.select = item.name;
			this.show = false;
			// 返回组件数据到页面
			this.returnDataFn();
		},
		// 鼠标移出
		dropdownMoveleave(e){
			this.show = false;
			// 存在input时，input失焦
			if(this.$refs && this.$refs.input){
				this.$refs.input.blur();
			}
		},
		// input输入事件
		inputComm(e){
			// 返回组件数据到页面
			this.returnDataFn();
		},
		// input聚焦事件
		inputFocus(e){
			this.show = true;
		},
		// input失焦事件 （暂不用）
		inputBlur(e){
			// this.show = false;
		},
		// 返回组件数据到页面
		returnDataFn(){
			var data = {};
			data.key = 'select';
			data.val = this.select;
			// console.log(data);
			this.$emit('getReturnDataFn',data);
		}

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.drop_down_box {
		max-width: 50%;
		.input_box {
			width: 150px;
			.input_box_block {
				width: 150px;
				float: left;
				position: relative;
				padding: 10px;
				font-size: 14px;
				border-radius: 4px;
				background-color: #409eff;
				border: 1px solid #409eff;
				box-sizing: border-box;
				cursor: pointer;
				.input_box_block_input {
					width: 100%;
					height: 100%;
					font-size: 16px;
					color: #fff;
					background-color: #409eff;
				}
				input.input_box_block_input {
					width: 100%;
					height: 100%;
					&::-webkit-input-placeholder {
						font-size: 14px;
						color: #fff;
					}
				}
				.iconfont {
					color: #fff;
				}
			}
			.input_box_dropdown-block {
					width: 100%;
				.input_box_dropdown {
					position: relative;
					margin: 12px 0 5px 0;
					padding: 10px 0;
					background-color: #fff;
					border: 1px solid #ebeef5;
					border-radius: 4px;
					box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
					.input_box_dropdown_item {
						min-width: 100px;
						font-size: 14px;
						color: #606266;
						padding: 0 10px;
						box-sizing: border-box;
						cursor: pointer;
						line-height: 28px;
					}
					.input_box_dropdown_arrow {
						position: absolute;
						display: block;
						width: 0;
						height: 0;
						border-color: transparent;
						border-style: solid;
						border-width: 6px;
						filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
						top: -6px;
						left: 50%;
						transform: translateX(-50%);
						-webkit-transform: translateX(-50%);
						margin-right: 3px;
						border-top-width: 0;
						border-bottom-color: #ebeef5;
						&::after {
							content: " ";
							position: absolute;
							display: block;
							width: 0;
							height: 0;
							border-color: transparent;
							border-style: solid;
							border-width: 6px;
							top: 1px;
							margin-left: -6px;
							border-top-width: 0;
							border-bottom-color: #fff;
						}
					}
				}
			}
		}
	}
</style>
