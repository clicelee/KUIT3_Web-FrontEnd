import React, { useState } from 'react';
import { Products } from '../App';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import InputBar from './InputBar';

interface Props {
  products: Products[];
  setProducts: React.Dispatch<React.SetStateAction<Products[]>>;
}

const FilterableProductTable: React.FC<Props> = ({ products, setProducts }) => {
  const [filterText, setFilterText] = useState<string>('');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  // emptyProduct 생성x

  // 배열을 추가하는 함수
  const addProduct = (newProduct: Products) => {
    setProducts((previousData: Products[]) => [...previousData, newProduct]);
  };

  // [미션-필수] deleteProduct

  // [미션-선택] editProduct

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />

      {/* props로 addProduct만을 넘겨줌(emptyProduct는 넘겨주지 않음) */}
      <InputBar addProduct={addProduct} />
    </div>
  );
};

export default FilterableProductTable;