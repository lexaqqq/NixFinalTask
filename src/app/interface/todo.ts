export interface Todo{
    id:number;
    title: string;
    about: string;
    isCompleted: boolean;
    firstTask: string;
    list:[{name:string, completed:boolean}];  
}