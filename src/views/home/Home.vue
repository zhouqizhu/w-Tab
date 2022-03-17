<template>
    <Nav :currentIndex="0" />
    <div class="wrapper">
        <search />
    </div>
    <div class="siteArea">
        <SiteArea />
    </div>
</template>

<script>
import Nav from '../../components/Nav/Nav.vue'
import Search from '../../components/Search/Search.vue'
import SiteArea from '../../components/searchArea/SiteArea.vue'
export default {
    name: 'Home',
    components: { Nav, Search, SiteArea },
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    display: block;
    top: 2rem;
    width: 100%;
}
.siteArea {
    display: inline-block;
    height: 4rem;
    width: 4rem;
    margin: 3rem auto auto 5rem;
}
</style>
