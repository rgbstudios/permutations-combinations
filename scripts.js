function factiorial(n) {
	let result = 1n; // big int
	for(let i = 1n; i <= n; i++) {
		result *= i;
	}
	return result;
}

function permutations(n, r) {
	return (factiorial(n) / factiorial(n-r) );
}
function combinations(n, r) {
	return (factiorial(n) / factiorial(n-r) / factiorial(r) );
}

$( ()=> {
	$('#perm-calc').click( ()=> {
		let n = parseInt($('#perm-n').val() );
		let r = parseInt($('#perm-r').val() );
		let ans = permutations(n, r);
		$('#perm-output').html( ans.toLocaleString() ); // add commas
	});
	$('#comb-calc').click( ()=> {
		let n = parseInt($('#comb-n').val() );
		let r = parseInt($('#comb-r').val() );
		let ans = combinations(n, r);
		$('#comb-output').html( ans.toLocaleString() ); // add commas
	});
});