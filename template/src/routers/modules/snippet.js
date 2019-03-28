/* generate by x-do-view */
const SnippetDemo = () => import('src/pages/snippet/Demo');
const SnippetDemoForm = () => import('src/pages/snippet/DemoForm');
const SnippetDemoHttp = () => import('src/pages/snippet/DemoHttp');
const SnippetDemoTableD2crud = () => import('src/pages/snippet/DemoTableD2Crud');

const routerList = [];

routerList.push({
  path: 'demo',
  component: SnippetDemo,
  meta: {
    title: 'Demo',
  },
  name: 'snippetDemo',
  hidden: false,
});

routerList.push({
  path: 'demo-form',
  component: SnippetDemoForm,
  meta: {
    title: '表单例子',
  },
  name: 'snippetDemoForm',
  hidden: false,
});

routerList.push({
  path: 'demo-http',
  component: SnippetDemoHttp,
  meta: {
    title: '数据请求例子',
  },
  name: 'snippetDemoHttp',
  hidden: false,
});

routerList.push({
  path: 'demo-table-d2-crud',
  component: SnippetDemoTableD2crud,
  meta: {
    title: 'd2-crud例子',
  },
  name: 'snippetDemoTableD2crud',
  hidden: false,
});

export default routerList;