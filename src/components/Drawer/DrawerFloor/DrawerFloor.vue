<template>
    <div class="drawerfloor">
        <div class="drawerfloor__locker" @click.stop="toggleMenu">{{floorName}}</div>
        <div v-if="shouldOpen" class="drawerfloor__item">
            <transition v-for="(item, index) in items" :key="index">
                <div class="singleItem">
                    <a :href="item.link">
                        <img :src="item.logo" style="font-size:.2rem;" alt="" v-if="item.logo">
                        <span v-else style="font-size:.2rem;">{{item.name}}</span>
                    </a>
                    <span class="itemName">{{item.name}}</span>
                </div>
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
	        items: [],
            floorName: ''
        })
        const shouldOpen = computed(() => { return  state.isOpen })

        state.items = props.floorList
        state.floorName = props.floorName   

        const masking = document.getElementsByClassName('masking')
        const toggleMenu = () => {
            if (!state.isOpen) {
                state.isOpen = true
                masking[0].style.backgroundColor='rgba(0, 0, 0, .6)'
                masking[0].style.zIndex = 999
            }
        }
        onMounted(() => {
            document.addEventListener("click", function(){
                if(state.isOpen) {
                    state.isOpen = false
                    masking[0].style.backgroundColor='rgba(0, 0, 0, 0)'
                    masking[0].style.zIndex = -99
                }
            })
        })
	    return { ...state, toggleMenu, shouldOpen }
    }
};
</script>

<style lang="scss" scoped>
@import '../../../style/viriables.scss';

.drawerfloor {
    font-size: 2rem;
    font-weight: bold;
    &__locker {
        color: #000;
        transition: all 0.2s ease;
        height: 4.5rem;
        line-height: 4.5rem;
    }
    &__item {
        border-radius: 1rem;
	    width: $input-width;
        min-height: calc($site-height + 3rem);
        background-color: rgba(200, 200, 200, 0.95);
    }
}
.singleItem {
    display: inline-block;
    overflow: hidden;
    width: $site-width;
    height: $site-height;
    /* background-color: #e4e6e6; */
    margin: 1.5rem 0 0 1rem;
    border-radius: .8rem;
    >a {
        text-decoration: none;
        color: #494949;
        display: block;
        height: $icon-height;
        width: 100%;
        >img {
            width: $icon-width;
            height: $icon-height;
            border: .01rem solid;
            border-radius: 50%;
        }
    }
}
.singleItem:hover {
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.35);
}
.itemName {
    color: #fff;
    display: block;
    font-size: 1rem;
}
.drawerfloor__item {
    position: fixed;
    z-index: 999;
    left: 25%;
    top: 50%;
}
</style>