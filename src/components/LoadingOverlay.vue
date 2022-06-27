<template>
  <div class="overlay">
    <div class="loader">
      <span /><span /><span /><span /><span /><span /><span />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.466);
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* This next part is directly from this codepen, it just looked good https://codepen.io/ShortCode/pen/JjpgvKb*/

.loader {
  position: relative;
  display: flex;
}

.loader span {
  width: 10px;
  height: 80px;
  margin: 20px;
  border-radius: 5px;
  background: #00689d;
  animation: animate 1.4s linear infinite;
  box-shadow: 0 0 0 #00689d;
}

.loader span:nth-child(1) {
  animation-delay: 0s;
}
.loader span:nth-child(2) {
  animation-delay: 0.2s;
}
.loader span:nth-child(3) {
  animation-delay: 0.4s;
}
.loader span:nth-child(4) {
  animation-delay: 0.6s;
}
.loader span:nth-child(5) {
  animation-delay: 0.8s;
}
.loader span:nth-child(6) {
  animation-delay: 1s;
}
.loader span:nth-child(7) {
  animation-delay: 1.2s;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: translateX(-50px) scale(1);
  }

  50% {
    box-shadow: 0 0 5px #00689d;
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
