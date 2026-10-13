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
  const Change = (key: keyof ArticleStateType, value: OptionType): void => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const AppledChange = (): void => {
    setInitialParams(params);
  };

  const ResetChange = (): void => {
    setInitialParams(defaultArticleState);
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
      <aside
        ref={formRef}
        className={`${styles.container} ${isOpen ? styles.container_open : ''}`}
      >
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <Font selected={params.fontFamilyOption} setSelected={Change} />
          <SizeFont selected={params.fontSizeOption} setSelected={Change} />
          <ColorFont selected={params.fontColor} setSelected={Change} />
          <Separator color="#D7D7D7" />
          <ColorBackground selected={params.backgroundColor} setSelected={Change} />
          <ContentWidth selected={params.contentWidth} setSelected={Change} />
          <div className={styles.bottomContainer}>
            <Button
              title="Сбросить"
              htmlType="reset"
              type="clear"
              onClick={ResetChange}
            />
            <Button
              title="Применить"
              htmlType="submit"
              type="apply"
              onClick={AppledChange}
            />
          </div>
        </form>
      </aside>
    </>
  );
};
