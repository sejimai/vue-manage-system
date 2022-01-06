<template>
  <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
    <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
  </baidu-map>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 18
    }
  }
}
</script>

<style>
.map {
  height: 100%;
  width: 100%;
}
</style>