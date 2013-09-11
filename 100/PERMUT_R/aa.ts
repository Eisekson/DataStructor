




var ans:number[][] = combi (3);


console.log(JSON.stringify(ans));



function combi(n:number):number[][]{
	var ans :number[][] = [];
	var perm :number[] = new Array(n);
	var i:number;
	var position;
	
	for(i=0;i<n;i++)
		perm[i] = i+1;
	position = n-1;
	while(position != 0){
		ans.push([]);
		for(var j=0;j<n;j++){
			ans[ans.length-1].push(perm[j]);	
		}
		position = n-1;
		rotate(position);
		while(perm[position] == position+1 && position!=0){
			position --;
			rotate(position);
		}
	}
	
	

	return ans;
	function rotate(p){
		var j, temp;
		temp = perm[p];
		for(j=p-1;j >=0 ;j--)
			perm[j+1] = perm[j];
		perm[0] = temp;

		

	}



}
