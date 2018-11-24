<template>
  <div class="navbar-content">
    <div class="left">
      <a class="mainnav-toggle" href="#" @click="changeCollapse">
        <i class="fa fa-navicon fa-lg"></i>
      </a>
    </div>
    <div class="right">
      <div id="toggleFullscreen">
          <a class="fa fa-expand" data-toggle="fullscreen" href="#" role="button" @click="requestOrExitFullScreen">
          </a>
      </div>
      <el-dropdown id="dropdown-user" trigger="click">
        <a class="el-dropdown-link">
          <span>{{userInfo.userName}}</span>
          <img :src="userInfo.pic" class="circle"/>
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <a href="#"> <i class="fa fa-user fa-fw"></i> 个人中心 </a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">  <i class="fa fa-envelope fa-fw"></i> 信息 </a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#">  <i class="fa fa-gear fa-fw"></i> 设置 </a>
          </el-dropdown-item>
          <el-dropdown-item>
            <a href="#"> <i class="fa fa-sign-out fa-fw"></i> 退出 </a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Fullscreen from 'assets/js/Fullscreen'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'headnav',
  data () {
    return {
      isFullScreen: false
    }
  },
  computed: {
    ...mapState('indexPage', {
      userInfo: state => state.userInfo
    })
  },
  methods: {
    requestOrExitFullScreen () {
      Fullscreen.requestOrExitFullScreen('app')
    },
    ...mapMutations('indexPage', [
      'changeCollapse'
    ])
  },
  components: {
    Fullscreen
  }
}
</script>

<style lang="scss" scoped>
.navbar-content{
  height: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  .left{
    height:100%;
    flex:1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .mainnav-toggle{
      color:white!important;
    }
  }
  .right{
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

  }
}
#toggleFullscreen{
  height:100%;
  padding:0 20px;
  display: flex;
  align-items: center;
  a{
    color:white;
  }
}
#dropdown-user{
  display: flex;
  align-items: center;
  height:100%;
  .el-dropdown-link{
    display: flex;
    align-items: center;
    height:100%;
    color:white;
    cursor:pointer;
    span{
      padding:0 10px;
    }
    img{
      width:32px;
      height:32px;
    }
  }
}
</style>
