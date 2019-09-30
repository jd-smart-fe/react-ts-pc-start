import * as React from 'react';

import FilterLink from '../../application/filterLink';
import { VisibilityFilters } from '../../typings/type';

const Footer = () => (
  <span>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </span>
);

export default Footer;
