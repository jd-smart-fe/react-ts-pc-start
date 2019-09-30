import * as React from 'react';

interface Props {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Link: React.SFC<Props> = ({ active, children, onClick }: Props) => (
  <button
    type="button"
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);

export default Link;
