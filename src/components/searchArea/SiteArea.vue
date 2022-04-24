<template>
    <div class="siteContainer">
        <div class="siteContainer__site" v-for="item in siteList" :key="item.id">
            <a :href="item.link" target="_blank">
                <i :class="item.icon"></i>
            </a>
            <span>{{item.name}}</span>
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
            let siteList = await get('/data/siteContainer')
            this.siteList = siteList.data
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.siteContainer {
    position: relative;
    display: inline-block;
    width: 5.5rem;
    height: 4rem;
    font-size: 0;
    vertical-align: top;
    &__site {
        display: inline-block;
        overflow: hidden;
        width: $site-width;
        height: $site-height;
        text-align: center;
        vertical-align: middle;
        font-size: 0;
        background-color: #e4e6e6;
        margin: .1rem .1rem 0 0;
        border-radius: .1rem;
        >a {
            text-decoration: none;
            color: #494949;
            display: block;
            font-size: $icon-fontsize;
            >i {
                width: $icon-width;
                height: $icon-height;
                border: .01rem solid;
                border-radius: 50%;
            }
        }
        >span {
            font-size: .1rem;
        }
    }
}
.siteContainer__site:hover {
    background-color: #57a0d9;
    transform: translateY(-0.03rem);
    box-shadow: 0 .1rem .1rem rgba(0, 0, 0, 0.35);
}
</style>