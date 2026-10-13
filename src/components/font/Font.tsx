import { fontFamilyOptions } from 'src/constants/articleProps';
import { Select } from 'src/ui/select/Select';

import type { OptionType, PropsFormElements } from 'src/constants/articleProps';

export const Font = ({
  selected,
  setSelected,
}: PropsFormElements): React.JSX.Element => {
  const options = fontFamilyOptions;
  const handleOptionSelect = (option: OptionType): void => {
    setSelected('fontFamilyOption', option);
  };

  return (
    <>
      <Select
        selected={selected}
        onChange={handleOptionSelect}
        options={options}
        title="Шрифт"
      />
    </>
  );
};
