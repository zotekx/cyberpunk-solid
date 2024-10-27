import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    solid(),
    libInjectCss(),
    dts({
      include: ["src/**/*.{ts,tsx}"],
      rollupTypes: true,
      tsconfigPath: "./tsconfig-build.json",
      exclude: ["**/*.stories.*"],
    }),
  ],
  build: {
    lib: {
      entry: {
        Button: resolve(__dirname, "src/Button/Button.tsx"),
      },
      name: "cyberpunk-solid",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ["es"],
    },
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      external: ["solid-js"],
    },
    copyPublicDir: false,
  },
});
