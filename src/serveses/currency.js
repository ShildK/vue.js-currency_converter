export const Currency = {
   USD: 'USD',
   KZT: 'KZT',
   RUB: 'RUB',
   EUR: 'EUR',
};

const currencies = {};

currencies[Currency.KZT] = {};
currencies[Currency.KZT][Currency.USD] = 0.0022;
currencies[Currency.KZT][Currency.EUR] = 0.002;
currencies[Currency.KZT][Currency.RUB] = 0.19;

currencies[Currency.USD] = {}
currencies[Currency.USD][Currency.KZT] = 459.17;
currencies[Currency.USD][Currency.EUR] = 0.91;
currencies[Currency.USD][Currency.RUB] = 88.70;

currencies[Currency.EUR] = {}
currencies[Currency.EUR][Currency.USD] = 1.10;
currencies[Currency.EUR][Currency.KZT] = 504.08;
currencies[Currency.EUR][Currency.RUB] = 97.33;

currencies[Currency.RUB] = {}
currencies[Currency.RUB][Currency.USD] = 0.011;
currencies[Currency.RUB][Currency.KZT] = 5.18;
currencies[Currency.RUB][Currency.EUR] = 0.010;

const getCurrency = (from, to) => {
   return currencies[from][to];
}

export const convert = (from, to, amount) => {
   let currencyValue = getCurrency(from, to)
   return (Number(amount) * Number(currencyValue)).toFixed(2)
}

