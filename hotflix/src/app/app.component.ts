import { Component } from '@angular/core';
class Movie {
  title: string;
  year: number;
  rating: number;
  thumbnail: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <table>
      <tr class="row">
        <td class="rating">{{movie.rating}}</td>
        <td class="tn"><img src="{{movie.thumbnail}}"/></td>
        <td class="details">
          <b>{{movie.title}}</b><br/>
          {{movie.year}}
        </td>
      </tr>
    </table>
  `,
  styles: [
    `
      table {width: 100%;}
      .row { background-color: lightgray;}
      .rating {font-size: 200%; width: 20%;}
      .details {vertical-align: top;}
      .tn {width: 20%;}
    `
  ]
})
export class AppComponent  { 
  title = 'HotFlix'; 
  movies: Movie[] = [
    {
    title: 'Anand',
    year: 1971,
    rating: 8.7,
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzMwYmRiMjgtYmM1NC00MmJlLWJlZTMtNjhiNjE4Mzg3MGU2XkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_UY67_CR1,0,45,67_AL_.jpg'
  },
      {
    title: 'Drishyam',
    year: 2013,
    rating: 8.6,
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_UY67_CR3,0,45,67_AL_.jpg'
  },
      {
    title: 'Nayakan',
    year: 2003,
    rating: 8.5,
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTI2Zjc5ODMtNGE0NC00YjU5LTk0NjktZjU4ZDRlZDFkZWU0XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_UX45_CR0,0,45,67_AL_.jpg'
  },
      {
    title: 'Anbe Sivam',
    year: 2003,
    rating: 8.5,
    thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNWQxY2MyNmUtOTkxZC00MmQ3LWFkMjMtNWU3YmFlZDM5YTBhXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg'
  }
];
}
