<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 用户列表
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
        :data="userList"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column
          prop="userId"
          label="ID"
          width="280"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="userName"
          label="用户名"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" width="300" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.userIsdisable === false">
              <el-button
                type="text"
                icon="el-icon-circle-close"
                class="red"
                @click="handleDisable(scope.$index, scope.row)"
                >禁用</el-button
              >
              <el-button
                type="text"
                icon="el-icon-delete"
                class="red"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </div>
            <div v-if="scope.row.userIsdisable === true">
              <el-button
                type="text"
                icon="el-icon-circle-check"
                class="green"
                @click="handleDisable(scope.$index, scope.row)"
                >启用</el-button
              >
              <el-button
                type="text"
                icon="el-icon-delete"
                class="red"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </div>
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
      userList: [
        {
          userId: "CU12457",
          userName: "user1",
          userIsdisable: false,
        },
        {
          userId: "Hk22278",
          userName: "test",
          userIsdisable: false,
        },
        {
          userId: "OA45217",
          userName: "helloworld",
          userIsdisable: false,
        },
        {
          userId: "MS48212",
          userName: "nihao",
          userIsdisable: false,
        },
        {
          userId: "UD79134",
          userName: "user2",
          userIsdisable: false,
        },
      ],
      currentPage: 1,
      pageTotal: 5,
      currentMode: "AllUserList", 
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
    handleDisable(index, row) {
      var that = this;

      if (!that.userList[index].userIsdisable) {
        this.$confirm("确定要禁用该用户吗？", "提示", {
          type: "warning",
        })
          .then(() => {
            that.userList[index].userIsdisable = true;
            Vue.set(that.userList);
            that.$message({
              message: "禁用成功",
              type: "success",
            });
          });
      } else {
        that.userList[index].userIsdisable = false;
        Vue.set(that.userList);
        that.$message({
          message: "启用成功",
          type: "success",
        });
      }
    },
    handleDelete(index, row) {
      var that = this;

      this.$confirm("确定要删除该用户吗？", "提示", {
        type: "warning",
      })
      .then(() => {
        that.userList.splice(index, 1);
        Vue.set(that.userList);
        that.$message({
          message: "删除成功",
          type: "success",
        })
      })
      .catch(() => {
        that.$message({
          message: "删除失败，请重试",
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
