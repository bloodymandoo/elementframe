const state = {
  userInfo: {
    userName: 'Blody',
    pic: require('@/assets/logo.png')
  },
  isCollapse: true,
  menuList: [
    {
      index: '1',
      title: '首页',
      icon: 'fa fa-home',
      child: []
    },
    {
      index: '2',
      title: '2',
      icon: 'fa fa-th',
      child: []
    },
    {
      index: '3',
      title: '3',
      icon: 'fa fa-table',
      child: [
        {
          index: '3-1',
          title: '',
          icon: 'el-icon-menu',
          child: [
            {
              index: '3-1-1',
              title: '3-1-1',
              icon: 'el-icon-menu',
              child: [

              ]
            },
            {
              index: '3-1-2',
              title: '3-1-2',
              icon: 'el-icon-menu',
              child: [

              ]
            }
          ]
        }
      ]
    }
  ]
}

// getters
const getters = {
  getUserInfo () {
    return state.userInfo
  },
  getCollapseState () {
    return state.isCollapse
  },
  getMenuList () {
    return state.menuList
  }
}

// actions
const actions = {

}

// mutations
const mutations = {
  changeCollapse () {
    state.isCollapse = !state.isCollapse
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
