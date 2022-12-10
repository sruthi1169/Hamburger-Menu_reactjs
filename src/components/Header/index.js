import Popup from 'reactjs-popup'

import {Link, withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <div className="pop-up">
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="btn-style"
              testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="icon" />
            </button>
          }
          className="popup-content"
          position="'top right'"
        >
          {close => (
            <div className="modal-container">
              <button
                type="button"
                onClick={() => close()}
                className="close-btn-style"
                testid="closeButton"
              >
                <IoMdClose className="close-icon" />
              </button>
              <ul className="list">
                <li>
                  <Link
                    to="/"
                    onClick={() => close()}
                    className="link-container"
                  >
                    <AiFillHome className="icon" />
                    <p className="modal-items">Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => close()}
                    className="link-container"
                  >
                    <BsInfoCircleFill className="icon" />
                    <p className="modal-items">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </div>
  </nav>
)

export default withRouter(Header)
