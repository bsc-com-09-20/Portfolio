import { Container, Row, Col } from "react-bootstrap";
import  Carousel  from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import meter1 from  "../essets/img/meter1.svg";
import meter2 from  "../essets/img/meter2.svg";
import meter3 from  "../essets/img/meter3.svg";
import colorSharp from "../essets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skil-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                            Description of Occupation Web developers put together websites. They may do this with individual clients or as part of a large company. First, they find out what the expectations for the website are: what it is going to be used for, who the audience will be, and how it should appear to that audience 
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="image" />
                                    <h5>game Development</h5>
                                </div>
                            </Carousel>
                        </div>  
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} />

        </section>
      )

} 