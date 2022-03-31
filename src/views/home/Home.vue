<template>
<div class="wrapper">
    <Nav class="nav" :currentIndex="0" />
    <div class="container">
            <Search />
    <div class="wrapper__site">
        <DrawerLeft />
        <SiteArea class="wrapper__site__siteBlock" />
        <DrawerRight />
    </div>
    </div>
</div>
</template>

<script>
import Nav from '../../components/Nav/Nav.vue'
import Search from '../../components/Search/Search.vue'
import SiteArea from '../../components/SearchArea/SiteArea.vue'
import DrawerLeft from '../../components/Drawer/DrawerLeft.vue'
import DrawerRight from '../../components/Drawer/DrawerRight.vue'
export default {
    name: 'Home',
    components: { Nav, Search, SiteArea, DrawerLeft, DrawerRight }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    &__site {
        margin: 0 auto;
        position: relative;
        &__siteBlock {
            margin: 0 .2rem 0 .2rem;
        }
    }
}
.container {
    text-align: center;
    width: 100%;
    position: absolute;
}
</style>
