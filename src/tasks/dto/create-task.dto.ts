export class CreateTaskDto {
  //タスクの内容
  content: string;

  //タスクを完了したか
  done: boolean = false;
}
