<script>
import { Currency, convert } from "./serveses/currency.js";

export default {
   components: {},
   data: () => {
      return {
         amount: null,
         result: null,
         convertFrom: "",
         convertTo: "",
         conversionOptions: [],
      };
   },
   mounted() {
      for (let currency in Currency) {
         this.conversionOptions.push({
            currency,
         });
      }
   },
   computed: {},
   methods: {
      changeAmount(value) {
         this.amount = value;
         this.getResult();
      },
      changeOptionConvertFrom(value) {
         this.convertFrom = value;
         this.getResult();
      },
      changeOptionConvertTo(value) {
         this.convertTo = value;
         this.getResult();
      },
      getResult() {
         if (this.convertFrom === undefined || this.convertFrom === "") return;
         if (this.convertTo === undefined || this.convertTo === "") return;
         if (this.amount === null || this.amount === "") {
            this.result = null;
            return;
         }

         if (isNaN(this.amount)) {
            this.amount = null;
            this.result = null;
            alert("Вводимое значение должно быть числом!");
            return;
         }

         if (this.convertFrom === this.convertTo) {
            this.result = this.amount;
            return;
         }

         this.result = convert(this.convertFrom, this.convertTo, this.amount);
      },
   },
};
</script>

<template>
   <div class="container">
      <h1 class="title">Конвертор Валют</h1>
      <div class="selection_currencies">
         <div class="conversion">
            <p class="text">Из:</p>
            <SelectV1
               :options="conversionOptions"
               :value="convertFrom"
               @change-value="changeOptionConvertFrom"
            />
            <p class="text">→</p>

            <InputV1
               :placeholder="'Сумма для конвертации'"
               :value="amount"
               @change-value="changeAmount"
            />
         </div>
         <div class="conversion">
            <p class="text">В:</p>
            <SelectV1
               :options="conversionOptions"
               :value="convertTo"
               @change-value="changeOptionConvertTo"
            />
            <p class="text">→</p>
            <InputV1 :placeholder="'Результат'" :value="result" readonly />
         </div>
      </div>
   </div>
</template>

<style>
.container {
   max-width: 35%;
   min-width: 400px;

   height: 300px;
   margin: 50px auto;
   padding: 30px;

   background-color: rgba(255, 251, 242, 0.733);
   box-shadow: 5px 5px 10px rgb(168, 168, 168);
   border-radius: 5px;
}
.title {
   text-align: center;
   font-weight: 600;
   margin-bottom: 35px;
}
.selection_currencies {
   width: 80%;
   margin: 0 auto;
}
.conversion {
   display: flex;
   justify-content: space-between;
   align-items: center;

   margin-bottom: 15px;
}

.text {
   width: 30px;
   font-weight: 500;
   margin: 0 10px;
}
</style>
