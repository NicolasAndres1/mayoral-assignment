import {
  StyledCard,
  Img,
  NameLabel,
  PriceWrapper,
  PriceLabel,
  DiscountLabel,
  Button,
} from '../styles/Card';
import PropTypes from 'prop-types';

export default function Card({ img, name, price, discountPercentage, discountPrice }) {
  return (
    /********************** AGREGAR COMPONENTE IMAGE DE NEXT ************************************************/
    <StyledCard>
      <Img src={img} alt="photo" />
      <NameLabel> {name} </NameLabel>
      <PriceWrapper>
        <PriceLabel discount={discountPercentage}> {price} € </PriceLabel>
        {discountPercentage && (
          <DiscountLabel
            discount={discountPercentage}
          >{`${discountPrice} €(-${discountPercentage}%)`}</DiscountLabel>
        )}
      </PriceWrapper>
      <Button> AÑADIR </Button>
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
