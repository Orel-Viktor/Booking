// Core
import { put, call, delay } from "redux-saga/effects";
import { push } from "redux-first-history";
// Parts
import { setItems } from "../../slice";
// Engine
import { routes } from "../../../../config/routers";
import api from "../../../../config/axios";

export function* callHotelsWorker() {
  const response = yield call(api.getHotels);
  if (response.status === 200) {
    yield put(setItems(response.data));
  }
  yield delay(2000);
  yield put(push(routes.hotels));
}
