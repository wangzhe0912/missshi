export const SELECT_ENTRY = 'SELECT_ENTRY';
export const CREATE_NEW_ENTRY = 'CREATE_NEW_ENTRY';
export const EDIT_ENTRY = 'EDIT_ENTRY';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export function selectEntry(id) {
  return dispatch => {
    dispatch({
      type: SELECT_ENTRY,
      payload: id,
    });

    dispatch(fetchEntry(id));
  };
}

export function createNewEntry() {
  return { type: CREATE_NEW_ENTRY };
}

export function editEntry(id) {
  return {
    type: EDIT_ENTRY,
    payload: id,
  };
}

export function cancelEdit() {
  return { type: CANCEL_EDIT };
}

// default promiseTypeSuffixes of redux-promise-middleware:
// ['PENDING', 'FULFILLED', 'REJECTED']
export const pendingOf = actionType => `${actionType}_PENDING`;
export const fulfilledOf = actionType => `${actionType}_FULFILLED`;
export const rejectedOf = actionType => `${actionType}_REJECTED`;

// async actions generated with redux-promise-middleware:
export const FETCH_ENTRY = 'FETCH_ENTRY';
export const FETCH_ENTRY_LIST = 'FETCH_ENTRY_LIST';
export const SAVE_ENTRY = 'SAVE_ENTRY';
export const DELETE_ENTRY = 'DELETE_ENTRY';
