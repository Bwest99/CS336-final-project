import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageCounterComponent} from '../components/message-counter/message-counter.component';
import { ContactDisplayComponent} from '../components/contact-display/contact-display.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    imports: [ 
        CommonModule,
        MatCheckboxModule,
        MatCardModule,
        MatRadioModule,
        FormsModule,
        IonicModule, 
    
    ],
    entryComponents: [MessageCounterComponent,ContactDisplayComponent],
    declarations: [ MessageCounterComponent, ContactDisplayComponent],
    exports: [MessageCounterComponent,ContactDisplayComponent]
})
export class sharedModule {}