import styled from 'styled-components';

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 350px;
  border: 1px solid #0091c6;
  border-radius: 5px;
  box-shadow: 0 0 1px;
  padding: 10px 5px 25px 5px;
  margin: 10px 0;
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 60%;
  border-radius: 3px;
  padding: 0;
`;

export const NameLabel = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px 0 0 0;
`;

export const PriceWrapper = styled.div`
  margin: auto;
  text-align: center;
`;

export const PriceLabel = styled.p`
  text-decoration: ${(props) => (props.discountPercentage ? 'line-through' : 'none')};
`;

export const DiscountLabel = styled.p`
  font-weight: bold;
  color: ${(props) => (props.discountPercentage ? '#d9534f' : 'black')};
`;

export const Button = styled.button`
  background-color: #0172ea;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
`;
