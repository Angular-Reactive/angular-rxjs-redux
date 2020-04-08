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

## Setting up @ngrx/entity steps

# npm i @ngrx/entity

# 1) Create a model
# 2) Create an entity state based on the model
# 1) Create an entity adapter
# 1) Create the initial state
# 1) Create the reducer and set up the state in the StoreModule

## Function to convert the entity's entities dictionary in a list

```
  toArray(obj) {
    const keys = Object.keys(obj);
    return keys.map(key => obj[key]);
  }
  
```

### @ngrx/router-store

It allow us to trace where we are in the application. 'where' is represented by our route, route
parameters, as well as by query parameters.
We will be able to easily serialize the stores information to a storage for later retrieval and
deserialization, which means we can re-instate the app with not only the state, but also our
page location.

## Installation and set up

```
npm i @gnrx/router-store --save
```

# Impot the correct modules and set those up in the import properties of our root module

```
import { StoreDevtoolsModule} from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
...
imports: [
  ...
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router' // name of reducer key
  })
]
```
# Add Custom Router Serializer (app-state.ts)

 Markup : * Create an interface that defines what we want to store about the router
              * It can be anything that is on RouterSnapshot
          * Create a class that will basically be the code that copies things from the
            RouterStateSnapshot into our interface defined first ans returns that
              * To get the code to run, you'll have to add this code to the app.module:

              ```
              imports: [
                StoreRouterConnectingModule
              ],
              providers: [{provide: RouterStateSerializer, useClass: <your custom serializer class>}]
              ```
# Add Router Info Selectors

(app-state.ts)
```
export const getRootReducerState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');
```

(root-store.selectors.ts)
```
export const getRouterInfo = createSelector(
  getRootReducerState,
  (state) => state.state
);
```

 Markup : * The FeatureSelector getRootReducerState is created in the index of the root state.
          * getRouterInfo returns the RouterStateUrl interface we defined initially with the
            url, params and queryParams.
