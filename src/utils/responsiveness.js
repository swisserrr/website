const breakPointHandler = pixel => {
  const remVal = pixel / 16;
  const breakPoint = {
    xs: remVal * 0.5 + 'rem',
    sm: remVal * 0.75 + 'rem',
    md: remVal + 'rem',
  };

  return breakPoint;
};

export { breakPointHandler };
