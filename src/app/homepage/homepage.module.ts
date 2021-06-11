import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomepageComponent } from '@homepage/components';
import { HomepageRoutingModule } from '@homepage/homepage-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [HomepageRoutingModule, CommonModule, SharedModule]
})
export class HomepageModule {}
