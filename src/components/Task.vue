<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import type { TaskRequest } from '~/types/TaskRequest'

defineProps({
  task: Object as PropType<TaskRequest>,
})

const selectedTask = useSavedTask()

const storeSelectedTask = (task: TaskRequest) => selectedTask.storeTask(task)
</script>

<template>
  <div class="card">
    <div class="container">
      <h3>
        <router-link @click="storeSelectedTask(task)" to="single-task">{{ task.description }}</router-link>
      </h3>
      <p>createdOn: {{ task.createdOn }}</p>
      <p>time interval: {{ task.timeInterval }}</p>
      <p>priority: {{ task.priority }}</p>
      <i @click="$emit('deleteTask', task.id)" class="fas fa-trash"/>
      <router-link @click="storeSelectedTask(task)" to="edit-task"><i class="fas fa-edit"/></router-link>
    </div>
  </div>
</template>
