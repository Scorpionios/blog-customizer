import { contentWidthArr } from 'src/constants/articleProps';
import { Select } from 'src/ui/select/Select';

import type { OptionType, PropsFormElements } from 'src/constants/articleProps';

export const ContentWidth = ({
  selected,
  setSelected,
}: PropsFormElements): React.JSX.Element => {
  const options = contentWidthArr;
  const handleOptionSelect = (option: OptionType): void => {
    setSelected('contentWidth', option);
  };

  return (
    <Select
      selected={selected}
      onChange={handleOptionSelect}
      options={options}
      title="Ширина контента"
    />
  );
};
