// Core
import { call, put, delay } from "redux-saga/effects"
import { push } from "redux-first-history"
// Engine
import { routes } from "../../../../config/routers"


export function* callHotelsWorker(action){
    const {payload} = action
    yield console.log(payload)
    yield put(push(routes.hotels))
}

