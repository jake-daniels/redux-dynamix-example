
export const Types = {
	CHANGE_TEXT:  'CHANGE_TEXT',
}

export const Actions = {
	changeText: (text) => {
		return {
			type: Types.CHANGE_TEXT,
			payload: {value: text},
		}
	},
}
