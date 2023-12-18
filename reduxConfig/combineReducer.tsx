import {combineReducers} from 'redux';
import DemoSlice from './slice/demoSlice';
import {apiService} from './slice/apiServiceSlice';

const rootReducer = combineReducers({
  [apiService.reducerPath]: apiService.reducer, //!set your api service reducer
  DemoSlice: DemoSlice,
});

export default rootReducer;
