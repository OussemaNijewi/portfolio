export const assetPath = (path) => {
  if (!path) return import.meta.env.BASE_URL;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
};
