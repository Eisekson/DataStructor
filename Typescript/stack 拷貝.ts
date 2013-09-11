


class Stack{
	value : number[];
	length : number;
	constructor(){
		this.value = [];
		this.length = 0;

	}

	public push(value:number){

		this.value.push(value);
		this.length++;
		console.log('push ' + value);
	}

	public pop():number{

		if(this.empty()){
			console.log('pop null');
			return null;
		}
		else {
			console.log('pop '+ this.top());
			this.length --; 
			return this.value.pop();
		}
	}
	
	public size():number{
		console.log('size '+ this.length);
		return this.length;
	}

	public empty():boolean {
		

		if(this.length == 0){
		console.log('empty');
		return true; 
		}
		console.log('not empty');
		return false; 
	}	
	
	public top():number{

		if(this.empty()){

			return null;
			}
			else {
			console.log('top '+this.value[this.value.length-1]);
			return this.value[this.value.length-1];
			}
	}

}


var st :Stack  = new Stack();


st.push(1);
st.pop();
st.pop();
st.push(1);
st.push(2);
st.size();
st.top();
