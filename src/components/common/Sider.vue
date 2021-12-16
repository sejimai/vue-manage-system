<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                  >{{ threeItem.title }}</el-menu-item
                >
              </el-submenu>
              <el-menu-item
                v-else
                :index="subItem.index"
                :key="subItem.index"
                >{{ subItem.title }}</el-menu-item
              >
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from "./bus";
export default {
  data() {
    return {
      collapse: true,
      items : [],
      adminItems: [
        {
          icon: "el-icon-s-home",
          index: "Home",
          title: "主页",
        },
        {
          icon: "el-icon-s-platform",
          index: "DeviceManage",
          title: "设备管理",
          subs: [
            {
              index: "AllDevice",
              title: "设备列表",
            },
            {
              index: "AddDevice",
              title: "增加设备",
            },
            {
              index: "LocateDevice",
              title: "设备定位查询",
            },
          ],
        },
        {
          icon: "el-icon-user",
          index: "UserManage",
          title: "用户管理",
          subs: [
            {
              index: "AllUser",
              title: "用户列表",
            },
            {
              index: "UserOperationList",
              title: "用户操作记录",
            },
          ],
        },
      ],
      userItems: [
        {
          icon: "el-icon-s-home",
          index: "UserHome",
          title: "我的主页",
        },
        {
          icon: "el-icon-s-platform",
          index: "DeviceManage",
          title: "设备管理",
        },
        {
          icon: "el-icon-shopping-cart-full",
          index: "RentDevice",
          title: "设备租赁",
        },
        {
          icon: "el-icon-circle-check",
          index: "StartDevice",
          title: "启用设备",
        },
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
  created() {
    if (this.GLOBAL.isAdmin === true) {
      this.items = this.adminItems;
    } else {
      this.items = this.userItems;
    }
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on("collapse", (msg) => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
