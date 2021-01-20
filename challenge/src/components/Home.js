import React from 'react';
import Header from './HeaderLight';
import { Input, Form, Row, Col, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';
import img from './assets/img/i.png';
import { ArrowRightOutlined,TwitterOutlined,
    FacebookOutlined,
    LinkedinOutlined,
    InstagramOutlined } from '@ant-design/icons';
import bg10 from './assets/img/bg10.png';
import bg11 from './assets/img/bg11.png';

const Bold = ({ children }) => <Text style={{ fontWeight: 'bold' }}>{children}</Text>

const { Text } = Typography;
const { Meta } = Card;

const Home = () => {
    return (
        <div>
            <Header />
            <Row>
                <Col span={2}></Col>
                <Col span={10}><br /><br />
                    <Text strong><p style={{ fontSize: "400%", color: "#00B478", fontFamily: "Manjari Regular" }}>
                    We Empower  <br/> Makers <br/> Using Digital <br/> Platforms.</p></Text>
                    <br /><br />
                </Col>
                {/* <Col span={2}></Col> */}
                <Col span={12}><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Text strong>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "150%" }}>
                            <a style={{ color: "#00B478" ,fontWeight: 'bold'}}>Kelale Tect PLC</a> is an international, remote 
                            <Bold> IT agency </Bold>based in<br /> Ethiopia working on wide range of software products--from <br/>
                            <a style={{ color: "black" ,fontWeight: 'bold'}}> websites</a> and <a style={{ color: "black" ,fontWeight: 'bold'}}>mobile apps</a> to fully integrate 
                            <a style={{ color: "black" ,fontWeight: 'bold'}}> custom</a> <br/> <a style={{ color: "black" ,fontWeight: 'bold'}}>systems</a> and 
                            <a style={{ color: "black" ,fontWeight: 'bold'}}> open source</a> libraries
                    </p><br />
                </Text>    
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><br /><br />
                    <h1 style={{ fontSize: "450%", color: "#00B478", fontFamily: "Manjari Regular" }}>01</h1>
                    <Text strong>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "150%" }}>
                            <a style={{ color: "#00B478" }}>You describe</a> the project. <br /> Together we set the PRD, timeline & pricing.
                    </p><br />
                    </Text>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "120%" }}>
                        Tell us the idea of the project you have <br /> in mind.We will discuss it
                         together to <br />come with requirements, timelines and pricing.</p><br />
                    <Text strong><Link style={{ color: "#00B478" }} to="./newsletterdetail">Get started now <ArrowRightOutlined /></Link></Text>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}><br /><br />
                    <h1 style={{ fontSize: "450%", color: "#00B478", fontFamily: "Manjari Regular" }}>02</h1>
                    <Text strong>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "150%" }}>
                            <a style={{ color: "#00B478" }}>We prototype</a> the design. <br /> You help us improve it with <br /> feedback rounds.
                    </p><br />
                    </Text>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "120%" }}>
                        We will prepare an initial design based on the project description. With your helpwe will improve the design with a few feedbackrounds.</p><br />
                    <Text strong><Link style={{ color: "#00B478" }} to="./newsletterdetail">Find your contact person <ArrowRightOutlined /></Link></Text>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}><br /><br />
                    <h1 style={{ fontSize: "450%", color: "#00B478", fontFamily: "Manjari Regular" }}>03</h1>
                    <Text strong>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "150%" }}>
                            <a style={{ color: "#00B478" }}>We develop </a>the final design <br /> with excellent quality. <br /> We deliver on time.
                    </p><br />
                    </Text>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "120%" }}>
                        Once we have the final design, we get  <br /> to implementation and deliver your <br /> project as promised. Then you'll tweet great
                       things about us.</p><br />
                    <Text strong><Link style={{ color: "#00B478" }} to="./newsletterdetail">Tell your friends <ArrowRightOutlined /></Link></Text>
                </Col>
            </Row><br /><br />

            <Row>
                <Col span={24}>
                    <img src={img} alt={""} width={"100%"} />
                </Col>
            </Row><br/><br/>

            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src={bg10} />
                        }
                    >
                        <Text strong>Assistance Buisnesses Impacted <br /> by COVID-19 to Go Digital</Text><br />
                        <Text style={{ fontSize: "12px", fontFamily: "DejaVu Sans Light" }}>2021-01-18</Text><br /><br />
                        <Meta
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem est,
                             posuere venenatis quam ut, sodales interdum enim. Integer felis nisl, 
                             sollicitudin sit amet orci non, "
                        /><br />
                        <Text><Link style={{ color: "#00B478" }} to="./newsletterdetail">Read More <ArrowRightOutlined /></Link></Text>
                    </Card>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src={bg11} />
                        }
                    >
                        <Text strong>Kelale Tech Gets a New Brand & </Text>
                        <Text strong>Website Refresh</Text> <br />
                        <Text style={{ fontSize: "10px", fontFamily: "DejaVu Sans Light" }}>2021-01-18</Text><br /><br />
                        <Meta
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem est,
                           posuere venenatis quam ut, sodales interdum enim. Integer felis nisl, 
                           sollicitudin sit amet orci non, "
                        /><br />
                        <Text><Link style={{ color: "#00B478" }} to="./newsletterdetail">Read More <ArrowRightOutlined /></Link></Text>
                    </Card>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card
                        style={{ width: 300 }}

                    >
                        <Text><Link style={{ color: "#00B478" }} to="./newsletter">View all articles <ArrowRightOutlined /></Link></Text><br/><br/>
                        <Text><p>Get articles in your inbox when <br /> they get published here.</p></Text><br />
                        <Text><p>YOUR EMAIL: </p></Text><br/>
                        <Form>
                            <Form.Item required>
                                <Input />
                            </Form.Item>
                        </Form>
                        <Text><Link style={{ color: "black" }} to="./newsletter">SUBSCRIBE NOW <ArrowRightOutlined /></Link></Text>
                        <br /><br /><br />
                        <Text><p>Follow Us</p></Text>
                        <br /><br />
                        <Row>
                            <Col span={4}>
                                <TwitterOutlined />
                            </Col>
                            <Col span={4}>
                                <FacebookOutlined />
                            </Col>
                            <Col span={4}>
                                <InstagramOutlined />
                            </Col>
                            <Col span={4}>
                                <LinkedinOutlined />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Home;