import imgSlogan from '../assets/imgs/img-slogan.png';

const Slogan = () => {
  return (
    <div className="bg-primary text-foreground h-[350px] rounded-md flex items-center">
      <div className="text-6xl font-semibold flex flex-col p-5 w-[65%]">
        <h2>Uma explosão de experiências </h2>
        <h2>e sabores inesquecíveis !</h2>
      </div>
      <div className="w-[35%]">
        <img src={imgSlogan} alt="Imagem do Slogan" className="object-cover" />
      </div>
    </div>
  );
};

export default Slogan;
