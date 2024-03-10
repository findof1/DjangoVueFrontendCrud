<template>
  <div
    class="p-2 h-[10%] pl-3 border-4 border-gray-900 bg-gray-800 rounded-3xl flex flex-row items-center"
  >
    <p class="text-xl text-white">{{ text }}</p>
    <button
      :class="{
        'bg-red-700 border-4 border-red-800 w-12 h-12 hover:scale-110 ml-auto mr-5 rounded-full':
          !isChecked,
        'bg-green-700 border-4 border-green-800 w-12 h-12 hover:scale-110 ml-auto mr-5 rounded-full':
          isChecked,
      }"
    ></button>
  </div>
</template>

<script>
export default {
  name: "TodoComp",
  data() {
    return {
      isChecked: false,
    };
  },
  props: {
    text: String,
  },
};
</script>

<style scoped></style>
