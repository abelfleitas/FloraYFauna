import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { BlogComponent } from './components/blog/blog.component';
import { ConservacionComponent } from './components/conservacion/conservacion.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/layout/body/body.component';
import { StructureComponent } from './components/structure/structure.component';

const routes: Routes = [
    { 
      path: '', 
      component: BodyComponent, 
      children: [
          { path: '', component: HomeComponent, pathMatch: 'full' },
          { path: 'gallery', component: GalleryComponent },
          { path: 'blog', component: BlogComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'documents', component: BibliotecaComponent },
          { path: 'about-us', component: AboutUsComponent },
          { path: 'conservation', component: ConservacionComponent }, 
          { path: 'structure', component: StructureComponent},
        ] 
      },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandpageRoutingModule { }
