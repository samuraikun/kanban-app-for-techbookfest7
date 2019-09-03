<template lang="pug">
  .card-list
    .card-list__header
      .card-list__header__title {{ title }}
      .card-list__header__actions
        v-btn(fab dark small color='pink' class='card-list__header__actions__add-task')
          v-icon(dark) {{ 'add' }}
        v-btn(fab dark small color='green' class='card-list__header__actions__edit-task')
          v-icon(dark) {{ 'edit' }}
        //- button(class='card-list__header__actions__add-task' @click='addTask') +
        //- button(class='card-list__header__actions__edit-task' @click='editTask') ...
    .card-list__items(v-for='item in items')
      Card(:item='item')
</template>

<script>
import Card from '../organisms/Card'

export default {
  name: 'CardList',

  components: { Card },

  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },

  methods: {
    addTask() {
      console.log('add task!')
    },

    editTask() {
      console.log('edit task!')
    }
  }
}
</script>

<style lang="scss" scoped>
.card-list {
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
      display: grid;
      grid-template:
        'add . edit .' auto
        / 1fr 1px 1fr 1px;

      &__add-task {
        grid-area: add;
        width: 30px;
        height: 30px;
      }

      &__edit-task {
        grid-area: edit;
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
