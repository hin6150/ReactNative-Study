module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 1,
      },
    ],
  },
  parser: 'babel-parser',
};
