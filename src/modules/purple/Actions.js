
export const Types = {
	LOAD_DATA_REQUEST:  'LOAD_DATA_REQUEST',
	LOAD_DATA_SUCCESS:  'LOAD_DATA_SUCCESS',
}

export const Actions = {
	loadData: () => async (dispatch, getState) => {

		dispatch({type: Types.LOAD_DATA_REQUEST})

		setTimeout(() => {
			dispatch({
				type: Types.LOAD_DATA_SUCCESS,
				payload: {
					data: {foo: 12, bar: 'baz'}
				},
			})
		}, 3000)

	},
}
