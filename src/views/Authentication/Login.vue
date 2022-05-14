<template>
    <Form ref="form" class="formWrapper" :rules="rules">
        <Input 
            inputLeft="+86"
            inputRight="close"
            placeholder="请输入手机号码"
            v-model:value="form_data.user_number"
            propName="user_number"
        />
        <Input
            inputRight="close"
            placeholder="请输入密码"
            v-model:value="form_data.password"
            type="password"
            propName="password" 
        />
        <Button bName="登录" @click="toHome" />
        <Button bName="没有账号 立即注册" @click="toRegister"/>
    </Form>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import Form from '../../components/Form/Form.vue'
import Input from '../../components/Form/Input.vue'
import Button from '../../components/Form/Button.vue'
import { useRouter } from 'vue-router'
import { post } from '@/utility/request'
export default {
    name: 'Login',
    components: { Form, Input, Button },
    setup() {
        const form_data = reactive({
            user_number: '', //用户名
            password: '', //密码
        })
        const form = ref(null)
        // 路由跳转方法
        const router = useRouter()
        const rules = {
            user_number:[{ type: 'required', msg:"请输入正确的手机号" }, 'phone'],
                        password: [{ type: 'required', msg: '请输入密码' },
                { type: 'minLength', params: 6, msg: '密码长度不能小于6位' }],
        }

        // 登录验证成功跳转到首页
        const toHome = async() => {
            let user = {
                user_number: form_data.user_number,
                password: form_data.password
            }
            let login = await post('/api/login', user)
            console.log(login)
            if(!form.value || !form.value.validate()) {
                return false
            }else if(login.success) {
                router.push({ path: '/' })
            }
        }

        const toRegister = () => {
            router.push({ path: '/register'})
        }

        return { form_data, form, rules, toHome, toRegister }
    }
}
</script>

<style lang="scss" scoped>
.formWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>