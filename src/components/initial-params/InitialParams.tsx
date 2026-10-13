import {
  fontFamilyOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  fontSizeOptions,
} from 'src/constants/articleProps';

import type { ArticleStateType } from 'src/constants/articleProps';

export const initialParams: ArticleStateType = {
  fontFamilyOption: fontFamilyOptions[0],
  fontColor: fontColors[0],
  backgroundColor: backgroundColors[0],
  contentWidth: contentWidthArr[0],
  fontSizeOption: fontSizeOptions[0],
};
