import { createStore } from 'redux';
import { combineReducers } from 'redux';
import repositories from './repositories';


/*
 * Diversi reducer possono essere combinati se fosse
 * necessario separare la gestione dello stato di diverse
 * parti di applicazione.
 */
const reducer = combineReducers({
  repositories
});

let store = null;
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    store = createStore(reducer);
} else {
    store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());
                                // ^^^                          ^^^
                                // abilitiamo il debug via devTools del browser
}


export default store