// Core
import { takeEvery } from "redux-saga/effects";
// Engine
import { getDestinationsAsync } from "./asyncActions";
import { callDestinationsWorker } from "./worker/callDestinationsWorker";

export function* destinationWatcher() {
    yield takeEvery(getDestinationsAsync.type, callDestinationsWorker)
}