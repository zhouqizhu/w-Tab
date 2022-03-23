<template>
    <div class="drawerBlock">
        <div class="drawer" v-for="item in drawerList" :key="item.id">
            {{item.name}}
        </div>
    </div>
</template>

<script>
// import { get } from '../../utility/request'
export default {
    name: 'DrawerRight',
    // data() {
    //     return {
    //         drawerList: '',
    //     }
    // },
    // mounted() {
    //     this.getDrawerList()
    // },
    // methods: {
    //     async getDrawerList() {
    //         let drawerList = await get('/data/siteListDrawer.json')
    //         this.drawerList = drawerList
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.drawerBlock {
    display: inline-block;
    margin-right: .3rem;
    width: 1.5rem;
    height: 4rem;
    background-color: black;
}
</style>