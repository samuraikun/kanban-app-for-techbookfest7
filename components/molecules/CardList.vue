<template lang="pug">
  .card-list
    .card-list__header
      .card-list__header__title {{ title }}
      .card-list__header__actions
        button(class='card-list__header__actions__add-task' @click='addTask') +
        button(class='card-list__header__actions__edit-task' @click='editTask') ...
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
    flex-direction: row;
    margin-bottom: 10px;

    &__title {
      font-weight: bold;
    }

    &__actions {
      display: grid;
      grid-template:
        'add . edit .' auto
        / 1fr 10px 1fr 10px;

      &__add-task {
        grid-area: add;
        width: 30px;
        height: 30px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
      }

      &__edit-task {
        grid-area: edit;
        width: 30px;
        height: 30px;
        padding: 3px;
        border: 1px solid black;
        border-radius: 50%;
      }
    }
  }
}
</style>
