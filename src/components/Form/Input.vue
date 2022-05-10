<template>
    <div class="input">
        <span class="input__left">{{ inputLeft }}</span>
        <input class="input__content" v-bind="$attrs" :value="value" ref="inputBox" @input="inputChange"  />  
        <!-- 右侧是验证码或者是×图标 -->
        <div v-if="inputRight == 'authcode'" class="input__right">
            {{ timerData.content }}
        </div>
        <div v-else-if="inputRight == 'close'" class="input__right" @click="clearInput">
            <i class="ri-close-fill"></i>
        </div>
    </div>  
</template>

<script>
import { inject, onMounted, ref, defineEmits } from '@vue/runtime-core'
import { getValidate } from '../../utility/validate'
export default {
    name: 'Input',
    props: {
        inputLeft: String,
        inputRight: String,
        value: String,
        propName: String
    },
    setup(props, context) {
        const inputBox = ref(null)
        const rules = inject("rules")
        const rule = rules[props.propName]
        // 检验输入值
        const useValidate = () => {
            const validateFn = getValidate(rule)
            const execValidate = () => {
                return validateFn(props.inputInfor)
            }

            onMounted(() => {
                const Listener = inject('collectValidate')
                
                if (Listener) {
                  Listener(execValidate)
                }
            })   
        }
        useValidate()
        // 监听输入框内容
        const inputChange = (e) => {
            const value = (e.target).value;
            context.emit("update:value",value)
        }
        // 清空输入框内容
        const clearInput = () => {
            inputBox.value.value = null
        }
        return { inputChange, useValidate, clearInput, inputBox }      
    },
}
</script>

<style lang="scss" scoped>
.input {
    display: flex;
    width: 90%;
    border-style: none;
    margin-top: .5rem;
    height: 3rem;
    line-height: 3rem;
    border-radius: 1.5rem;
    background-color: #f6f6f8;
    &__left {
        display: inline-block;
        border-style: none;
        font-size: 1.2rem;
        margin-left: .8rem;
    }
    &__content {
        border-style: none;
        display: inline-block;
        outline-style: none;
        font-size: 1.2rem;
        text-indent:1.5rem;
        flex: 1;
        width: 0;
        background-color: #f6f6f8;
        border-radius: 1.5rem;
    }
    &__right {
        border-style: none;
        display: inline-block;
        margin-right: .8rem;
    }
}
</style>