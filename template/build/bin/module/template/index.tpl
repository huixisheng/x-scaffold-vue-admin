/* 根据'./bin/build/new.js'自动生成 */
{% for item in list %}
import {{ item.componentName }} from './{{ item.name }}';{% endfor %}

const {{ componentName }} = {% raw %}{{% endraw %}{% for item in list %}
  {{ item.componentName }},{% endfor %}
};

export default {{ componentName }};
