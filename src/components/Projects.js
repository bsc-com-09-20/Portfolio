import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../essets/img/color-sharp2.png";
import projImg1 from "../essets/img/project-img1.png";
import projImg2 from "../essets/img/project-img2.png";
import projImg3 from "../essets/img/project-img3.png";

export const Projects = () => {
    
    const projects = [
            {
                title: "Business startup",
                description: "Design & Development",
                imgUrl: projImg1,
            },
            {
                title: "Business startup",
                description: "Design & Development",
                imgUrl: projImg2,
            },
            {
                title: "Business startup",
                description: "Design & Development",
                imgUrl: projImg3,
            },
            {
                title: "Business startup",
                description: "Design & Development",
                imgUrl: projImg1,
            },
            {
                title: "Business startup",
                description:"Design & Development",
                imgUrl: projImg2,
            },
            {
                title: "Business startup",
                description: "Design & Development",
                imgUrl: projImg3,
            },
        ];
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>A project is a work effort made over a finite period of time with a start and 
                        a finish to create a unique product, service, or result. Because a project has 
                            a start and a finish, it is also called a temporary effort or endeavor</p>
           
           <Tab.Container id="project-tabs" defaultActiveKey="first">
           
            <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Third">
                Tab Three
                </Nav.Link>
            </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                        }
                    </Row>

                </Tab.Pane>
                <Tab.Pane eventKey="second">Online restaurant</Tab.Pane>
                <Tab.Pane eventKey="third">DHIS 2</Tab.Pane>
            </Tab.Content>
            </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp} />
        </section>
    )
}