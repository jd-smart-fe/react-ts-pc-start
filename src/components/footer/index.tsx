import * as React from 'react';

import FilterLink from '../../application/filterLink';
import { VisibilityFilters } from '../../typings/type';

const Footer = () => (
  <span>
    <span>Show: </span>
    <FilterLink
      key={VisibilityFilters.SHOW_ALL}
      filter={VisibilityFilters.SHOW_ALL}
    >
      All
    </FilterLink>
    <FilterLink
      key={VisibilityFilters.SHOW_ACTIVE}
      filter={VisibilityFilters.SHOW_ACTIVE}
    >
      Active
    </FilterLink>
    <FilterLink
      key={VisibilityFilters.SHOW_COMPLETED}
      filter={VisibilityFilters.SHOW_COMPLETED}
    >
      Completed
    </FilterLink>
  </span>
);

export default Footer;
