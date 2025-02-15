import {TopNav} from "../components/common/TopNav.jsx";
import {Col, Row} from "react-bootstrap";
import Crash from "../assets/crash.png";
import Game1 from "../assets/game1.png";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import Button from "react-bootstrap/Button";
import {BiChevronRight} from "react-icons/bi";
import {Link} from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

function Home() {
    const [showDetails, setShowDetails] = useState(false);
    const [phone, setPhone] = useState("");
    const handleShowDetails = () => {
        setShowDetails(!showDetails);
    }
    return (
        <div className="min-vh-100">
            <div id="home" className="bg-primary pb-lg-5">
                <TopNav/>
                <div className="text-white tw-py-24 lg:py-32">
                    <h1 className="my-5 tw-text-center  tw-text-5xl tw-font-extrabold xl:tw-text-5xl  2xl:tw-text-6xl ">
                        <span className="text-success">GAMES</span> BUILT FOR INSTORE PLAYERS</h1>
                    <p className="my-3 tw-text-center tw-text-2xl  tw-font-light ">
                        Interactive and engaging games purpose built for retail<br className="d-none d-lg-block"/> gaming stores

                    </p>
                </div>
            </div>
            <div id="about_us" className="">
                <Container>
                    <Row className="align-items-center ">
                        <Col md={6} lg={4} xl={6} className="my-5 d-none  d-lg-block  d-flex justify-content-center">
                            <div onClick={handleShowDetails} className="tw-flex  tw-flex-col tw-items-start ">
                                <div
                                    className="tw-flex  tw-items-end tw-justify-center tw-rounded-full tw-h-96 tw-w-96 tw-bg-secondary tw-bg-opacity-10 ">
                                <span className="m-5 border-b-2 text-center text-2xl font-bold text-white">
                                    S Rocket
                                        </span>
                                    <img src={Crash} alt="crash game" className="img-fluid "/>

                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xl={6} className="mb-5">
                            <div className="tw-flex tw-flex-col tw-items-start ">
                                <h1 className="my-8 tw-text-5xl mt-5  tw-font-extrabold">About Us</h1>
                                <p className="lg:tw-text-justify tw-text-lg  tw-text-black">
                                    We focus on bringing popular games which have been so far only
                                    available to Online players to the retail world by purpose
                                    building them for customers to interact with them with equipment
                                    already available in traditional retail gaming stores.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="games" className="bg-success bg-opacity-10 tw-py-10">
                <Container>
                    <h1 className="mb-4 tw-text-4xl tw-font-extrabold text-black  ">Our Games</h1>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <Row>
                                <div onClick={handleShowDetails} className="tw-flex  tw-flex-col tw-items-start ">
                                    <div
                                        className="tw-flex flex-column card card-body mb-3 tw-items-center tw-rounded-3xl tw-bg-primary ">

                                        <img src={Game1} alt="crash game" className="img-fluid lg:tw-h-72"/>
                                        <div className="d-flex w-100 justify-content-end">
                                            <span className=" mb-2 border-b-2  tw-text-2xl tw-font-extrabold text-success">
                                    S Rocket
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <div>
                                <div>
                                    <h1 className=" w-full      text-4xl tw-font-extrabold ">S Rocket</h1>
                                    <p className="lg:text-justify tw-text-lg font-normal text-primary">
                                        S Rocket is a top crash game favored by risk-taking
                                        players worldwide. Players bet before liftoff and aim
                                        to cash out before the rocket flies away. In addition
                                        to cutting-edge design and animations, S Rocket
                                        introduces a unique player interaction approach
                                        where up to 5 players can play the same game, on
                                        the same device, each one using their dedicated
                                        mouse or joystick.
                                    </p>
                                    <div className="">
                                        <Link to="/game-details"
                                              className="w-full tw-bg-primary tw-cursor-pointer p-2 text-white text-decoration-none border-0 hover:tw-shadow-lg hover:tw-bg-gradient-to-r tw-from-primary tw-to-secondary  rounded-pill ">
                                            View Details <BiChevronRight/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div id="contact_us" className=" tw-bg-primary bg-opacity-10">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <div className="grid items-center   p-lg-5 my-10 rounded-xl  grid-cols-2 gap-4">
                                <div className="text-white">
                                    <h5 className="text-3xl font-bold tracking-tight text-white dark:text-white">
                                        Contact Us </h5>
                                    Ready to take your business to the next level? send us a message here and we'll reach out in no time!
                                </div>

                            </div>
                        </Col>
                        <Col lg={7} className="justify-content-end d-lg-flex">
                            <Col lg={9}>
                                <div className="my-4">
                                    <form action="#">
                                        <div className="mb-6 mt-3">
                                            <input placeholder="Enter your Email"
                                                   className="mb-2 tw-py-2.5 form-control mb-2 block"/>
                                        </div>
                                        <div className="mb-2">
                                            <PhoneInput
                                                country={"us"}
                                                value={phone}
                                                onChange={setPhone}
                                                inputClass="tw-w-full border border-gray-300 rounded-3  tw-py-3 mb-3"
                                                containerClass="w-full"
                                                buttonClass="bg-white border  border-gray-300"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <textarea id="message" name="message"
                                                      className='form-control tw-py-2.5 mb-3'
                                                      placeholder="Your message..." rows={4}/>
                                        </div>
                                        <div className="mb-6">
                                            <Button type="submit" className="w-full py-3 w-100 bg-success">
                                                Send message
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </Container>
                <hr className="tw-border-t-2 tw-border-gray-200"/>
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-2">
                    <p className="text-white tw-text-sm tw-font-semibold">
                        © {new Date().getFullYear()} nx players. All rights reserved.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Home;