import { clsx } from 'clsx';
import { useState, useRef } from 'react';
import {
  defaultArticleState,
  backgroundColors,
  fontColors,
  contentWidthArr,
  fontFamilyOptions,
  fontSizeOptions,
} from 'src/constants/articleProps';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { RadioGroup } from 'src/ui/radio-group/RadioGroup';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import { Select } from 'src/ui/select/Select';
import { Separator } from 'src/ui/separator/Separator';
import { Text } from 'src/ui/text/Text';

import type {
  OptionType,
  PropsForm,
  ArticleStateType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = ({
  initialParams,
  setInitialParams,
}: PropsForm): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement | null>(null);
  const [params, setParams] = useState(initialParams);
  const change = (key: keyof ArticleStateType, value: OptionType): void => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };
  const stylesContainer = clsx({
    [styles.container]: true,
    [styles.container_open]: isOpen,
  });
  const [sizeFontKey, setSizeFontKey] = useState(0);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setInitialParams(params);
  };

  const handleFormReset = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setInitialParams(defaultArticleState);
    setParams(defaultArticleState);
    setSizeFontKey((prevKey) => prevKey + 1);
  };

  useOutsideClickClose({
    isOpen,
    rootRef: formRef,
    onClose: () => setIsOpen(false),
    onChange: (newState) => setIsOpen(newState),
  });

  return (
    <>
      <ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <aside ref={formRef} className={stylesContainer}>
        <form
          className={styles.form}
          onSubmit={handleFormSubmit}
          onReset={handleFormReset}
        >
          <h2>
            <Text uppercase={true} weight={800} size={31}>
              Задайте параметры
            </Text>
          </h2>
          <Select
            selected={params.fontFamilyOption}
            onChange={(option) => change('fontFamilyOption', option)}
            options={fontFamilyOptions}
            title="Шрифт"
          />
          <RadioGroup
            key={sizeFontKey}
            selected={params.fontSizeOption}
            name="radio"
            onChange={(option) => change('fontSizeOption', option)}
            options={fontSizeOptions}
            title="Размер шрифта"
          />
          <Select
            selected={params.fontColor}
            onChange={(option) => change('fontColor', option)}
            options={fontColors}
            title="Цвет шрифта"
          />
          <Separator color="#D7D7D7" />
          <Select
            selected={params.backgroundColor}
            onChange={(option) => change('backgroundColor', option)}
            options={backgroundColors}
            title="Цвет фона"
          />
          <Select
            selected={params.contentWidth}
            onChange={(option) => change('contentWidth', option)}
            options={contentWidthArr}
            title="Ширина контента"
          />
          <div className={styles.bottomContainer}>
            <Button title="Сбросить" htmlType="reset" type="clear" />
            <Button title="Применить" htmlType="submit" type="apply" />
          </div>
        </form>
      </aside>
    </>
  );
};
