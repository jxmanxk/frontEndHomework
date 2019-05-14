/*
 * @Author: 李伟龙_weilong 
 * @Date: 2019-05-14 19:19:32 
 * @Email: 515897141@qq.com 
 * @Last Modified by: 李伟龙_weilong
 * @Last Modified time: 2019-05-14 19:20:07
 */
<template>
  <div class="hello">
    <div class="box">
      <div class="output" v-show="val">name:"{{val}}", id："{{id}}"</div>
      <dropdown :dropList='list' :defaultVal='val' v-on:choose="getValue"></dropdown>
    </div>
  </div>
</template>

<script>
import dropdown from '../components_simple/long_dropdown'
export default {
  data () {
    return {
      list: [
        {name:'banana', id:'1111'},
        {name:'apple', id:'2222'},
        {name:'watermelon', id:'3333'},
        {name:'pear', id:'4444'}
      ],
      val: '',
      id: ''
    }
  },
  components: {
    dropdown
  },
  mounted() {
    var { list, val ,id } = this;
    if(!val||!id){
      this.val = list[0].name;
      this.id = list[0].id;
    }
  },
  methods: {
    getValue(item){
      this.val = item.name;
      this.id = item.id;
    }
  },
}
</script>

<style scoped>
.output{
  margin-bottom: 40px;
  color: #ff963d;
  float: right;
}
.box{
  width: 600px;
  margin: auto;
}
</style>
