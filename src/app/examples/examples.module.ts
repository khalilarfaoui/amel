import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { ExamplesComponent } from './examples.component';
import { EspaceparComponent } from './espacepar/espacepar.component';
import { RegisterparticulierComponent } from './registerparticulier/registerparticulier.component';
import { EspaceprofessionnelComponent } from './espaceprofessionnel/espaceprofessionnel.component';
import { RegisterprofessionnelComponent } from './registerprofessionnel/registerprofessionnel.component';
import { PSPComponent } from './psp/psp.component';
import { DescriptionComponent } from './description/description.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ],
    declarations: [
        LandingComponent,
        EspaceprofessionnelComponent,
        ExamplesComponent,
        ProfileComponent,
        EspaceparComponent,
        RegisterparticulierComponent,
        RegisterprofessionnelComponent,
        PSPComponent,
        DescriptionComponent
    ]
})
export class ExamplesModule { }
