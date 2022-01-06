<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 租赁设备
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
        <el-button
          class="primary"
          type="primary"
          icon="el-icon-refresh"
          @click="handleRefresh"
          >刷新</el-button
        >
        <el-button
          class="primary"
          type="primary"
          icon="el-icon-search"
          @click="handleSearch"
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
          align="center"
          label="MAC地址"
          prop="mac"
        ></el-table-column>
        <el-table-column
          align="center"
          label="类型"
          prop="type"
        ></el-table-column>
        <el-table-column label="图片" align="center">
          <template slot-scope="scope">
            <el-image
              class="table-td-thumb"
              :src="scope.row.picture"
              :preview-src-list="[scope.row.picture]"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column label="时间" prop="time"></el-table-column>
        <el-table-column label="状态" width="80" align="center">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.userIsdisable === false ? 'success' : 'danger'"
              >{{ scope.row.userIsdisable === false ? "正常" : "禁用" }}</el-tag
            >
          </template>
        </el-table-column>

        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-shopping-cart-full"
              class="green"
              @click="handleRent(scope.$index, scope.row)"
              >租赁</el-button
            >
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
import Vue from 'vue';
export default {
  data() {
    return {
      searchContent: "",
      deviceList: [
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
      pageTotal: 4,
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
    handleDisable() {},
    handleDelete() {},
    handlePageChange() {},
    handlePagePrev() {},
    handlePageNext() {},
    handleRent(index, row) {
      var that = this;

      this.$confirm("确定要租赁该设备吗？", "提示", {
        type: "warning",
      })
      .then(() => {
        that.deviceList.splice(index, 1);
        Vue.set(that.deviceList);
        that.$message({
          message: "租赁成功",
          type: "success",
        })
      })
      .catch(() => {
        that.$message({
          message: "租赁失败，请重试",
          type: "error",
        })
      });
    },
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
