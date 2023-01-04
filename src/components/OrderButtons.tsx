import { useEffect, useState } from 'react';
import OrderButton from './OrderButton';

export default function OrderButtons() {
  const [orderBy, setOrderBy] = useState('asc');
  /***** IMPLEMENTAR CONTEXT  ******/
  return (
    <div>
      <OrderButton type="desc" setOrderBy={setOrderBy}>
        -
      </OrderButton>
      <OrderButton type="asc" setOrderBy={setOrderBy}>
        +
      </OrderButton>
    </div>
  );
}
