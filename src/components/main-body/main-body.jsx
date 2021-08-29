import MainHeader from '../main-header/main-header';
import MainServices from '../main-services/main-services';
import MainLoanCalculator from '../main-loan-calculator/main-loan-calculator';
import MainContact from '../main-contact/main-contact';

const MainBody = () => {
  return (
    <main className="page-main">
      <MainHeader />
      <MainServices />
      <MainLoanCalculator />
      <MainContact />
    </main>
  );
};

export default MainBody;
