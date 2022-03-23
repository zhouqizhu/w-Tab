<template >
    <div class="drawerfloor">
        <div :class="['drawerfloor__locker', shouldOpen]" :style="style" @click="toggleMenu">+</div>
        <div v-if="shouldOpen" class="drawerfloor__item">
            <transition class="draweritem" v-for="(item, index) in items" :key="index">
			    <span class="itemText">{{item}}</span>
            </transition>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
    name: 'DrawerFloor',
    setup(props) {
        const state = reactive({
            isOpen: false,
            style: { width: props.size + 'px', height: props.size + 'px' },
	        items: ['foo', 'bar', 'hello', 'world', 'more', 'items', '1'],
        })
        const shouldOpen = computed(() => {
            return  state.isOpen 
        })
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
.drawerfloor {
    position: relative;
    font-size: .35rem;
    font-weight: bold;
    width: .8rem;
    height: .5rem;
    &__locker {
        background-color: aqua;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease;
        position: relative;
        z-index: 6;
    }
    &__item {
        position: relative;
	    width: 4rem;
	    height: .8rem;
        background-color: aqua;
        line-height: .8rem;
        vertical-align: middle;
        font-size: .2rem;
    }
}
.draweritem {
    display: inline-block;
    width: .6rem;
    height: .8rem;
}
.drawerfloor__locker.open {
    transform: rotateZ(45deg);
}
</style>