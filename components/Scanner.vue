<template>
  <div class="scanner-container">
    <div v-show="isLoading">
      <div class="loader">Loading...</div> <!-- A loading indicator -->
    </div>
    <div v-show="!isLoading">
      <video poster="data:image/gif,AAAA" ref="scanner"></video>
      <div class="overlay-element"></div>
      <div class="laser"></div>
    </div>
  </div>
</template>


  
  <script>
  import { BrowserMultiFormatReader, Exception } from "@zxing/library";
  
  export default {
    name: "stream-barcode-reader",
  
    data() {
      return {
        isLoading: true,
        codeReader: new BrowserMultiFormatReader(),
        isMediaStreamAPISupported: navigator && navigator.mediaDevices && "enumerateDevices" in navigator.mediaDevices,
      };
    },
  
    mounted() {
      if (!this.isMediaStreamAPISupported) {
        throw new Exception("Media Stream API is not supported");
        return;
      }
  
      this.start();
      this.$refs.scanner.oncanplay = (event) => {
        this.isLoading = false;
        this.$emit("loaded");
      };
    },
  
    beforeUnmount() {
      this.codeReader.reset();
    },
  
    methods: {
      start() {
        this.codeReader.decodeFromVideoDevice(undefined, this.$refs.scanner, (result, err) => {
          if (result) {
            this.$emit("decode", result.text);
            this.$emit("result", result);
          }
        if (err) {
          this.$emit("error", err); // Emitting error
        }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  video {
    transform: ;
    width: 100%    !important;
    height: auto   !important;
    /* max-width: 100%;
    max-height: 100%; */
  }
  .scanner-container {
    position: relative;
    /* width: 100%;
    height: 50vh; Make the container responsive */
  }
  

 .loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

  .overlay-element {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 30, 30, 0.5);
  
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 10% 100%, 10% 10%, 90% 10%, 90% 90%, 10% 90%, 10% 100%, 100% 100%, 100% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 10% 100%, 10% 10%, 90% 10%, 90% 90%, 10% 90%, 10% 100%, 100% 100%, 100% 0%);
  }
  
  .laser {
  width: 90%;
  margin-left: 5%;
  background-color: tomato;
  height: 1px;
  position: absolute;
  top: 0; /* start from the middle */
  z-index: 2;
  box-shadow: 0 0 4px red;
  animation: scanning 2s infinite;
}

@keyframes scanning {
  0%, 100% {
    top: 0;
  }
  50% {
    top: 100%; /* down */
  }
}
  </style>