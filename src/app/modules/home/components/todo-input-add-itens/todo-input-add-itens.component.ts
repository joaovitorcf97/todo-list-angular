import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
  @Output() public emmitItemTaskLIst = new EventEmitter();

  public addItemTaskLIst: string = '';

  public submitItemTaskLIst() {
    this.addItemTaskLIst = this.addItemTaskLIst.trim();
    if (this.addItemTaskLIst) {
      this.emmitItemTaskLIst.emit(this.addItemTaskLIst);
      this.addItemTaskLIst = '';
    }
  }
}
