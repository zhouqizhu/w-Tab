<template>
    <Nav :currentIndex="1" />
    <div v-if="transfer">
        <SiteCloud class="sitecloud" :exploreList="exploreList"  />
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity';
import Nav from '../../components/Nav.vue';
import SiteCloud from '../../components/SiteCloud.vue'
import { get } from '../../utility/request';
export default{
    name:'Explore',
    components: { Nav, SiteCloud },
    setup() {
        const state = reactive({
            exploreList: [],
            transfer: false
        })
        // 获取网站云数据
        const getExploreList = async () => {
            const result = await get('/data/exploreSiteList.json')
            state.exploreList = result
            state.transfer = true
        }
        getExploreList()
        return{ getExploreList, ...toRefs(state) }
    }
}
</script>

<style lang="scss" scoped>
.sitecloud {
    position: relative;
    top: 18rem;
}
</style>