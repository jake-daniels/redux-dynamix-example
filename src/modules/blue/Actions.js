
export const Types = {
	INCREMENT:  'INCREMENT',
	DECREMENT:  'DECREMENT',
}

export const Actions = {
	increment: () => ({type: Types.INCREMENT}),
	decrement: () => ({type: Types.DECREMENT}),
}
