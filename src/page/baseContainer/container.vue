<template>
  <el-container id="container">
    <el-aside width="63px">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>
        <HeadNav></HeadNav>
      </el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from 'page/menu/menu'
import HeadNav from 'page/head/headnav'
export default {
  name: 'Container',
  components: {
    Menu,
    HeadNav
  },
  beforeCreate () {
    if (this.$cookies.get('my_token') === null) {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
  #container{
    height:100%;
    width:100%;
    display: flex;
    flex-direction: row;
    >.el-aside {
      width:auto!important;
      background-color: #fff;
    }
    >.el-container {
      flex:1;
      display:flex;
      flex-direction: column;
      .el-header{
        background: linear-gradient(to right, rgb(0, 213, 230) 10%, rgb(31, 114, 162) 100%);
      }
      .el-main {
        flex:1;
        background-color: #f2f7f8;
      }
    }

  }

</style>
