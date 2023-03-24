import './ShopContainer.scss';
import { data } from '../../assets/mockData';
import { useContext, useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import { BasketContext } from '../../context/BasketContext';

// 2Xh43!3)NkvWPp%GL2uCDx*E
const ShopContainer = () => {
  const [flavour, setFlavour] = useState('all');
  const { basket } = useContext(BasketContext);
  const [products, setProducts] = useState([]);

  // const api = new WooCommerceRestApi({
  //   url: baseUrl,
  //   consumerKey: consumerKey,
  //   consumerSecret: consumerSecret,
  //   version: 'wc/v3',
  // });

  // useEffect(() => {
  //   api
  //     .get('products', {
  //       per_page: 20,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // }, []);

  const handleChange = (event) => {
    setFlavour(event.target.value);
  };

  const filtered = data.filter(({ item, flavours }) => {
    if (flavour === 'all') return data;
    return flavours.toLowerCase().includes(flavour.toLowerCase());
  });

  return (
    <div className='container'>
      <section className='hero'>
        <div className='hero__header'>
          <h2 className='hero__header-title'>Biffbar</h2>

          <p className='hero__header-price'>
            <span className='hero__header-cross'>£12.99</span> £9.99
          </p>
        </div>
      </section>

      {/* <section>
        <h1>BASKET TEST</h1>
        {basket &&
          basket.map((item) => {
            return (
              <div style={{ color: 'white' }}>
                <h1>Name: {item.name}</h1>
                <h2>Flavour : {item.flavours}</h2>
                <h2>Quantity : {item.quantity}</h2>
              </div>
            );
          })}
      </section> */}

      <div>
        <h1>Flavour</h1>

        <select
          style={{ color: 'black' }}
          value={flavour}
          onChange={handleChange}
        >
          <option value='all'>All</option>
          <option value='Dragon Paradise'>Dragon Paradise</option>
          <option value='Love Story' selected>
            Love Story
          </option>
          <option value='Sparkling Orange Energy Drink'>
            Sparkling Orange Energy Drink
          </option>
          <option value='Frozen Chocolate'>Frozen Chocolate</option>
          <option value='Fuji Grape'>Fuji Grape</option>
          <option value='Rainbow'>Rainbow</option>
          <option value='Sparkling Wild Berries'>Sparkling Wild Berries</option>
          <option value='Straw-Coldada Ice'>Straw-Coldada Ice</option>
          <option value='Summer Peach Punch'>Summer Peach Punch</option>
        </select>
      </div>

      <div className='products'>
        {filtered &&
          filtered.map((item) => {
            return <Product product={item} />;
          })}
      </div>
    </div>
  );
};

export default ShopContainer;
