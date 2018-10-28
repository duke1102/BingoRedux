module.exports = {
  assetsDir: 'assets',
  runtimeCompiler: true,

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  }
}
