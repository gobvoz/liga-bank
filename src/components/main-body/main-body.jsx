import MainSlider from '../main-slider/main-slider';
import MainServices from '../main-services/main-services';
import MainLoanCalculator from '../main-loan-calculator/main-loan-calculator';
import MainContact from '../main-contact/main-contact';

const MainBody = () => {
  return (
    <main className="page-main">
      <MainSlider />
      <MainServices />
      <MainLoanCalculator />
      <MainContact />
    </main>
  );
};

export default MainBody;
