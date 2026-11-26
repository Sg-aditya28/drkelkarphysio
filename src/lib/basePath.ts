export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : process.env.NODE_ENV === "production"
    ? "/drkelkarphysio"
    : "";

export function assetPath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("tel:") || path.startsWith("mailto:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
