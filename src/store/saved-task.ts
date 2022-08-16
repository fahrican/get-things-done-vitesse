import { acceptHMRUpdate, defineStore } from 'pinia'
import type { PropType } from 'vue-demi'
import type { TaskRequest } from '~/types/TaskRequest'

export const useSavedTask = defineStore('selectedTask', {
  state: () => ({
    saveTask: Object as PropType<TaskRequest>,
  }),
  getters: {
    getSavedTask: (state) => {
      // eslint-disable-next-line no-unused-expressions
      state.saveTask
    },
  },
  actions: {
    storeTask(selectedTask: TaskRequest) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.saveTask = selectedTask
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
