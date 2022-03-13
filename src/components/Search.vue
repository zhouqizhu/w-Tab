<template>
    <div class="search" >
        <select class="search__select" v-model="selectedType">
            <option v-for="item in searchEngine" :key="item" :value="item.value">
                {{item.label}}
            </option>
        </select>
        <form class="search__form" ref="search_form" target="_blank">
            <input class="search__form__input" type="text" v-model="searchText" placeholder="输入并搜索">
            <input class="search__form__submit" type="submit" value="搜索" @click="searchBar">
        </form>
    </div>
</template>

<script>
import {searchEngine} from '../db/db'
export default {
    name: 'Search',
    data() {
        return {
            searchText: '',
            searchEngine,
            selectedType: 0,
        }
    },
    methods: {
        searchBar() {
            window.open(this.searchEngine[this.selectedType].url + this.searchText)
        }
    }
}
</script>
<style lang="scss" scoped>
.search {
    display: flex;
    position: absolute;
    left: 50%;
    &__select {
        display: inline-block;
        text-align: center;
        margin-left: -50%;
        height: .4rem;
        width: .6rem;
    }
    &__form {
        display: inline-block;
        &__input {
            width: 3.5rem;
            height: .4rem;
        }
        &__submit {
            height: .4rem;
            width: .8rem;
        }
    }
}
</style>