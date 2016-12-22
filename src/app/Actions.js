
export const Types = {
	INJECT_RED_MODULE:  'INJECT_RED_MODULE',
	EJECT_RED_MODULE:  'EJECT_RED_MODULE',
	INJECT_PURPLE_MODULE:  'INJECT_PURPLE_MODULE',
	EJECT_PURPLE_MODULE:  'EJECT_PURPLE_MODULE',
}

export const Actions = {
	injectRedModule: () => ({type: Types.INJECT_RED_MODULE}),
	ejectRedModule: () => ({type: Types.EJECT_RED_MODULE}),
	injectPurpleModule: () => ({type: Types.INJECT_PURPLE_MODULE}),
	ejectPurpleModule: () => ({type: Types.EJECT_PURPLE_MODULE}),
}
