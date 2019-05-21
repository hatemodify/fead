<template></template>
<script>
export default {
  created() {
    console.log(this.$store.getters.getSearchQuery)
  }
}
</script>
