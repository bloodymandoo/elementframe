<template>
<div>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group> -->

  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <div :class="['logo',isCollapse?'':'notCollapse']">
        <i class="fa fa-forumbee brand-icon"></i>
        <span class="brand-text">{{userInfo.userName}}</span>
      </div>
      <template v-for="submenu in menuList">
        <el-submenu
          v-if="submenu.child.length>0"
          :index="submenu.index"
          :key="submenu.index">
          <template slot="title">
            <i :class="[submenu.icon,'menu-icon']"></i>
            <span :class="['title']">{{submenu.title}}</span>
          </template>
          <template v-for="item in submenu.child" >
            <el-menu-item-group :key="item.index">
              <span slot="title" v-if="item.title">{{item.title}}</span>
              <el-menu-item v-for="subitem in item.child"
                :key="subitem.index"
                :index="subitem.index">
                {{subitem.title}}
              </el-menu-item>
            </el-menu-item-group>
          </template>
        </el-submenu>
        <el-menu-item v-else :index="submenu.index" :key="submenu.index">
          <i :class="[submenu.icon,'menu-icon']"></i>
          <span :class="['title']">{{submenu.title}}</span>
        </el-menu-item>
     </template>
  </el-menu>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Menu',
  data () {
    return {

    }
  },
  computed: {
    ...mapState('indexPage', {
      isCollapse: state => state.isCollapse,
      userInfo: state => state.userInfo,
      menuList: state => state.menuList
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  width:60px;
  height:60px;
  overflow: hidden;
  .brand-icon{
    height:60px;
    width:60px;
    display:block;
    float:left;
    text-align: center;
    line-height: 60px;
    font-size:26px;
  }
  .brand-text{
    height:60px;
    float:left;
    padding-right:20px;
    line-height: 60px;
    display: block;
    font-size: 20px;
    font-weight: 200;
    -webkit-font-smoothing: antialiased !important;
    text-size-adjust: 100%;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  // min-width: 140px;
  min-height: 400px;
}
.notCollapse{
  width:auto;
}

</style>
