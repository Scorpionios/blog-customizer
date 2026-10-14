import { fontSizeOptions } from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group/RadioGroup';

import type { OptionType, PropsFormElements } from 'src/constants/articleProps';

export const SizeFont = ({
  selected,
  setSelected,
}: PropsFormElements): React.JSX.Element => {
  const options = fontSizeOptions;
  const handleOptionSelect = (option: OptionType): void => {
    setSelected('fontSizeOption', option);
  };

  return (
    <RadioGroup
      selected={selected}
      name="radio"
      onChange={handleOptionSelect}
      options={options}
      title="Размер шрифта"
    />
  );
};
