import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';

@Injectable()
export abstract class GenericEffects {

  protected constructor(protected actions$: Actions<Action>) {}

  @Effect()
  public onLoadError$ = this.actions$.pipe(
    ofType(Erro)
  );
}
