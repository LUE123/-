const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //代理跨域
  devServer: {
    proxy: {
      "/api": {     //url中有/api就代理 
        target: "http://gmall-h5-api.atguigu.cn",   //target 目标服务器的ip地址（数据来源）
        // pathRewrite: { "^/api": "" }
      }
    }
  }
})
