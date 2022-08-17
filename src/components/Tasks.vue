<script setup lang="ts">
import type { PropType } from 'vue'
import { defineEmits, defineProps, reactive } from 'vue'
import TaskComponent from './Task.vue'
import { TaskState } from '~/types/TaskState'
import type { TaskRequest } from '~/types/TaskRequest'
import TaskApi from '~/services/TaskApi'

const props = defineProps({
  taskState: Object as PropType<TaskState>,
})

defineEmits(['deleteTask'])

let tasks = reactive<TaskRequest[]>([])

const deleteTask = async (id: number) => {
  if (confirm('Are you sure, you want to delete?')) {
    const res = await TaskApi.deleteTask(id)

    res.status === 200
      ? (tasks = tasks.filter(task => task.id !== id))
      : alert('Error while deleting task')

    window.location.reload()
  }
}

async function fetchTasks() {
  try {
    let response = null
    if (props.taskState === TaskState.OPEN)
      response = await TaskApi.getOpenTasks()
    else if (props.taskState === TaskState.CLOSED)
      response = await TaskApi.getClosedTasks()
    else if (props.taskState === TaskState.ALL)
      response = await TaskApi.getAllTasks()

    response?.data.forEach((task: TaskRequest) => tasks.push(task))
  }
  catch (err) {
    // eslint-disable-next-line no-console
    console.log(`error loadQuote: ${err}`)
  }
}

fetchTasks()
</script>

<template>
  <div v-for="task in tasks" :key="task.id">
    <TaskComponent
      :task="task"
      @deleteTask="deleteTask"
    />
  </div>
</template>
