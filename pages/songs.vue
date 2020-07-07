<template>
  <div class="songs-container">
    <div class="tab-bar">
      <span class="item" :class="{ active: type == 0 }" @click="type = 0">全部</span>
      <span class="item" :class="{ active: type == 7 }" @click="type = 7">华语</span>
      <span class="item" :class="{ active: type == 96 }" @click="type = 96">欧美</span>
      <span class="item" :class="{ active: type == 8 }" @click="type = 8">日本</span>
      <span class="item" :class="{ active: type == 16 }" @click="type = 16">韩国</span>
    </div>
    <!-- 底部的table -->
    <table class="el-table playlit-table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>音乐标题</th>
          <th>歌手</th>
          <th>专辑</th>
          <th>时长</th>
        </tr>
      </thead>
      <tbody>
        <tr class="el-table__row" v-for="(item, index) in tableData" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>
            <div class="img-wrap" @click="playMusic(item.id)">
              <img :src="item.album.picUrl" alt />
              <span class="iconfont icon-play"></span>
            </div>
          </td>
          <td>
            <div class="song-wrap">
              <div class="name-wrap">
                <span>{{ item.name }}</span>
                <span v-if="item.mvid != 0" class="iconfont icon-mv" @click="toMV(item.mvid)"></span>
              </div>
              <span>{{ item.subTitle }}</span>
            </div>
          </td>
          <td>{{ item.artists[0].name }}</td>
          <td>{{ item.album.name }}</td>
          <td>{{ item.duration | formatDuration }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { topSongs } from '@/api/songs'
import { getSongUrl } from '@/api/discovery'
export default {
  name: 'songs',
  data() {
    return {
      type: 0,
      tableData: []
    }
  },
  async asyncData() {
    const res = await topSongs({
      type: 0
    })

    return {
      tableData: res.data
    }
  },
  methods: {
    toMV(id) {
      this.$router.push(`/mv/${id}`)
    },
    getData() {
      topSongs({
        type: this.type
      }).then(res => {
        this.tableData = res.data
      })
    },
    async playMusic(id) {
      const res = await getSongUrl({
        id: id
      })

      this.$store.commit('url/setUrl', res.data[0].url)
    }
  },
  watch: {
    type() {
      this.getData()
    }
  }
  // created() {
  //   this.getData()
  // }
}
</script>
