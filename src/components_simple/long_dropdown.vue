/*
 * @Author: 李伟龙_weilong 
 * @Date: 2019-05-14 19:18:45 
 * @Email: 515897141@qq.com 
 * @Last Modified by: 李伟龙_weilong
 * @Last Modified time: 2019-05-14 19:19:09
 */
<!-- 组件使用说明↓↓↓↓↓↓↓↓↓↓
    下拉列表 defaultVal Array （必传）
    默认值 defaultVal String （非必传）
    点击事件 choose(item)  [可获取组件中列表选中的数据]
    例子：<dropdown :dropList='list' :defaultVal='val' v-on:choose="getValue"></dropdown>
组件使用说明↑↑↑↑↑↑↑↑↑↑ -->
<template>
    <div class="dropdown_box" v-if="dropList&&dropList.length">
        <!-- 显示框 -->
        <div class="input" @click="isShow=!isShow">{{val||defaultVal||dropList[0].name}}</div>
        <!-- 下拉列表 -->
        <div class="drop_list" :class="{'act':isShow}" v-show="isShow">
          <div class="item" v-for="(item, idx) in dropList" :key="" @click="choose(item)">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      val: ''
    }
  },
  props:{
    dropList: Array, // dropList 下拉框列表
    defaultVal: String // 默认值
  },
  created() {
  },
  methods: {
    choose(item){
      this.val = item.name;
      this.isShow = false;
      this.$emit("choose",item);
    }
  }
}
</script>
<style scoped>
.dropdown_box{
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #999;
  margin: auto;
  position: relative;
  user-select: none;
}
.dropdown_box .input{
  width: 100%;
  height: 100%;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  overflow: hidden;
}
.dropdown_box .drop_list{
  position: absolute;
  top: 100%;
  left: -2px;
  width: 100%;
  margin-top: 2px;
  background-color: #fff;
  border: 2px solid #f2f2f2;
  overflow: hidden;
}
.dropdown_box .drop_list .item{
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #fff;
  background-color: #f2f2f2;
  cursor: pointer;
}
.dropdown_box .drop_list .item:hover{
  background-color: #ff963d;
  color: #fff;
}
.dropdown_box .drop_list .item:last-of-type{border: 0;}
</style>