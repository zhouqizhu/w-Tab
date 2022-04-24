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
.search {
    margin: 1rem auto .5rem auto;
    &__select {
        display: inline-block;
        margin-right: .15rem;
        font-size: .18rem;
        color: aqua;
    }
    &__form {
        &__input {
            width: 4.5rem;
            height: .5rem;
            border-radius: .15rem 0 0 .15rem;
            border-width: .01rem;
            font-size: .2rem;
            text-indent:.1rem;
        }
        &__submit {
            height: .5rem;
            width: .8rem;
            border-radius: 0 .15rem .15rem 0;
            border-width: .01rem;
            font-size: .2rem;
            background-color: #fff;
            border-style: solid solid solid none;
        }
    }
    &__engine {
        display: inline-block;
        margin-right: .15rem;
        font-size: .18rem;
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