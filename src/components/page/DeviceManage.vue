<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 设备管理
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
      ],
      currentPage: 1,
      pageTotal: 6,
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
