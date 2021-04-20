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
          src='https://scontent.fymy1-2.fna.fbcdn.net/v/t1.18169-9/12507270_966431780060863_1575329681967091449_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a9b1d2&_nc_ohc=nfFsBS7xxBAAX-9lzZy&_nc_ht=scontent.fymy1-2.fna&oh=2bcc86ff224634914c12b630bbce8a4e&oe=609FC240'
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
