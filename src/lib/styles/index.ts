const anchorCommonStyles =
	'cursor-pointer  text-indigo-50 h-full flex items-center justify-center max-sm:w-full';

export const anchorStyles = {
	menu: `${anchorCommonStyles} hover:text-indigo-200 sm:mx-2 max-sm:py-2 max-sm:px-10`,
	avro: `${anchorCommonStyles} hover:text-[#2a83f9] gap-x-1 hover:rounded-md px-2 sm:hover:bg-slate-100/20 max-sm:py-2 max-sm:px-10`,
	logo: `${anchorCommonStyles} hover:text-indigo-200`
};

export const buttonStyles = {
	primary:
		'min-h-6 rounded-xl flex items-center justify-center leading-loose bg-indigo-500/50 px-6 hover:bg-indigo-500/80 cursor-pointer text-indigo-100 hover:text-indigo-50'
};
