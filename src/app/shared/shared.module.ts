import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '@shared/components';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [ButtonComponent]
})
export class SharedModule {}
