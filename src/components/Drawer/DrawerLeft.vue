<template>
    <div class="drawerBlock">
      <DrawerFloor :itemSize="50" :radius="120" :angleRestriction="180" />
    </div>
</template>

<script>
import DrawerFloor from './DrawerFloor/DrawerFloor.vue'
// import { get } from '../../utility/request'
export default {
    name: 'DrawerRight',
    components: { DrawerFloor },
    // data() {
    //     return {
    //         drawerList: '',
    //     }
    // },
    // mounted() {
    //     this.getDrawerList()
    // },
    // methods: {
        // async getDrawerList() {
        //     let drawerList = await get('/data/siteListDrawer.json')
        //     this.drawerList = drawerList
        // }
    // }
}
</script>

<style lang="scss" scoped>
.drawerBlock {
    // display: inline-block;
    // margin-right: .3rem;
    // width: 1.5rem;
    // height: 4rem;
    // background-color: black;
}
</style>