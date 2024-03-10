<template>
  <div class="w-screen h-screen bg-gray-700">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';




export default {
  name: 'HomeView',
  components: {
    TodoList
  }
}
</script>
