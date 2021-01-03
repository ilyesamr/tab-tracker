<template>
  <div id="app">
       <page-header />
    <!-- img src="./assets/logo.png" > -->
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>
