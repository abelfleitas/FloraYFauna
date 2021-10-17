import { NgModule } from '@angular/core';

import { LandpageRoutingModule } from './landpage-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ConservacionComponent } from './components/conservacion/conservacion.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyComponent } from './components/layout/body/body.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { StructureComponent } from './components/structure/structure.component';
import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    BlogComponent,
    ContactComponent,
    BibliotecaComponent,
    FooterComponent,
    AboutUsComponent,
    ConservacionComponent,
    StructureComponent,
    NewsletterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      enableHtml: true,
      timeOut: 8000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true
    }),
    AuthModule,
    LandpageRoutingModule,
    NgxMasonryModule,
  ]
})
export class LandpageModule { }
