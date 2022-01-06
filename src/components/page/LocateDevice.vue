<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 设备定位查询
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="handle-box">
        <el-input
          @keyup.enter.native="handleSearch"
          v-model="searchContent"
          placeholder="设备ID"
          class="handle-input mr10"
        ></el-input>
        <el-button class="primary" type="primary" icon="el-icon-refresh" @click="handleRefresh"
          >刷新</el-button
        >
        <el-button class="primary" type="primary" icon="el-icon-search" @click="handleSearch"
          >搜索</el-button
        >
      </div>
      <el-table
        :data="deviceList"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column
          prop="deviceId"
          label="ID"
          width="280"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="mac"
          align="center"
          label="MAC地址"
        ></el-table-column>
        <el-table-column
          prop="type"
          align="center"
          label="类型"
        ></el-table-column>
        <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-location-outline"
              class="green"
              @click="handleLocate(scope.$index, scope.row)"
            >定位</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="currentPage"
          :page-size="10"
          :total="pageTotal"
          @current-change="handlePageChange"
          @prev-click="handlePagePrev"
          @next-click="handlePageNext"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchData } from "../../api/index";
import Axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {
      searchContent: "",
      deviceList: [
        {
          deviceId: "1",
          mac: "192.168.0.155",
          type: "LED",
          picture: "F:\workspace\VueProject\vue-managee-system\src\assets\picture\background_image.jpg",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "2",
          mac: "192.168.0.156",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "3",
          mac: "192.168.0.157",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "4",
          mac: "192.168.0.158",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "5",
          mac: "192.168.0.159",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "6",
          mac: "192.168.0.160",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "7",
          mac: "192.168.0.161",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "8",
          mac: "192.168.0.162",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "9",
          mac: "192.168.0.163",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
        {
          deviceId: "10",
          mac: "192.168.0.164",
          type: "LED",
          picture: "",
          time: "2021/10/12",
          userIsdisable: false,
        },
      ],
      currentPage: 1,
      pageTotal: 10,
      currentMode: "AllDeviceList", 
    };
  },
  created() {
    this.getPage();
  },
  methods: {
    getPage() {},
    handleSearch() {},
    handleRefresh() {},
    handlePageChange() {},
    handlePagePrev() {},
    handlePageNext() {},
    handleLocate(index, row) {
      this.$router.replace("/DeviceLocation1");
    },
    handleTrajectory() {},
  },
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}
.handle-select {
    width: 120px;
}
.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
