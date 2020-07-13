import React, { useEffect,useState  } from 'react';
import ProductList from '../product/components/ProductList.js'
import { useSelector, useDispatch} from 'react-redux';
import { listProducts } from '../actions/product_actions';
import { Select } from 'semantic-ui-react'
import './Main.css';

const Main = (props) => {
  const category = props.match.params.id ? props.match.params.id : '';
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(category));
    return ()=>{};
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  return (
    <React.Fragment>
    <ul className="filter">
  <li className="main-search">
    <form onSubmit={submitHandler}>
      <input
        name="searchKeyword"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  </li>
  <li className="main-sort">
    <select name="sortOrder" onChange={sortHandler}>
      <option value="">Sort By Latest</option>
      <option value="lowest">Sort By Price High-low</option>
      <option value="highest">Sort By Price Low -high</option>
    </select>
  </li>
</ul>
    <ProductList items={products} />;
    </React.Fragment>
  )
}
export default Main;
