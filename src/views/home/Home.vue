<template>
    <Nav :currentIndex="0" />
    <div class="wrapper">
        <search />
    </div>
</template>

<script>
import Nav from '../../components/Nav.vue'
import Search from '../../components/Search.vue'
export default {
    name: 'Home',
    components: { Nav, Search },
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: absolute;
    top: 2rem;
    width: 100%;
}
</style>
