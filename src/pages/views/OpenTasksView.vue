<script setup lang="ts">
import { ref } from 'vue'
import TasksComponent from '~/components/Tasks.vue'
import { TaskState } from '~/types/TaskState'

const taskState = ref(TaskState.OPEN)
</script>

<template>
  <h1>Open Tasks</h1>
  <TasksComponent :task-state="taskState" />
</template>
