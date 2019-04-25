import { CatsStorageService } from './cats-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  cats;
  cat;
  admin;
  constructor(private catStorage: CatsStorageService) { }

  ngOnInit() {
    this.cats = this.catStorage.getCats();
    this.cat = this.cats[0];
    this.admin = true;
  }

  public sum() {
    this.cat.num = this.cat.num + 1;
    this.catStorage.setCats();
  }
  public selectCat(selectedCat) {
    this.cat = selectedCat;
  }
  public showAdmin() {
    this.admin = false;
  }
  public hideAdmin() {
    this.admin = true;
  }
  public saveCat(cat) {
    this.catStorage.setCats();
    this.admin = true;
  }
}
