const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars = { env: 'dev' }) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
