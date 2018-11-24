// ---- EXTRA PAYMENT ---- //
import postCreateExtraPayment from './ExtraPayment/postCreateExtraPayment'

// ---- PARCEL ---- //
import getParcelList from './Parcel/getParcelList'
import getParcelUpdate from './Parcel/getParcelUpdate'
import putParcelUpdate from './Parcel/putParcelUpdate'
import patchParcelUpdate from './Parcel/patchParcelUpdate'

// ---- ORDER PRODUCT ---- //
import getOrderProductList from './OrderProduct/getOrderProductList'
import getOrderProductUpdate from './OrderProduct/getOrderProductUpdate'
import putOrderProductUpdate from './OrderProduct/putOrderProductUpdate'
import patchOrderProductUpdate from './OrderProduct/patchOrderProductUpdate'

export default function sagas (api) {
  return [
    // ---- EXTRA PAYMENT ---- //
    postCreateExtraPayment(api),  

    // ---- PARCEL ---- //
    getParcelList(api),
    getParcelUpdate(api),
    putParcelUpdate(api),
    patchParcelUpdate(api),

    // ---- ORDER PRODUCT ---- //
    getOrderProductList(api),
    getOrderProductUpdate(api),
    putOrderProductUpdate(api),
    patchOrderProductUpdate(api),
  ]
}
