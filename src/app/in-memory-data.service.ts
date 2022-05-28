import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'One Battle' , style: 'hip-hop' , date: '21.07.22' , type: 'battle'  },
  { id: 2, name: 'One Championship' , style: 'all styles' , date: '08.09.22' , type: 'champ'  },
  { id: 3, name: 'One Performance' , style: 'experimental' , date: '13.11.22' , type: 'performance'  },
  { id: 4, name: 'One Festival' , style: 'break-dance' , date: '03.12.22' , type: 'festival'  },
  { id: 5, name: 'One Concert' , style: 'all styles' , date: '27.05.22' , type: 'concert'  },
  { id: 6, name: 'One Show' , style: 'frame up' , date: '05.06.22' , type: 'show'  },
  { id: 7, name: 'One Showcase' , style: 'all styles' , date: '07.12.22' , type: 'showcase'  },
  { id: 8, name: 'One Workshop' , style: 'dancehall' , date: '22.12.22' , type: 'workshop'  },
  { id: 9, name: 'Two Workshop' , style: 'contemporary' , date: '24.05.22' , type: 'workshop'  },
  { id: 10, name: 'Three Workshop' , style: 'jazz-funk' , date: '24.06.22' , type: 'workshop'  }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/