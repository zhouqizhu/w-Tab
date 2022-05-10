<template>
    <div>
        <div class="saying">
            <span class="sayingText" ref="saying"></span>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    name: 'Saying',
    setup() {
        const saying = ref(null);
        onMounted(async () => {
            let sayResult = await fetch('/saying')
                .then(res => res.json())
            let sayingRes = sayResult.hitokoto
            setInterval(typerText(sayingRes), 20000)
        })
        const typerText = (sayingRes) => {
            let index = 0
            let len = sayingRes.length
            setInterval(() => {
                if(index < len) {
                    saying.value.innerHTML = sayingRes.slice(0, ++index) 
                }
            }, 400)
        }

        return { saying }
    },
}
</script>

<style lang="scss" scoped>
.saying {
    width: 6rem;
    height: 25rem;
    margin: 0 auto;
}
.sayingText {
    display: inline-block;
    writing-mode:vertical-lr;
    font-size: 1.5rem;
    width: 6rem;
    height: 20rem;
    color: #56004f;
}
</style>