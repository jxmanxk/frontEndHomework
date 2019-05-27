<template>
    <div class="form">
         <div class="head">
            <div class="head_item" :class="{'isClick':item.isClick}" v-for="(item,idx) in formData.title" :key="idx" @click="changeList(idx)">{{item[forTitKey]}}</div>
        </div>
        <div class="list">
           <ul v-for="(item, idx) in formData.list" :key="idx">
               <li v-for="(item_m, idx_m) in forListKeyArr" :key="idx_m">{{item[item_m]}}</li>
           </ul>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return{
        }
    },
    props: {
        formData: {
            list: Array, // 列表 [{name:'',creatTime:'',num:''}]
            title: Array, // 标题 [{name:'',isOrder:'',isisClick:''}]  isOrder是否顺序 isClick是否触发自定义事件
        },
        forTitKey: String, // 标题：自定义遍历键 'name'
        forListKeyArr: Array // 列表：自定义遍历键数组对应列表['name','creatTime','num']
    },
    methods: {
        changeList(idx){
            var formData = this.formData;
            var data = {};
            data.idx = idx; // 点击标题的下表
            data.isOrder = formData.title[idx].isOrder; // 当前顺序
			this.$emit('clickHandle',data);
        }
    }
}
</script>
<style scoped>
.head{width: 100%;}
.head::after{
    display: block;
    content: '';
    clear: both;
}
.head .head_item{
    float: left;
    width: 33%;
    height: 30px;
    line-height: 30px;
}
.head .head_item.isClick{
    color: red;
    cursor: pointer;
}
.form{width: 600px;user-select: none;}
.form .list{width: 100%;}
.form .list ul::after{
    display: block;
    content: '';
    clear: both;
}
.form .list li{
    float: left;
    width: 33%;
    height: 20px;
    line-height: 20px;
}
</style>