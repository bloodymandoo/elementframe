<template>
  <div id="login-page">
    <div id="login">
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
          <el-button class="loginBtn">Login</el-button>
        </article>
      </section>
      <footer>
        <p>If you do not have an account,<router-link class="sgin" to="">Sgin up</router-link></p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      account: '',
      password: '',
      checked: false
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
#login{
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
          color:#409eff;
        }
      }
    }

  }
}
</style>
