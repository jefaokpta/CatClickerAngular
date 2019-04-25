import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatsStorageService {

  private cats;
  constructor() {
    if (localStorage.getItem('cats') == null) {
      this.cats = [
        { 'cat' : 'Lion' , 'photo' : 'lion.jpg' , 'num' : 0},
        {'cat': 'Tygra', 'photo': 'tygra.jpg', 'num': 0},
        {'cat': 'Panthro', 'photo': 'panthro.jpg', 'num': 0},
        {'cat': 'Cheetah', 'photo': 'cheetah.jpg', 'num': 0},
        {'cat': 'WKit', 'photo': 'wkit.jpg', 'num': 0},
        {'cat': 'WKat', 'photo': 'wkat.jpg', 'num': 0}
      ];
      localStorage.setItem('cats', JSON.stringify(this.cats));
    }
    this.cats = JSON.parse(localStorage.getItem('cats'));
  }
  public getCats() {
    return this.cats;
  }
  public setCats() {
    localStorage.setItem('cats', JSON.stringify(this.cats));
  }
}
