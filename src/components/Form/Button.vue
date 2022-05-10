<template>
    <div class="button">
        <button type="button">{{ bName }}</button>
    </div>
</template>

<script>
export default {
    props: {
        bName: String
    },
    setup() {
        
    },
}
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: .5rem;
    border-radius: 1.5rem;
    background-color: #f6f6f8;
    width: 90%;
    height: 3rem;
}
button {
    border-style: none;
    background-color: #f6f6f8;
    font-size: 1.2rem;
}
</style>