<script setup lang="ts">
import { onMounted, ref } from 'vue'

const scrolledNav = ref()
const mobile = ref(true)
const mobileNav = ref(false)
const windowWidth = ref()

function toggleMobileNav() {
  mobileNav.value = !mobileNav.value
}

function checkScreen() {
  windowWidth.value = window.innerWidth
  if (windowWidth.value <= 750) {
    mobile.value = true
    return
  }
  mobile.value = false
  mobileNav.value = false
}

function updateScroll() {
  const scrollPosition = window.scrollY
  if (scrollPosition > 50) {
    scrolledNav.value = true
    return
  }
  scrolledNav.value = false
}

window.addEventListener('resize', checkScreen)
checkScreen()

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
</script>

<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <a href="/"><img src="@/assets/logo_getthingdone.svg" alt="logo"/></a>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'open-tasks' }">Open Tasks</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'closed-tasks' }">Closed Tasks</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'all-tasks' }">All Tasks</router-link>
        </li>
        <li>
          <button class="create-task-btn">
            <router-link class="link-create" :to="{ name: 'create-task' }">Create Task</router-link>
          </button>
        </li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{ 'icon-active': mobileNav }"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'open-tasks' }">Open Tasks</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'closed-tasks' }">Closed Tasks</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'all-tasks' }">All Tasks</router-link>
          </li>
          <li>
            <button class="create-task-btn">
              <router-link class="link-create" :to="{ name: 'create-task' }">Create Task</router-link>
            </button>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
