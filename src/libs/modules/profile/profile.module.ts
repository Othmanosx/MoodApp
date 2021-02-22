import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

const routes: Route[] = [
  {
    path: "",
    pathMatch: "full",
    component: ProfileComponentComponent
  }
]

@NgModule({
  declarations: [ProfileComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    // BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatFileInputModule,
    MatSliderModule,
    MatCardModule
  ]
})
export class ProfileModule { }
