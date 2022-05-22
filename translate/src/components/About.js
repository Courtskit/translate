import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Card } from 'react-bootstrap';

export const About = () => {
  return (
    <div className="center-page">
      <h1 className='translate'>translate</h1>
      <Card>
        <Card.Body>
          <Card.Title> Translate with OpenAI </Card.Title>
          <Card.Text> 
            Translate is a web application that utilizes the OpenAI API to translate an English phrase into other languages. OpenAI provides the ability to virtually solve nearly any task that involves language processing. The OpenAI API offers a spectrum of models to choose from, suitable for a variety of tasks that a user may want to accomplish. Within this application, we send a prompt to the API requesting an English phrase to be translated into multiple languages. It then gives us the response which we display to the user. 
          </Card.Text>
          <Card.Text> 
            Click here to learn more about <Card.Link className="" href="https://beta.openai.com/overview">OpenAI</Card.Link>!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='space-above-below'>
        <Card.Body>
          <Card.Title> Courtney Smith </Card.Title>
          <Card.Text> So glad you’re here! I'm Courtney, a Full Stack Developer, passionate in Front-End, UX, and UI. </Card.Text>
          <Card.Link className="icon-size" href="https://www.linkedin.com/in/courtneycodes/"><FontAwesomeIcon icon={faLinkedin}>LinkedIn</FontAwesomeIcon></Card.Link>
          <Card.Link className="icon-size" href="https://github.com/Courtskit"><FontAwesomeIcon icon={faGithub}>GitHub</FontAwesomeIcon></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;