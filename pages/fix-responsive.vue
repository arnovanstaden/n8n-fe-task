<template>
  <div class="page-wrap">
    <article class="main-story">
      <img src="/responsive-main.jpg" alt="Sha Ra Rocking" />

      <div class="story-intro">
        <h1>Most Important Story</h1>
        <p>
          This article has the most visual weight.
          <a href="https://www.deviantart.com/nebezial/art/she-ra-115867096"
            >image source.</a
          >
        </p>
      </div>
    </article>

    <section class="sub-stories">
      <article class="sub-story">
        <img src="https://placekitten.com/250/350" />
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>

      <article class="sub-story">
        <img src="https://www.placecage.com/c/250/350" />
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>

      <article class="sub-story last">
        <img src="https://placebear.com/250/350" />
        <div class="story-intro">
          <h2>Less Important Story</h2>
          <p>This story has less visual weight.</p>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.page-wrap {
  padding: 1rem;
  overflow: hidden;
  max-width: 1600px;
  margin: 0 auto;
}

.main-story {
  position: relative;
  margin: 0 0 25px 0;
  height: 50vh;
  overflow: hidden;
}

.main-story img {
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center center;
}

img {
  display: block;
}

a {
  color: lightblue;
}

.story-intro {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  padding: 20px;
  color: white;
}

h1 {
  font-size: 4em;
}
h1,
h2 {
  margin: 0 0 10px 0;
}

.story-intro h1 {
  font-size: 2.5em;
}
.story-intro p {
  margin: 0;
}

.sub-stories {
  overflow: hidden;
  margin: 0 0 25px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.sub-story {
  width: 100%;
  font-size: 80%;
  position: relative;
}

.sub-story img {
  width: 100%;
}

.last {
  margin-right: 0;
}

@media screen and (min-width: 600px) {
  .sub-stories {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (min-width: 768px) {
  .sub-stories {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
