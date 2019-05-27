<template>
  <div class="hello">
    <div class="box">
      <long_form  :formData='formData' 
                  :forListKeyArr="forListKeyArr" 
                  forTitKey="name"
                  @clickHandle="clickHandle"
                  ></long_form>
    </div>
  </div>
</template>

<script>
import long_form from '../components_simple/long_form'
export default {
  data () {
    return {
      formData: {
        title:[{
          name: '水果名称', // 名称
          isOrder: 0, // 0升序 1降序
          isClick: false // 是否可点击
        },{
          name: '上架时间',
          isOrder: 0,
          isClick: 'createTime'
        },{
          name: '水果数量',
          isOrder: 0,
          isClick: 'num'
        }],
        list: [{
          name: '苹果',
          creatTime: '2019-05-21',
          num: 10
        },{
          name: '雪梨',
          creatTime: '2019-05-20',
          num: 9
        },{
          name: '西瓜',
          creatTime: '2019-06-20',
          num: 99
        }]
        
      },
      forListKeyArr: ['name', 'creatTime', 'num']
    }
  },
  components: {
    long_form
  },
  mounted() {
  },
  methods: {
    // 自定义点击标题事件
    clickHandle(inf){
      var {idx, isOrder} = inf;
      var {list, title} = this.formData;
      if(title[idx].isClick == 'num') this.changeList_num(inf);
      if(title[idx].isClick == 'createTime') this.changeList_createTime(inf);
    },
    // 点击数量改变顺序
    changeList_num(inf){
      var {idx, isOrder} = inf;
      var {list, title} = this.formData;
       if(isOrder){   
          title[idx].isOrder = 0;
          list = list.sort(function(a,b){return a.num - b.num;});
      }else{
          title[idx].isOrder = 1;
          list = list.sort(function(a,b){return b.num - a.num;});
      }
      this.$set(this.formData,'list',list);
      this.$set(this.formData,'title',title);
    },
    // 点击时间回调
    changeList_createTime(){
      alert("我点击了上架时间")
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
