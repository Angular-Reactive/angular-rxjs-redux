import { CounterState } from './../../components/counter/store/index';
import { Jedi } from './../../model/jedi.model';
import { FeatureProducts } from '../../components/products/store/index';
import { FeatureUser } from '../../components/user/store/index';

export interface AppState {
  counter: CounterState;
  jediList: Array<Jedi>;
  featureProducts: FeatureProducts;
  featureUser: FeatureUser;
}
