import PropTypes from 'prop-types';
import { ANADIR_LABEL } from '../constants';
import {
  StyledCard,
  Img,
  NameLabel,
  PriceWrapper,
  PriceLabel,
  DiscountLabel,
  Button,
} from '../styles/Card';

export default function Card({ img, name, price, discountPercentage, discountPrice }) {
  return (
    /********************** AGREGAR COMPONENTE IMAGE DE NEXT ************************************************/
    <StyledCard>
      <Img src={img} alt="photo" />
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
