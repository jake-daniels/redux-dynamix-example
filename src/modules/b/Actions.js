
export const Types = {
	SHOW_MODULE_C:  'SHOW_MODULE_C',
	HIDE_MODULE_C:  'HIDE_MODULE_C',
	SHOW_MODULE_D:  'SHOW_MODULE_D',
	HIDE_MODULE_D:  'HIDE_MODULE_D',
}

export const Actions = {
	showModuleC: () => ({type: Types.SHOW_MODULE_C}),
	hideModuleC: () => ({type: Types.HIDE_MODULE_C}),

	showModuleD: () => ({type: Types.SHOW_MODULE_D}),
	hideModuleD: () => ({type: Types.HIDE_MODULE_D}),
}
