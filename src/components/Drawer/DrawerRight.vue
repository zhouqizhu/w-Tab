<template>
    <div class="drawerBlock">
        <div class="drawerfloor" v-for="(item, index) in drawerList" :key="index">
            <DrawerFloor :floorList="item.links" :floorName="item.name" />
        </div>
    </div>
</template>

<script>
import DrawerFloor from './DrawerFloor/DrawerFloor.vue'
import { get } from '../../utility/request'
import { ref } from '@vue/reactivity'
export default {
    name: 'DrawerRight',
    components: { DrawerFloor },
    setup() {
        const drawerList = ref([])
        const getDrawerList = async () => {
            const result = await get('/api/siteDrawerListRight')
            drawerList.value = result.data
        }
        getDrawerList()
        return { getDrawerList, drawerList }
    }
}
</script>

<style lang="scss" scoped>
.drawerBlock {
    display: inline-block;
    width: 1.5rem;
    height: 4rem;
    background-color: #9b9a99;
    border-radius:.15rem;
    vertical-align: top;
}
.drawerfloor {
    position: relative;
    display: block;
}
.drawerfloor:hover {
    background-color: #57a0d9;
    box-shadow: 0 .1rem .1rem rgba(0, 0, 0, 0.35);
}
</style>