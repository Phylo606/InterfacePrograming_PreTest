import { Component, OnInit } from '@angular/core';
import { Movie } from './movie'
import { EXAMPLE_MOVIE } from './mock-movie'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TheMovieDB';
  movie: Movie = {
    title: "How to Train Your Dragon 2",
    rating: 77,
    shortdescription: "The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    runtime: 102,
    releasedate: new Date(2014, 6, 13), //June 13th, 2014
    moviethumbnail: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lRjOR4uclMQijUav4OjeZprlehu.jpg",
  };
  
  constructor() {}

  ngOnInit() {
  }

  
}
