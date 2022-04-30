<template>
<div class="bgImg" :style="{background: bgImg}"></div>
<div class="wrapper" ref="wrapper">
    <Nav class="nav" :currentIndex="0" />
    <Weather class="weather" />
    <div class="container">
        <Search />
        <div class="wrapper__site">
            <Saying class="left" />
            <DrawerLeft class="leftBlock" />
            <SiteArea class="siteBlock" />
            <DrawerRight class="rightBlock" />
            <Saying class="right" />
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
import SiteArea from '../../components/siteArea/SiteArea.vue'
import DrawerLeft from '../../components/Drawer/DrawerLeft.vue'
import DrawerRight from '../../components/Drawer/DrawerRight.vue'
import Weather from '../../components/Weather/Weather.vue'
import Saying from '../../components/Saying/Saying.vue'
import { reactive, toRefs } from '@vue/reactivity'
import { get } from '@/utility/request'
export default {
    name: 'Home',
    components: { Nav, Search, SiteArea, DrawerLeft, DrawerRight, Weather, Saying },
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
    width: 100vw;
    height: 100vh;
    position: absolute;
    opacity: .6;
}
.wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
    &__site {
        display: flex;
        .left { flex: 1; }
        .leftBlock { flex: 1.5; }
        .siteBlock { flex: 4; }
        .rightBlock { flex: 1.5; }
        .right { flex: 1; }
        @media screen and (max-width: 1024px) {
            display: flex;
            .left { display: none; }
            .leftBlock { flex: 1.5; }
            .siteBlock { display: none; }
            .rightBlock { flex: 1.5; }
            .right { display: none; }
        }
    }
}
.weather {
    width: 5rem;
    height: 5rem;
    position: absolute;
    right: 0;
    top: 0;
}
.container {
    text-align: center;
    width: 100%;
}
.controlBar {
    width: 5rem;
    height: 8rem;
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 3rem;
}
.activeBall {
    position: absolute;
    width: 5rem;
    animation: ballMove 2s 2;
}
.staticBall {
    position: absolute;
}
@keyframes ballMove {
    0% {
       bottom: 5rem;
    }
    50% {
        bottom: 0rem;
    }
    100% {
        bottom: 5rem;
    }
}
</style>
