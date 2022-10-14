function interpolateTemplate(templateString: string, params: any): string {
	const names = Object.keys(params);
	const vals = Object.values(params);
	// eslint-disable-next-line no-new-func
	return new Function(...names, `return \`${templateString}\`;`)(...vals);
}

export { interpolateTemplate };