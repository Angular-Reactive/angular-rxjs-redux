import { CounterState } from './../../components/counter/store/index';
import { Jedi } from './../../model/jedi.model';
import { FeatureProducts } from '../../components/products/store/index';

export interface AppState {
  counter: CounterState;
  jediList: Array<Jedi>;
  featureProducts: FeatureProducts;
}
