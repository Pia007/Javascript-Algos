import { Routes, Route} from 'react-router-dom';
// import ScrollToTop from './ScrollToTop';
import Header from './header/Header';
import Home from '../pages/Home';
// import DashboardPanel from '../pages/Home';
import Info from '../pages/Info';
import Footer from './footer/Footer';


const Main = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default Main;