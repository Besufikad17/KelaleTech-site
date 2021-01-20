import React from 'react';
import Header from './Header';
import img from './assets/img/bg9.png';
import { Row, Col, Breadcrumb, Typography } from 'antd';
import {
    ArrowRightOutlined,
    TwitterOutlined,
    FacebookOutlined,
    TelegramOutlined,
    CopyOutlined,
    WhatsAppOutlined
} from "@ant-design/icons";

const { Text } = Typography;
const style = { padding: '8px 0' };

const Details = () => {
    return (
        <div>
            <Header />
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
                        <Breadcrumb.Item> </Breadcrumb.Item>
                        <Breadcrumb.Item>Internal news</Breadcrumb.Item>
                    </Breadcrumb></div>
                </Col>
            </Row><br />
            <Row justify="start">
                <Col span={12} offset={6}><Text strong><p style={{ fontFamily: "Manjari Regular", fontSize: "200%" }}>Kelale Tech Gets a New Brand & Website Refresh</p></Text></Col>
            </Row>
            <Row justify="start">
                <Col span={6} offset={6}>
                    <Text><p style={{ fontFamily: "Manjari Regular", fontSize: "100%" }}>September 8, 2013</p></Text>
                </Col>
                <Col span={6} offset={6}>
                    <Row>

                        <Col span={2}>
                            <FacebookOutlined twoToneColor="#00B478" />
                        </Col>
                        <Col span={2}>
                            <WhatsAppOutlined twoToneColor="#00B478" />
                        </Col>
                        <Col span={2}>
                            <TwitterOutlined twoToneColor="#00B478" />
                        </Col>
                        {/* <Col span={4}>
                            <TelegramOutlined />
                        </Col> */}
                        <Col span={2}>
                            <CopyOutlined twoToneColor="#00B478" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={6}>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "120%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum varius massa et dapibus. Integer et pellentesque felis. Nunc mattis felis elit, vel auctor libero ornare eu. Suspendisse imperdiet, ligula ac feugiat cursus,
                        lacus justo rhoncus eros, sed scelerisque tellus lectus consequat lectus.
                        Donec id aliquet est, quis finibus tortor. In quis luctus nibh,
                        a ornare elit. In vel ultrices mi. Proin pretium imperdiet tellus eget finibus.
                        Aliquam vestibulum nunc urna, fringilla porta nisl fringilla ut. Donec tempor egestas ex ut vehicula. Morbi porta justo at justo malesuada finibus. Aliquam non sollicitudin sem. Donec sed molestie ante. Phasellus eu tellus consequat, congue dolor sed, scelerisque nulla.
                    </p>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "120%" }}>
                        Morbi id lacus vel dui imperdiet euismod. Cras ultricies quis purus tristique imperdiet. Mauris nec erat turpis. Curabitur ut dolor tristique, volutpat erat id, porttitor odio. Quisque turpis augue, tincidunt euismod porttitor id, molestie ac erat. Nam vestibulum ex in ex placerat viverra. Suspendisse efficitur quis justo vitae rutrum. Nullam vel lacus sem.


                    </p>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "120%" }}>
                        Sed ut purus sit amet metus congue faucibus. Vestibulum sapien lorem, viverra et viverra a, gravida eu arcu. Etiam sollicitudin massa vitae sem mollis dapibus. Nam faucibus vitae risus vel aliquet. Maecenas ultrices, augue id rhoncus pharetra, orci mauris cursus massa, sit amet vulputate lorem massa eu augue. Aliquam consequat turpis nec augue mollis feugiat. In hac habitasse platea dictumst. Integer eu feugiat tellus.
                    </p>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "120%" }}>
                        Curabitur gravida laoreet enim non auctor. Maecenas semper rhoncus felis et porttitor. Proin cursus ligula leo, vel tempus nisl ultrices ac. Phasellus a elementum urna. Fusce aliquet massa in lectus vulputate elementum. Etiam eu varius est. Phasellus sit amet lobortis dolor. Sed cursus purus at euismod sollicitudin. Suspendisse vel ultricies quam, in elementum erat.
                    </p>
                    <p style={{ fontFamily: "Manjari Regular", fontSize: "120%" }}>
                        In vitae condimentum tortor. Vivamus tempus tincidunt dui, non ultrices eros sodales vitae. Curabitur nec felis quis justo pharetra pulvinar nec eu ipsum. Vivamus et dolor ultricies, fringilla nisi in, vehicula purus. Cras ultrices, magna a pellentesque pretium, orci risus congue ante, eu blandit arcu tortor quis magna. Pellentesque non elementum justo, a cursus dui. Nulla eu pellentesque lectus. Quisque blandit dapibus urna, vel aliquam tortor rhoncus eget. Cras maximus enim eget est euismod, ut consequat magna interdum. Fusce sollicitudin vitae nisi et accumsan. Suspendisse maximus vitae erat vel blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default Details;