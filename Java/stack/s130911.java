



public class s130911{

	public static void main(String args[]){

		s130911 st = new s130911();
		st.push(5);
		st.showStack();
		st.push(10);
		st.showStack();
		pr(st.pop());
		st.showStack();
		pr(st.pop());
		st.showStack();
		pr(st.pop());
		st.showStack();
		pr(st.size());
		st.push(3);
		pr(st.top());
		pr(st.size());
		for(int i=0;i<20;i++){
			st.push(i);
			st.showStack();
		}for(int i=0;i<21;i++){
			st.pop();
			st.showStack();
		}

	}
	static private void pr(Object d){
		System.out.println(d);
	}
	int length ;
	int stack[];
	int maxSize = 20;
	public s130911(){

		length = -1;
		stack = new int[maxSize];
	}

	private void print(Object d){
		System.out.println(d);
	}

	public void push(int a){
		if(isFull()){
			print("isFull");
		}else {
			length ++;
			stack[length] = a;
		}
		
	}
	public int pop(){
		if(empty()){
			print("isEmpty");
			return -1;
		}else {
			return stack[length--];
		}
	}
	public int size(){
		return length;
	}
	public int top(){
		if(empty()){
			return -1;
		}else {
			return stack[length];
		}
	}
	public boolean empty(){
		if(length == -1){
			return true;
		}else {
			return false;
		}
	}
	public boolean isFull(){
		if(length+1 == maxSize){
			return true;
		}else {
			return false;
		}
	}
	public void showStack(){
		System.out.println("Stack");
		for(int i=0;i<=length;i++){
			System.out.print(stack[i]+" ");
		}
		System.out.println();
	}

}

