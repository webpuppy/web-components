export const ToastTypeOptions = [
	'info',
	'success',
	'error',
	'warning',
] as const;

export type ToastType = typeof ToastTypeOptions[number];
