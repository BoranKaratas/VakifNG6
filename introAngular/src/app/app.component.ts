import { Component } from '@angular/core';
import { todoItems } from './models/todoItem.mock';
import { TodoItem } from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title: string = 'ilk Angular uygulaması';
  creator: string = 'Türkay Ürkmez'
  generatedInfo : string = 'Şubat 2022'
  
  todoItems: TodoItem[] = todoItems;
  

  isOk : boolean =false;
  isAllTaskDisplaying: boolean = true;
  
  showState():void{
    console.log(this.isOk);
  }

  filter():void{
    this.isAllTaskDisplaying = !this.isAllTaskDisplaying;

    !this.isAllTaskDisplaying ? this.todoItems = this.todoItems.filter(item=>!item.isDone) 
                                :
                                this.todoItems = todoItems;
  }

  getButtonText():string {
     if (this.isAllTaskDisplaying) {
       return "Sadece yapılacakları göster";
     }else{
       return "Tümünü göster";
     }
  }

  getItemsCount():number{
     return this.todoItems.filter(x=>!x.isDone).length;
  }

  addNewTask(taskName:string):void{
    let newItem = new TodoItem(taskName,false);
    this.todoItems.push(newItem);
  }

}
