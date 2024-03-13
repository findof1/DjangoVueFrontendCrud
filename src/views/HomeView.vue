<template>
  <div class="w-screen h-screen bg-gray-700 flex flex-col">
    <h1 class="self-center mt-2 text-5xl underline text-white">Todos</h1>
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
