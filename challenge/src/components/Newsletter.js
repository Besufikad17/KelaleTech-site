import React from 'react';
import img from './assets/img/2.png';
import img2 from './assets/img/3.png';
import { Row, Typography, Col, Breadcrumb, Card } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Header from './Header';

const { Text } = Typography;
const { Meta } = Card;
const style = { padding: '8px 0' };

const Newsletter = () => {
    return (
        <div>
            <Header/>
            <img src={img} alt={""} width={"100%"} />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={6}>
                    <div style={style}></div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}></div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}></div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}><Breadcrumb>
                        <Breadcrumb.Item>Internal News</Breadcrumb.Item>
                        <Breadcrumb.Item>Technology</Breadcrumb.Item>
                        <Breadcrumb.Item>Announcement</Breadcrumb.Item>
                    </Breadcrumb></div>
                </Col>
            </Row><br /><br /><br />

            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src={img2} />
                        }
                    >
                        <Text strong>Kelale Tech Gets a New Brand & </Text>
                        <Text strong>Website Refresh</Text> <br />
                        <Text style={{ fontSize: "10px", fontFamily: "DejaVu Sans Light" }}>2021-01-18</Text><br /><br />
                        <Meta
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem est,
                             posuere venenatis quam ut, sodales interdum enim. Integer felis nisl, 
                             sollicitudin sit amet orci non, elementum pellentesque dui. 
                             Nunc molestie hendrerit diam vel fringilla. Sed ornare cursus nibh at mollis.
                              Nunc a dignissim nulla."
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
                                src={img2} />
                        }
                    >
                        <Text strong>Kelale Tech Gets a New Brand & </Text>
                        <Text strong>Website Refresh</Text> <br />
                        <Text style={{ fontSize: "10px", fontFamily: "DejaVu Sans Light" }}>2021-01-18</Text><br /><br />
                        <Meta
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem est,
                             posuere venenatis quam ut, sodales interdum enim. Integer felis nisl, 
                             sollicitudin sit amet orci non, elementum pellentesque dui. 
                             Nunc molestie hendrerit diam vel fringilla. Sed ornare cursus nibh at mollis.
                              Nunc a dignissim nulla."
                        /><br />
                        <Text><Link style={{ color: "#00B478" }} to="./newsletterdetail">Read More <ArrowRightOutlined /></Link></Text>
                    </Card>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src={img2} />
                        }
                    >
                        <Text strong>Kelale Tech Gets a New Brand & </Text>
                        <Text strong>Website Refresh</Text> <br />
                        <Text style={{ fontSize: "10px", fontFamily: "DejaVu Sans Light" }}>2021-01-18</Text><br /><br />
                        <Meta
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem est,
                             posuere venenatis quam ut, sodales interdum enim. Integer felis nisl, 
                             sollicitudin sit amet orci non, elementum pellentesque dui. 
                             Nunc molestie hendrerit diam vel fringilla. Sed ornare cursus nibh at mollis.
                              Nunc a dignissim nulla."
                        /><br />
                        <Text><Link style={{ color: "#00B478" }} to="./newsletterdetail">Read More <ArrowRightOutlined /></Link></Text>
                    </Card>
                </Col>
            </Row><br /><br />
            <Row>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src={img2} />
                        }
                    >
                        <Text strong>Kelale Tech Gets a New Brand & </Text>
                        <Text strong>Website Refresh</Text> <br />
                        <Text style={{ fontSize: "10px", fontFamily: "DejaVu Sans Light" }}>2021-01-18</Text><br /><br />
                        <Meta
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem est,
                             posuere venenatis quam ut, sodales interdum enim. Integer felis nisl, 
                             sollicitudin sit amet orci non, elementum pellentesque dui. 
                             Nunc molestie hendrerit diam vel fringilla. Sed ornare cursus nibh at mollis.
                              Nunc a dignissim nulla."
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
                                src={img2} />
                        }
                    >
                        <Text strong>Kelale Tech Gets a New Brand & </Text>
                        <Text strong>Website Refresh</Text> <br />
                        <Text style={{ fontSize: "10px", fontFamily: "DejaVu Sans Light" }}>2021-01-18</Text><br /><br />
                        <Meta
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem est,
                             posuere venenatis quam ut, sodales interdum enim. Integer felis nisl, 
                             sollicitudin sit amet orci non, elementum pellentesque dui. 
                             Nunc molestie hendrerit diam vel fringilla. Sed ornare cursus nibh at mollis.
                              Nunc a dignissim nulla."
                        /><br />
                        <Text><Link style={{ color: "#00B478" }} to="./newsletterdetail">Read More <ArrowRightOutlined /></Link></Text>
                    </Card>
                </Col>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src={img2} />
                        }
                    >
                        <Text strong>Kelale Tech Gets a New Brand & </Text>
                        <Text strong>Website Refresh</Text> <br />
                        <Text style={{ fontSize: "10px", fontFamily: "DejaVu Sans Light" }}>2021-01-18</Text><br /><br />
                        <Meta
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem est,
                             posuere venenatis quam ut, sodales interdum enim. Integer felis nisl, 
                             sollicitudin sit amet orci non, elementum pellentesque dui. 
                             Nunc molestie hendrerit diam vel fringilla. Sed ornare cursus nibh at mollis.
                              Nunc a dignissim nulla."
                        /><br />
                        <Text><Link style={{ color: "#00B478" }} to="./newsletterdetail">Read More <ArrowRightOutlined /></Link></Text>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Newsletter;