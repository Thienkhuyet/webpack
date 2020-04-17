import API from "../../network/httpClient";
import { hot } from "react-hot-loader/root";
import { AppContainer } from "react-hot-loader";
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
    globals(state, { data }) {
      console.log("global>>>>>>>>>>>>>>>>", data);

      return { ...state, ...data };
    }
  },
  effects: {
    *ncoviCountries({ payload }, { call, put }) {
      const respone = yield call(
        API.Get,
        `countries/${payload}`
      );
      //  console.log(">>>>>>>>>>", respone);
      yield put({ type: "countrie", data: respone });
    },
    *listCountries({ payload }, { call, put }) {
      const respone = yield call(
        API.Get,
        `countries/`
      );
      //   console.log(">>>>>>>>>>countries>>>>>>", respone);
      yield put({ type: "countries", countries: respone.countries });
    },
    *fetchDailyData({ payload }, { call, put }) {
      const respone = yield call(
        API.Get,
        `daily`
      );
      // console.log("daily", respone);
      yield put({
        type: "daily",
        daily: respone.map(({ confirmed, deaths, reportDate: date }) => ({
          confirmed: confirmed.total,
          deaths: deaths.total,
          date,
        })),
      });
    },
    *global({ payload }, { call, put }) {
      const respone = yield call(API.Get);
      const data = {
        confirmed: respone.confirmed,
        recovered: respone.recovered,
        deaths: respone.deaths,
        lastUpdate: respone.lastUpdate
      };
      // console.log("global", data);
      yield put({ type: "globals", data: data });

    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      dispatch({ type: "fetchDailyData" });
      dispatch({ type: "listCountries" });
      dispatch({ type: "global" });

    },
  },
};

export default hot(NCOVI);
