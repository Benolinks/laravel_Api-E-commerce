import Header from '../component/header'
import SlideShow from '../component/slideShow'
import Home from './home';

const Screen = () => {
  return (
    <div 
    style={{background: "linear-gradient(to left ,#fee685 ,#fee685  , #f3e8ff"}}
    >
      <Header />
      {/* <SlideShow /> */}
      <Home/>
      
    </div>
  );
};

export default Screen;
