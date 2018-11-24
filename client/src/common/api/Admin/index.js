export default api => {
	return {
		// ---- EXTRA PAYMENT ---- //
		postCreateExtraPayment: data => {
			return api.post('create/extra-payment', data);
		},

		// ---- PARCEL ---- //
		getParcelList: data => {
			return api.get(`get/parcel/list?status=${data.status}`);
		},
		getParcelUpdate: data => {
			return api.get(`parcel/${data.id}/update`);
		},
		putParcelUpdate: data => {
			return api.put(`parcel/${data.id}/update`, data);
		},
		patchParcelUpdate: data => {
			return api.patch(`parcel/${data.id}/update`, data);
		},

		// ---- ORDER PRODUCT ---- //
		getOrderProductList: data => {
			return api.get(`get/order-product/list?status=${data.status}`);
		},
		getOrderProductUpdate: data => {
			return api.get(`order/product/${data.id}/update`);
		},
		putOrderProductUpdate: data => {
			return api.put(`order/product/${data.id}/update`, data);
		},
		patchOrderProductUpdate: data => {
			return api.patch(`order/product/${data.id}/update`, data);
		}
	};
};
