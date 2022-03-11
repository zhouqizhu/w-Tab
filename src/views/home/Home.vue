<template>
    <Label :currentIndex="0" />
    <div class="wrapper">
        <search />
    </div>
</template>

<script>
import Label from '../../components/Label.vue'
import Search from '../../components/Search.vue'
export default {
    name: 'Home',
    components: { Label, Search },
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
