import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from "../components";

function Landing() {
    return (
        <Wrapper>
            <main>
                <nav>
                    <Logo/>
                </nav>
                <div className='container page'>
                    <div className='info'>
                        <h1>
                            job <span>tracking</span> app
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab aspernatur autem
                            exercitationem facilis
                            perferendis perspiciatis quod rerum tempora voluptate.
                        </p>
                        <button className='btn btn-hero'>
                            Login/Register
                        </button>
                    </div>
                </div>
            </main>
        </Wrapper>
    );
}

export default Landing;
