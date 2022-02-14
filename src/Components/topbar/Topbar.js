import './Topbar.scss';
import {Person, Mail} from "@material-ui/icons";

function topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className='wrapper'>
            <div className='left'>
                <a href='#intro' className='logo'> Varun.</a>
                <div className='itemContainer'>
                    <Person className='icon' />
                    <span>+91 7042929823</span>
                </div>
                <div className='itemContainer'>
                    <Mail className='icon' />
                    <span>vsvarun.sharma2112@gmail.com</span>
                </div>
            </div>
            <div className='right'>
                <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                  <span className='line1'></span>
                  <span className='line2'></span>
                  <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default topbar;