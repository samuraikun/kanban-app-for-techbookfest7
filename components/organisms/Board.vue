<template lang="pug">
  .board
    .list__backlog
      CardList(title='Backlog' :items='backlogTasks')
    .list__progress
      CardList(title='Progress' :items='progressTasks')
    .list__review
      CardList(title='Review' :items='reviewTasks')
    .list__release
      CardList(title='Release' :items='releaseTasks')
</template>

<script>
import { mapGetters } from 'vuex'
import CardList from '../molecules/CardList'

export default {
  name: 'Board',

  components: { CardList },

  computed: {
    ...mapGetters('board', [
      'backlogTasks',
      'progressTasks',
      'reviewTasks',
      'releaseTasks'
    ])
  }
}
</script>

<style lang="scss">
.board {
  display: grid;
  grid-template:
    '  .     .     .      .     .     .    .     .     . ' 30px
    '  .  backlog  .  progress  .  review  .  release  . ' auto
    '  .     .     .      .     .     .    .     .     . ' 30px
    / 1fr 320px 1fr 320px 1fr 320px 1fr 320px 1fr;

  .list {
    &__backlog {
      grid-area: backlog;
    }

    &__progress {
      grid-area: progress;
    }

    &__review {
      grid-area: review;
    }

    &__release {
      grid-area: release;
    }
  }
}
</style>
