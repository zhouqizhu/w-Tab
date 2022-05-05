<template>
    <div class="accordion">
        <div class="accordion__title">{{informationFlow.title}}</div>
        <div class="accordion__content" v-for="(item, index) in informationFlow.list" :key="index++">
            <a href="item.url" target="_blank">{{index + '. ' + item.name}}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'accordion',
    props: {
        informationFlow: Object, default: {},
    }
}
</script>

<style lang="scss" scoped>
    .accordion {
        position: relative;
        display: inline-block;
        top: 5rem;
        margin-left: 2rem;
        width: 21rem;
        border: .2rem solid red;
        border-radius: 1rem;
        word-wrap:break-word;
        &__title {
            text-align: center;
            font-size: 2rem;
            border-style: none none solid;
            border-radius: 1rem;
        }
        &__content {
            font-size: 1rem;
            color: #000;
            margin: .3rem .3rem .3rem .5rem;
            a {
                text-decoration: none;
            }
        }
    }
</style>