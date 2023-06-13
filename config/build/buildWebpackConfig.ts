import path from 'path';
import webpack from 'webpack'
import { buildDevServer } from './buildDevServer';

import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

import { BuildOptions } from "./types/config";

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration{

    const {paths, mode, isDev} = options
    return  {
        mode,
        entry: paths.entry,
        output: {
          path: paths.build,
          filename: '[name].[contenthash].js',
          clean: true
        },
        plugins: buildPlugins(options),
        module: {
          rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options): undefined,
      };

}