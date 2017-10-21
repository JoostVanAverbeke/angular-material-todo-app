import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosComponent} from './todos/todos.component';
import {HelpComponent} from './help/help.component';


const appRoutes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'todos', component: TodosComponent},

  { path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
