module.exports = {
  plugins: [
    require('posthtml-beautify')({
      rules: {
        blankLines: false,
      },
    }),
  ],
};
