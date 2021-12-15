<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 主页
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="charts-container">
        <deviceChart></deviceChart>
        <userChart></userChart>
      </div>
      <div class="table-container">
        <el-table
          :data="logList"
          border
          class="table"
          ref="multipleTable"
          header-cell-class-name="table-header"
        >
          <el-table-column
            prop="log"
            label="日志"
            align="left"
          ></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import deviceChart from "../common/DeviceChart.vue";
import userChart from "../common/UserChart.vue";
import { fetchData } from "../../api/index";
import Axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      logList: [],
    };
  },
  components: {
    deviceChart,
    userChart,
  },
  created() {
    this.getPage();
  },
  methods: {
    getPage() {},
  },
};
</script>

<style scoped>
.charts-container {
  width: 40%;
  float: left;
}
.table-container {
  width: 40%;
  float: left;
}
.table {
  width: 100%;
  font-size: 14px;
}
.container {
  height: 500px;
}
</style>
