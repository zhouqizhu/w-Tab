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
            const result = await get('/api/siteDrawerListLeft')
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
    border-radius:.15rem;
    vertical-align: top;
}
.drawerfloor {
    display: block;
    width: 100%;
    
}
.drawerfloor:hover {
    background-color: #57a0d9;
}
</style>