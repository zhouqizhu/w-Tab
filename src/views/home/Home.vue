<template>
<div class="bgImg" :style="{background: bgImg}"></div>
<div class="wrapper" ref="wrapper">
    <Nav class="nav" :currentIndex="0" />
<<<<<<< HEAD
    <Weather class="weather" />
=======
>>>>>>> 668d6d26fd4df43dd865a8416b549859db01fc40
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
<<<<<<< HEAD
import SiteArea from '../../components/siteArea/SiteArea.vue'
import DrawerLeft from '../../components/Drawer/DrawerLeft.vue'
import DrawerRight from '../../components/Drawer/DrawerRight.vue'
import Weather from '../../components/Weather/Weather.vue'
=======
import SiteArea from '../../components/SearchArea/SiteArea.vue'
import DrawerLeft from '../../components/Drawer/DrawerLeft.vue'
import DrawerRight from '../../components/Drawer/DrawerRight.vue'
>>>>>>> 668d6d26fd4df43dd865a8416b549859db01fc40
import { reactive, toRefs } from '@vue/reactivity'
import { get } from '@/utility/request'
export default {
    name: 'Home',
<<<<<<< HEAD
    components: { Nav, Search, SiteArea, DrawerLeft, DrawerRight, Weather },
=======
    components: { Nav, Search, SiteArea, DrawerLeft, DrawerRight },
>>>>>>> 668d6d26fd4df43dd865a8416b549859db01fc40
    setup() {
        const state = reactive({
            changeImg: false,
            bgImg: 'url(https://tva1.sinaimg.cn/large/0060lm7Tly1ftg6x22sgcj31hc0u0qh8.jpg)'
        })
        const controlBar = async () => {
            state.changeImg = true
            const bgImg = await get('/bgImg?c=WallPaperAndroid&a=getAppsByCategory&cid=15&start=0&count=99')
            const count = Math.floor(Math.random()*99)
            setTimeout(() => {
                state.bgImg = `url(${bgImg.data[count].url})`
                state.changeImg = false
            }, 2000)
        }
        return { ...toRefs(state), controlBar}
    }
}
</script>

<style lang="scss" scoped>
.bgImg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-repeat:no-repeat;
    opacity: .6;
}
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
<<<<<<< HEAD
.weather {
    width: 1.2rem;
    height: .5rem;
    background-color: aqua;
    position: absolute;
    right: 0;
    top: 0;
}
=======
>>>>>>> 668d6d26fd4df43dd865a8416b549859db01fc40
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
