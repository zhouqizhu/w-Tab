<template>
    <div class="search">
        <div class="search_name">
            <span></span>
        </div>
        <form class="search__form" :action="searchEngine" ref="search_form" target="_blank">
            <input class="search__form__input" type="text" value="搜索">
            <input class="search__form__submit" type="submit" value="搜索">
        </form>
    </div>
</template>
<script>
export default {
    name: 'Search',
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
.search {
    display: flex;
    width: 100%;
    position: absolute;
    left: 50%;
    &__form {
        &__input {
            width: 3.5rem;
            height: .4rem;
            margin-left: -50%;
        }
        &__submit {
            height: .45rem;
            width: .8rem;
            margin-left: .1rem;
        }
    }
}
</style>