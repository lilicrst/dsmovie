import {ReactComponent as GithubIcon} from 'assets/img/Vector.svg';
import './styles.css'

function Navbar() {
    return (
      <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/lilicrst">
              <div className='dsmovie-contact-contaier'>
                <GithubIcon/>
                <p className='dsmovie-contact-link'>/devsuperior</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;