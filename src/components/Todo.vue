<template>
  <div
    class="p-2 h-[10%] pl-3 border-4 border-gray-900 bg-gray-800 rounded-3xl flex flex-row items-center mt-5"
  >
    <p class="text-xl text-white">{{ text }}</p>
    <button
      class="bg-red-700 border-4 border-red-800 w-28 h-8 hover:scale-110 ml-auto mr-5 rounded-full transition-all"
      @click="deleteTodo()"
    >
      Delete Todo
    </button>
    <button
      :class="{
        'bg-red-700 border-4 border-red-800 w-10 h-10 hover:scale-110 ml-5 mr-5 rounded-full transition-all':
          !checked,
        'bg-green-700 border-4 border-green-800 w-10 h-10 hover:scale-110 ml-5 mr-5 rounded-full transition-all':
          checked,
      }"
      @click="setTodos(id, checked)"
    ></button>
  </div>
</template>

<script>
export default {
  name: "TodoComp",

  data() {
    return {
      checked: this.isChecked,
    };
  },
  methods: {
    setTodos(id, completion) {
      this.checked = !this.checked;
      if (completion == false) {
        fetch("http://localhost:8000/set_complete/", {
          method: "POST",
          body: JSON.stringify({
            id: id,
          }),
          headers: {
            "content-type": "application/json",
          },
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            this.checked = data[id - 1].fields.completed;
          })
          .catch((error) => console.error("Error:", error));
      } else {
        fetch("http://localhost:8000/set_not_complete/", {
          method: "POST",
          body: JSON.stringify({
            id: id,
          }),
          headers: {
            "content-type": "application/json",
          },
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            this.checked = data[id - 1].fields.completed;
          })
          .catch((error) => console.error("Error:", error));
      }
    },
    deleteTodo(){
      fetch("http://localhost:8000/delete_todo/", {
          method: "DELETE",
          body: JSON.stringify({
            id: this.id,
          }),
          headers: {
            "content-type": "application/json",
          },
          mode: "cors",
        })
          .then((response) => response.json())
          .then((data) => {
            this.parseTodos(data)
          })
          .catch((error) => console.error("Error:", error));
    },
  },
  props: {
    text: String,
    id: Number,
    isChecked: Boolean,
    parseTodos: Function,
  },
};
</script>

<style scoped></style>
