// 管理数据校验逻辑
class Validate {
    // 必填项
    required(data) {  
        const msg = '该信息为必填项'
        if (data == null || (typeof data === 'string' && data.trim() === '')) {
            return { flag:false, msg }
        }
        return { flag:true }
    }
    
    //手机号
    phone(data) { 
        const msg = '请填写正确的手机号码'
        const flag = /^1[3456789]\d{9}$/.test(data)
        return { flag, msg }
    }
    
    //最小长度
    minLength(data, { params }) {
        let minLength = params = 9
        if (data == null) {
            return { flag:false, msg:"数据不能为空" }
        }
        if (data.trim().length >= minLength) {
            return { flag:true }
        } else {
            return { flag:false, msg:`数据最小长度不能小于${minLength}位` }
        } 
    }
}

// 校验逻辑生成实例
const getInstance = (function(){
    let _instance;
    return function(){
         if(_instance == null){
           _instance = new Validate();
         }
         return _instance;
      }
})()

// 校验函数
export const getValidate = (rule) => {
    const obj = getInstance()
    const fn_list = []
    //遍历rule数组,根据其类型获取Validate类中的校验方法放到fn_list中收集起来
    rule.forEach((item) => {
        if (typeof item === 'string') {
            fn_list.push({ fn: obj[item] })
        } else if (item instanceof Object) {
            fn_list.push({
         //如果item.type为custome自定义类型,校验函数直接使用callback.否则从ob实例获取  
          ...item, 
          fn: item.type === 'custome' ? item.callback : obj[item.type],
        })
      }
    })
    //需要返回的校验函数
    const execuate = (value) => {
        let flag = true, msg = ''
        for (let i = 0; i < fn_list.length; i++) {
            const item = fn_list[i];
            const result = item.fn.apply(obj, [value, item])
            if (!result.flag) {
                //验证没有通过
                flag = false
                msg = item.msg ? item.msg : result.msg;//是使用默认的报错信息还是用户自定义信息 
                break;
            }
        }
        return { flag, msg }
    }
    return execuate
}