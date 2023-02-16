// Core
import { takeEvery } from "redux-saga/effects";
// Engine
import { getHotelsAsync } from "./asyncActions";
import { callHotelsWorker } from "./worker/callHotelsWorker";

export function* hotelsWatcher() {
    yield takeEvery(getHotelsAsync.type, callHotelsWorker)
}