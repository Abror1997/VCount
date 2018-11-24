import { createRoutine } from 'redux-saga-routines'

export default {
  
  // ---- EXTRA PAYMENT ---- //
  postCreateExtraPayment: createRoutine('POST_CREATE_EXTRA_PAYMENT'),
  
  // ---- PARCEL ---- //
  getParcelList: createRoutine('GET_PARCEL_LIST'),
  getParcelUpdate: createRoutine('GET_PARCEL_UPDATE'),
  putParcelUpdate: createRoutine('PUT_PARCEL_UPDATE'),
  patchParcelUpdate: createRoutine('PATCH_PARCEL_UPDATE'),

  // ---- ORDER PRODUCT ---- //
  getOrderProductList: createRoutine('GET_ORDER_PRODUCT_LIST'),
  getOrderProductUpdate: createRoutine('GET_ORDER_PRODUCT_UPDATE'),
  putOrderProductUpdate: createRoutine('PUT_ORDER_PRODUCT_UPDATE'),
  patchOrderProductUpdate: createRoutine('PATCH_ORDER_PRODUCT_UPDATE'),
}
