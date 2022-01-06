<template>
  <div class="ibox">
    <div class="ibox-content">
      <div class="basic-wrapper">
        <div class="basic-icon-wrapper">
          <i class="basic-icon el-icon-user"></i>
        </div>
        <div class="basic-info">
          <p class="basic-info-data">
            <a class="with-link">
              {{ totalUserNum }}
            </a>
          </p>
          <span class="basic-info-label"> 用户数 </span>
        </div>
      </div>
    </div>
    <div class="ibox-title">
      <ul>
        <li class="type-li">
          正常
          <span class="type-normal">{{ enableUserNum }}</span>
        </li>
        <li class="type-li">
          禁用
          <span class="error_vms">{{ disableUserNum }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalUserNum: 5,
      enableUserNum: 5,
      disableUserNum: 0,
    };
  },
};
</script>

<style>
.ibox {
  margin: 0;
}
.ibox-content {
  height: 160px;
  padding: 0;
}
.basic-wrapper {
  display: flex;
  padding-left: 40px;
  padding-top: 30px;
}
.basic-icon-wrapper {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 80px;
  height: 80px;
  background-color: rgba(navy, 0.8);
  text-align: center;
  line-height: 80px;
}
.basic-icon {
  font-size: 35px;
  color: rgb(121, 121, 240);
}
.basic-info {
  flex: 0.6;
  text-align: center;
  max-width: 160px;
  padding: 0 0 0 10px;
  overflow: hidden;
}
.basic-info-data {
  color: #303133;
  font-size: 30px;
  line-height: 56px;
  font-weight: 600;
  margin: 0;
}
.with-link {
  color: #303133;
  cursor: pointer;
}
.basic-info-label {
  color: #303133;
  font-size: 12px;
  line-height: 24px;
}
.ibox-title {
  font-size: 10px;
  color: #303133;
  width: 280px;
}
.ibox-title ul {
  list-style: none;
}
.type-li {
  width: 50%;
  float: left;
  text-align: center;
}
.type-normal {
  color: #167be0;
}
.error_vms {
  color: #f56c6b;
}
</style>
