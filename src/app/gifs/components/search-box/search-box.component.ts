import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
    class="form-control"
    placeholder="Buscar por nombre"
    (keyup.enter)="searchTag()"
    #txtTagInput
  />
  `
})

// ViewChild Nos sirve para tomar una referencia local
// ViewChildren caso en el que necesitamos tomar todos los imputs y regresa un array

export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

}
