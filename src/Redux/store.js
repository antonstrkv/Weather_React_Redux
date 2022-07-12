/*import { createStore, applyMiddleware } from 'redux';
import WeatherApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(WeatherApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);*/
const unsubscribe = store.subscribe(() => console.log(store.getState()))


