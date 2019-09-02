<template lang="pug">
  v-app(dark)
    v-navigation-drawer(v-model='drawer' :mini-variant='miniVariant' :clipped='clipped' fixed app)
      v-list
        v-list-tile(v-for='(item, i) in items' :key='i' :to='item.to' router exact)
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title(v-text='item.title')
    v-toolbar(:clipped-left='clipped' fixed app)
      v-toolbar-side-icon(@click='drawer = !drawer')
      v-toolbar-title(v-text='title')
      v-spacer
    v-content
      nuxt
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      title: 'Kanbania'
    }
  }
}
</script>
