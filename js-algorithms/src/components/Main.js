import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './header/Header';
import Home from '../pages/Home';
import Info from '../pages/Info';
// import Dashboard from './Dashboard';
// import Isogram from './algorithms/Isogram';
// import Twosum from './algorithms/TwoSum';
import Footer from './footer/Footer';
import IsoPage from '../pages/algos/IsoPage';
import FactorializePage from '../pages/algos/FactorializePage';
import ReverseIntPage from '../pages/algos/ReverseIntPage';
import SpinWordsPage from '../pages/algos/SpinWordsPage';
import RomeAndBackPage from '../pages/algos/RomeAndBackPage';
import ReverseWordsPage from '../pages/algos/ReverseWordsPage';
import PalindromePage from '../pages/algos/PalindromePage';
import PalindromeNumPage from '../pages/algos/PalindromeNumPage';
import TwoSumPage from '../pages/algos/TwoSumPage';
import SumAllPage from '../pages/algos/SumAllPage';
import LongestNonRepWordPage from '../pages/algos/LongestNonRepWordPage';
import LongestWordPage from '../pages/algos/LongestWordPage';

//  use a wildcard to import all of the files in algos folder
// import * as algos from './algorithms';
// import '../App.css';


const Main = () => {
    // const [currentDash, setCurrentDash] = useState('home');
    const [color, setColor] = useState('#c32abbc9');

    
    return (
        <div >
            <Header color={color}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<Info />} />
                <Route path="/isogram" element={<IsoPage />} />
                <Route path="/palindrome" element={<PalindromePage />} />
                <Route path="/two-sum" element={<TwoSumPage />} />
                <Route path="/spin-words" element={<SpinWordsPage />} />
                <Route path="/longest-word" element={<LongestWordPage />} />
                <Route path="/factorialize" element={<FactorializePage />} />
                <Route path="/palindrome-num" element={<PalindromeNumPage />} />
                <Route path="/reverse-int" element={<ReverseIntPage />} />
                <Route path="/longest-non" element={<LongestNonRepWordPage />} />
                <Route path="/reverse-words" element={<ReverseWordsPage />} />
                <Route path="/sum-all" element={<SumAllPage />} />
                <Route path="/rome-and-back" element={<RomeAndBackPage />} />
            </Routes>
            <Footer />
        </div>
    )
};

export default Main;