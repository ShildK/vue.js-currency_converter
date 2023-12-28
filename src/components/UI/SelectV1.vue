<script>
export default {
   name: "SelectV1",
   props: {
      value: {
         type: null,
      },
      options: {
        type: Array,
        requared: true,
      }
   },
};
</script>

<template>
   <select :value="value" @change="$emit('change-value', $event.target.value)">
      <option disabled value="" selected>Выберите валюту</option>
      <option
         v-for="option in options"
         :key="option.currency"
         :value="option.currency"
      >
         {{ option.currency }}
      </option>

   </select>
</template>

<style scoped>
select {
   border: 1px solid rgb(168, 168, 168);
   border-radius: 3px;
   box-shadow: 4px 3px 7px rgb(206, 206, 206);
   padding: 5px;
}
select:focus {
   outline: none;
}
</style>
