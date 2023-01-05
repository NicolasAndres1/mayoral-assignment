import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from '../Card';

const image = 'https://www.mayoral.com/wcsstore/mayoral/images/catalog/mayoral/camiseta-rayas-bebe-nino_id_22-52002-700-L-4.JPG?v=20211210120939';
const name = 'Camiseta rayas bebé niño';
const price = 31.99;
const discountPercentage = 50;
const discountPrice = 15.99;

describe('Card component', () => {
  it('Should render Card component', () => {  
    const component = render(
      <Card
        image={image}
        name={name}
        price={price}
        discountPercentage={discountPercentage}
        discountPrice={discountPrice}
      />,
    );
  
    expect(component.getByTestId('card')).toBeInTheDocument();
  })

  it('Should display the DiscountLabel when has discount', () => {
    const component = render(
      <Card
        image={image}
        name={name}
        price={price}
        discountPercentage={discountPercentage}
        discountPrice={discountPrice}
      />,
    );

    expect(component.getByTestId('discount-label')).toBeVisible();
    expect(component.getByTestId('price-label')).toHaveStyle('text-decoration: line-through');
  })

  it('Should not display the DiscountLabel when has not discount', () => {
    const component = render(
      <Card
        image={image}
        name={name}
        price={price}
        discountPercentage={null}
        discountPrice={null}
      />,
    )

    expect(component.queryByTestId('discount-label')).toBeNull();
  })

  it('The image should has alt text', () => {
    const component = render(
      <Card
        image={image}
        name={name}
        price={price}
        discountPercentage={discountPercentage}
        discountPrice={discountPrice}
      />,
    );

    expect(component.getByAltText(`producto: ${name}`));
  })
})
