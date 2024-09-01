import { combineReducers } from 'redux';
import activeLinkSlice from './slices/activeLinkSlice';
import selectedBadgeSlice from './slices/selectedBadgeSlice';


const rootReducer = combineReducers({
  activeLink: activeLinkSlice,
  selectedBadge: selectedBadgeSlice,
});

export default rootReducer;
