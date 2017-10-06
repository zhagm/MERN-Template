// Imports ---------------------------------------------------------------------

// Type Constants --------------------------------------------------------------
const ACTION_TYPE = 'ACTION_TYPE';

// Actions ---------------------------------------------------------------------
function action () {
  return {
    type: ACTION_TYPE,
    payload: { info: 'info' }
  };
}

// Reducer ---------------------------------------------------------------------
const initialState = {
  info: ''
};

export default function thingReducer (state = initialState, action) {
  let { type, payload = {} } = action;
  switch (type) {
    case ACTION_TYPE :
      return {
        ...state,
        info: payload.info
      };
    default :
      return state;
  }
}
