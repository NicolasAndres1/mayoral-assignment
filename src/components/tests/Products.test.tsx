import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Products from '../Products';
import { useProducts } from '../../hooks/useProducts';
import data from '../../../data/data.json';
import { NO_RESULTS_ON_SEARCH } from '../../constants';

jest.mock('../../hooks/useProducts',() => ({ useProducts: () => ({ products: [] }) }));

describe('Products component without products', () => {
  it('Should render Products component', () => {
    const component = render(<Products searchValue='' sortByValue='asc'/>);
    expect(component.getByTestId('products')).toBeInTheDocument();
  })

  it('Should display no results message when there is not products to show', () => {
    const component = render(<Products searchValue='' sortByValue='asc'/>);
    expect(component.getByText(NO_RESULTS_ON_SEARCH)).toBeVisible();
  })
})



