<template>
    <div class="search">
        <div class="search__select" :class="[searchType == index ? 'isSelected' : 'notSelect']"
        v-for="(item, index) in searchSet" :key="index" @click="selectEngineSet(item, index)">
            {{item.name}}
        </div>
        <div class="search__form">
            <input class="search__form__input" type="text" v-model="searchText" placeholder="输入并搜索">
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
            selectedType: '',
            searchText: '',
            searchType: 0,
            searchEngine: [
                {
                    "label": "Google",
                    "url": "https://www.google.com/search?q="
                }, {
                    "label": "百度",
                    "url": "https://www.baidu.com/s?wd="
                }, {
                    "label": "Bing",
                    "url": "https://cn.bing.com/search?q="
                }]
        })
        const getSearchEngine = async () => {
            let searchSet = await get('/data/searchEngine.json')
            state.searchSet = searchSet
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
    }
    &__form {
        &__input {
            width: 3.5rem;
            height: .4rem;
            border-radius: .12rem 0 0 .12rem;
            border-width: .01rem;
        }
        &__submit {
            height: .4rem;
            width: .8rem;
            border-radius: 0 .12rem .12rem 0;
            border-width: .01rem;
        }
    }
    &__engine {
        display: inline-block;
        margin-right: .15rem;
        font-size: .18rem;
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