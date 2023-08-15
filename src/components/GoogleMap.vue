<template>
  <GoogleMap api-key="AIzaSyBkA4jYjWyzhbedSSeCEnG0iDwb6o5QMtI" style="width: 100%; height: 500px" :center="center"
             :zoom="16">
    <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">
      <div class="custom-marker">
        <div class="blue-dot"></div>
        <div class="orange-halo"></div>
      </div>
    </CustomMarker>
  </GoogleMap>
</template>


<script>
import {defineComponent} from "vue";
// import marker
import {CustomMarker, GoogleMap, } from "vue3-google-map";

export default defineComponent({
  components: {GoogleMap, CustomMarker},
  setup() {
    // DC coordinates
    const center = {lat: 38.9072, lng: -77.0369};
    const sample5LocationsAroundDC = [
      {
        lat: 38.9072,
        lng: -77.0369,
        name: "Washington, DC",
      },
      {
        lat: 38.8951,
        lng: -77.0364,
        name: "Washington Monument",
      },
      {
        lat: 38.8893,
        lng: -77.0502,
        name: "Lincoln Memorial",
      },
      {
        lat: 38.8895,
        lng: -77.0353,
        name: "Vietnam Veterans Memorial",
      },
      {
        lat: 38.8893,
        lng: -77.0502,
        name: "Lincoln Memorial",
      },
      {
        lat: 38.8895,
        lng: -77.0353,
        name: "Vietnam Veterans Memorial",
      },
      {
        lat: 38.8893,
        lng: -77.0502,
        name: "Lincoln Memorial",
      },
      {
        lat: 38.8895,
        lng: -77.0353,
        name: "Vietnam Veterans Memorial",
      },
      {
        lat: 38.8893,
        lng: -77.0502,
        name: "Lincoln Memorial",
      },
      {
        lat: 38.8895,
        lng: -77.0353,
        name: "Vietnam Veterans Memorial",
      },
      {
        lat: 38.8893,
        lng: -77.0502,
        name: "Lincoln Memorial",
      },
      {
        lat: 38.8895,
        lng: -77.0353,
        name: "Vietnam Veterans Memorial",
      },
      {
        lat: 38.8893,
        lng: -77.0502,
        name: "Lincoln Memorial",
      },
      {
        lat: 38.8895,
        lng: -77.0353,
        name: "Vietnam Veterans Memorial",
      },
      {
        lat: 38.8893,
        lng: -77.0502,
        name: "Lincoln Memorial",
      },
      {
        lat: 38.8895,
        lng: -77.0353,
        name: "Vietnam Veterans Memorial",
      }
    ]
    return {center, sample5LocationsAroundDC};
  },
});

</script>


<style scoped>
<style scoped>
.custom-marker {
  position: relative;
  width: 20px;
  height: 20px;
}

.blue-dot {
  background-color: blue;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.orange-halo {
  background-color: orange;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>
