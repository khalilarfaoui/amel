import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { EspaceparComponent } from './examples/espacepar/espacepar.component';
import { RegisterparticulierComponent} from './examples/registerparticulier/registerparticulier.component';
import { EspaceprofessionnelComponent } from './examples/espaceprofessionnel/espaceprofessionnel.component';
import { RegisterprofessionnelComponent } from './examples/registerprofessionnel/registerprofessionnel.component';
import { PSPComponent } from './examples/psp/psp.component';
import { DescriptionComponent } from './examples/description/description.component';
import { DetailsComponent } from './components/details/details.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AcceuilDetailsComponent } from './components/acceuil-details/acceuil-details.component';
const routes: Routes =[
    
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'accueil',component : AcceuilComponent },
    { path: 'accueil/detail/:id',component : AcceuilDetailsComponent },
    { path: 'index',                component: ComponentsComponent },
    { path: 'index/sc/:id',                component: DetailsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/espaceprofessionnel',       component: EspaceprofessionnelComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'examples/espacepar',   component: EspaceparComponent},
    { path: 'examples/registerparticulier',component: RegisterparticulierComponent},
    { path: 'examples/registerprofessionnel', component: RegisterprofessionnelComponent},
    { path: 'examples/psp',component: PSPComponent},
    { path: 'examples/description',component:DescriptionComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
