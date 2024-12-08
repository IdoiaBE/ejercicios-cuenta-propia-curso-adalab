// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/idoia/OneDrive/Escritorio/ADALAB/EJERCICIOS/ejercicios-cuenta-propia-curso-adalab/Modulo1-Lecci%C3%B3n8-Cada%20mochuelo%20a%20su%20olivo/node_modules/vite/dist/node/index.js";
import injectHTML from "file:///mnt/c/Users/idoia/OneDrive/Escritorio/ADALAB/EJERCICIOS/ejercicios-cuenta-propia-curso-adalab/Modulo1-Lecci%C3%B3n8-Cada%20mochuelo%20a%20su%20olivo/node_modules/vite-plugin-html-inject/dist/index.mjs";
import { ViteImageOptimizer } from "file:///mnt/c/Users/idoia/OneDrive/Escritorio/ADALAB/EJERCICIOS/ejercicios-cuenta-propia-curso-adalab/Modulo1-Lecci%C3%B3n8-Cada%20mochuelo%20a%20su%20olivo/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import concat from "file:///mnt/c/Users/idoia/OneDrive/Escritorio/ADALAB/EJERCICIOS/ejercicios-cuenta-propia-curso-adalab/Modulo1-Lecci%C3%B3n8-Cada%20mochuelo%20a%20su%20olivo/node_modules/@vituum/vite-plugin-concat/index.js";
import FastGlob from "file:///mnt/c/Users/idoia/OneDrive/Escritorio/ADALAB/EJERCICIOS/ejercicios-cuenta-propia-curso-adalab/Modulo1-Lecci%C3%B3n8-Cada%20mochuelo%20a%20su%20olivo/node_modules/fast-glob/out/index.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
var __vite_injected_original_import_meta_url = "file:///mnt/c/Users/idoia/OneDrive/Escritorio/ADALAB/EJERCICIOS/ejercicios-cuenta-propia-curso-adalab/Modulo1-Lecci%C3%B3n8-Cada%20mochuelo%20a%20su%20olivo/vite.config.js";
var htmlFilesList = Object.fromEntries(
  FastGlob.sync("src/*.html").map((file) => [
    // This remove `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length)
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
  ])
);
var inputFilesList = {
  ...htmlFilesList,
  "main": "src/js/main.js"
};
var vite_config_default = defineConfig({
  base: "./",
  root: "src",
  publicDir: "../public",
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: inputFilesList,
      output: {
        sourcemap: true,
        entryFileNames: ({ name }) => {
          if (name === "main") {
            return "js/main.js";
          }
          return "[name].js";
        }
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
      /* pass your config */
    }),
    concat({
      input: ["main.js"]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvaWRvaWEvT25lRHJpdmUvRXNjcml0b3Jpby9BREFMQUIvRUpFUkNJQ0lPUy9lamVyY2ljaW9zLWN1ZW50YS1wcm9waWEtY3Vyc28tYWRhbGFiL01vZHVsbzEtTGVjY2lcdTAwRjNuOC1DYWRhIG1vY2h1ZWxvIGEgc3Ugb2xpdm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvYy9Vc2Vycy9pZG9pYS9PbmVEcml2ZS9Fc2NyaXRvcmlvL0FEQUxBQi9FSkVSQ0lDSU9TL2VqZXJjaWNpb3MtY3VlbnRhLXByb3BpYS1jdXJzby1hZGFsYWIvTW9kdWxvMS1MZWNjaVx1MDBGM244LUNhZGEgbW9jaHVlbG8gYSBzdSBvbGl2by92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2MvVXNlcnMvaWRvaWEvT25lRHJpdmUvRXNjcml0b3Jpby9BREFMQUIvRUpFUkNJQ0lPUy9lamVyY2ljaW9zLWN1ZW50YS1wcm9waWEtY3Vyc28tYWRhbGFiL01vZHVsbzEtTGVjY2klQzMlQjNuOC1DYWRhJTIwbW9jaHVlbG8lMjBhJTIwc3UlMjBvbGl2by92aXRlLmNvbmZpZy5qc1wiOy8vIHZpdGUuY29uZmlnLmpzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuLy8gaHRtbCBwYXJ0YWxzXG5pbXBvcnQgaW5qZWN0SFRNTCBmcm9tIFwidml0ZS1wbHVnaW4taHRtbC1pbmplY3RcIjtcbi8vIG9wdGltaXplIGltYWdlc1xuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcbi8vIENvbmNhdGVuYXRlIEphdmFTY3JpcHQgZmlsZXMgKGxpa2UgZm9ybWVyIFN0YXJ0ZXIgS2l0KVxuaW1wb3J0IGNvbmNhdCBmcm9tICdAdml0dXVtL3ZpdGUtcGx1Z2luLWNvbmNhdCdcbi8vIENhbGN1bGF0ZSBwYXRoc1xuaW1wb3J0IEZhc3RHbG9iIGZyb20gJ2Zhc3QtZ2xvYidcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xuXG4vLyBHZXQgYWxsIGh0bWwgZmlsZXNcbmNvbnN0IGh0bWxGaWxlc0xpc3QgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gIEZhc3RHbG9iLnN5bmMoJ3NyYy8qLmh0bWwnKS5tYXAoZmlsZSA9PiBbXG4gICAgLy8gVGhpcyByZW1vdmUgYHNyYy9gIGFzIHdlbGwgYXMgdGhlIGZpbGUgZXh0ZW5zaW9uIGZyb20gZWFjaFxuICAgIC8vIGZpbGUsIHNvIGUuZy4gc3JjL25lc3RlZC9mb28uanMgYmVjb21lcyBuZXN0ZWQvZm9vXG4gICAgcGF0aC5yZWxhdGl2ZShcbiAgICAgICdzcmMnLFxuICAgICAgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIHBhdGguZXh0bmFtZShmaWxlKS5sZW5ndGgpXG4gICAgKSxcbiAgICAvLyBUaGlzIGV4cGFuZHMgdGhlIHJlbGF0aXZlIHBhdGhzIHRvIGFic29sdXRlIHBhdGhzLCBzbyBlLmcuXG4gICAgLy8gc3JjL25lc3RlZC9mb28gYmVjb21lcyAvcHJvamVjdC9zcmMvbmVzdGVkL2Zvby5qc1xuICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKVxuICBdKSk7XG5cbmNvbnN0IGlucHV0RmlsZXNMaXN0ID0ge1xuICAuLi5odG1sRmlsZXNMaXN0LFxuICAnbWFpbic6ICdzcmMvanMvbWFpbi5qcycsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiLi9cIixcbiAgcm9vdDogXCJzcmNcIixcbiAgcHVibGljRGlyOiBcIi4uL3B1YmxpY1wiLFxuICBidWlsZDoge1xuICAgIG1pbmlmeTogXCJlc2J1aWxkXCIsXG4gICAgb3V0RGlyOiBcIi4uL2RvY3NcIixcbiAgICBzb3VyY2VtYXA6IFwiaW5saW5lXCIsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IGlucHV0RmlsZXNMaXN0LFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICh7bmFtZX0pID0+IHtcbiAgICAgICAgICBpZiggbmFtZSA9PT0gJ21haW4nICkge1xuICAgICAgICAgICAgcmV0dXJuICdqcy9tYWluLmpzJztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgIC8vIHJlZjogaHR0cHM6Ly9yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zLyNvdXRwdXQtZW50cnlmaWxlbmFtZXNcbiAgICAgICAgICByZXR1cm4gXCJbbmFtZV0uanNcIjtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWVcbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBpbmplY3RIVE1MKCksXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcbiAgICAgIC8qIHBhc3MgeW91ciBjb25maWcgKi9cbiAgICB9KSxcbiAgICBjb25jYXQoe1xuICAgICAgaW5wdXQ6IFsnbWFpbi5qcyddXG4gICAgfSksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUU3QixPQUFPLGdCQUFnQjtBQUV2QixTQUFTLDBCQUEwQjtBQUVuQyxPQUFPLFlBQVk7QUFFbkIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQVgwVixJQUFNLDJDQUEyQztBQWN6YSxJQUFNLGdCQUFnQixPQUFPO0FBQUEsRUFDM0IsU0FBUyxLQUFLLFlBQVksRUFBRSxJQUFJLFVBQVE7QUFBQTtBQUFBO0FBQUEsSUFHdEMsS0FBSztBQUFBLE1BQ0g7QUFBQSxNQUNBLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxLQUFLLFFBQVEsSUFBSSxFQUFFLE1BQU07QUFBQSxJQUN2RDtBQUFBO0FBQUE7QUFBQSxJQUdBLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLEVBQzlDLENBQUM7QUFBQztBQUVKLElBQU0saUJBQWlCO0FBQUEsRUFDckIsR0FBRztBQUFBLEVBQ0gsUUFBUTtBQUNWO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsZ0JBQWdCLENBQUMsRUFBQyxLQUFJLE1BQU07QUFDMUIsY0FBSSxTQUFTLFFBQVM7QUFDcEIsbUJBQU87QUFBQSxVQUNUO0FBR0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLG1CQUFtQjtBQUFBO0FBQUEsSUFFbkIsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLE1BQ0wsT0FBTyxDQUFDLFNBQVM7QUFBQSxJQUNuQixDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
