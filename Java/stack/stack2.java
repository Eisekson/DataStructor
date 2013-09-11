
public class stack2{


	public static void main(String args[]){

		stack2 st  = new stack2();
		st.push(5);
		st.pop();
		st.pop();
		st.push(2);
		st.push(3);
		st.top();
		st.empty();
		st.pop();
		st.top();
		st.size();
		st.pop();
		st.size();



	}
	int length;
	int stack[];
	int maxSize = 20;
	public stack2(){
		this.length = 0 ;
		this.stack = new int[this.maxSize];
		prln("Stack init");
	}
	private void prln(Object d){
		System.out.println(d);
	}
	public void push(int da){
		prln("Push " + da + " to stack.");
		if(this.length == this.maxSize){
			prln("Stack is full.");
		}
		else {
			prln("Stack push Success.");
			this.stack[this.length] = da;
			this.length ++;
		}
	}
	public int pop(){
		prln("Pop stack");
		if(!this.empty()){
			this.length --;
			prln("Pop " + this.stack[this.length]);
			return this.stack[this.length];
		}
		else {
			prln("Pop faild");
			return -1;
		}

	}
	public boolean empty(){
		prln("Test stack empty");
		if(this.length == 0 ){
			prln("Stack is empty");
			return true;
		}
		else {
			prln("Stack is not empty");
			return false; 
		}
	}
	public int size(){
		prln("Stack size is "+this.length);
		return this.length;
	}
	public int top(){
		prln("Get top.");
		if(!empty()){
			prln(this.stack[this.length-1]);
			return this.stack[this.length-1];
		}
		else {
			return -1;
		}
	}

}








