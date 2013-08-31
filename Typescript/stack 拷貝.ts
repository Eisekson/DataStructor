



class Stack{
   length:number;
   st:number[];
   constructor(){
      this.st = [];
      this.length = 0;
   }

   public push(data:number){
      this.st.push(data);
      this.length ++;
   }
   
   public pop():number{
       if(!this.empty()){
          this.length --;
          return this.st.pop();
       }
   }

   public empty():boolean{
      if(this.length==0){
         return true;
      }
      else {
         return false;
      }
   }

   public size(){
      return this.length;
      }

      public showAll(){
      var str = 'stack   ';
         for(var i=0;i<this.st.length;i++){
            str += this.st[i]+',';

            
            }
            console.log(str);
      
      }
   public top(){
      if(this.empty()){
         return null;
      }
      return this.st[this.length-1];
   }
}

var st:Stack = new Stack();
console.log('hllo.');
st.push(5);
st.push(6);
st.pop();
st.pop();
st.pop();
st.push(4);
st.push(2);
console.log(st.top());













