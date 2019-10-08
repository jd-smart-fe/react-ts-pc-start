import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setVisibilityFilter } from './store/actions';
import Link from '../../components/link';
import { StoreState, VisibilityFilters } from '../../typings/type';

interface Props {
  filter: VisibilityFilters;
  children: React.ReactNode;
}

const mapStateToProps = (
  state: StoreState,
  ownProps: Props,
): { active: boolean } => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: Props,
): { onClick: () => void } => {
  console.log(ownProps);
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
