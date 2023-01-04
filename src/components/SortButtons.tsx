import { SortButtonsWrapper } from 'styles/SortButtons';
import SortButton from './SortButton';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function SortButtons({ setSortByValue }) {
  return (
    <SortButtonsWrapper>
      <SortButton type="desc" setSortByValue={setSortByValue}>
        <FaMinus />
      </SortButton>
      <SortButton type="asc" setSortByValue={setSortByValue}>
        <FaPlus />
      </SortButton>
    </SortButtonsWrapper>
  );
}
