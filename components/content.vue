<template>
  <div class="index-container">
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">
            <span class="iconfont icon-find-music"></span>
            发现音乐
          </router-link>
        </li>
        <li>
          <router-link to="/playlists">
            <span class="iconfont icon-music-list"></span>
            推荐歌单
          </router-link>
        </li>
        <li>
          <router-link to="/songs">
            <span class="iconfont icon-music"></span>
            最新音乐
          </router-link>
        </li>
        <li>
          <router-link to="/mvs">
            <span class="iconfont icon-mv"></span>
            最新MV
          </router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <nuxt />
    </div>
    <div class="player">
      <audio ref="audioRef" controls autoplay :src="getUrl" loop></audio>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import bus from '@/utils/bus'
export default {
  name: 'index',
  data() {
    return {
      activeIndex: 0,
      url: ''
    }
  },
  mounted() {
    bus.$on('pauseMusic', () => {
      this.$refs.audioRef && this.$refs.audioRef.pause()
    })
  },
  computed: {
    ...mapGetters({ getUrl: 'url/getUrl' })
  }
}
</script>
