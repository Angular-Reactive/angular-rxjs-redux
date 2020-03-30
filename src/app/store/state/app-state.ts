import { ProductState } from './../../components/products/store/reducers/product.reducer';
import { CounterState } from './../../components/counter/store/index';
import { CounterListState } from './../../components/counter/store/reducer/counter-list.reducer';
import { State } from './../../components/counter/store/reducer/counter.reducer';
import { Jedi } from './../../model/jedi.model';

export interface AppState {
  counter: CounterState;
  jediList: Array<Jedi>;
  products: ProductState;
}
