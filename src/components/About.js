import React from 'react';
import Header from './HeaderLight';
import bg from './assets/img/bg.png';
import bg2 from './assets/img/bg2.png';
import bg3 from './assets/img/bg3.png';
import bg4 from './assets/img/bg4.png';
import bg5 from './assets/img/bg5.png';
import bg6 from './assets/img/bg6.png';
import bg7 from './assets/img/bg7.png';
import bg8 from './assets/img/bg8.png';

import { Typography, Row, Col, Card } from 'antd';

const { Text } = Typography;

const About = () => {
    return (
        <div>
            <Header />
            <img src={bg} alt={""} width={"100%"} />
            <Row>
                <Col span={4}></Col>
                <Col span={12}><br /><br />
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>our goal is to bring your ideas to life.
                    We use the latest technologies to guide you into the the invetiable digital world. In addition to implementing
                    your plans, we also give a comphrensive training on tech supported marketing.
                  </p><br /><br />
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row>
                <Col span={24}>
                    <img src={bg2} alt={""} width={"100%"} />
                </Col>
            </Row>
            <Row>
                <Col span={4}></Col>
                <Col span={12}><br /><br />
                    <Text strong><p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>It started like this.</p></Text>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "150%" }}>
                        The team was founded in 2016 the initiative to build a demo website for Addis Ababa science and technology
                        university in a competition to join a tech club there. Throughout these years we have developed our individual
                        and teamwork skills on multiple projects.
                    </p><br /><br />
                </Col>
                <Col span={8}><br /><br />
                    <img src={bg3} alt={""} width={"100%"} />
                </Col>
            </Row>
            <Row>
                <Col span={3}></Col>
                <Col span={12}>
                    <img src={bg4} alt={""} />
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row>
                <Col span={6}><br /><br />
                    <img src={bg5} alt={""} />
                </Col>
                <Col span={12}><br /><br />
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "250%", fontStyle: "bold" }}>
                        finally  in August 2019, kelale tech registered as PLC under Ethiopian Commerical registration.
                    </p><br /><br />
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row>
                <Col span={3}></Col>
                <Col span={12}>
                    <Text strong><p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>What makes us unique</p></Text>
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row>
                <Col span={6}><br /><br />
                    <img src={bg6} alt={""} />
                </Col>
                <Col span={6}><br /><br />
                    <Text>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "150%" }}>our energetic approach to</p>
                    </Text>
                    <Text strong><p style={{ fontFamily: "Manjari Regular", fontSize: "250%" }}>solve our clients' problems </p></Text>
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row>
                <Col span={13}></Col>
                <Col span={3}>
                    <Text>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "150%" }}>our</p>
                    </Text>
                    <Text strong><p style={{ fontFamily: "Manjari Regular", fontSize: "250%" }}>     communication mechanism</p></Text>
                </Col>
                <Col span={8}>
                    <img src={bg7} alt={""} width={"75%"} />
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <img src={bg8} alt={""} />
                </Col>
                <Col span={3}><br /><br />
                    <Text>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "150%" }}>we purposely seek out the</p>
                    </Text>
                    <Text strong><p style={{ fontFamily: "Manjari Regular", fontSize: "250%" }}>Latest trends & technologies </p></Text>
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card style={{ width: 300,height:300, background: "#00B478" }}>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>mobile applications</p>
                    </Card>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card style={{ width: 300,height:300, background: "#00B478" }}>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>content management systems</p>
                    </Card>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card style={{ width: 300,height:300, background: "#00B478" }}>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>Ecommerce systems</p>
                    </Card>
                </Col>
            </Row><br/>
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card style={{ width: 300,height:300, background: "#00B478" }}>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>ERP</p>
                    </Card>
                </Col>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card style={{ width: 300,height:300, background: "#00B478" }}>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>website development</p>
                    </Card>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card style={{ width: 300,height:300, background: "#00B478" }}>
                        <p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>Marketing & Tech consultancy</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default About;