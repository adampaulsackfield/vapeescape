import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <section className='hero'>
        <div className='hero__header'>
          <h2 className='hero__header-title'>Biffbar</h2>

          <p className='hero__header-price'>
            <span className='hero__header-cross'>£12.99</span> £9.99
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
