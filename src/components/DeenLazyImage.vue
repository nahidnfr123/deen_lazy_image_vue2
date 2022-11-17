<template>
  <figure v-lazyload class="image__wrapper" style="padding: 0; margin: 0;" :style="`min-height: ${loaderHeight}px; min-width: ${loaderWidth}px;`">
    <div v-if="showLoader" class="spinnerLoader">
      <div class="lds-ring" :style="`height: ${loaderHeight}px; width: ${loaderWidth}px;`">
        <div :style="`height: ${loaderHeight}px; width: ${loaderWidth}px;`"></div>
        <div :style="`height: ${loaderHeight}px; width: ${loaderWidth}px;`"></div>
        <div :style="`height: ${loaderHeight}px; width: ${loaderWidth}px;`"></div>
        <div :style="`height: ${loaderHeight}px; width: ${loaderWidth}px;`"></div>
      </div>
    </div>
    <img
        :src="loadImage"
        class="image__item"
        :class="imageClass"
        :data-url="source"
        :alt="alt"
        loading="lazy"
        :height="height"
        :width="width"
        :style="imgStyle"
    />
  </figure>
</template>

<script>
export default {
  props: {
    source: {type: String, required: false, default: null},
    imageClass: {type: [String, Array], default: ''},
    alt: {type: String, default: 'image'},
    showLoader: {type: Boolean, default: true},
    height: {type: String, default: ''},
    width: {type: String, default: ''},
    loaderHeight: {type: String, default: '40'},
    loaderWidth: {type: String, default: '40'},
    imgStyle: {type: String, default: ''},
    errorImage: {type: String, default: '../assets/error.png'}
  },
  data() {
    return {
      loadImage: '', //require("~/assets/images/loading.gif"),
    }
  }
}
</script>

<style>
.image__wrapper {
  position: relative;
  min-height: 40px;
  /*max-height: 500px;*/
}

.image__wrapper .spinnerLoader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
}

.image__wrapper.loaded .spinnerLoader {
  display: none;
}


.lds-ring {
  display: inline-block;
  position: relative;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  margin: 8px;
  border: 2px solid;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: orange transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*Hello there How are you*/
.btn-lds-ring {
  display: inline-block;
  position: relative;
  width: 12px;
  height: 12px;
  margin-right: 6px;
}

.btn-lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  border: 2px solid;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: white transparent transparent transparent;
}

.btn-lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.btn-lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.btn-lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

.image__item {
  margin-bottom: -7px !important;
}
</style>
