import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    resolve: {
        alias: {
            "vue": "vue/dist/vue.esm-bundler.js"
        }
    },
    css: {
        postcss: {
            plugins: [
                // This is the hackiest piece of crap ever.
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                postcssPresetEnv({ stage: 0 })
            ]
        }
    }
});