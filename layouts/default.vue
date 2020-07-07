<template>
  <div id="app">
    <Top />
    <Content />
  </div>
</template>

<script>
// 导入子组件
import Top from '../components/top'
import Content from '../components/content'
export default {
  components: {
    Top,
    Content
  }
}
</script>
