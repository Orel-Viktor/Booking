// Core
import { call, put, delay } from "redux-saga/effects"
// Parts
import { setItems, setLoading } from "../../slice"
import api from "../../../../config/axios"

export function* callDestinationsWorker() {
    yield put(setLoading(true))
    const response = yield call(api.getDestinations)
    if (response.status === 200) {
        yield put(setItems(response.data))
    }
    yield delay(2000)
    yield put(setLoading(false))
}