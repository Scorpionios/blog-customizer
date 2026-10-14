import { clsx } from 'clsx';
import { useState, useRef, useEffect } from 'react';
import { ColorBackground } from 'src/components/color-background/ColorBackground';
import { ColorFont } from 'src/components/color-font/ColorFont';
import { ContentWidth } from 'src/components/content-width/ContentWidth';
import { Font } from 'src/components/font/Font';
import { SizeFont } from 'src/components/size-font/SizeFont';
import { defaultArticleState } from 'src/constants/articleProps';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
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
  const formRef = useRef<HTMLElement | null>(null);
  const [params, setParams] = useState(initialParams);
  const change = (key: keyof ArticleStateType, value: OptionType): void => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };
  const stylesContainer = clsx({
    [styles.container]: true,
    [styles.container_open]: isOpen,
  });

  const appledChange = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setInitialParams(params);
  };

  const resetChange = (): void => {
    setInitialParams(defaultArticleState);
    setParams(defaultArticleState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Node;

      if (formRef.current && !formRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    }

    return (): void => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <aside ref={formRef} className={stylesContainer}>
        <form className={styles.form} onSubmit={appledChange} onReset={resetChange}>
          <h2>
            <Text uppercase={true} weight={800} size={31}>
              Задайте параметры
            </Text>
          </h2>
          <Font selected={params.fontFamilyOption} setSelected={change} />
          <SizeFont selected={params.fontSizeOption} setSelected={change} />
          <ColorFont selected={params.fontColor} setSelected={change} />
          <Separator color="#D7D7D7" />
          <ColorBackground selected={params.backgroundColor} setSelected={change} />
          <ContentWidth selected={params.contentWidth} setSelected={change} />
          <div className={styles.bottomContainer}>
            <Button title="Сбросить" htmlType="reset" type="clear" />
            <Button title="Применить" htmlType="submit" type="apply" />
          </div>
        </form>
      </aside>
    </>
  );
};
