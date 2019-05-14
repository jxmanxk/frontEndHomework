<template>
    <div class="tabBox">
        <div class="pullBox">
            <fyt_pullDown :list="dplist" currKey="name" :defaultIndex="idx" v-model="city"></fyt_pullDown>
            <fyt_pullDown :list="dplist1" v-model="city1"></fyt_pullDown>
        </div>
    </div>
</template>

<script>
    import fyt_pullDown from '@/components_simple/fyt_pullDown'
    export default {
        components: {
            fyt_pullDown
        },
        data () {
            return {
                city: {},
                idx: 1,
                dplist: [{
                    id: 0,
                    name: '不限'
                }, {
                    id: 1,
                    name: '茂名'
                }, {
                    id: 2,
                    name: '阳江'
                }, {
                    id: 3,
                    name: '肇庆'
                }],
                city1: {},
                dplist1: [{
                    id: 0,
                    value: '不限'
                }, {
                    id: 1,
                    value: '茂名1'
                }, {
                    id: 2,
                    value: '阳江1'
                }, {
                    id: 3,
                    value: '肇庆1'
                }]
            }
        }
    }
</script>

<style lang="less">
    .info {
        margin-left: 50px;
        font-size: 30px;
    }
</style>
