<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 我的主页
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="charts-container">
        <deviceChart></deviceChart>
        <userDeviceChart></userDeviceChart>
      </div>
    </div>
  </div>
</template>

<script>
import deviceChart from "../common/DeviceChart.vue"
import userDeviceChart from "../common/UserDeviceChart.vue"
export default {
  data() {
    return {
    };
  },
  components: {
    deviceChart,
    userDeviceChart,
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
.container {
  height: 500px;
}
</style>
