<template lang="pug">
  v-layout(column justify-center align-center)
    v-flex(xs12 sm8 md6)
      p App
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',

  computed: {
    ...mapGetters('board', ['tasks'])
  }
}
</script>
