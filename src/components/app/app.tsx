import { clsx } from 'clsx';
import { useState } from 'react';
import { initialParams } from 'src/components/initial-params/InitialParams';

import { ArticleParamsForm } from '@components/article-params-form';

import { Article } from '../article/Article';

import type { CSSProperties } from 'react';
import type { ArticleStateType } from 'src/constants/articleProps';

import styles from './app.module.scss';

export const App = (): React.JSX.Element => {
  const [appliedParams, setAppliedParams] = useState(initialParams);
  const setNewParams = (param: ArticleStateType): void => {
    setAppliedParams(param);
  };

  return (
    <main
      className={clsx(styles.main)}
      style={
        {
          '--font-family': appliedParams.fontFamilyOption.value,
          '--font-size': appliedParams.fontSizeOption.value,
          '--font-color': appliedParams.fontColor.value,
          '--container-width': appliedParams.contentWidth.value,
          '--bg-color': appliedParams.backgroundColor.value,
        } as CSSProperties
      }
    >
      <ArticleParamsForm initialParams={appliedParams} setInitialParams={setNewParams} />
      <Article />
    </main>
  );
};
