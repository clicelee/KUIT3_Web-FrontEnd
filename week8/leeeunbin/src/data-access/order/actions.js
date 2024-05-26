export const ADD_ORDER = 'ADD_ORDER';
export const UPDATE_TO_RIDER = 'UPDATE_TO_RIDER';
export const UPDATE_TO_OWNER = 'UPDATE_TO_OWNER';
export const UPDATE_TO_PAYMENTMETHOD = 'UPDATE_TO_PAYMENTMETHOD';

export const addOrder = (order) => ({
  type: ADD_ORDER,
  payload: order,
});

export const updateToRider = (toRider) => ({
  type : UPDATE_TO_RIDER,
  payload : toRider,
})

export const updateToOwner = (toOwner) => ({
  type : UPDATE_TO_OWNER,
  payload : toOwner,
})

export const updateToPaymentMethod = (method) => ({
  type: UPDATE_TO_PAYMENTMETHOD,
  payload : method,
})
