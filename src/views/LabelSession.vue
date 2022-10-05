<template>
</template>
<script>
export default {
  name: 'MyInput',
  components: {},
  data() {
    return {
      message: 'Sesión',
    }
  },
  mounted() {
    this.$emit('message', this.message)
  },
}
</script>