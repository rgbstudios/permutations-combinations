function factiorial(n) {
	let result = 1;
	for(let i = 1; i <= n; i++) {
		result *= n;
	}
	return result;
}