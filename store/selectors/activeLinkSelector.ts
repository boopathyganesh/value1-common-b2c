import { RootState } from '../store';
import { sitemap } from '../../lib/map';

export const selectActiveLinkTitle = (state: RootState) => {
  const activeLink = state.activeLink.link;
  let activeItem = sitemap.find(item => item.link === activeLink);

  return activeItem ? activeItem.title : '';
};
