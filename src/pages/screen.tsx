import Header from '../component/header'
import About from './about';

import Home from './home';
import Menu from './menu';

const Screen = () => {
  return (
    <div 
    style={{background: "linear-gradient(to left ,#fee685 ,#fee685  , #f3e8ff"}}
    >
      <Header />
      <Home/>
      <About/>
      <Menu/>

      
    </div>
  );
};

export default Screen;
