<template>
    <div class="form">
        <slot ref="list"></slot>
    </div>
</template>

<script>
import { onMounted, provide, ref } from '@vue/runtime-core'
export default {
    name: 'Form',
    props: {
        rules: Object
    },
    setup(props) {
        const list = ref([])
        // 收集每个子组件的校验函数
        const listener = (fn) => {
            list.value.push(fn)
        }
        // 向子组件分发规则
        provide("rules", props.rules)
        provide("collectValidate", listener)
        //验证函数
        const validate = (propName) => {
            console.log(list.value)
            const array = list.value.map((fn) => {
                if(fn) return fn()
            })
            console.log(array)
            const one = array.find((item) => {
                return item.flag === false;
            })
            
            if (one && one.msg) {
                //验证不通过
                console.log(one.msg)//弹出错误提示
                return false;
            } else {
                return true;
            }
        }

        onMounted(() => { listener(), validate() })
        return { list, listener, validate }
    },
}
</script>

<style lang="scss" scoped>
.form {
    position: absolute;
    width: 20rem;
    height: 25rem;
    right: 2rem;
    top: 5rem;
    background-color: aqua;
}
</style>