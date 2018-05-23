<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
//sidebar
$menuBg: #304156;
$subMenuBg: #1f2d3d;
$menuHover: #001528;

body {
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

label {
  font-weight: 700;
}

html {
  height: 100%;
  box-sizing: border-box;
}

#app{
  height: 100%;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#app {
  // 主体区域
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 180px;
  }
  // 侧边栏
  .sidebar-container {
    transition: width 0.28s;
    width: 180px !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    //reset element-ui css
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out,
        0s padding-right ease-in-out;
    }
    .scrollbar-wrapper {
      height: calc(100% + 15px);
      .el-scrollbar__view {
        height: 100%;
      }
    }
    .is-horizontal {
      display: none;
    }
    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
    }
    .svg-icon {
      margin-right: 16px;
    }
    .el-menu {
      border: none;
      height: 100%;
      width: 100% !important;
    }
  }
  .hideSidebar {
    .sidebar-container {
      width: 36px !important;
    }
    .main-container {
      margin-left: 36px;
    }
    .submenu-title-noDropdown {
      padding-left: 10px !important;
      position: relative;
      .el-tooltip {
        padding: 0 10px !important;
      }
    }
    .el-submenu {
      overflow: hidden;
      & > .el-submenu__title {
        padding-left: 10px !important;
        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }
    .el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
        }
      }
    }
  }
  .sidebar-container .nest-menu .el-submenu > .el-submenu__title,
  .sidebar-container .el-submenu .el-menu-item {
    min-width: 180px !important;
    background-color: $subMenuBg !important;
    &:hover {
      background-color: $menuHover !important;
    }
  }
  .el-menu--collapse .el-menu .el-submenu {
    min-width: 180px !important;
  }

  //适配移动端
  .mobile {
    .main-container {
      margin-left: 0px;
    }
    .sidebar-container {
      transition: transform 0.28s;
      width: 180px !important;
    }
    &.hideSidebar {
      .sidebar-container {
        transition-duration: 0.3s;
        transform: translate3d(-180px, 0, 0);
      }
    }
  }
  .withoutAnimation {
    .main-container,
    .sidebar-container {
      transition: none;
    }
  }
}
</style>
