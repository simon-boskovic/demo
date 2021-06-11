import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteRoutingModule } from './autocomplete-routing.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '@app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, AutocompleteRoutingModule, SharedModule, FormsModule, HttpClientModule]
})
export class AutocompleteModule {}
