const mockTasks = [
  {
    id: 1,
    title: 'Vue.jsのセットアップ',
    description: 'Vue-CLIを使う',
    status: 'progress',
    assignees: ['hoge', 'fuga'],
    reviewers: ['samuraikun'],
    isNew: false
  },
  {
    id: 2,
    title: 'Vuexの導入',
    description: 'Vuexはモジュールモードで',
    status: 'backlog',
    assignees: ['hoge', 'fuga'],
    reviewers: ['samuraikun'],
    isNew: false
  },
  {
    id: 3,
    title: 'TypeScriptの導入',
    description: '型がほしぃ',
    status: 'review',
    assignees: ['hoge', 'fuga'],
    reviewers: ['samuraikun'],
    isNew: false
  },
  {
    id: 4,
    title: 'Nuxt.jsでセットアップ',
    description: 'わいはNuxt.js使いたいんじゃ',
    status: 'release',
    assignees: ['samuraikun'],
    reviewers: [],
    isNew: false
  }
]

export const state = () => ({
  tasks: mockTasks
})

export const getters = {
  allTasks: state => state.tasks,
  backlogTasks: state => state.tasks.filter(task => task.status === 'backlog'),
  progressTasks: state =>
    state.tasks.filter(task => task.status === 'progress'),
  reviewTasks: state => state.tasks.filter(task => task.status === 'review'),
  releaseTasks: state => state.tasks.filter(task => task.status === 'release')
}

export const mutations = {
  setTasks(state, task) {
    const newTasks = [task].concat(state.tasks)
    state.tasks = newTasks
  }
}

export const actions = {
  createTask({ commit }, task) {
    commit('setTasks', task)
  }
}
