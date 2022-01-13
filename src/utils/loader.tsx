export const LOADER_THEME = {
  BLUE: "blue",
  GREY: "grey",
  WHITE: "white",
};
export const defaultSize = 24;

const Loader = ({ size, theme }: { size: number; theme: string }) => {
  const loaderSize = validate(size, defaultSize);

  return (
    <svg
      className={`loader circle-loader ${LOADER_THEME["BLUE"]}`}
      viewBox="25 25 50 50"
      width={loaderSize}
      height={loaderSize}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="loader-path" cx="50" cy="50" r="20" />
    </svg>
  );
};

Loader.THEME = LOADER_THEME;

export default Loader;

function validate(size: number, defaultSize: number) {
  return size ?? defaultSize;
}
