import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodos'
})

/**
 * Pipe to return a new todo array by todo status
 */
export class FilterPipe implements PipeTransform {
  
  transform(todos: Todo[], filterType: validFilters): Todo[] {
    switch(filterType) {
      case 'all':
        return todos;
        
      case 'completed':
        return todos.filter(todo => todo.completed);

      case 'inProcess':
        return todos.filter(todo => !todo.completed);

      default:
        return todos;
    }
  }

}
