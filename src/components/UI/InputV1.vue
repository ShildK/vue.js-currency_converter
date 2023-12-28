<script>
export default {
   name: "InputV1",
   props: {
      placeholder: {
         type: String,
         required: false,
      },
      value: {
         type: null,
         required: true,
      },
   },
   data: () => {
      return {};
   },
};
</script>

<template>
   <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value.number="value"
      @input="$emit('change-value', $event.target.value)"
   />
</template>

<style scoped>
.input {
  width: 45%;
  padding: 5px 10px;

  border: 1px solid rgb(168, 168, 168);
  border-radius: 3px;
  box-shadow: 4px 3px 7px rgb(206, 206, 206);
}
</style>
