import Header from '../components/Header';
import Slogan from '../components/Slogan';
import MainBurgers from '../components/MainBurgers';
import PromotionCampaign from '../components/PromotionCampaign';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slogan />
      <MainBurgers />
      <div className="mx-auto my-14 w-[85%] items-center gap-4 md:flex">
        <PromotionCampaign />
        <LocationMap />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
