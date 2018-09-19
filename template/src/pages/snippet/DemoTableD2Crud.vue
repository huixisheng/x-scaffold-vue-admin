<template>
<div>
  <d2-crud
    ref="d2Crud"
    :columns="columns"
    :data="data"/>
    <p>
      <a href="https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/#%E4%BB%8B%E7%BB%8D">参考文档</a>
      <a href="https://d2-projects.github.io/d2-admin/#/demo/d2-crud/index">示例</a>
    </p>
    <el-button type="primary" @click="exportExcel">
      导出 Excel
    </el-button>
</div>
</template>

<script>
import Vue from 'vue';
import D2Crud from '@d2-projects/d2-crud';
import excelXlsx from 'excel-xlsx';

Vue.use(D2Crud);

export default {
  title: 'd2-crud例子',
  // mixins: [],

  components: {},

  data() {
    return {
      columns: [
        {
          title: '日期',
          key: 'date',
        },
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '地址',
          key: 'address',
        },
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },

  computed: {

  },

  created() {

  },

  mounted() {

  },

  activated() {

  },

  methods: {
    exportExcel() {
      const headerData = this.columns.map((item) => {
        const label = item.title;
        return {
          label,
          prop: item.key,
        };
      });
      const listData = this.data;

      excelXlsx(headerData, listData, 'tableName');
    },
  },
};

</script>
<style lang="less" scoped>

</style>