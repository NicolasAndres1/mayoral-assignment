import PropTypes from 'prop-types';
import { SortButtonsWrapper } from 'styles/SortButtons';
import SortButton from './SortButton';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { ASC, DESC } from '../constants';

export default function SortButtons({ setSortByValue }): JSX.Element {
  return (
    <SortButtonsWrapper>
      <SortButton type={ASC} setSortByValue={setSortByValue}>
        <FaMinus />
      </SortButton>
      <SortButton type={DESC} setSortByValue={setSortByValue}>
        <FaPlus />
      </SortButton>
    </SortButtonsWrapper>
  );
}

SortButtons.propTypes = {
  setSortByValue: PropTypes.func,
};
