import { Platform, PixelRatio } from 'react-native';

export const getPixelSize = (pixels) => {
  Platform.select({
    ios: pixels,
    android: PixelRatio.getPixelSizeForLayoutSize(pixels)
  })
}