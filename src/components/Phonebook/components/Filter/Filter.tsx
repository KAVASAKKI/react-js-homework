import { Label, Input } from './Filter.styled';

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Filter = ({ onChange, value }: Props) => (
  <Label>
    Find contacts by name
    <Input type="text" name="filter" onChange={onChange} value={value} />
  </Label>
);

export default Filter;
