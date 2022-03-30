<template>
    <div class="drawerfloor">
        <div :class="['drawerfloor__locker', shouldOpen]" :style="style" @click="toggleMenu">{{floorName}}</div>
        <div v-if="shouldOpen" class="drawerfloor__item">
            <transition v-for="(item, index) in items" :key="index">
                <a class="singleItem" :href="item.link">
                    <i :class="item.iconfont"></i>
                    <span>{{item.name}}</span>
                </a>
            </transition>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
    name: 'DrawerFloor',
    props: {
        floorList: Array, default: [],
        floorName: String, default: ""
    },
    setup(props) {
        const state = reactive({
            isOpen: false,
            style: { width: props.size + 'px', height: props.size + 'px' },
	        items: [],
            floorName: ''
        })
        const shouldOpen = computed(() => {
            return  state.isOpen 
        })
        state.items = props.floorList
        state.floorName = props.floorName   
        const toggleMenu = () => {
            if (state.isOpen) {
                state.isOpen = false;
            } else {
                state.isOpen = true;
            }
        }
	    return { ...state, toggleMenu, shouldOpen }
    }
};
</script>

<style lang="scss" scoped>
@import '../../../style/viriables.scss';
.drawerfloor {
    font-size: .35rem;
    font-weight: bold;
    width: 1rem;
    margin: .2rem .25rem;
    &__locker {
        display: flex;
        color: #fff;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease;
        position: relative;
        border-radius: .12rem;
    }
    &__item {
	    width: 4rem;
        background-color: #c8c8c8;
        border-radius: .12rem;
        position: absolute;
    }
}
.singleItem {
    display: inline-block;
    text-decoration: none;
    width: $site-width;
    height: $site-height;
    font-size: .01rem;
    text-align: center;
    >i{
        display: block;
        margin: 0 auto;
        color: #494949;
        margin-top: .1rem;
        font-size: $icon-fontsize;
        width: $icon-width;
        height: $icon-height;
        border: .01rem solid;
        border-radius: 50%;
    }
    >span {
        font-size: .1rem;
    }
}
</style>