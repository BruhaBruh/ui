export const canRender = (children: React.ReactNode): boolean => {
  return (
    children !== null &&
    children !== undefined &&
    children !== '' &&
    children !== false &&
    (Array.isArray(children) ? children.length !== 0 : true)
  );
};
