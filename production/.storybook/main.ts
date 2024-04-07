import type { StorybookConfig } from "@storybook/nextjs"
import { VanillaExtractPlugin } from "@vanilla-extract/webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import merge from "webpack-merge"
import path from "path"
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-styling-webpack",
    ],
    framework: {
        name: "@storybook/nextjs",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    staticDirs: ["../public"],
    webpackFinal: async (config) => {
        merge(config, {
            plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
        })

        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                "@": path.resolve(__dirname, "../src"),
            }
        }

        merge(config, {
            plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
        })

        return config
    },
}
export default config
