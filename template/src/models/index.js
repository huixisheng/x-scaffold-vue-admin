import Model from 'src/packages/model/index';
import urls from './modules';

// TODO: 接口的参数验证
const modelInstance = new Model(urls);
export default modelInstance;