/* 使用x-do-view自动生成，修改会被覆盖 */
const SnippetAbout = () => import('src/pages/snippet/About');
const SnippetFormdemo = () => import('src/pages/snippet/FormDemo');
const SnippetHome = () => import('src/pages/snippet/Home');
const SnippetList = () => import('src/pages/snippet/List');

const routerList = [];

routerList.push({
  path: 'about',
  component: SnippetAbout,
  meta: {
    title: '关于',
  },
  name: 'snippetAbout',
  hidden: false,
});

routerList.push({
  path: 'form-demo',
  component: SnippetFormdemo,
  meta: {
    title: '表单例子',
  },
  name: 'snippetFormDemo',
  hidden: false,
});

routerList.push({
  path: 'home',
  component: SnippetHome,
  meta: {
    title: '首页',
  },
  name: 'snippetHome',
  hidden: false,
});

routerList.push({
  path: 'list',
  component: SnippetList,
  meta: {
    title: '列表',
  },
  name: 'snippetList',
  hidden: false,
});


export default routerList;