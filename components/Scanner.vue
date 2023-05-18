<template>
    <div class="scanner-container" >
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
        });
      },
    },
  };
  </script>
  
  <style scoped>
  video {
    max-width: 50%;
    max-height: 50%;
  }
  .scanner-container {
    position: relative;
  }
  
  .overlay-element {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background: rgba(30, 30, 30, 0.5);
  
    -webkit-clip-path: polygon(0% 0%, 0% 100%, 20% 100%, 20% 20%, 80% 20%, 80% 80%, 20% 80%, 20% 100%, 100% 100%, 100% 0%);
    clip-path: polygon(0% 0%, 0% 100%, 20% 100%, 20% 20%, 80% 20%, 80% 80%, 20% 80%, 20% 100%, 100% 100%, 100% 0%);
  }
  
  .laser {
    width: 40%;
    margin-left: 5%;
    background-color: tomato;
    height: 1px;
    position: absolute;
    top: 40%;
    z-index: 2;
    box-shadow: 0 0 4px red;
    -webkit-animation: scanning 2s infinite;
    animation: scanning 2s infinite;
  }
  @-webkit-keyframes scanning {
    50% {
      -webkit-transform: translateY(75px);
      transform: translateY(75px);
    }
  }
  @keyframes scanning {
    50% {
      -webkit-transform: translateY(75px);
      transform: translateY(75px);
    }
  }
  </style>