import { FeatureProducts } from './../../components/products/store/index';
import { CounterState } from './../../components/counter/store/index';
import { Jedi } from './../../model/jedi.model';

export interface AppState {
  counter: CounterState;
  jediList: Array<Jedi>;
  products: FeatureProducts;
}
