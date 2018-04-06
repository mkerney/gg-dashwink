import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
// import { configureStore } from './store/configureStore';

import { Root} from './containers/Root';
import Home from './containers/Home'
import GetStarted from './components/GetStarted'
import Setup from './containers/Setup'
import Gender from './components/Setup/Gender'
import Sizes from './components/Setup/Sizes'
import SetupStyle from './components/Setup/SetupStyle'
import Category from './components/Setup/Category'
import Brands from './components/Setup/Brands'
import SetupProfile from './components/Setup/SetupProfile'

import Shop from './containers/Shop'
import AllItems from './components/Shop/AllItems'
import YourWinks from './components/Shop/YourWinks'
import JustForYou from './components/Shop/JustForYou'
import Collections from './components/Shop/Collections'

import Profile from './containers/Profile'
import MyProfile from './components/Profile/MyProfile'
import EditProfile from './components/Profile/EditProfile'
import GenderType from './components/Profile/GenderType'
import EmailNotifications from './components/Profile/EmailNotifications'
import Faq from './components/Profile/Faq'
import TermService from './components/Profile/TermService'
import PrivacyPolicy from './components/Profile/PrivacyPolicy'

import Explore from './containers/Explore'
import NewItems from './components/Explore/NewItems'
import Trending from './components/Explore/Trending'
import OnSale from './components/Explore/OnSale'
import TopPicks from './components/Explore/TopPicks'
import Women from './components/Explore/Women'
import Men from './components/Explore/Men'

import Style from './containers/Style'
import StyleGame from './components/Style/StyleGame'
import StyleResult from './components/Style/StyleResult'

import Alert from './containers/Alert'
import SaleAlert from './components/Alert/SaleAlert'
import CreatedAlert from './components/Alert/CreatedAlert'


import Test from './Test'

import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore';
const store = configureStore()



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />

        <Route path="/profile" component={Profile}>
          <Route path="/myprofile" component={MyProfile}></Route>
          <Route path="/editprofile" component={EditProfile}></Route>
          <Route path="/gender_type" component={GenderType}></Route>
          <Route path="/email_notifications" component={EmailNotifications}></Route>
          <Route path="/faq" component={Faq}></Route>
          <Route path="/privacy_policy" component={PrivacyPolicy}></Route>
          <Route path="/terms_service" component={TermService}></Route>
        </Route>

        <Route path ="/setup" component={Setup}>
          <Route path="/gender"  component={Gender}></Route>
          <Route path="/style"  component={Style}></Route>
          <Route path="/category"  component={Category}></Route>
          <Route path="/size"  component={Sizes}></Route>
          <Route path="/brands"  component={Brands}></Route>
          <Route path="/profile"  component={SetupProfile}></Route>
        </Route>

        <Route path="/shop" component={Shop}>
          <Route path="/items" component={AllItems}></Route>
          <Route path="/collections" component={Collections}></Route>
          <Route path="/my_winks" component={YourWinks}></Route>
          <Route path="/for_you" component={JustForYou}></Route>
          <Route path="/wink/:id" component={AllItems}></Route>
        </Route>

        <Route path="/explore" component={Explore}>
          <Route path="/new_items" component={NewItems}></Route>
          <Route path="/trending" component={Trending}></Route>
          <Route path="/on_sale" component={OnSale}></Route>
          <Route path="/top_picks" component={TopPicks}></Route>
          <Route path="/women" component={Women}></Route>
          <Route path="/men" component={Men}></Route>
        </Route>
        <Route path="/style" component={Style}>
          <Route path="/style_game" component={StyleGame}></Route>
          <Route path="/style_result" component={StyleResult}></Route>
        </Route>
        <Route path="/alert" component={Alert}>
          <Route path="/sale_alert" component={SaleAlert}></Route>
          <Route path="/created_alert" component={CreatedAlert}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
