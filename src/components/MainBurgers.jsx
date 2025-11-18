import Carousel from './Carousel';
import { MENU_OPTIONS } from '../constants/MenuOptions';
import Button from './Button';

const MainBurgers = () => {
  const OPTIONS = {};

  const selectedBurgers = MENU_OPTIONS.filter((burger) => burger.highlight);

  return (
    <div className="mt-20">
      <h2 className="my-3 text-center text-xl font-semibold text-primary">
        Confira nossos deliciosos hambúrgueres
      </h2>
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-4">
        <Carousel burgers={selectedBurgers} options={OPTIONS} />
        <Button variant={{ type: 'link' }} to="/menu">
          Quero ver o cardápio completo
        </Button>
      </div>
    </div>
  );
};

export default MainBurgers;
