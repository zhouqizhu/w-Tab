<template>
    <div class="search">
        <div class="search__select" :class="[searchType == index ? 'isSelected' : 'notSelect']"
        v-for="(item, index) in searchSet" :key="index" @click="selectEngineSet(item, index)">
            {{item.name}}
        </div>
        <div class="search__form">
            <input class="search__form__input" type="text" v-model="searchText" placeholder="输入并搜索" @keydown.enter="searchBar">
            <input class="search__form__submit" type="submit" value="搜索" @click="searchBar">
        </div>
        <div class="search__engine" v-for="(i, key) in searchEngine" :key="key"
        :class="[selectedType == key ? 'selectedEngine' : 'notSelectEngine']" @click="selectEngine(key)">{{i.label}}</div>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/reactivity'
import { get } from '../../utility/request'
export default {
    name: 'Search',
    setup() {
        const state = reactive({
            searchSet: [],
            selectedType: 0,
            searchText: '',
            searchType: 0,
            searchEngine: [
                {
                    "label": "Google",
                    "url": "https://www.google.com/search?q="
                },
                {
                    "label": "百度",
                    "url": "https://www.baidu.com/s?wd="
                },
                {
                    "label": "Bing",
                    "url": "https://cn.bing.com/search?q="
                },
                {
                    "label": "搜狗",
                    "url": "https://www.sogou.com/web?query="
                }
            ]
        })
        const getSearchEngine = async () => {
            let searchSet = await get('/api/searchEngine')
            state.searchSet = searchSet.data
        }
        getSearchEngine()

        const selectEngineSet = (item, index) => {
            state.searchEngine = item.content
            state.searchType = index
        }
        const selectEngine = (key) => {
            state.selectedType = key
        }
        const searchBar = () => {
            window.open(state.searchEngine[state.selectedType].url +state.searchText)
        }

        return { ...toRefs(state), getSearchEngine, selectEngineSet, selectEngine, searchBar }
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';
.search {
    margin: 6rem auto 2rem auto;
    &__select {
        display: inline-block;
        width: calc(.1*$input-width);
        height: 2.5rem;
        margin-right: .15rem;
        color: rgb(0, 255, 26);
    }
    &__form {
        &__input {
            width: $input-width;
            height: 3rem;
            border-radius: 2rem 0 0 2rem;
            border-width: .01rem;
            font-size: 80%;
            text-indent:1.5rem;
            border-style: solid none solid solid;
        }
        &__submit {
            height: 3rem;
            width: 12%;
            border-radius: 0 2rem 2rem 0;
            border-width: .01rem;
            font-size: 80%;
            background-color: #fff;
            border-style: solid solid solid none;
        }
    }
    &__engine {
        display: inline-block;
        margin-right: .15rem;
        width: calc(.2*$input-width);
        height: 2rem;
        color: #cfde00;
    }
}
.isSelected {
    color: red;
    border-bottom: .05rem solid #888;
}
.selectedEngine {
    color: red;
    border-bottom: .05rem dotted #cfde00;
}
</style>