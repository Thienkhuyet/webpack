import API from "../../network/httpClient";
import { hot } from "react-hot-loader/root";
const NCOVI = {
  namespace: "ncov-19",

  state: {
    confirmed: "",
    recovered: "",
    deaths: "",
    lastUpdate: "",
    countries: [],
    daily: [],
  },
  reducers: {
    countrie(state, { data }) {
      return { ...state, ...data };
    },
    countries(state, { countries }) {
      return { ...state, countries };
    },
    daily(state, { daily }) {
      return { ...state, daily };
    },
  },
  effects: {
    *ncoviCountries({ payload }, { call, put }) {
      const respone = yield call(
        API.Get,
        `https://covid19.mathdro.id/api/countries/${payload}`
      );
      console.log(">>>>>>>>>>", respone);
      yield put({ type: "countrie", data: respone });
    },
    *listCountries({ payload }, { call, put }) {
      const respone = yield call(
        API.Get,
        `https://covid19.mathdro.id/api/countries/`
      );
      console.log(">>>>>>>>>>countries>>>>>>", respone);
      yield put({ type: "countries", countries: respone.countries });
    },
    *fetchDailyData({ payload }, { call, put }) {
      const respone = yield call(
        API.Get,
        `https://covid19.mathdro.id/api/daily`
      );
      yield put({
        type: "daily",
        daily: respone.map(({ confirmed, deaths, reportDate: date }) => ({
          confirmed: confirmed.total,
          deaths: deaths.total,
          date,
        })),
      });
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      dispatch({ type: "fetchDailyData" });
      dispatch({ type: "listCountries" });
    },
  },
};

export default hot(NCOVI);
