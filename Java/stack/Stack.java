public class Stack{

	public static void main(String args[]){

		System.out.println("Hello World!");
		Stack st = new Stack();
		st.push(5);
		st.pop();
		st.pop();
		st.top();
		st.size();
		st.push(3);
		st.push(2);
		st.top();
		st.pop();
		st.pop();

	}

	int length;
	int stack[]; 
	int maxSize = 20;
	public Stack(){
		this.prln("Stack init.");
		this.length = 0;
		this.stack = new int[this.maxSize];


	}
	void prln(Object x){
		System.out.println(x);
	}
	void push(int d){
		this.prln("Stack push :"+d);
		if(this.length == this.maxSize){
			System.out.println("Stack is Full");
		}
		else {
			this.stack[this.length] = d;
			this.length++;
			this.prln("Push Data = " + d + " to Stack");
			this.prln("Length " + this.length);
		}
	}
	int pop(){
		this.prln("Stack pop.");
		if(!this.empty()){
			this.length -- ;
			this.prln("Stack pop Data is "+this.stack[this.length]);
			this.prln("Length is " + this.length);
			return this.stack[this.length];
		}
		else {
			this.prln("Stack can not pop");
			return -1;
		}
	}
	int size(){
		this.prln("Get stack size "+ this.length);
		return this.length;
	}
	boolean empty(){
		this.prln("Test stack empty");
		if(this.length == 0){
			this.prln("Stack is empty.");
			return true;
		}else{
			this.prln("Stack is not empty");
			return false;
		}
	}
	int top(){
		this.prln("Get stack top ");
		if(!this.empty()){
			this.prln("Stack top is "+ this.stack[this.length-1]);
			return this.stack[this.length-1];
		}else {
			this.prln("Stack has no top.");
			return -1;
		}
	}



}
