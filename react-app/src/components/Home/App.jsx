

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
import About from '../../views/Header/About';



function App() {
  return (
    <div className="App">
      <Lnading/>
      <Animation/>
      <Container/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
