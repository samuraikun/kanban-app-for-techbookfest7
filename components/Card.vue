<template lang="pug">
  v-card(v-if="newTask || edit" hover)
    v-card-title 新規タスク作成
    v-container
      form
        v-text-field(
          v-model='newTitle'
          v-validate="'required|max:10'"
          :counter="30"
          :error-messages="errors.collect('title')"
          label="Title"
          data-vv-name="title"
          autofocus
          required
        )
        v-text-field(
          v-model='newDescription'
          label="Description"
          data-vv-name="description"
          required
        )
        v-btn(v-if='newTask' color='error' @click='remove') Remove
        v-btn(v-else color='error' @click='cancel') Cancel
        v-btn(v-if='newTask' color='success' @click='create') Create
        v-btn(v-else color='success' @click='update') Update
  v-card(v-else hover)
    v-card-title {{ title }}
    v-container
      v-card-text {{ description }}
      v-card-actions
        v-btn(color='success' @click='edit = true') Edit
        v-btn(color='error') Delete
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
// import { mapActions } from 'vuex'

Vue.use(VeeValidate)

export default {
  name: 'Card',

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    newTask: {
      type: Boolean,
      required: true
    }
  },

  $_veeValidate: {
    validator: 'new'
  },

  data() {
    return {
      edit: false,
      newTitle: '',
      newDescription: '',
      dictionary: {
        attributes: {
          description: 'Description'
        },
        custom: {
          title: {
            required: () => 'タイトルを入力してください',
            max: 'タイトルは、30文字以内で入力してください'
          }
        }
      }
    }
  },

  mounted() {
    this.$validator.localize('ja', this.dictionary)
  },

  methods: {
    emitParameters(eventName) {
      const inputValues = {
        title: this.newTitle,
        description: this.newDescription,
        status: 'backlog',
        isNew: false
      }
      this.$emit(eventName, inputValues)
    },
    create() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          alert(this.errors.all())
          return
        }

        this.emitParameters('onCreate')
        this.edit = false
      })
    },
    update() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          alert(this.errors.all())
          return
        }

        this.emitParameters('onUpdate')
        this.edit = false
      })
    },

    remove() {
      this.$emit('onRemove')
      this.edit = false
    },

    cancel() {
      this.edit = false
    }
  }
}
</script>
