<template>
  <div class="wrap_preloader">
    <div class="preloader">
      <span class="left"></span>
      <span class="right"></span>
      <span class="preloader_txt"></span>
    </div>
  </div>
</template>

<style lang="scss">
.wrap_preloader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  z-index: 999;
}
.preloader {
  position: fixed;
  width: 75px;
  height: 90px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background: url('../assets/images/preloader.png') no-repeat;
  background-size: 100%;
  .preloader_txt {
    display: block;
    clear: both;
    width: 42px;
    height: 16px;
    margin: auto;
    background: url('../assets/images/preloader_txt.png') no-repeat;
    background-size: 100%;
  }
  .left {
    float: left;
    width: 30px;
    height: 100%;
    background: url('../assets/images/l.png') no-repeat;
    background-size: 100%;
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    width: 37px;
    height: 100%;
    background: url('../assets/images/r.png') no-repeat right;
    background-size: 100% 100%;
    animation: flip 1.8s infinite linear;
    transform-origin: 0% 50%;
    animation-delay: 0.5s;
  }
}
@keyframes flip {
  0% {
    transform: perspective(600px) rotateY(-0deg);
  }
  10% {
    transform: perspective(200px) rotateY(-30deg);
  }
  20% {
    transform: perspective(200px) rotateY(-60deg);
  }
  30% {
    transform: perspective(200px) rotateY(-90deg);
  }
  55% {
    opacity: 0.8;
  }
  60% {
    transform: perspective(200px) rotateY(-180deg);
    opacity: 0.6;
  }
  70% {
    transform: perspective(200px) rotateY(-180deg);
    opacity: 0.4;
  }
  80% {
    transform: perspective(200px) rotateY(-180deg);
    opacity: 0.1;
  }
  90% {
    transform: perspective(200px) rotateY(-180deg);
    opacity: 0;
  }
  100% {
    transform: perspective(200px) rotateY(-180deg);
    opacity: 0;
  }
}
</style>
<script>
</script>
