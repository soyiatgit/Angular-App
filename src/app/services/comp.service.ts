import { Injectable }           from '@angular/core';
import { PoorComponent }   from '../components/poor/poor.component';
import { AverageComponent }   from '../components/average/average.component';
import { GoodComponent }   from '../components/good/good.component';
import { Comp }               from '../models/comp';

@Injectable()
export class CompService {
  getComps() {
    return [
      new Comp(GoodComponent, {name: 'Good'}),

      new Comp(AverageComponent, {name: 'Average'}),

      new Comp(PoorComponent,   {name: 'Poor'})
    ];
  }
}
