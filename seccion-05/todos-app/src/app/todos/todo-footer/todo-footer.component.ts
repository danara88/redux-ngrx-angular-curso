import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { clearAllCompleted } from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public currentFilter: validFilters = 'all';
  public filters: validFilters[] = ['completed', 'inProcess', 'all'];
  public inProcessTasks: number = 0;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    // this._store.select('filter').subscribe(filter => this.currentFilter = filter);
    this._store.subscribe(state => {
      this.currentFilter = state.filter;
      this.inProcessTasks = state.todos.filter(todo => !todo.completed).length;
    })
  }

  /**
   * Method to set a filter
   * @param filterType 
   */
  changeFilter(filterType: validFilters) {
    this._store.dispatch(setFilter({ filterType }));
  }

  /**
   * Method to clear all todos
   */
  clearTodos() {
    this._store.dispatch(clearAllCompleted());
  }

}
