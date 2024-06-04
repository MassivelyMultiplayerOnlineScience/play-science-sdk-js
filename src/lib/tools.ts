function interpolateTemplate(templateString: string, params: any): string {
	const names = Object.keys(params);
	const vals = Object.values(params);

	return new Function(...names, `return \`${templateString}\`;`)(...vals);
}

export { interpolateTemplate };