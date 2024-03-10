<template>
  <div
    class="p-2 h-[90%] pl-3 border-4 border-gray-900 bg-gray-800 rounded-3xl flex flex-row items-center"
  >
    <Todo v-for="todo in todos" :text="todo.text" />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
    };
  },
  components: {
    Todo,
  },
  created() {
    fetch("http://localhost:8000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error("Error:", error));
  },
};
</script>

<style scoped></style>
