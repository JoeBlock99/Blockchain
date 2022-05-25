import './styles.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as actions from '../../actions/computer';


function Computer({ account, contract, id, available, interactComputer, getComputerStatus }) {
    useEffect(getComputerStatus, []);

    return (
        <div className="Computer">
            <FontAwesomeIcon icon="computer" size='5x' color={ available ? '#0039e6' : '#e62e00' } />
            <p>
                <button onClick={ interactComputer }>
                    <span>{ available ? 'Use' : 'Not Available' }</span>
                </button>
            </p>
        </div>
    );
}

export default connect(
    (state, { id }) => ({
        available: state.computers.byId[id] && state.computers.byId[id].available,
    }),
    dispatch => ({
        useComputer(account, contract, id) {
            dispatch(actions.useComputer(account, contract, id));
        },
        leaveComputer(account, contract, id) {
            dispatch(actions.leaveComputer(account, contract, id));
        },
        getComputerStatus(contract, id) {
            dispatch(actions.getComputerStarted(contract, id));
        }
    }),
    (stateProps, dispatchProps, ownProps) => ({
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        interactComputer() {
            if (stateProps.available) {
                dispatchProps.useComputer(ownProps.account, ownProps.contract, ownProps.id);
            } else {
                dispatchProps.leaveComputer(ownProps.account, ownProps.contract, ownProps.id);
            }
        },
        getComputerStatus() {
            dispatchProps.getComputerStatus(ownProps.contract, ownProps.id);
        },
    }),
)(Computer);