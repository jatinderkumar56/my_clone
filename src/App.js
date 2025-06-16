
import './App.css';
import AboveNavbar from './Component/AboveNavbar';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Slider from './Component/Slider';
import data from './data/data.json'
import Offer from './Component/Offer';
import Heading from './Component/Heading';
import StarProduct from './Component/StarProduct';
import HotAccessoriesMenu from './Component/HotAccessoriesMenu';
import HotAccessories from './Component/HotAccessories';
import ProductReview from './Component/ProductReview';
import Videos from './Component/Videos';
import Banner from './Component/Banner';
import Footer1 from './Component/Footer1';
import Footer2 from './Component/Footer2';
import Footer3 from './Component/Footer3';
import Footer4 from './Component/Footer4';
function App() {
  return (
   
    
    <Router>
    <AboveNavbar/>
    <Navbar/>
    <Slider start={data.banner.start} />
    <Offer offer={data.offer}/>
    <Heading title='STAR PRODUCTS'/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading title='HOT ACCESSORIES'/>
    <HotAccessoriesMenu/>
    <Routes>
    <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music}  musicCover={data.hotAccessoriesCover.music}/> }/>
    <Route exact path='/smartdevice' element={<HotAccessories smartdevice={data.hotAccessories.smartDevice}  smartdeviceCover={data.hotAccessoriesCover.smartDevice}/> }/>
    <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home}  homeCover={data.hotAccessoriesCover.home}/> }/>
    <Route exact path='/lifestyle' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle}  lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/> }/>
    <Route exact path='/mobileaccess' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories}  mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/> }/>
    </Routes>

    <Heading title='PRODUCT REVIEWS'/>
    <ProductReview productreview={data.productReviews}/>
    <Heading title='VIDEOS'/>
    <Videos videos={data.videos}/>
    <Heading title='IN THE PRESS'/>
    <Banner end={data.banner.end}/>

    <Footer1/>
    <Footer2/>
    <Footer3 footer={data.footer}/>
    
    </Router>


  
  
  );
}

export default App;
// <Route >
//  <HotAccessories music={data.hotAccessories.music}  musicCover={data.hotAccessoriesCover.music}/>  
//     </Route>