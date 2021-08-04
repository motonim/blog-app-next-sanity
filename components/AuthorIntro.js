import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => (
  <Row>
    <Col md='8'>
      {/* AUTHOR INTRO STARTS */}
      <Media className='mb-4 admin-intro'>
        <Image
          roundedCircle
          width={64}
          height={64}
          className='mr-3'
          src='https://cdn.sanity.io/images/0i3mmwza/production/6a3f80dab7ec765c9c1adc793c2e3bd0da344314-1080x1080.jpg?w=2000&h=2000&fit=max'
          alt='Generic placeholder'
        />
        <Media.Body>
          <h5 className='font-weight-bold mb-0'>Hello Friends,</h5>
          <p className='welcome-text'>
            My name is Jaeri and I am a front-end developer. Here is my personal
            blog talking about web dev stuffs I'm currently learning (these
            days, it's React!) as well as my personal life.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>
);

export default AuthorIntro;
