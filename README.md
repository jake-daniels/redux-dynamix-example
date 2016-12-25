# redux-dynamix

Tool for dynamic manipulation with reducers and state tree in redux-based apps.


## Warning

:warning: This technology is **highly experimental** and the API may be changed at any time. :warning:

## tl;dr

Can change your state from this

```js
state = {
	module_a: {foo: 12, bar: 'baz'},
	module_b: {...data},
}
```

into this

```js
state = {
	module_a: {foo: 12, bar: 'baz'},
	module_b: {...data},
	module_c: {...moreData}
}
```
and backwards.
Slice of state with key `module_c` is considered dynamic and (along with reducer that will handle it)
can be added and removed dynamically during the runtime of application (for example: in response to user action).


## Motivation

**Redux Dynamix** is a [store enhancer](https://github.com/reactjs/redux/blob/master/docs/Glossary.md#store-enhancer)
that allows you **dynamically** add and remove slice reducers (and therefore slices of application state).

_Inspired by [this post](http://stackoverflow.com/a/33044701) by [Dan Abramov](https://github.com/gaearon)._

This is useful in large applications, where you may have some piece of functionality separated so much
that it deserves to have its own slice of state tree but the rest of application can easily work without the data stored in that particular slice.
Additionally, you may not need to have these data stored during the entire lifetime of application, but only for a while.
Therefore a space for these data could be created in the application state dynamically, when you need it,
leaving the main application state cleaner and less overloaded.

Imagine following situation: You want to open a modal window that contains form. There is a lot of functionality
bound to that modal. Some data are loaded from the server, user fills in forms, then submits it and your application sends
that data back to server. Of course, this functionality needs to have its data counterpart in application state - loaded data,
content of form input fields and so on. However, when user sends data to server and closes the modal window,
you suddenly don't need that data anymore. It remains in your state tree even if no piece of code uses it.

This is the moment, when _redux-dynamix_ comes to help.


## Installation

```
npm install --save redux-dynamix
```


## Usage

To enable Redux Dynamix import store enhancer and use it in `createStore` function.

```js
import rootReducer from './reducers'
import {createDynamix} from 'redux-dynamix'

const enhancer = createDynamix()
store = createStore(rootReducer, enhancer)
```

If you use middleware like [redux-thunk](https://github.com/gaearon/redux-thunk) or [redux-logger](https://github.com/evgenyrodionov/redux-logger)
you may use `compose` function that ships with Redux to combine Dynamix enhancer with `applyMiddleware` enhancer.

```js
const enhancer = compose(
	createDynamix(),
	applyMiddleware(thunk, logger),
)
```

Enhanced store is now ready to accept dynamic reducer that will be attached to existing root reducer
and will handle the slice of the state specified by `key`.

```js
import {injectReducer} from 'redux-dynamix'
import reducer from './modules/a/reducer'

// key - identifies the dynamic slice of state
// reducer - a reducer function to handle changes in that slice
injectReducer('module_a', reducer)
```

When this slice is no longer needed, it can be removed so the main application state remains clean.

```js
import {ejectReducer} from 'redux-dynamix'

// key - identifies the dynamic slice of state
ejectReducer('module_a')
```

Simple as that. Dynamix comes with two action types that represent events.
They are fired after injection or ejection and you can listen for them in your reducers to be notified of changes.

```js
import {ActionTypes} from 'redux-dynamix'

console.log(ActionTypes.REDUCER_INJECTED)
// @@dynamix/REDUCER_INJECTED

console.log(ActionTypes.REDUCER_EJECTED)
// @@dynamix/REDUCER_EJECTED
```

When these action types are dispatched, their payload carries the `key` of injected/ejected slice.

