import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

// Full: A rota será considerada uma correspondência válida somente se a URL inteira corresponder exatamente ao caminho especificado na rota.
// Prefix: A rota será considerada uma correspondência válida se o início da URL corresponder ao caminho especificado na rota.
const routes: Routes = [
    { path: '', component: TitleComponent, pathMatch: 'full' },

    // portfolio
    // portfolio/1
    // portfolio/1/gustavo
    { path: 'portfolio', component: CardComponent, children: 
        [
            { path: ':id', component: CardComponent },
            { path: ':id/:token', component: CardComponent },
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
