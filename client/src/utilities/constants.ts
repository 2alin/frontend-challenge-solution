export const BUDGET = {
  curr: 'USD',
  amount: 20000,
};

// indexing signature
interface Languages {
  [index: string]: string;
}
interface ExRates {
  rates: {[index: string]: number};
  base: string;
  date: string
}


export const LANGUAGES:Languages = {
  ES: 'spanish',
  EN: 'english',
};

// for testing purposes only USD base and a past date is considered
// but an external api can be used for a future deployment
export const EXRATES:ExRates = {
  rates: {
    MXN: 19.2834144184,
    AUD: 1.4216718266,
    HKD: 7.8498894295,
    RON: 4.1984077842,
    HRK: 6.5643520566,
    CHF: 1.0048651039,
    IDR: 14152.4988942946,
    CAD: 1.3381689518,
    USD: 1.0,
    JPY: 111.8089341,
    BRL: 3.7754975674,
    PHP: 52.2627156126,
    CZK: 22.6377708978,
    NOK: 8.6722689076,
    INR: 70.2627156126,
    PLN: 3.8032728881,
    ISK: 121.0084033613,
    MYR: 4.0945599292,
    ZAR: 14.2045997346,
    ILS: 3.615656789,
    GBP: 0.7604599735,
    SGD: 1.357717824,
    HUF: 279.0888987174,
    EUR: 0.8845643521,
    CNY: 6.7100398054,
    TRY: 5.417691287,
    SEK: 9.3210968598,
    RUB: 65.8299867315,
    NZD: 1.4753648828,
    KRW: 1127.8637770898,
    THB: 31.8549314463,
    BGN: 1.7300309598,
    DKK: 6.5996461743,
  },
  base: 'USD',
  date: '2019-03-06',
};