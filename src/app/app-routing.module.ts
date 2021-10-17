import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('./landpage/landpage.module').then((m) => m.LandpageModule) 
  },
  { 
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) 
  },
  { 
    path: 'dashboard',
    loadChildren: () => import('./backoffice/office.module').then((m) => m.OfficeModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Wildcard Route

];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules,
  relativeLinkResolution: 'legacy'
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
