import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { AppModule } from './app.module';

const routes: Routes = [
  { path: 'projets', component: ProjectsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
