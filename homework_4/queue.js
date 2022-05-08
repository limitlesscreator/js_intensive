export class Queue {
     constructor() {
         this.items = []
     }

     queue(item){
         this.items.push(item)
     }

     dequeue(){
         return this.items.shift()
     }

     peek(){
         return this.items[0] ? this.items[0] : null
     }

    getSize(){
         return this.items.length
    }

    isEmpty(){
         return this.getSize() === 0
    }
}