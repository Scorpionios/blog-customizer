import { fontColors } from 'src/constants/articleProps';
import { Select } from 'src/ui/select/Select';

import type { OptionType, PropsFormElements } from 'src/constants/articleProps';

export const ColorFont = ({
  selected,
  setSelected,
}: PropsFormElements): React.JSX.Element => {
  const options = fontColors;
  const handleOptionSelect = (option: OptionType): void => {
    setSelected('fontColor', option);
  };

  return (
    <>
      <Select
        selected={selected}
        onChange={handleOptionSelect}
        options={options}
        title="Цвет шрифта"
      />
    </>
  );
};
