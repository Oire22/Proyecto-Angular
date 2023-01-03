import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//mis componentes
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "header", component: HeaderComponent},
  {path: "acerca-de", component: AcercaDeComponent},
  {path: "educacion", component: EducacionComponent},
  {path: "experiencia", component: ExperienciaComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "footer", component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
