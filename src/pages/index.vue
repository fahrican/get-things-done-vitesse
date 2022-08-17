<script setup lang="ts">
import OpenTasksView from '~/pages/views/OpenTasksView.vue'

const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <OpenTasksView />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
