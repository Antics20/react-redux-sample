import add from './add';
import { combinReducers } from 'redux';

const rootReducer=combinReducers({
  add
});

export default rootReducer;
