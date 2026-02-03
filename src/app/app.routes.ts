import { Routes } from '@angular/router';
import { HiremeComponent } from './Components/hireme/hireme.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SkillComponent } from './Components/skill/skill.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';

export const routes: Routes = [
   { path: '',
     component: HomeComponent }, 
{ path: 'hire-me', 
  component: HiremeComponent },
{
  path: 'projects',
   component: ProjectsComponent
},
{
  path: 'skills',
  component: SkillComponent
},
{
  path: 'about-us',
  component: AboutusComponent
}
];
