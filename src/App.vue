<template>
  <div id="app">
    <TransactionFeed />
  </div>
</template>

<script>
import TransactionFeed from './components/TransactionFeed.vue'

export default {
  name: 'app',
  components: {
    TransactionFeed
  }
}
</script>
