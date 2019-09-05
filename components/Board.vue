<template lang="pug">
  .board
    .list__backlog
      TaskList(title='Backlog' :tasks='backlogTasks')
    .list__progress
      TaskList(title='Progress' :tasks='progressTasks')
    .list__review
      TaskList(title='Review' :tasks='reviewTasks')
    .list__release
      TaskList(title='Release' :tasks='releaseTasks')
</template>

<script>
import { mapGetters } from 'vuex'
import TaskList from './TaskList'

export default {
  name: 'Board',

  components: { TaskList },

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
    / 1fr 320px 50px 320px 50px 320px 50px 320px 1fr;

  .list {
    border: 1px solid #dddddd;
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
