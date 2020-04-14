import * as fromCounter from '../components/counter/store/index';
import * as fromUser from '../components/user/store/index';
import * as fromProduct from '../components/products/store/index';
import * as fromJedi from '../components/jedi/store/index';
import { RouterState } from '@angular/router';
import { State } from './reducers';


export interface AppState {
  counter: fromCounter.CounterState;
  jediList: fromJedi.FeatureJedi;
  featureProducts: fromProduct.FeatureProducts;
  featureUser: fromUser.FeatureUser;
  router: RouterState;
}
