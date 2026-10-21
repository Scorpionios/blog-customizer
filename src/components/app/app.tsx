import { clsx } from 'clsx';
import { useState } from 'react';
import { defaultArticleState } from 'src/constants/articleProps';

import { ArticleParamsForm } from '@components/article-params-form';

import { Article } from '../article/Article';

import type { CSSProperties } from 'react';

import styles from './app.module.scss';

export const App = (): React.JSX.Element => {
  const [appliedParams, setAppliedParams] = useState(defaultArticleState);

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
      <ArticleParamsForm
        initialParams={appliedParams}
        setInitialParams={setAppliedParams}
      />
      <Article />
    </main>
  );
};
