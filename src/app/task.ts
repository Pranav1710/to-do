interface _Task {
    id: number;
    taskName: string;
    taskCategory: string;
    isCompleted: boolean;

}

export class Task implements _Task{
  static _id: number = 4;
  id: number;
  taskName: string;
  taskCategory: string;
  isCompleted: boolean;
  constructor(taskName:string, taskCategory:string, isCompleted:boolean){
    this.id = Task.giveID();
    this.taskName = taskName;
    this.taskCategory = taskCategory;
    this.isCompleted = isCompleted;
  }

  static  giveID(){
    let id = Task._id;
    Task._id += 1;
    return id; 
  }
}