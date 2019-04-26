import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'bookmarks', loadChildren: './bookmarks/bookmarks.module#BookmarksPageModule' },
  { path: 'search-display', loadChildren: './search-display/search-display.module#SearchDisplayPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
