import slogan from '../assets/imgs/slogan.png';

const Slogan = () => {
  return (
    <div>
      <img
        src={slogan}
        alt="Banner do Burguermino"
        className="h-[375px] w-full object-fill md:h-auto"
      />
    </div>
  );
};

export default Slogan;
