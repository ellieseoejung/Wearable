import { combineReducers, createStore} from 'redux';
import { reducer as formReducer } from 'redux-form';
import { scene } from './scene';
const reducers = {
    form: formReducer,
    scene: scene
};

const reducer = combineReducers(reducers);

const store = createStore(reducer)

export default store;