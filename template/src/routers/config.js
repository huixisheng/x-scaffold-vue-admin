// 根据路由的name进行相关的扩展配置
const config = {
  devAbout: {
    meta: {
      title: 'about',
      icon: 'homepage',
      roles: ['editor', 'admin'],
      noCache: true,
    },
  },
  devHome: {
    meta: {
      title: 'index',
      icon: 'homepage',
      roles: ['editor'],
      noCache: true,
    },
  },
  devList: {
    meta: {
      title: 'homeList',
      icon: 'homepage',
      roles: ['editor'],
      noCache: true,
    },
  }
};

class RouterConfig {
  constructor() {

  }

  setRouter(routerList) {
    routerList.forEach((item, index) => {
      if (config[item.name]) {
        routerConfig[index] = Object.assign(item, config[item.name]);
      }
    });
    return routerList;
  }
}

const routerConfig = new RouterConfig();

export default routerConfig;