<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">电影注册</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="submitForm('ruleForm')">注册</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name: 'login',
        data () {
            return {
                ruleForm: {
                    name: '',
                    password : ''
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                },
                checked: true
            }
        },
        mounted: function () {
            if (localStorage.account) {
                this.checked = true
            } else {
                this.checked = false
            }
        },
        methods: {
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let params = {
                            name : this.ruleForm.name,
                            password : this.ruleForm.password
                        };
                        this.$http.post('/api/user/signup',params);
                        if (this.ruleForm.account !== 'admin' || this.ruleForm.checkPass !== '666666'&& this.ruleForm.checkPass !== '777777') {
                            this.$message({
                                message: '用户名/密码错误',
                                type: 'error'
                            })
                        } else {
                            if (this.checked) {
                                localStorage.account = this.ruleForm.account
                                localStorage.checkPass = this.ruleForm.checkPass
                            } else {
                                localStorage.removeItem('account')
                                localStorage.removeItem('checkPass')
                                // this.ruleForm.account = ''
                                // this.ruleForm.checkPass = ''
                            }
                            if(this.ruleForm.checkPass == '777777'){
                                this.$router.push({ path: '/SubAccountManagement' })
                            }else{
                                this.$router.push({ path: '/TotalAccountManagement' })
                            }

                        }
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            }
        },
        watch: {},
        components: {}
    }
</script>

<style scoped>
    .login-container {
        border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        background-color:#ffffff;
        /*background-color:#13CE66;*/
    }

    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0px 0px 35px 0px;
    }
    .el-form-item{
        padding-bottom: 10px;
    }
</style>

