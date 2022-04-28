<template>
    <div class="saying">
        <span ref="saying">11</span>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    name: 'Saying',
    setup() {
        const saying = ref(null);
        onMounted(() => {
            setInterval(typerText, 200);
        })
        const typerText = () => {
            const text = saying.value;

        }
    },
}
</script>

<style lang="scss" scoped>
</style>