<template>
  <div id="login-page">
    <div id="login" v-if="isLogin">
      <header>
        <h2>LOGIN</h2>
      </header>
      <section>
        <p>Login with your account</p>
        <article>
          <el-input
            class="account"
            placeholder="Account"
            prefix-icon="fa fa-user"
            type="text"
            v-model="account">
          </el-input>
          <el-input
            class="password"
            placeholder="Password"
            prefix-icon="fa fa-lock"
            type="password"
            v-model="password">
          </el-input>
          <div class="remb">
            <el-checkbox class="check" style="font-size:12px;" v-model="checked">Remember me</el-checkbox>
            <router-link class="link" to="">Forget Password?</router-link>
          </div>
          <el-button
          class="loginBtn"
          @click="login"
          :disabled="account===''||password===''">Login</el-button>
        </article>
      </section>
      <footer>
        <p>If you do not have an account,<a class="sgin" @click="goRegister">Sgin up</a></p>
      </footer>
    </div>

    <div id="register" v-else>
      <header>
        <h2>REGISTER</h2>
      </header>
      <section>
        <article>
          <el-input
            class="account"
            placeholder="Account"
            prefix-icon="fa fa-user"
            type="text"
            v-model="account">
          </el-input>
          <el-input
            class="password"
            placeholder="Password"
            prefix-icon="fa fa-lock"
            type="password"
            @blur="isSameP"
            v-model="password">
          </el-input>
          <el-input
            class="password"
            placeholder="Confirm the Password"
            prefix-icon="fa fa-lock"
            type="password"
            @blur="isSameP"
            v-model="cpassword">
          </el-input>
          <p v-if="isSame">确认密码与密码不一致，请重新输入</p>
          <el-button
          class="registerBtn"
          @click="register"
          :disabled="account===''||password===''||cpassword===''"
          >Register</el-button>
        </article>
      </section>
      <footer>
        <p>If you do have an account,<a class="sgin" @click="goLogin">Sgin in</a></p>
      </footer>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user'
export default {
  name: 'login',
  data () {
    return {
      account: '',
      password: '',
      cpassword: '',
      checked: false,
      isLogin: true,
      isSame: false
    }
  },
  methods: {
    login () {
      login(this.account, this.password)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register () {
      register(this.account, this.password)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    },
    goRegister () {
      this.isLogin = false
    },
    goLogin () {
      this.isLogin = true
    },
    isSameP () {
      this.isSame = this.password === this.cpassword
    }
  }
}
</script>

<style lang="scss" scoped>
#login-page{
  height:100%;
  width:100%;
  min-width:1200px;
  min-height:600px;
  background-image: url('../../assets/image/login-bg.jpg') ;
  background-repeat :no-repeat;
  background-size:  100% 100%;
  padding-top:33vh;
}
#login,#register{
  margin-left:56%;
  // padding-left:;
  width:20%;
  // height:400px;
  display: flex;
  flex-direction: column;
  header{
    padding:10px 0;
    h2{
      // font-weight: 600;
      font-size:24px;
    }
  }
  section{
    p{
      font-size:12px;
      text-align: left;
      padding:10px 0;
    }
    article{
      display: flex;
      flex-direction: column;
      font-size:12px;
      .account{
        width:100%;
        margin:10px 0;
        font-size:12px;
        .fa{
          font-size:20px;
        }
      }
      .password{
        width:100%;
        margin-bottom:10px;

        font-size:12px;
      }
      .loginBtn{
        width:100%;
        height:36px;
      }
      .remb{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding:10px 0;
        .check{
          font-size:12px!important;
          .el-checkbox__label{
            font-size: 12px!important;
          }
        }
        .link{
          color:#c7cce1;
          &:hover{
            color:#409eff;
          }
        }
      }
    }
  }
  footer{
    margin-top:40px;
    p{
      text-align: center;
      font-size:12px;
      color:#999;
      .sgin{
        text-decoration:underline;
        color:#999;
        &:hover{
          cursor: pointer;
          color:#409eff;
        }
      }
    }

  }
}
</style>
