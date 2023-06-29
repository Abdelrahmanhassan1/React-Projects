class Todo {
  text: string;
  id: number;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = Math.random();
  }
}

export default Todo;
