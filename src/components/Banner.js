import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../essets/img/header-img.svg";
import { useState, useEffect } from 'react';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Mobile Developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta )

        return () => { clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring (0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);

        } else if (isDeleting && updatedText === ''){
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);  
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row classname="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tag-line"> Welcome to my portfolio </span>
                    <h1> {"Hi I'm Samuel Njoka "}<span classname="wrap">{text}</span> </h1>
                    <p> Description of Occupation Web developers put together websites. They may do this with individual clients or as part of a large company. First, they find out what the expectations for the website are: what it is going to be used for, who the audience will be, and how it should appear to that audience </p>
                    <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md="6" xl="5">
                        <img  src={ headerImg } alt="header image"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}