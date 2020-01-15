import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgModule } from '@angular/core';


@NgModule({
	imports: [MatFormFieldModule, MatCardModule, MatButtonModule, MatListModule, MatInputModule, MatSelectModule],
	exports: [MatFormFieldModule, MatCardModule, MatButtonModule, MatListModule, MatInputModule, MatSelectModule]
})

export class MaterialModule {

}