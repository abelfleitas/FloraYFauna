import { NgModule } from '@angular/core';

import { OfficeRoutingModule } from './office-routing.module';
import { OfficeComponent } from './component/office/office.component';
import { MenuSidebarComponent } from './component/menu-sidebar/menu-sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { UsersComponent } from './pages/users/users.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LibraryComponent } from './pages/library/library.component';
import { AddDocumentComponent } from './pages/library/component/add-document/add-document.component';
import { UserDropdownMenuComponent } from '../shared/user-dropdown-menu/user-dropdown-menu.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    OfficeComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    DashboardComponent,
    GalleryComponent,
    LibraryComponent,
    UsersComponent,
    UserDropdownMenuComponent,
    BlogsComponent,
    AddDocumentComponent,
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    FontAwesomeModule,
    OfficeRoutingModule,
  ]
})
export class OfficeModule { }
