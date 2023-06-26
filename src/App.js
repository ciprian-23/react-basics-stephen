import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './imagess/alexa.png';
import CortanaImage from './imagess/cortana.png';
import SiriImage from './imagess/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal digital assistents</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                user="@alexa11"
                image={AlexaImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                user="@cortana22"
                image={CortanaImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Siri"
                user="@siri33"
                image={SiriImage}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
