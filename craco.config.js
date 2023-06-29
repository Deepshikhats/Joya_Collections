// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  webpack: {
    alias: {
      // '@redux/actions': path.resolve(__dirname, 'src/redux/actions'),
      '@redux/slices': path.resolve(__dirname, 'src/redux/slices'),
      // '@redux/sagas': path.resolve(__dirname, 'src/redux/sagas'),
      // '@redux/store': path.resolve(__dirname, 'src/redux/store'),
      // '@config': path.resolve(__dirname, 'src/config/index.ts'),
      '@pages': path.resolve(__dirname, 'src/pages/index.tsx'),
      '@router': path.resolve(__dirname, 'src/router/index.tsx'),
      '@components': path.resolve(__dirname, 'src/shared/components'),
      '@common': path.resolve(__dirname, './src/shared/common'),
      // '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
      // '@types': path.resolve(__dirname, 'src/shared/types'),
      '@utils': path.resolve(__dirname, 'src/shared/utils'),
      // '@helpers': path.resolve(__dirname, 'src/shared/helpers'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  }
}
