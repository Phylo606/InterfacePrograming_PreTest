import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie' 
@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent {

  @Input() movie: Movie

  constructor() { }

  ngOnInit() {
  }

}
