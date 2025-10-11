import imgSlogan from '../assets/imgs/img-slogan.png';

const Slogan = () => {
  return (
    <div className="bg-primary text-foreground h-[350px] rounded-md flex items-center">
      <div className="text-2xl md:text-6xl font-semibold flex flex-col md:p-5 px-2 break-word">
        <h2>Uma explosão de experiências </h2>
        <h2>e sabores inesquecíveis !</h2>
      </div>
      <div className="md:w-[35%] w-[90%]">
        <img src={imgSlogan} alt="Imagem do Slogan" />
      </div>
    </div>
  );
};

export default Slogan;
