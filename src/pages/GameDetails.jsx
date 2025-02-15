import {TopNav} from "../components/common/TopNav.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Game1 from "../assets/topImage.png";
import Bg from "../assets/bg.png";
import Bonus from "../assets/bonus.png";
import Jackpot from "../assets/jackpot.png";
import Vbg from "../assets/Vbg.png";

function GameDetails() {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-between">

            <div className=" my-4"  >
                <div id="home" className="py-4" style={{
                    backgroundImage: `url(${Vbg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <TopNav/>
                    <div className="text-white lg:tw-py-8">
                        <Container>
                            <Row className="align-items-end">
                                <Col lg={5} className=" pt-5 d-flex justify-content-start ">
                                    <img src={Game1} alt="crash game" className=" img-fluid  "/>

                                </Col>
                                <Col lg={7} className="">
                                    <h1 className="my-2   tw-text-4xl tw-font-extrabold text-black xl:tw-text-5xl  2xl:tw-text-5xl ">
                                        <span className="text-success">Multiple</span> players,<br className="d-block d-lg-none"/>1 device</h1>
                                    <p className="my-3 mb-5  tw-text-xl text-muted lg:tw-text-justify tw-font-normal  ">
                                        Up to 5 players can play the same game,<br className="d-none d-lg-block"/> on
                                        the same device, each one using their<br className="d-none d-lg-block"/>
                                        dedicated mouse or joystick.

                                        No heavy<br className="d-none d-lg-block"/> investment in dedicated Tablets or
                                        POS’s<br className="d-none d-lg-block"/>  for each player!
                                    </p>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>
                <div id="about_us" className="" >
                    <Container className="my-2  mb-5" >
                        <Row className="d-flex justify-content-between">
                            <Col lg={6} className="py-3" style={{
                                backgroundImage: `url(${Vbg})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "center"
                            }}>
                                <div className="tw-relative tw-ms-12  rounded-circle tw-h-96 tw-w-96 d-flex flex-column    mb-4">
                                    <div className="tw-h-py-40 lg:-tw-left-4 mt-5 me-lg-5" >
                                        <img src={Bonus} alt="crash game" className="img-fluid tw-h-44"/>
                                    </div>
                                    <div className="lg:tw-ms-20 px-lg-1" >
                                        <h5 className="tw-text-3xl">Final bonus</h5>
                                        <p className="tw-text-xl mb-0 tw-font-light">
                                            Gives a bonus round
                                            to the player <br/>for  more
                                            engagement
                                        </p>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={6} className="py-5 d-flex justify-content-center" style={{
                                backgroundImage: `url(${Vbg})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundPosition: "right"
                            }} >
                                <div  className="lg:tw-ms-24 ">
                                    <div className="tw-h-py-40"  >
                                        <img src={Jackpot} alt="crash game" className="img-fluid tw-h-44"/>
                                    </div>
                                    <div className="ms-2">
                                        <h5 className="tw-mx-14 tw-text-3xl">Jackpot </h5>
                                        <p className="lg:tw-mx-14 tw-text-xl tw-font-light">
                                            Cumulative prize that
                                            grows and<br /> drives more
                                            excitement
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>



            </div>
            <div id="contact_us" className=" tw-bg-primary bg-opacity-10">

                {/*<hr className="tw-border-t-2 tw-border-gray-200"/>*/}
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-2">
                    <p className="text-white tw-text-sm tw-font-semibold">
                        © {new Date().getFullYear()} NX PLAYERS. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default GameDetails;
