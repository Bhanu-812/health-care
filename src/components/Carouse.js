import Carousel from 'react-bootstrap/Carousel';

function Carouse() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-75 h-100 rounded mx-auto"
          src="https://c0.wallpaperflare.com/preview/386/354/385/analysis-hospital-doctor-medical.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>❤</h3>
          <h2>The world's best doctors at your fingertips</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-75 rounded mx-auto"
          src="https://media.istockphoto.com/id/1224288701/photo/doctor-hands-with-medical-gloves-holding-child-hands-and-red-heart-health-insurance-donation.jpg?s=612x612&w=0&k=20&c=5thQFqGZ6YgGwRq0RMmdk2z8c8AixrxCcI_5dy61Eas="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>You can trust us with your life</h3>
          <p>you are always monitored</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 rounded mx-auto"
          src="https://media.istockphoto.com/id/184874014/photo/heart-stethoscope-and-ekg.jpg?b=1&s=170667a&w=0&k=20&c=RQevOO6KM60mq3eIHyL-NDKYeZGPb7UwEn3j5CAWVD8="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>👨‍⚕️</h3>
          <p>
            Don't worry you are under our control
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouse;