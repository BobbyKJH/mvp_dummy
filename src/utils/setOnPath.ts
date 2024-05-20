import { usePathname } from "next/navigation";

const setOnPath = (path: string): boolean => {
  const pathName = usePathname();

  return pathName === "/" + path;
};

export default setOnPath;
