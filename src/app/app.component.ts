import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { TASKS } from './mock-tasks';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  tasks : Task[] = TASKS;
  category : string[] = ['all', ...new Set(TASKS.map(ele => ele.taskCategory))];
  activeCatagory: string = 'all';
   addTask(task : HTMLInputElement) {
    if(task.value.trim()) {
      let t : Task = new Task(task.value,this.activeCatagory,false);
      TASKS.push(t);
      if(this.activeCatagory == 'all'){
        this.displayTasks(0);
      } else {
        this.displayTasks(this.category.indexOf(this.activeCatagory));
      }
      task.value = '';
    }else{
      task.value = '';
      task.focus();
    }
   }

   deleteTask(id : string){
    let index: number =Number(id);
    delete TASKS[index-1];
    if(this.activeCatagory == 'all'){
      this.displayTasks(0);
    } else {
      this.displayTasks(this.category.indexOf(this.activeCatagory));
      console.log(TASKS,this.category[index-1])
    }
   }

   editTask(e : HTMLInputElement){
      e.classList.remove('pointer-events-none');
      e.focus()
   }
   updateTaskOnUnfocus(e : HTMLInputElement){
    // let index = parseInt( e.id.slice(4));
    // if(e.value.trim() == ''){
    //   this.deleteTask(e);
    //   return;
    // }
    // this.tasks[index] = e.value.replace(/\s+/g, ' ').trim();
    // e.classList.add('pointer-events-none');
    // console.log(this.tasks)
   }
   displayTasks(index : number){
    this.activeCatagory = this.category[index];
    if(index == 0) {
      this.tasks = TASKS;
      return;
    }
    this.tasks = TASKS.filter((ele) => {
      if(ele.taskCategory == this.category[index]){
        return ele;
      }
      return;
    
    } )
   }
}


