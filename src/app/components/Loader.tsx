import React, { CSSProperties } from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ color, size }: { color: string; size: number }) => {
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto'
  };

  return (
    <ClipLoader
      color={color}
      loading={true}
      cssOverride={override}
      size={size}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
