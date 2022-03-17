<template>
    <div class="siteContainer">
        <div class="siteContainer__site" v-for="item in siteList" :key="item.id">
            <a class="site-icon" :href="item.link">
                <i :class="item.icon"></i>
            </a>
            <span class="site-text">{{item.name}}</span>
        </div>
    </div>
</template>

<script>
import { get } from '../../utility/request'

export default {
    name: 'SiteArea',
    data() {
        return {
            siteList: '',
        }
    },
    mounted() {
        this.getSiteList()
    },
    methods: {
        async getSiteList() {
            let siteList = await get('/data/siteContainer.json')
            this.siteList = siteList
            console.log(this.siteList)
        }
    }
}
</script>

<style lang="scss" scoped>
.siteContainer {
    width: 5.5rem;
    height: 4rem;
    font-size: .2rem;
    font-size: 0;
    &__site {
        display: inline-block;
        overflow: hidden;
        width: 1rem;
        height: .8rem;
        text-align: center;
        font-size: 0;
        background-color: #e4e6e6;
        margin: .1rem .1rem 0 0;
        border-radius: .1rem;
    }
}
.site-icon {
    text-decoration: none;
    color: #494949;
    display: block;
    width: .4rem;
    margin: 0 auto;
    font-size: .4rem;
}
.site-text {
    font-size: .1rem;
}
.siteContainer__site:hover {
    background-color: #57a0d9;
    transform: translateY(-0.03rem);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.35);
}
</style>