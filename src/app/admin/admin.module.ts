import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, AdminComponent],
  imports: [CommonModule, FormsModule, AdminRoutingModule],
})
export class AdminModule {}
