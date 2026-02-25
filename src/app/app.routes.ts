import { Routes } from '@angular/router';
import { CategoriaSub14Component } from './categoria-sub14/categoria-sub14.component';
import { CategoriaSub16Component } from './categoria-sub16/categoria-sub16.component';
import { CategoriaSub18Component } from './categoria-sub18/categoria-sub18.component';
import { TabelaComponent } from './tabela/tabela.component';

export const routes: Routes = [
    {
        path: '',
        component: TabelaComponent,
        pathMatch: 'full'
    },
    {
        path: 'tabela',
        component: TabelaComponent,
        pathMatch: 'full'
    },
    {
        path: 'categoria-sub14',
        component: CategoriaSub14Component,
        pathMatch: 'full'
    },
    {
        path: 'categoria-sub16',
        component: CategoriaSub16Component,
        pathMatch: 'full'
    },
    {
        path: 'categoria-sub18',
        component: CategoriaSub18Component,
        pathMatch: 'full'
    },


];
