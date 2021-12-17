<template>
  <div class="ibox">
    <div class="ibox-title">我的设备使用情况</div>
    <div class="ibox-content">
      <div
        class="demo-chart liquidfill-chart"
        id="user-device-chart"
      ></div>
      <div class="echarts-font echarts-font-padding">
        <ul>
          <li>
            总设备数
            <span> {{ totalDeviceNum }} </span>
          </li>
          <li>
            已启用设备数
            <span> {{ usedDeviceNum}} </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      usedDeviceNum: 8,
      totalDeviceNum: 8,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let getChart = echarts.init(document.getElementById("user-device-chart"));
      var option = {
        tooltip: {
          show: true,
          trigger: "item",
          formatter:
            "未启用：" + String(this.totalDeviceNum - this.usedDeviceNum),
        },
        series: [
          {
            type: "liquidFill",
            radius: "150px",
            data: [this.usedDeviceNum / this.totalDeviceNum],
            label: {
              normal: {
                color: "#27e5f1",
                insideColor: "#fff",
                textStyle: {
                  fontSize: 40,
                  fontWeight: "bold",
                },
              },
            },
            color: [
              {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 1,
                    color: ["#6a7feb"],
                  },
                  {
                    offset: 0,
                    color: ["#27e5f1"],
                  },
                ],
                global: false,
              },
            ],
            outline: {
              show: true,
              borderDistance: 5,
              itemStyle: {
                borderColor: "#27e5f1",
                borderWidth: 3,
              },
            },
          },
        ],
      };

      getChart.setOption(option);
    },
  },
};
</script>

<style scope>
.ibox {
  margin: 0;
}
.ibox-title {
  font-size: 14px;
  font-weight: bold;
  color: #303133;
  min-height: 40px;
  height: 40px;
  border-width: 1px 0 0;
  padding-top: 10px;
  margin-left: 22px;
}
.ibox-content {
  height: 160px;
  padding: 0;
}
.demo-chart {
  height: 160px;
  padding: 0px;
}
.liquidfill-chart {
  width: 200px;
  float: left;
}
.echarts-font ul li {
  list-style: none;
  font-size: 10px;
  color: #303133;
  padding-bottom: 10px;
}
.echarts-font ul li span {
  padding-left: 6px;
  color: #167be0;
  font-size: 10px;
  font-weight: bold;
}
.echarts-font-padding {
  padding-top: 56px;
}
</style>