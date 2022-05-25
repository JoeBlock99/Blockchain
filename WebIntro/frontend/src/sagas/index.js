import { fork, all } from 'redux-saga/effects';

import {
    watchUseComputer,
    watchLeaveComputer,
    watchGetComputerStatus,
} from './computers';

function* mainSaga() {
    yield all([
        fork(watchUseComputer),
        fork(watchGetComputerStatus),
        fork(watchLeaveComputer),
    ]);
}

export default mainSaga;