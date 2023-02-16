// Core
import { all, call } from "redux-saga/effects"
import { destinationWatcher } from "../core/destination/saga/watchers"

export default function* rootSaga() {
    yield all([
        call(destinationWatcher),
    ])
}