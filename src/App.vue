<template>
  <div id="app">
	<div class="page flex flex-ver">
		<div class="sidebar">
			<div class="sidebar_content">
				<xio_sidebarList @jump="jump" :config="sideListConfig" ></xio_sidebarList>
			</div>
		</div>
		<div class="container flex-1">
			<div class="container_content">
				<router-view ref="routerView"></router-view>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import xio_sidebarList from "./components/xio_sidebarList";
var xio_sideList_config = require("./config/xio_sideList_config.js").sideList; //功能列表
export default {
  name: 'App',
  data(){
    return {
      sideListConfig: xio_sideList_config,
    }
  },
  components: {xio_sidebarList},
  created(){
	  
  },
  methods: {
	  jump(value){
			//获取选择的路由，并切换路由
      		this.$router.replace({ path: value.router });
	  }
  },
  watch: {
	$route(to, from) {
		// console.log(to,from);
	}
  }
}
</script>

<style lang="less">
@full:100%;
#app {
  .page {
	  height: 100vh;
	  .sidebar {
		  width: 10%;
		  height: @full;
		  box-sizing: border-box;
		  padding: 100px 0;
		  .sidebar_content {
			width: @full;
			height: @full;
			overflow-y: auto;
			box-sizing: border-box;
			border: 1px solid #000;
			border-width: 1px 0 1px 1px;
		  }
	  }
	  .container {
		  height: @full;
		  box-sizing: border-box;
		  padding: 20px;
		  border: 1px solid #000;
		  .container_content {
			  width: @full;
			  height: @full;
			  overflow-y: auto;
		  }
	  }
  }
}
</style>
