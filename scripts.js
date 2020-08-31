function factiorial(n) {
	let ans = 1n; // big int
	for(let i = 1n; i <= n; i++) {
		ans *= i;
	}
	return ans;
}

function permutations(n, r) {
	return (factiorial(n) / factiorial(n-r) );
}
function combinations(n, r) {
	return (factiorial(n) / factiorial(n-r) / factiorial(r) );
}
function permutationsRepetition(n, list) {
	let ans = factiorial(n);
	for(let i=0; i<list.length; i++) {
		ans /= factiorial(list[i]);
	}
	return ans;
}

// toLocaleString to add commas
$( ()=> {
	$('#perm-calc').click( ()=> {
		let n = parseInt($('#perm-n').val() );
		let r = parseInt($('#perm-r').val() );
		let ans = permutations(n, r);
		$('#perm-output').html( ans.toLocaleString() );
	});
	$('#comb-calc').click( ()=> {
		let n = parseInt($('#comb-n').val() );
		let r = parseInt($('#comb-r').val() );
		let ans = combinations(n, r);
		$('#comb-output').html( ans.toLocaleString() );
	});
	$('#perm-rept-calc').click( ()=> {
		let n = parseInt($('#perm-rept-n').val() );
		let list = ($('#perm-rept-list').val().trim().split(',') ).map( x => parseInt(x) );
		let ans = permutationsRepetition(n, list);
		$('#perm-rept-output').html( ans.toLocaleString() );
	});
});