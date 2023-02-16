// Core
import { all, call } from "redux-saga/effects"
import { destinationWatcher } from "../core/destination/saga/watchers"
import { hotelsWatcher } from "../core/hotels/saga/watchers"

export default function* rootSaga() {
    yield all([
        call(destinationWatcher),
        call(hotelsWatcher),
    ])
}