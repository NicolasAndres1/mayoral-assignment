import Image from 'next/image';
import PropTypes from 'prop-types';
import {
  StyledCard,
  Img,
  NameLabel,
  PriceWrapper,
  PriceLabel,
  DiscountLabel,
  Button,
} from '../styles/Card';
import { ANADIR_LABEL } from '../constants';

export default function Card({ img, name, price, discountPercentage, discountPrice }): JSX.Element {
  return (
    <StyledCard>
      <Image loader={() => img} src={img} width={300} height={300} alt="photo" />
      <NameLabel> {name} </NameLabel>
      <PriceWrapper>
        <PriceLabel discountPercentage={discountPercentage}> {price} € </PriceLabel>
        {discountPercentage && (
          <DiscountLabel
            discountPercentage={discountPercentage}
          >{`${discountPrice} €(-${discountPercentage}%)`}</DiscountLabel>
        )}
      </PriceWrapper>
      <Button> {ANADIR_LABEL} </Button>
    </StyledCard>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
  discountPrice: PropTypes.number,
};
