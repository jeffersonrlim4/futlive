import "@testing-library/jest-dom";

global.importMetaEnv = {
  VITE_BASE_API_URL: "http://localhost:5173",
};

Object.defineProperty(global, "import.meta", {
  value: { env: global.importMetaEnv },
});
