import { RootState } from '../store';

export const selectSelectedBadge = (state: RootState) => state.selectedBadge.badge;
