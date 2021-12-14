<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 增加设备
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form :model="form">
          <el-form-item label="MAC地址" prop="deviceMac">
            <el-input v-model="form.deviceMac" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="设备类型" prop="deviceType">
            <el-input v-model="form.deviceType" style="width: 250px"></el-input>
          </el-form-item>
          <el-form-item label="设备描述" prop="deviceDescription">
            <el-input
              v-model="form.deviceDescription"
              style="width: 250px"
            ></el-input>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.deviceCreateTime"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="图片" prop="devicePicture">
            <el-upload
              class="avatar-uploader"
              :action="uploadURL"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :on-error="handleUploadFail"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button class="primary" style="width: 250px" @click="onSubmit"
              >上传</el-button
            >
          </el-form-item>
        </el-form>
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
      form: {
        deviceMac: null,
        deviceType: null,
        deviceDescription: null,
        deviceCreateTime: null,
        devicePicture: null,
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      imageUrl: "",
      uploadURL: this.GLOBAL.baseURL + "",
    };
  },
  created() {
    this.getPage();
  },
  methods: {
    getPage() {},
    handleAvatarSuccess(res, picture) {
      this.imageUrl = URL.createObjectURL(picture.raw);
      this.$message({
        message: "图片上传成功",
        type: "success",
      });
      this.form.documentPicture = res;
    },
    handleUploadFail() {
      this.$message({
        message: "上传失败",
        type: "error",
      });
    },
    beforeAvatarUpload(picture) {
      const isJPG =
        picture.type === "image/jpeg" || picture.type === "image/png";
      if (!isJPG) {
        this.$message.error("上传封面图片只能是 JPG或者PNG 格式!");
      } else {
        this.$message({
          message: "上传中",
        });
      }
      return isJPG;
    },
    onSubmit() {},
  },
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  width: 160px;
  height: 200px;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.introduction {
  width: 250px;
}
</style>
