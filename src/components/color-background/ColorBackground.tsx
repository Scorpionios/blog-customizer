import { backgroundColors } from 'src/constants/articleProps';
import { Select } from 'src/ui/select/Select';

import type { OptionType, PropsFormElements } from 'src/constants/articleProps';

export const ColorBackground = ({
  selected,
  setSelected,
}: PropsFormElements): React.JSX.Element => {
  const options = backgroundColors;
  const handleOptionSelect = (option: OptionType): void => {
    setSelected('backgroundColor', option);
  };

  return (
    <>
      <Select
        selected={selected}
        onChange={handleOptionSelect}
        options={options}
        title="Цвет фона"
      />
    </>
  );
};
