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
          src='https://cdn.sanity.io/images/0i3mmwza/production/0f799b81a9ed0fff1c4955d9cb89e561f5bc8816-960x960.jpg?w=2000&h=2000&fit=max'
          alt='Generic placeholder'
        />
        <Media.Body>
          <h5 className='font-weight-bold mb-0'>Hello Friends,</h5>
          <p className='welcome-text'>
            My name is Jaeri and I am a front-end developer.
          </p>
        </Media.Body>
      </Media>
      {/* AUTHOR INTRO ENDS */}
    </Col>
  </Row>
);

export default AuthorIntro;
