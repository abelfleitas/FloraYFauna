import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { OfficeComponent } from './component/office/office.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LibraryComponent } from './pages/library/library.component';
import { AddDocumentComponent } from './pages/library/component/add-document/add-document.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { 
    path: '',
    component: OfficeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'blogs',
        component: BlogsComponent
      },
      {
        path: 'libraries',
        component: LibraryComponent
      },
      {
        path: 'libraries/add',
        component: AddDocumentComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
    ],
    //canActivateChild: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
