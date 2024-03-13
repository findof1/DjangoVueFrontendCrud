<template>
  <div class="absolute top-[3%] left-[5%] flex flex-row items-center">
    <input
      class="bg-gray-800 border-4 border-gray-900 rounded-full text-2xl p-2 pl-4 text-white"
      type="text"
      v-model="name"
    />
    <button
      class="bg-gray-800 border-4 border-gray-900 rounded-full text-2xl p-2 pl-4 text-white ml-2 hover:bg-gray-700 hover:border-gray-800 hover:scale-105 transition-all"
      @click="addTodo()"
    >
      Add Todo
    </button>
  </div>
  <div
    class="p-2 absolute bottom-[3%] left-[5%] w-[90%] h-[80%] pl-3 border-4 border-gray-900 bg-gray-800 rounded-3xl flex flex-col items-left overflow-auto"
  >
    <Todo
      v-for="(todo, index) in todos"
      :key="index"
      :text="todo.fields.todo_name"
      :id="todo.pk"
      :isChecked="todo.fields.completed"
      :parseTodos="parseTodos"
    />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import { onMounted, ref, computed } from "vue";

export default {
  name: "TodoList",
  components: {
    Todo,
  },
  methods: {},
  setup() {
    const todos = ref([]);
    const name = ref("");
    const loading = ref(false);

    function parseTodos(newTodos) {
      todos.value = newTodos;
    }

    const addTodo = () => {
      if (!loading.value && name.value) {
        loading.value = true;
        fetch("http://localhost:8000/add_todo/", {
          method: "POST",
          body: JSON.stringify({
            todo_name: name.value,
          }),
          headers: {
            "content-type": "application/json",
          },
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            loading.value = false;
            todos.value = data;
            name.value = "";
          })
          .catch((error) => {
            console.error("Error:", error);
            loading.value = false;
          });
      }
    };

    onMounted(() => {
      fetch("http://localhost:8000/todos/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          todos.value = JSON.parse(data);
        })
        .catch((error) => console.error("Error:", error));
    });

    return {
      todos: computed(() => {return (typeof todos.value && Array.isArray(todos.value) ? todos.value.slice().reverse() : []);}),
      name,
      addTodo,
      parseTodos,
    };
  },
};
</script>

<style scoped></style>
