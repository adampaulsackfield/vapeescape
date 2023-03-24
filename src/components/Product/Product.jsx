import './Product.scss';

import { useContext } from 'react';
import { BasketContext } from '../../context/BasketContext';
import { toast } from 'react-toastify';

const Product = ({ product }) => {
  const { basket, setBasket } = useContext(BasketContext);

  const addToBasket = () => {
    const res = basket.filter((item) => item.id === product.id);

    if (res.length) {
      const index = basket.findIndex((obj) => obj.id === product.id);

      console.log(basket);
      basket[index].quantity += 1;
      console.log(basket);
      setBasket([...basket]);
    } else {
      product.quantity = 1;
      setBasket([...basket, product]);
    }

    console.log('res', res);
    console.log(product);
    toast.success(`${product.name}: ${product.flavours} added to basket`);
  };

  return (
    <section className='product'>
      <h2 className='product__title'>{product.name}</h2>
      <img
        className='product__image'
        src={`images/${product.flavours.split(' ').join('')}.jpg`}
        alt=''
      />
      <h3 className='product__flavour'>Flavour: {product.flavours}</h3>
      <p className='product__price'>
        <span className='product__price-prev'>£12.99</span> £{product.price}
      </p>
      Quantity <input type='number' name='' id='' />
      <button className='product__button' onClick={addToBasket}>
        Add to Basket
      </button>
    </section>
  );
};

export default Product;
