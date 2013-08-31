



class Queue{
   length:number;
   qu:number[];
   constructor(){
      this.qu = [];
      this.length = 0;
   }
   /**是否為空*/
   public empty():boolean{
   if(this.length == 0 ){
      console.log("is empty.");
      return true;
   }
   else{
      console.log("is not empty.");
      return false ; 
   }
   
   }
   /**回傳佇列的大小*/
   public size():number{
      console.log("Queue size is "+this.length);
      return this.length;
   }
   /**回傳佇列第一個數字*/
   public front():number{
      console.log("front is "+ this.qu[0]);
      return this.qu[0];
   }
   /**回傳佇列最後一個數字*/
   public back():number{
      console.log(this.qu[this.qu.length-1]);
      return this.qu[this.qu.length-1];
   }
   /**放入data*/
   public push(data:number){
      this.showQue();
      this.length++;
      this.qu.push(data);
      
   }
   /***/
   public pop():number{
         if(this.empty()){
      
         return null;
         }else {
            this.showQue();
            this.length--;
            return this.qu.shift();
         }   
   }
   private showQue(){
    var str = 'Queue is ';
      for(var i=0;i<this.qu.length;i++){
         str += this.qu[i]+' ';   
      }
      console.log(str);

   }
}

var qu:Queue = new Queue();

qu.push(1);
qu.push(2);
qu.push(4);
qu.back();
qu.front();
qu.size();






/*
Construct queue (public member function )
empty
Test whether container is empty (public member function )
size
Return size (public member function )
front
Access next element (public member function )
back
Access last element (public member function )
push
Insert element (public member function )
emplace 
Construct and insert element (public member function )
pop
Remove next element (public member function )
swap 


*/





