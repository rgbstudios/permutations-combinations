function factiorial(n) {
	let result = 1;
	for(let i = 1; i <= n; i++) {
		result *= n;
	}
	return result;
}

function permutations(n, r) {
	return Math.floor(factiorial(n) / factiorial(n-r) ); // floor b/c numbers get too big and decimals occur
}

$( ()=> {
	$('#perm-calc').click( ()=> {
		let n = parseInt($('#perm-n').val() );
		let r = parseInt($('#perm-r').val() );
		let ans = permutations(n, r);
		$('#perm-output').html( ans.toLocaleString() ); // add commas
	});
});