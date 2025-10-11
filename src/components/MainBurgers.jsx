import Carousel from './Carousel';
import burgerChicken from '../assets/imgs/burger-chicken.jpg';
import burgerExplosive from '../assets/imgs/burger-explosive.jpg';
import cheeseburgerDouble from '../assets/imgs/cheeseburger-double.jpg';
import simpleBurger from '../assets/imgs/burger-simple.jpg';
import veganoBurger from '../assets/imgs/vegano-burger.jpg';
import Button from './Button';

const MainBurgers = () => {
  const OPTIONS = {};
  const MAIN_BURGER = [
    { id: 1, imgUrl: burgerChicken },
    { id: 2, imgUrl: burgerExplosive },
    { id: 3, imgUrl: cheeseburgerDouble },
    { id: 4, imgUrl: simpleBurger },
    { id: 5, imgUrl: veganoBurger },
  ];

  return (
    <div className="my-5">
      <h2 className="my-7 text-center text-2xl font-semibold text-primary">
        Confira nossos deliciosos hambúrgueres
      </h2>
      <div className="flex flex-col items-center justify-center">
        <Carousel burgers={MAIN_BURGER} options={OPTIONS} />
        <Button>Quero ver o cardápio completo</Button>
      </div>
    </div>
  );
};

export default MainBurgers;
