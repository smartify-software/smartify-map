<template>
  <GoogleMap api-key="AIzaSyBkA4jYjWyzhbedSSeCEnG0iDwb6o5QMtI" style="width: 100%; height: 500px" :center="center"
             :zoom="16">

    <CustomMarker :options="{ position: node, anchorPoint: 'BOTTOM_CENTER' }">
      <div class="custom-marker">
        <div class="blue-dot"></div>
        <div class="orange-halo"></div>
      </div>
    </CustomMarker>

  </GoogleMap>
</template>


<script>
import {defineComponent, ref, watchEffect} from "vue";
import {CustomMarker, GoogleMap,} from "vue3-google-map";

export default defineComponent({
  components: {GoogleMap, CustomMarker},
  setup() {
    // DC coordinates
    const center = {lat: 38.9072, lng: -77.0369};

    const node = ref({lat: 38.9072, lng: -77.0369})


    // Function to randomly move the marker within a small vicinity
    const moveMarker = () => {
      node.value = {
        lat: node.value.lat + (Math.random() - 0.5) * 0.001,
        lng: node.value.lng + (Math.random() - 0.5) * 0.001,
      };
    };

    // Set an interval to move the marker every 2 seconds
    const intervalId = setInterval(moveMarker, 2000);

    // Clear the interval when the component is unmounted
    watchEffect((onInvalidate) => {
      onInvalidate(() => {
        clearInterval(intervalId);
      });
    });

    return {center, node};
  },
});
</script>

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
