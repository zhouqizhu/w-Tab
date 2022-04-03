<template>
<div class="wrapper" ref="wrapper">
    <Nav class="nav" :currentIndex="0" />
    <div class="container">
        <Search />
        <div class="wrapper__site">
            <DrawerLeft />
            <SiteArea class="wrapper__site__siteBlock" />
            <DrawerRight />
        </div>
    </div>
    <div class="controlBar">
        <i class="ri-basketball-fill" :class="[changeImg==true ? 'activeBall' : 'staticBall']" @click="controlBar"></i>
    </div>
</div>
</template>

<script>
import Nav from '../../components/Nav/Nav.vue'
import Search from '../../components/Search/Search.vue'
import SiteArea from '../../components/SearchArea/SiteArea.vue'
import DrawerLeft from '../../components/Drawer/DrawerLeft.vue'
import DrawerRight from '../../components/Drawer/DrawerRight.vue'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    name: 'Home',
    components: { Nav, Search, SiteArea, DrawerLeft, DrawerRight },
    setup() {
        const state = reactive({
            changeImg: false,
            p: null
        })
        const controlBar = () => {
            state.changeImg = true
            window.location.reload(document.body.style.background="url(https://api.ixiaowai.cn/gqapi/gqapi.php)")
            setTimeout(() => {
                state.changeImg = false
            }, 2000)
        }
        onMounted(() => {
            document.body.style.background="url(https://api.ixiaowai.cn/gqapi/gqapi.php)"   
        })
        return { ...toRefs(state), controlBar}
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;
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
}
.controlBar {
    width: .5rem;
    height: .8rem;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: .3rem;
}
.activeBall {
    position: absolute;
    width: .25rem;
    animation: ballMove 2s 2;
}
.staticBall {
    position: absolute;
}
@keyframes ballMove {
    0% {
       bottom: .55rem;
    }
    50% {
        bottom: 0rem;
    }
    100% {
        bottom: .55rem;
    }
}
</style>
