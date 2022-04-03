<template>
    <div class="drawerfloor">
        <div :class="['drawerfloor__locker', shouldOpen]" :style="style" @click.stop="toggleMenu">{{floorName}}</div>
        <div v-if="shouldOpen" class="drawerfloor__item">
            <transition v-for="(item, index) in items" :key="index">
                <a class="singleItem" :href="item.link">
                    <div>
                        <img :src="item.logo" style="font-size:.2rem;" alt="" v-if="item.logo">
                        <span v-else style="font-size:.2rem;">{{item.name}}</span>
                    </div>
                    <span>{{item.name}}</span>
                </a>
            </transition>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { computed, onMounted } from '@vue/runtime-core';
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
                state.isOpen = false
                document.body.style.backgroundColor='rgba(0, 0, 0, 1)'
            } else {
                state.isOpen = true
            }
        }
        onMounted(() => {
            document.addEventListener("click", function(){
                if(state.isOpen) state.isOpen = false
            })
        })
	    return { ...state, toggleMenu, shouldOpen }
    }
};
</script>

<style lang="scss" scoped>
@import '../../../style/viriables.scss';
.drawerfloor {
    font-size: .25rem;
    font-weight: bold;
    width: 1rem;
    margin: .30rem .25rem;
    &__locker {
        display: flex;
        color: #fff;
        justify-content: center;
        transition: all 0.2s ease;
        position: relative;
        border-radius: .12rem;
    }
    &__item {
	    width: 7rem;
        background-color: #c8c8c8;
        border-radius: .12rem;
    }
}
.singleItem {
    display: inline-block;
    text-decoration: none;
    width: $site-width;
    height: $site-height;
    font-size: .01rem;
    text-align: center;
    >div{
        margin: 0 auto;
        margin-top: .1rem;
        width: $icon-width;
        height: $icon-height;
        border: .01rem solid;
        border-radius: 50%;
        overflow: hidden;
        >img {
        width: $icon-width;
        height: $icon-height;
        }
        >span {
            font-size: .1rem;
        }
    }
}
.drawerfloor__item {
    position: fixed;
    z-index: 999;
    left: 28%;
    top: 50%;
}
</style>