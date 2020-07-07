<template>
  <div class="container">
    <div>
      <h1 class="title">
        webmusic-nuxt
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // beforeCreate() {
  //   this.$router.replace('/discovery')
  // }
  asyncData({ redirect }) {
    redirect('/discovery')
  }
}
</script>

