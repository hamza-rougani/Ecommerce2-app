

import Lnading from './pages/landingPage';
import Container from './pages/container/Container';
import Animation from './pages/animation/Animation';
import Footer from './pages/footer/Footer';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'

function App() {
  return (
    <div className="App">
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <Lnading/>
      <Animation/>
      <div className='co'>
          <Container/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
