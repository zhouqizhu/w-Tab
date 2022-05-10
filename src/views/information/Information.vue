<template>
    <Nav :currentIndex="2" />
    <div class="information">
        <Accordion :informationFlow="weibo" :condition="0" />
        <Accordion :informationFlow="zhihu" :condition="0" />
        <Accordion :informationFlow="douyin" :condition="0" />
    </div>
</template>

<script>
import Nav from '../../components/Nav.vue';
import Accordion from '../../components/Accordion.vue';
import { reactive, toRefs } from '@vue/reactivity';
import { get } from '../../utility/request';
export default{
    name:'Information',
    components: { Nav, Accordion },
    setup() {
        const state = reactive({
            weibo: {},
            zhihu: {},
            douyin: {},
        })
        const information = async() => {
            const weibo = await get('/information/resou')
            weibo.title = "微博热搜"
            state.weibo = weibo

            const zhihu = await get('/information/zhihuresou')
            zhihu.title = "知乎热搜"
            state.zhihu = zhihu

            const douyin = await get('/information/douyinresou')
            douyin.title = "抖音热搜"
            state.douyin = douyin
        }
        information()
        return { ...toRefs(state), information }
    }
}
</script>

<style lang="scss" scoped>
.information {
    width: 100vw;
}
</style>