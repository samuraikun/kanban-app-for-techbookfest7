<template lang="pug">
  .task-list
    .task-list__header
      .task-list__header__title {{ title }}
      .task-list__header__actions
        v-btn(@click='addNewTask' fab dark small color='pink' class='task-list__header__actions__add-task')
          v-icon(dark) {{ 'add' }}
    .task-list__items(v-for='task in localTasks')
      Card(
        :title='task.title'
        :description='task.description'
        :newTask='task.isNew'
        @onCreate='handleCreateTask'
        @onRemove='handleRemoveTask'
      )
</template>

<script>
import { mapActions } from 'vuex'
import Card from './Card'

export default {
  name: 'TaskList',

  components: { Card },

  props: {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    tasks: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      localTasks: this.tasks
    }
  },

  methods: {
    ...mapActions('board', ['createTask']),

    addNewTask() {
      const newTask = {
        title: '',
        description: '',
        status: this.status,
        isNew: true
      }

      this.localTasks.unshift(newTask)
    },

    removeTask() {
      this.localTasks = []
    },

    editTask() {
      console.log('edit task!')
    },

    handleCreateTask(task) {
      this.createTask(task)
    },

    handleRemoveTask() {
      const prevTasks = this.tasks.filter(task => !task.isNew)
      this.localTasks = prevTasks
    },
    updateTask() {}
  }
}
</script>

<style lang="scss" scoped>
.task-list {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;

    &__title {
      font-weight: bold;
      font-size: 20px;
    }

    &__actions {
      &__add-task {
        width: 30px;
        height: 30px;
      }
    }
  }

  &__items {
    // overflow: auto;
    margin-bottom: 20px;
  }
}
</style>
