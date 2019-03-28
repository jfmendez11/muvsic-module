import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

const style = {
    profImg: {
        width: "12%",
        height: "12%",
        padding: 3,
        borderRadius: "50%",
        border: "3px solid #4b2c70",
    },
    profImg2: {
        width: "6%",
        height: "6%",
        padding: 3,
        borderRadius: "50%",
        border: "3px solid #8C8C8C",
    },
    partnerImgCrop: {
        width: 50,
        height: 50,
        possition: "relative",
        overflow: "hidden",
        borderRadius: "50%",
        padding: 1,
        border: "3px solid #8C8C8C",
    },
    partnerImg: {
        height: 60,
        width: 60,
        display: "inline",
        position: "relative",
        overflow: "hidden",
        padding: 2,
        border: "3px solid #8C8C8C",
    },
    spacing1: {
        paddingLeft: 20,
    },
    spacing2: {
        paddingLeft: 10,
    },
    purple: {
        color: "#4b2c70",
    },
    lightGrey: {
        color: "#C5C5C5",
    },
    darkGrey: {
        color: "#8C8C8C",
    },
    specialty: {
        color: "#FFFFFF",
        backgroundColor: "#8C8C8C",
        borderRadius: 50,
        fontSize: 10,
        borderColor: "#8C8C8C",
    },
    progressBar: {
        borderRadius: 50,
    },
    complete: {
        color: "#FFFFFF",
        backgroundColor: "#4b2c70",
        borderRadius: 50,
        fontSize: 10,
        borderColor: "#4b2c70",
    },
    description: {
        fontSize: 13,
        display: "inline",
    },
    socials: {
        color: "#8C8C8C",
    },
    selected: {
        color: "#36B292",
        borderBottom: "3px solid #8C8C8C",
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        borderRight: "0px solid #FFFFFF",
        borderLeft: "0px solid #FFFFFF",
        borderTop: "0px solid #FFFFFF",
    },
    notSelected: {
        color: "#8C8C8C",
        borderBottom: "1px solid #8C8C8C",
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        borderRight: "0px solid #FFFFFF",
        borderLeft: "0px solid #FFFFFF",
        borderTop: "0px solid #FFFFFF",
    },
    editFeatured: {
        color: "#FFFFFF",
        backgroundColor: "#4b2c70",
        borderRadius: 50,
        fontSize: 17,
        borderColor: "#4b2c70",
        paddingLeft: 40,
        paddingRight: 40,
    },
    featuredImg: {
        height: 200,
        width: 300,
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.61)",
    },
    buttonDownload: {
        color: "#4b2c70",
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        fontSize: 17,
        border: "2px solid #4b2c70",
        paddingLeft: 40,
        paddingRight: 40,
    },
    muvImg: {
        height: 160,
        width: 160,
        display: "inline",
        position: "relative",
        overflow: "hidden",
        padding: 2,
        border: "3px solid #8C8C8C",
    },
    muvBtn: {
        color: "#36B292",
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
        fontSize: 15,
        border: "1px solid #36B292",
        paddingLeft:  10,
        paddingRight: 10,
    },
    createMUV: {
        color: "#FFFFFF",
        backgroundColor: "#4b2c70",
        borderRadius: 50,
        fontSize: 15,
        borderColor: "#4b2c70",
        paddingLeft: 10,
        paddingRight: 10,
    },
    post: {
        color: "#FFFFFF",
        backgroundColor: "#4b2c70",
        borderRadius: 50,
        fontSize: 13,
        borderColor: "#4b2c70",
        paddingLeft: 10,
        paddingRight: 10,
    },
    pubImg: {
        height: 500,
        width: 800,
    },
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featured: true,
            information: false,
            muvs: false,
            publications: false,
        };
        this.onClickFeatured = this.onClickFeatured.bind(this);
        this.onClickInfo = this.onClickInfo.bind(this);
        this.onClickMUVs = this.onClickMUVs.bind(this);
        this.onClickPublications = this.onClickPublications.bind(this);
    }
    renderProfileInfo() {
        return (
            <Row>
                <Image style={style.profImg} src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MDU5OTYwODQz/james-hetfield-278912-1-402.jpg" roundedCircle />
                <Col>
                    <br/>
                    <br/>
                    <h5>JAMES HETFIELD</h5>
                    <h6  style={style.lightGrey}>Follows <span style={style.purple}>XX</span><span style={style.spacing1}></span>Following <span style={style.purple}>XX</span></h6>
                    <button style={style.specialty} disabled>
                        Specialty
                    </button>
                    <span style={style.spacing2}></span>
                    <button style={style.specialty} disabled>
                        Specialty
                    </button>
                    <span style={style.spacing2}></span>
                    <button style={style.specialty} disabled>
                        Specialty
                    </button>
                </Col>
            </Row>
        );
    }

    renderProgressBar() {
        const now = 75;
        return (
            <Row>
                <Col md={11}>
                    <br/>
                    <ProgressBar variant="success" style={style.progressBar} now={now} label={`Profile ${now}%`} />
                </Col>
                <Col md={1}>
                    <br/>
                    <button style={style.complete}>Complete</button>
                </Col>
            </Row>
        );
    }

    renderDescription() {
        return (
            <Row>
                <br/>
                <p style={style.description} align="justify">
                    James Alan Hetfield (born August 3, 1963) is an American musician, singer, and songwriter known for being 
                    the co-founder, lead vocalist, rhythm guitarist, and main songwriter for the American heavy metal band 
                    Metallica. Hetfield is mainly known for his intricate rhythm playing, but occasionally performs lead guitar 
                    duties and solos, both live and in the studio. Hetfield co-founded Metallica in October 1981 after answering a 
                    classified advertisement by drummer Lars Ulrich in the Los Angeles newspaper The Recycler. Metallica has won 
                    nine Grammy Awards and released ten studio albums, three live albums, four extended plays and 24 singles.
                </p>
            </Row>
        );
    }

    renderSocials() {
        return (
            <Row>
                <Col md={2}>
                    <i className="fab fa-facebook-square fa-lg" style={style.socials}></i>
                    <span style={style.spacing2}></span>
                    <i className="fab fa-instagram fa-lg" style={style.socials}></i>
                    <span style={style.spacing2}></span>
                    <i className="fab fa-youtube fa-lg" style={style.socials}></i>
                </Col>
                <Col md={{span: 2, offset: 8}}>
                    <p style={{color: style.lightGrey.color, fontSize: style.description.fontSize}} align="right">
                        <i className="fas fa-map-marker-alt fa-lg" style={style.socials}></i>
                        <span style={style.spacing2}></span>
                        San Francisco, CA
                    </p>
                </Col>
            </Row>
        );
    }

    renderPartners() {
        return (
            <div>
                <Row>
                    <br/>
                    <h6 style={style.darkGrey}>Partners (<span style={style.purple}>3</span>):</h6>
                </Row>
                <Row>
                    <Image style={style.partnerImg} src="https://metalheadzone.com/wp-content/uploads/2016/10/lars-ulrich.jpg" roundedCircle/>
                    <span style={style.spacing2}></span>
                    <Image style={style.partnerImg} src="https://news.sagacom.com/wp-content/blogs.dir/3/files/2014/01/hammett.jpg" roundedCircle/>
                    <span style={style.spacing2}></span>
                    <Image style={style.partnerImg} src="https://laopinionla.files.wordpress.com/2015/08/im_20130928_import01_309289966.jpg" roundedCircle/>
                </Row>
            </div>
        );
    }

    onClickFeatured() {
        this.setState({
            featured: true,
            information: false,
            muvs: false,
            publications: false,
        });
    }

    onClickPublications() {
        this.setState({
            featured: false,
            information: false,
            muvs: false,
            publications: true,
        });
    }

    onClickInfo() {
        this.setState({
            featured: false,
            information: true,
            muvs: false,
            publications: false,
        });
    }

    onClickMUVs() {
        this.setState({
            featured: false,
            information: false,
            muvs: true,
            publications: false,
        });
    }

    renderButtons() {
        return (
            <Row>
                <Col md={3} style={{padding: 0}}>
                    <br/>
                    <Button style={this.state.featured ? style.selected : style.notSelected} block onClick={this.onClickFeatured}>
                        FEATURED
                    </Button>
                </Col>
                <Col md={3} style={{padding: 0}}>
                    <br/>
                    <Button style={this.state.information ? style.selected : style.notSelected} block onClick={this.onClickInfo}>
                        INFORMATION
                    </Button>
                </Col>
                <Col md={3} style={{padding: 0}}>
                    <br/>
                    <Button style={this.state.muvs ? style.selected : style.notSelected} block onClick={this.onClickMUVs}>
                        MUVs
                    </Button>
                </Col>
                <Col md={3} style={{padding: 0}}>
                    <br/>
                    <Button style={this.state.publications ? style.selected : style.notSelected} block onClick={this.onClickPublications}>
                        PUBLICATIONS
                    </Button>
                </Col>
            </Row>
        );
    }

    renderFeatured() {
        return (
            <div>
                <Row>
                    <Col md={{span: 4, offset: 2}}>
                        <h5 style={style.purple}>FEATURED: </h5>
                    </Col>
                    <Col md={{span: 2, offset: 4}}>
                        <button style={style.editFeatured}>EDIT</button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 4, offset: 2}}>
                        <br/>
                        <Image style={style.featuredImg} src="http://4.bp.blogspot.com/-g4vRQoKn_bE/UxiaLXhCF4I/AAAAAAAAAas/jYPyYKOTBBg/s1600/metallica_colombia_bogota.jpg"/>
                        <br/>
                        <br/>
                        <h5>Metallica By Request</h5>
                        <h5>Metallica</h5>
                        {this.renderPartners()}
                    </Col>
                    <Col md={4}>
                        <br/>
                        <Image style={style.featuredImg} src="https://i1.wp.com/bogotaalacarta.com/wp-content/uploads/2016/09/metallica-concierto-bogota-2016-featured-800x351.jpg" />
                        <br/>
                        <br/>
                        <h5>Metallica Live Bogotá</h5>
                        <h5>Metallica</h5>
                        {this.renderPartners()}
                    </Col>
                </Row>
            </div>
        );
    }

    renderInformation() {
        return (
            <div>
                <Row>
                    <Col md={{span: 10, offset: 2}}>
                        <h5 style={style.purple}>RATING: 5,0</h5>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 8, offset: 4}}>
                        <i className="fas fa-star fa-3x" style={style.purple}></i>
                        <i className="fas fa-star fa-3x" style={style.purple}></i>
                        <i className="fas fa-star fa-3x" style={style.purple}></i>
                        <i className="fas fa-star fa-3x" style={style.purple}></i>
                        <i className="fas fa-star fa-3x" style={style.purple}></i>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 2, offset: 2}}>
                        <br/>
                        <Image style={style.partnerImg} src="https://66.media.tumblr.com/97a6a5d1d2d70fbec72212d54323f5dc/tumblr_pdvh9bT4kV1s2ctobo1_640.jpg" roundedCircle/>
                        <i className="fas fa-star" style={style.purple}></i>
                        <p style={{color: style.lightGrey.color, fontSize: 10, display: "inline"}}>5,0</p>
                    </Col>
                    <Col md={8}>
                        <br/>
                        <p style={style.description} align="justify">
                            James Hetfield is hands down (pun intended) one of the finest rhythm guitarists around. 
                            Even Dave Mustaine, between whom and Hetfield no love has been lost, admitted this. His down 
                            picking technique is legendary.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset: 2}}>
                        <br/>
                        <i className="far fa-star" style={style.lightGrey}></i>
                        <p style={{color: style.lightGrey.color, fontSize: 13, display: "inline"}}>View 193,434,678 ratings</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 4, offset: 2}}>
                        <br/>
                        <h5 style={style.purple}>INFORMATION:</h5>
                        <i className="fas fa-map-marker-alt fa-lg" style={style.darkGrey}></i>
                        <span style={style.spacing2}></span>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>San Francisco, CA</p>
                        <br/>
                        <i className="fas fa-home fa-lg" style={style.darkGrey}></i>
                        <span style={style.spacing2}></span>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>Millos Tu Papá St., 1946</p>
                        <br/>
                        <i className="fas fa-at fa-lg" style={style.darkGrey}></i>
                        <span style={style.spacing2}></span>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>jamesmetal@metallica.com</p>
                        <br/>
                        <i className="fas fa-phone fa-lg" style={style.darkGrey}></i>
                        <span style={style.spacing2}></span>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>+1 666 666 666</p>
                        <br/>
                        <br/>
                        <button style={style.buttonDownload}>
                            Download CV <i className="fas fa-arrow-down fa-lg" style={style.purple}></i>
                        </button>
                        <br/>
                        <br/>
                        <button style={style.buttonDownload}>
                            Download EPK <i className="fas fa-arrow-down fa-lg" style={style.purple}></i>
                        </button>
                    </Col>
                    <Col md={4}>
                        <br/>
                        <h5 style={style.purple}>SERVICES:</h5>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>Service/Ability/Specialty</p>
                        <br/>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>Service/Ability/Specialty</p>
                        <br/>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>Service/Ability/Specialty</p>
                        <h5 style={style.purple}>LOOKING FOR:</h5>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>Service/Ability/Specialty</p>
                        <br/>
                        <p style={{color: style.darkGrey.color, fontSize: 15, display: "inline", borderBottom: "1px solid #8C8C8C"}}>Service/Ability/Specialty</p>
                    </Col>
                    <Col md={2}>
                        <button style={style.editFeatured}>EDIT</button>
                    </Col>
                </Row>
            </div>
        );
    }

    renderMUVs() {
        return (
            <div>
                <Row>
                    <Col md={{span: 2, offset: 10}}>
                        <br/>
                        <button style={style.createMUV}>+ CREATE MUV</button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 4, offset: 2}}>
                        <br/>
                        <Image style={style.muvImg} src="http://4.bp.blogspot.com/-g4vRQoKn_bE/UxiaLXhCF4I/AAAAAAAAAas/jYPyYKOTBBg/s1600/metallica_colombia_bogota.jpg" roundedCircle/>
                    </Col>
                    <Col md={4}>
                        <br/>
                        <h5>Metallica By Request</h5>
                        <br/>
                        <h6  style={style.lightGrey}>Follows <span style={style.purple}>XX</span></h6>
                        <br/>
                        {this.renderPartners()}
                    </Col>
                    <Col md={2}>
                        <br/>
                        <button style={style.muvBtn}>See Profile</button>
                    </Col>
                </Row>
                <hr style={{border: "1px solid " + style.darkGrey.color}}/>
                <Row>
                    <Col md={{span: 4, offset: 2}}>
                        <br/>
                        <Image style={style.muvImg} src="https://i1.wp.com/bogotaalacarta.com/wp-content/uploads/2016/09/metallica-concierto-bogota-2016-featured-800x351.jpg" roundedCircle/>
                    </Col>
                    <Col md={4}>
                        <br/>
                        <h5>Metallica Live Bogotá</h5>
                        <br/>
                        <h6  style={style.lightGrey}>Follows <span style={style.purple}>XX</span></h6>
                        <br/>
                        {this.renderPartners()}
                    </Col>
                    <Col md={2}>
                        <br/>
                        <button style={style.muvBtn}>See Profile</button>
                    </Col>
                </Row>
                <hr style={{border: "1px solid " + style.darkGrey.color}}/>
            </div>
        );
    }

    renderPublications() {
        return (
            <div>
                <Row>
                    <Col md={{span: 2, offset: 10}}>
                        <br/>
                        <button style={style.post}>+ POST SOMETHING</button>
                    </Col>
                </Row>
                <Row>
                    <span style={{paddingLeft: 150}}></span>
                    <Image style={style.profImg2} src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MDU5OTYwODQz/james-hetfield-278912-1-402.jpg" roundedCircle />
                    <Col>
                        <h5>LIVE BOGOTÁ 2016 - Metallica</h5>
                        <h6  style={style.lightGrey}>01/11/16</h6>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset: 2}}>
                        <Image style={style.pubImg} src="https://d2yoo3qu6vrk5d.cloudfront.net/images/20160905103844/metallica_getty-914x607.jpg"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset: 2}}>
                        <br/>
                        {this.renderPartners()}
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 8, offset: 2}}>
                        <br/>
                        <p style={style.description} align="justify">
                            Este martes primero de noviembre Metallica ofrecerá su cuarto concierto en Colombia. 
                            La cita esta vez no es en el tradicional Parque Simón Bolívar, sino en el Hipódromo de los Andes, 
                            ubicado en el norte de Bogotá (Autopista norte, kilómetro 21 después del peaje). 
                            Para llegar es necesario que después del peaje tome la vía a Chía, pase la Universidad de la Sabana y 
                            haga el retorno a mano izquierda.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 2, offset: 10}}>
                        <i className="fas fa-heart" style={style.purple}></i>
                        <span style={style.spacing2}></span>
                        <p style={{color: style.lightGrey.color, fontSize: 13, display: "inline"}}>193,434,678 Likes</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset: 2}}>
                        <p style={{color: style.lightGrey.color, fontSize: 13, display: "inline"}}>View 193,434,678 comments</p>
                    </Col>
                </Row>
                <Row>
                    <span style={{paddingLeft: 150}}></span>
                    <Image style={style.partnerImg} src="http://www.metalsucks.net/wp-content/uploads/2015/04/14-06-08_RiP_Slayer_Kerry_King_1.jpg" roundedCircle />
                    <Col md={8}>
                        <p style={style.description} align="justify">
                            Best concert ever! Best concert ever! Best concert ever! Best concert ever! Best concert ever!
                            Best concert ever! Best concert ever! Best concert ever! Best concert ever! Best concert ever!
                        </p>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                <Row>
                    <span style={{paddingLeft: 150}}></span>
                    <Image style={style.partnerImg} src="https://pics.armadilloent.com/sirv/artists/dave-mustaine/feature.png" roundedCircle />
                    <Col>
                        <br/>
                        <p style={{fontSize: 13, color: style.lightGrey.color}} align="justify">
                            Write a comment...
                        </p>
                    </Col>
                </Row>
                <Col md={{span:10, offset: 1}}>
                    <hr style={{border: "1px solid " + style.darkGrey.color}}/>
                </Col>
            </div>
        );
    }

    render() {
        let buttonIsRendering = <div></div>;
        if (this.state.featured) buttonIsRendering = this.renderFeatured();
        if (this.state.information) buttonIsRendering = this.renderInformation();
        if (this.state.muvs) buttonIsRendering = this.renderMUVs();
        if (this.state.publications) buttonIsRendering = this.renderPublications();
        return (
            <Container>
                <br/>
                {this.renderProfileInfo()}
                {this.renderProgressBar()}
                {this.renderDescription()}
                {this.renderSocials()}
                {this.renderPartners()}
                {this.renderButtons()}
                <br/>
                {buttonIsRendering}
                <br/>
                <br/>
            </Container>
        );
    }
}

export default Profile;