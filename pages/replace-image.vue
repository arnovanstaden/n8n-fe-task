<template>
  <dic class="page-wrap">
    <div class="row">
      <p>Background Image Method:</p>
      <a href="/" class="background"></a>
    </div>
    <div class="row">
      <p>Pseudo-element Content Background Method:</p>
      <a href="/" class="link-background"></a>
    </div>
    <div class="row">
      <p>Pseudo-element Content Method:</p>
      <a href="/" class="link-content"></a>
    </div>
  </dic>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.row {
  padding: 1rem;
  margin-bottom: 2rem;
}

.row p {
  font-weight: 500;
}

.background {
  background-image: url("/3-logo.png");
  width: 10rem;
  height: 10rem;
  display: block;
  background-size: contain;
}

.link-background::after {
  content: "";
  background-image: url("/3-logo.png");
  width: 10rem;
  height: 10rem;
  display: block;
  background-size: contain;
}

.link-content::after {
  content: url("/3-logo.png");
}
</style>
