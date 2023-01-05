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
import { Product } from 'types';

export default function Card({ image, name, price, discountPercentage, discountPrice }: Product): JSX.Element {
  return (
    <StyledCard data-testid={'card'}>
      <Image unoptimized loader={() => image} src={image} width={300} height={300} alt={`producto: ${name}`} />
      <NameLabel> {name} </NameLabel>
      <PriceWrapper data-testid={'price-wrapper'}>
        <PriceLabel data-testid={'price-label'} discountPercentage={discountPercentage}> {price} € </PriceLabel>
        {discountPercentage && (
          <DiscountLabel
            data-testid={'discount-label'}
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
