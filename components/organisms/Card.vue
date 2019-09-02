<template lang="pug">
  v-card
    v-card-title {{ item.title }}
    v-card-text {{ item.description }}
    v-card-actions
      v-btn Edit
</template>

<script>
export default {
  name: 'Card',

  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
