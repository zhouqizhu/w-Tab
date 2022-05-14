<template>
    <Form ref="form" :rules="rules" class="formWrapper">
        <Input 
            inputLeft="+86"
            inputRight="close"
            placeholder="请输入手机号码"
            v-model:value="form_data.user_number"
            propName="user_number"
        />
        <Input
            inputRight="close"
            placeholder="请输入手机验证码"
            v-model:value="form_data.captcha"
            propName="captcha"
        />
        <Input
            inputRight="close"
            placeholder="请输入密码"
            v-model:value="form_data.password"
            type="password"
            propName="password" 
        />
        <Input
            inputRight="close"
            placeholder="请确认密码"
            v-model:value="form_data.ppassword"
            type="password"
            propName="ppassword"
        />
        <Button bName="注册" @click="toLogin" />
    </Form>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import Form from '../../components/Form/Form.vue'
import Input from '../../components/Form/Input.vue'
import Button from '../../components/Form/Button.vue'
import { useRouter } from 'vue-router'
export default {
    name: 'Register',
    components: { Form, Input, Button },
    setup() {
        const form_data =  reactive({
            user_number: '', //用户名
            password: '', //密码
            ppassword: '', //重复密码
            captcha: '', //验证码
        })
        const form = ref(null)
        const rules = {
            user_number:[{ type: 'required', msg:"请输入正确的手机号" }, 'phone'],
            captcha:[ { type: 'required', msg: '验证码不能为空' }],
            password: [{ type: 'required', msg: '请输入密码' },
                { type: 'minLength', params: 6, msg: '密码长度不能小于6位' }],
            ppassword:[{ type: 'required',
                callback() {
                    if (form_data.password !== form_data.ppassword) {
                        return {
                            flag: false,
                            msg: '两次输入的密码不一致',
                        };
                    }
                    return { flag: true }
                }
            }]
        }

        const router = useRouter()
        const toLogin = () => {
            if(!form.value || !form.value.validate()) {
                return false
            }
            router.push({ path: '/login' })
        }

        return { form_data, form,  rules, toLogin }
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