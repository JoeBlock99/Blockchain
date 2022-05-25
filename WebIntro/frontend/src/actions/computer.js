
import * as types from '../types/computers';

export const createComputers = (quantity) => ({
    type: types.CREATE_COMPUTERS,
    payload: {
        quantity,
    }
});

export const useComputer = (account, contract, id) => ({
    type: types.USE_COMPUTER,
    payload: {
        account,
        contract,
        id,
    }
});

export const leaveComputer = (account, contract, id) => ({
    type: types.LEAVE_COMPUTER,
    payload: {
        account,
        contract,
        id,
    },
});

export const getComputerStarted = (contract, id) => ({
    type: types.GET_COMPUTER_STARTED,
    payload: {
        contract,
        id,
    }
});

export const getComputerCompleted = (id, available) => ({
    type: types.GET_COMPUTER_COMPLETED,
    payload: {
        id,
        available,
    }
});