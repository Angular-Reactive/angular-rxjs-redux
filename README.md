# AngularRxjsRedux

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Best practices
* Get rid of so-called magic strings and rely on constants
* Add a default state to your reducer
* Create so-called action-creators
* Move everything into a dedicates module (feature modules) and split up into several components
* If you find the number of components and files growing, consider creating a dedicated directory
  for it

## ActionReducerMap
Provide the ActionReducerMap<T> with your reducer map for added type checking. ActionReducerMap
is the type of an Object where every key is a reducer.
We need to create a constant of ActionReducerMap where we configure our reducers. Then the constant
is configured in application module using StoreModule:

```
export const reducers: ActionReducerMap<AppState> = {
  articleState: articleReducer.reducer
};
```

## ActionReducer
Is used to create reducers such as logger and then is configured with MetaReducer:
```
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
} 
```


## app-state.ts
Is an interface, a typed representation of our store.

## StoreModuke.forRoot() function
It's used to allow to NgRx to be aware of the state and will let us retrive it and dispatch atcions
to it.
If we use feature modules, then this function will be empty in the root module.

## forFeature() method
Used on the 'StoreModule' allow us to set up the states we need per feature module.

## store.select()
It's a function that returns an Observable that when resolved, contains a value.
It means that this function give us a slice of state.

## index.ts
It's like a public API for our feature state that re-exports everything we want to expose to our parts of out Angular application.
Having an 'index.ts' file helps other developers know what they should be ablle to access from this module.
