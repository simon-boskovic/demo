import { AboutRoutingModule } from '@about/about-routing.module';
import { AboutComponent } from '@about/components';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, CommonModule, SharedModule]
})
export class AboutModule {}
