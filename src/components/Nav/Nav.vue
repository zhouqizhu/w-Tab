<template>
    <div class="label">
        <div
            v-for="(item, index) in labelList"
            :key="index"
            :class="{label__item: true, 'Label__item--active': index === currentIndex}"
        >
            <router-link :to="item.to">
                <div class="label__title">{{item.text}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    props: ['currentIndex'],
    setup() {
        const labelList = [
            { text: '首页', to: { name: 'Home' } },
            { text: '探索', to: { name: 'Explore' } },
        ]
        return { labelList }        
    },
}
</script>

<style lang="scss" scoped>
.label {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 0.2rem;
    left: .3rem;
    top: .35rem;
    width: 40%;
    height: .4rem;
    &__item {
        text-align: center;
        width: 1rem;
        a {
            text-decoration: none;
            color: #111;
        }
    }
    &__title {
        font-size: .2rem;
        line-height: .4rem;
        height: .4rem;
        color: #111;
        &:hover {
            background-color: #e5e5e5;
        }
    }
}
.Label__item--active {
    background-color: #e5e5e5;
}
</style>