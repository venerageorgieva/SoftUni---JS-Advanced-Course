function getFibonator() {
    return (function(){
        if(this.curr == 0){
            this.curr = 1;
            return 1;
         }
         const next = this.prev + this.curr;
         this.prev = this.curr;
         this.curr = next;

         return this.curr;

   }).bind({
       prev: 0,
       curr: 0
   });
}