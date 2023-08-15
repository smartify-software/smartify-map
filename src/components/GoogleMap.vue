<template>
  <div class="map-container">
    <GMapMap
        :center="center"
        :zoom="15"
        map-type-id="terrain"
        class="map"
    >
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapMap>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      center: {lat: 38.8895, lng: -77.0352},
      markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
        }
        // Along list of clusters
      ]
    }
  }
}
</script>

<style scoped>
.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.map {
  width: 80%;
  height: 80%;
}
</style>
