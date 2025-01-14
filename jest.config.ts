import { type JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/.jest/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/**/*.test.tsx"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "main.tsx",
    "App.tsx",
    "src/@types",
    "src/constants",
  ],
  coverageDirectory: "./coverage",
  coverageProvider: "v8",
  coverageReporters: ["html", "lcov", "text", "text-summary", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

export default jestConfig;
