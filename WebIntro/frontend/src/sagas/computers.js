import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    // delay,
    select,
} from 'redux-saga/effects';

// import * as selectors from '../reducers';
import * as actions from '../actions/computer';
import * as types from '../types/computers';

function* useComputer(action) {
    try {
        const result = yield action.payload.contract.methods.useComputer(action.payload.id).send({ from: action.payload.account, gas: 50000, gasPrice: 1e6 }, (error, res) => {
            console.log('error', error);
            console.log('res', res);
            if (res != undefined) {
                return put(actions.getComputerStarted(action.payload.contract, action.payload.id));
            }
        });
        console.log('result', result);
    } catch (e) {
        console.log('error', e);
    }
}   
export function* watchUseComputer() {
    yield takeEvery(
        types.USE_COMPUTER,
        useComputer,
    );
}

function* leaveComputer(action) {
    try {
        const result = yield action.payload.contract.methods.leaveComputer(action.payload.id).send({ from: action.payload.account, gas: 50000, gasPrice: 1e6 }, (error, res) => {
            console.log('error', error);
            console.log('res', res);
            if (res != undefined) {
                return put(actions.leaveComputer(action.payload.contract, action.payload.id));
            }
        });
        console.log('result', result);
    } catch (e) {
        console.log('error', e);
    }
}   
export function* watchLeaveComputer() {
    yield takeEvery(
        types.LEAVE_COMPUTER,
        leaveComputer,
    );
}

function* getComputerStatus(action) {
    const result = yield action.payload.contract.methods.getComputer(action.payload.id).call();
    yield put(actions.getComputerCompleted(action.payload.id, result));
}   
export function* watchGetComputerStatus() {
    yield takeEvery(
        types.GET_COMPUTER_STARTED,
        getComputerStatus,
    );
}