import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Lottie from 'react-lottie-player'
import ReactPlayer from 'react-player'

// import "./../scss/main.scss";
import ReactBootstrap, {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Row,
  Col
} from "react-bootstrap";


import $ from "jquery";


// json File
import dataImage from "../images/data.json"
import circle from "../images/circle_moving.json";

//images
import Group_logo from "../images/Group_logo.png";
import MainImage from "../images/Main image.png";
import Passive_Income from "../images/image1.png";
import Token_NFT from "../images/image2.png";
import All_Star_Partnerships from "../images/image3.png";
import Collectible from "../images/collectible.png";

import Image1 from "../images/60f8170b71f97427e4c1e09a_Fram11.png";
import Arrow2 from "../images/60eeacde5628ed8ecc165492_arrow_2.svg";
import Image2 from "../images/60f8175249906ed54d09c689_Frame 17.png";
import Image3 from "../images/60f052a289fbfe5964780e95_image_3.png";
import Announce from "../images/60f0535592383362d2383824_announce.png";
import NFTImage from "../images/nfts/1.png";
import Ball1 from "../images/ball1.png";
import Ball2 from "../images/ball2.png";
import ImageSliderBall from "../images/60f03609d2f8fe01a462d4cd_Gutter Jonah.png";
import SliderBall1 from "../images/60f84a0e13a191030305ed0d_ric.png";
import SliderBall2 from "../images/60f84a24a788292b6e4fc9e3_mitch.png";
import SliderBall3 from "../images/60f84a2c3eb57c3600f2ecb8_dan.png";
import SliderBall4 from "../images/60f84a32f2e414c85a1fe2bb_wang.png";
import SliderBall5 from "../images/60f84a5d6d590343a3fbc8d2_ikarlee.png";
import SliderBall6 from "../images/60f84a7d2f096607f43aa2df_Big stupid.png";
import SliderBall7 from "../images/60f84a820823982325730a01_popaca.png";
import SliderBall8 from "../images/60f84a7752a9137debae4e38_world peace.png";
import Sailor from "../images/sailor.png";

//Video
import Video from "../images/14.mp4";
import VideoMint from "../images/ball_2.mp4";
import MintNFT from "../components/MintNFT";
import { getTrackBackground, Range } from "react-range";


// import * as ReactBootstrap from 'react-bootstrap';
function Home() {


//
const STEP = 1;
const MIN = 1;
const MAX = 20;
const [values, setValues] = React.useState([3]);



//Slider

const initialItems = Array.apply(null, Array(6)).map(
  (value, index) => index + 1
);

const ref = useRef();
  const [items, setItems] = useState(initialItems);
  function addItems() {
    setItems(items => [...items, items.length + 1]);
  }
  function resetItems() {
    setItems(initialItems);
  }
  function goToLastSlide() {
    ref.current.splide.go(ref.current.splide.length - 1);
  }

  //animated background

  


  let [slider, setSlider] = useState(false);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "white" }}
        onClick={onClick}
      />
    );
  }

  //button Plus Minus

  $(document).ready(function () {
    $(".minus").click(function () {
      var $input = $(this).parent().find("input");
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $(".plus").click(function () {
      var $input = $(this).parent().find("input");
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  });

  //button plus end minus

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };




  

  /*let style = { transform: 'translateX(0px)' };

    window.addEventListener('scroll', (event) => {
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);
            style.transform = 'translateY(' + itemTranslate + 'px)';

        const style = {
            transform: {
                translateY: itemTranslate+ 'px',
            }
        }
        });*/

  return (
    <>
   
   <Header/>
  

   <section class="Bgcolor">

<div class="div-block html-embed">
    <div class="html-embed w-embed">
       
    </div>
</div>

</section> 



  <section class="Bgcolor">
    <div class="section wf-section">
      <div class="paddings">
        <div class="div-block-532">
          <div>
            <h1 class="heading">
              Take a hit,
              <span class="text-span">let's make noise</span> like its NBA
            </h1>
            <p class="paragraph">
              DUNK is a stubborn Gorilla that was born with a Basketball .
              He was so good, that even big king ape Kobe recognized his
              talent. Easily slam-dunking on many famous teams, swinging
              through the world’s cities, and smashing the biggest brands in
              pop culture to earn you passive income.
            </p>

            <p class="paragraph">
              10,000 algorithmically generated from over 95 attributes{" "}
            </p>

            <a
              href="#"
              target="_blank"
              class="link-block hero-btn w-inline-block"
            >
              <div class="div-block-537 hero-btn">
                <div class="button-text">MINT</div>
              </div>
            </a>

            <a
              href="#"
              target="_blank"
              class="link-block hero-btn w-inline-block"
            >
              <div class="div-block-537 hero-btn">
                <div class="button-text">Buy $NBA</div>
              </div>
            </a>

            <div class="exlusive">
              <p>Exclusively On</p>
              <img src={Group_logo} />
            </div>
          </div>

          <div
            id="w-node-_2e663526-4196-ce4a-e36e-c189e79c1d59-6aec71e4"
            class="div-block-649"
          >

{/* <Lottie animationData={dataImage} /> */}

<Lottie
      loop
      animationData={dataImage}
      play
      
    />
            <div
              data-w-id="cb1532f1-36e1-24ff-0c5f-78a7af85eeb9"
              data-animation-type="lottie"
              data-src={dataImage}
              data-loop="1"
              data-direction="1"
              data-autoplay="1"
              data-is-ix2-target="0"
              data-renderer="svg"
              data-default-duration="6.0060057613763815"
              data-duration="0"
              class="lottie-animation-2"
            ></div>
            <img
              src={MainImage}
              loading="lazy"
              sizes="100vw"
              class="image-10"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="Bgcolor">
    <div class="campfireAbout">
      <div class="container">
        <div class="mo-fire">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="https://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="115px"
            height="89.864px"
            viewBox="0 0 125 189.864"
            enable-background="new 0 0 125 189.864"
          >
            <path
              class="flame-main"
              fill="#F36E21"
              d="M76.553,186.09c0,0-10.178-2.976-15.325-8.226s-9.278-16.82-9.278-16.82s-0.241-6.647-4.136-18.465
          c0,0,3.357,4.969,5.103,9.938c0,0-5.305-21.086,1.712-30.418c7.017-9.333,0.571-35.654-2.25-37.534c0,0,13.07,5.64,19.875,47.54
          c6.806,41.899,16.831,45.301,6.088,53.985"
            />
            <path
              class="flame-main one"
              fill="#F6891F"
              d="M61.693,122.257c4.117-15.4,12.097-14.487-11.589-60.872c0,0,32.016,10.223,52.601,63.123
          c20.585,52.899-19.848,61.045-19.643,61.582c0.206,0.537-19.401-0.269-14.835-18.532S57.576,137.656,61.693,122.257z"
            />
            <path
              class="flame-main two"
              fill="#FFD04A"
              d="M81.657,79.192c0,0,11.549,24.845,3.626,40.02c-7.924,15.175-21.126,41.899-0.425,64.998
          C84.858,184.21,125.705,150.905,81.657,79.192z"
            />
            <path
              class="flame-main three"
              fill="#FDBA16"
              d="M99.92,101.754c0,0-23.208,47.027-12.043,80.072c0,0,32.741-16.073,20.108-45.79
          C95.354,106.319,99.92,114.108,99.92,101.754z"
            />
            <path
              class="flame-main four"
              fill="#F36E21"
              d="M103.143,105.917c0,0,8.927,30.753-1.043,46.868c-9.969,16.115-14.799,29.041-14.799,29.041
          S134.387,164.603,103.143,105.917z"
            />
            <path
              class="flame-main five"
              fill="#FDBA16"
              d="M62.049,104.171c0,0-15.645,67.588,10.529,77.655C98.753,191.894,69.033,130.761,62.049,104.171z"
            />
            <path
              class="flame"
              fill="#F36E21"
              d="M101.011,112.926c0,0,8.973,10.519,4.556,16.543C99.37,129.735,106.752,117.406,101.011,112.926z"
            />
            <path
              class="flame one"
              fill="#F36E21"
              d="M55.592,126.854c0,0-3.819,13.29,2.699,16.945C64.038,141.48,55.907,132.263,55.592,126.854z"
            />
            <path
              class="flame two"
              fill="#F36E21"
              d="M54.918,104.595c0,0-3.959,6.109-1.24,8.949C56.93,113.256,52.228,107.329,54.918,104.595z"
            />
          </svg>
        </div>

        <div class="centerHeading">
          <h2>
            WELCOME TO <span>NBA</span>
          </h2>
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non- fungible tokens (NFTs)
          </p>
        </div>

        <div class="row pt-5">
          <div class="col-lg-4 col-md-6">
            <div class="campfireBox">
              <img src={Passive_Income} />
              <h4>Passive Income</h4>
              <p>
                NBA deploys a passive income ecosystem that rewards loyal
                fans, powered by DUNK NFTs and NBA Token.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="campfireBox">
              <img src={Token_NFT} />
              <h4>Token and NFT Integration</h4>
              <p>
                The NBA Token is the fuel that powers the NBA DUNKs
                ecosystem. NBA DUNKs NFTs are the digital assets that drive
                engagement and create unique experiences for fans.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="campfireBox">
              <img src={All_Star_Partnerships} />
              <h4>All-Star Partnerships</h4>
              <p>
                NBA (National Bitcoin Association) collaborates with top
                brands & NBA athletes to create unique and engaging
                experiences for investors. These partnerships provide a
                wealth of content and opportunities.
              </p>
            </div>
          </div>

          <a
            href="#"
            target="_blank"
            class="link-block hero-btn w-inline-block centerblock"
          >
            <div class="div-block-537 hero-btn">
              <div class="button-text"> Read whitepaper</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="div-block-538">
      <div class="div-block-540"></div>
    </div>

    <div
      id="the-dao"
      data-w-id="42682a84-4099-a00e-2343-ac795c1c1589"
      class="section-2 wf-section"
    >
      <div class="paddings">
        <div>
          <h1 class="heading-2">
            what is a <span class="text-span-2">NBA</span>?
          </h1>
        </div>

        <div class="div-block-539">
          <div id="w-node-cbc82d3b-3bc1-d210-3f0e-32b35f07fec5-6aec71e4">
            <div class="div-block-541">
              <div
                data-w-id="d830db9b-4fcc-d6ad-5993-56c0d43502ca"
                data-animation-type="lottie"
                data-src={circle}
                data-loop="1"
                data-direction="1"
                data-autoplay="1"
                data-is-ix2-target="0"
                data-renderer="svg"
                data-default-duration="6.0060057613763815"
                data-duration="0"
              ></div>
            </div>
            <div>
              <div class="text-block-3">
              STAY SAUCY PLAYER.
              </div>
              <p class="paragraph">
              Well, to start off, DUNK NFTs are the first-ever Hypebeast and passive income generating NFTs on the Solana blockchain. That means that you unlock the opportunity to earn passive income just by holding onto them! Dope? Ok, but that's not all. DUNKs are unique and unstoppable NFTs that will always be in demand. It's the perfect investment for anyone looking for a high-value, passive income asset. 
              </p>
              <div class="div-block-542">
                <div class="div-block-543"></div>
                <p class="paragraph">
                DUNK NFTs are also extremely secure and tamper-proof due to the use of blockchain technology. So you can rest assured that your assets are in good hands. Lastly, DUNK NFTs are also extremely easy to use. All you need is a Solana wallet (ex: Phantom or SolFlare) to store them and you're good to go!
                </p>
              </div>
            </div>
          </div>
          <div
            id="w-node-ba449b26-fc19-4a72-8c75-9cf1f434ec5f-6aec71e4"
            class="div-block-544"
          ></div>
        </div>
      </div>
    </div>

    <div  data-w-id="dafc2333-a24e-13ca-a7ec-f7f524655ec7"  class="scroll-section" >
   <div class="super-text one">
      Course Modules - Course Modules - Course Modules -
    </div>
    <div class="super-text two">
      10+hrs of Video Content - 10+hrs of Video Content - 10+hrs of Video
      Content -
    </div>
  </div>

    <div class="collectible">
      <div class="container">
        <div class="collectibleBox">
          <div class="row">
            <div class="col-lg-7">
              <div class="collectBox">
                <h3> Collectible and Unique </h3>
                <h2>
                  10,000 unique, hooping, algorithmically generated gorillas
                  - stored with proof of ownership on the Solana blockchain.
                </h2>
                <p>
                  Every DUNK is Different, everyone has a certain rarity and
                  passive income generating abilities. We believe in Solana
                  and we believe in NFTs. In the future, we'll look at this
                  period as a defining moment in culture and technology.
                </p>
              </div>
            </div>

            <div class="col-lg-5">
              <img src={Collectible} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="dao-elements"
      data-w-id="bf052fd0-4b85-b2bb-64d2-2078cdcf7aa6"
      class="section-4 wf-section"
    >
      <div class="paddings">
        <div class="div-block-548">
          <div
            id="w-node-db410f73-501e-a1c4-e8c4-ca38701e637e-6aec71e4"
            class="circle_box div-block-554"
          >
            <div class="div-block-549 ellipse-1 circles">
              <div class="div-block-551 ">
                <div class="text-block-4">Phase 1</div>
                <p class="paragraph-3">
                  {" "}
                  Gutter Labs is our soul-wrapper and the real-world legal
                  entity that interacts with existing companies and brands
                  on behalf of us, Gutter Cat Gang DAO. This enables us to
                  go further than the metaverse and ensure real world
                  operations.
                </p>
              </div>
            </div>
            <div class="div-block-555">
              <div class="div-block-552">
                <div class="div-block-647">
                  <h1 class="heading-3">
                    OUR <br />
                    <span class="text-span-6">ROADMAP</span>
                  </h1>
                </div>
              </div>
              <div class="div-block-553 circles">
                <div class="div-block-551 small">
                  <div class="text-block-4 small">Phase 2</div>
                  <p class="paragraph-3 small">
                    {" "}
                    In our early stages, the contract will be more
                    controlled and easily updated. In later stages, the
                    control over the contract will be incrementally released
                    at an increasing rate until 100% decentralization is
                    reached.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="w-node-_12aa7382-b309-3551-af48-cb7ae024ae77-6aec71e4"
            class="circle_box div-block-557"
          >
            <div class="div-block-556 circles ">
              <div class="div-block-551 small ">
                <div class="text-block-4">Phase 3</div>
                <p class="paragraph-3">
                  {" "}
                  Gutter Labs is our soul-wrapper and the real-world legal
                  entity that interacts with existing companies and brands
                  on behalf of us, Gutter Cat Gang DAO. This enables us to
                  go further than the metaverse and ensure real world
                  operations.
                </p>
              </div>
            </div>
            <div class="div-block-558 circles">
              <div class="div-block-551 small ">
                <div class="text-block-4">Phase 4</div>
                <p class="paragraph-3">
                  {" "}
                  One of the most interesting aspects of our DAO governance
                  is its dynamic nature. Our code is always in flux and
                  evolving with the space as we adapt to new utility, new
                  metaverse's, and integrations that help avoid bad actors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="TileLine">
    <div
      data-w-id="523168c7-ff3b-b566-4590-f40805b4a473"
      class="section-12 wf-section"
    >
      <div class="paddings relative">
        <div class="div-block-612">
          <div>
            <h1 class="heading-19">
              our <span class="text-span-12">roadmap</span>
            </h1>
          </div>
        </div>
        <div class="div-block-614">
          <div class="timeline_wrapper">
            <div class="timeline_progress">
              <div class="timeline_progress-bar"></div>
            </div>
            <div
              data-w-id="ddebca4c-15d9-f65c-3685-fd6102b4ab84"
              class="timeline_item"
            >
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4ab85-4cec7203"
                class="timeline_left"
              >
                <div class="timeline_date-text">
                  <span class="text-span-13">01</span> <br />
                  Fair &amp; Distributed Sale
                  <br />
                </div>
              </div>
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4ab88-4cec7203"
                class="timeline_centre"
              >
                <div class="timeline_circle"></div>
              </div>
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4ab8a-4cec7203"
                class="timeline_right"
              >
                <div class="margin-bottom-xlarge">
                  <div class="timeline_text">
                    Gutter Cats were sold on the original Gutter Cat Gang
                    website for 0.07 ETH + gas (no bonding curve or FOMO
                    pricing)
                  </div>
                </div>
                <div class="timeline_image-wrapper">
                  <img src={Image1} loading="lazy"  alt="NBA" />
                </div>
              </div>
            </div>
            <div
              data-w-id="ddebca4c-15d9-f65c-3685-fd6102b4ab90"
              class="timeline_item"
            >
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4ab91-4cec7203"
                class="timeline_left"
              >
                <div class="timeline_date-text">
                  <span class="text-span-13">
                    02
                    <br />‍
                  </span>
                  Retain Full Ownership
                </div>
              </div>
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4ab94-4cec7203"
                class="timeline_centre"
              >
                <div class="timeline_circle"></div>
              </div>
              <div class="timeline_right">
                <div class="margin-bottom-medium _02">
                  <div class="timeline_text">
                    You own the commercial rights to your Gutter Cat or
                    Gutter Rat after purchase for as long as you retain
                    ownership.
                    <br />
                  </div>
                </div>
                <div class="margin-bottom-xlarge">
                  <div class="inline-block">
                    <a
                      href="#"
                      target="_blank"
                      class="timeline_link w-inline-block"
                    >
                      <div class="text-block-31">
                        See what we mean by <br />a DAO-powered NFT
                        Community
                      </div>
                      <div class="div-block-646">
                        <img
                          src={Arrow2}
                          loading="lazy"
                          alt="Arrow right Slider"
                          class="link-icon"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div class="timeline_image-wrapper">
                  <img
                    src={Image2}
                    loading="lazy"
                   
                    sizes="(max-width: 479px) 38px, (max-width: 767px) 64px, (max-width: 991px) 34vw, (max-width: 1279px) 38vw, (max-width: 1439px) 480px, 477.5px"
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="ddebca4c-15d9-f65c-3685-fd6102b4aba3"
              class="timeline_item"
            >
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4aba4-4cec7203"
                class="timeline_left"
              >
                <div class="timeline_date-text">
                  <span class="text-span-13">03 </span> <br />
                  Gutter DAO Arrives
                </div>
              </div>
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4aba7-4cec7203"
                class="timeline_centre"
              >
                <div class="timeline_circle"></div>
              </div>
              <div class="timeline_right">
                <div class="margin-bottom-medium _03">
                  <div class="timeline_text">
                    Now that all short term milestones have been achieved,
                    it&#x27;s time we focused on the long term future of the
                    gang. Introducing, Gutter Cat Gang DAO: Born from the
                    gutters, evolved for the world.
                    <br />
                  </div>
                </div>
                <div class="timeline_image-wrapper margin-bottom-medium _03">
                  <img
                    src={Image3}
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 38px, (max-width: 767px) 64px, (max-width: 991px) 34vw, (max-width: 1279px) 38vw, (max-width: 1439px) 480px, 477.5px"
                    class="image-13"
                  />
                </div>
              </div>
            </div>
            <div
              data-w-id="ddebca4c-15d9-f65c-3685-fd6102b4ac27"
              class="timeline_item"
            >
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4ac28-4cec7203"
                class="timeline_left"
              >
                <div class="timeline_date-text">
                  <span class="text-span-13">04</span> <br />
                  Exciting DAOvelopments
                </div>
              </div>
              <div
                id="w-node-ddebca4c-15d9-f65c-3685-fd6102b4ac2b-4cec7203"
                class="timeline_centre"
              >
                <div class="timeline_circle"></div>
              </div>
              <div class="timeline_right">
                <div class="div-block-666">
                  <div class="timeline_milestone-badge">
                    <div class="text-block-33">GCG dao launches</div>
                  </div>
                  <div class="margin-bottom-medium">
                    <div class="timeline_text">
                      There’s a lot being discussed regarding future
                      developments, including community initiatives. It
                      would be exciting to share them with the gang, but it
                      would be unfair for us to hype them if they are not
                      completely locked down. Know that we are working
                      around the clock, however our current focus is on a
                      smooth launch.
                      <br />
                    </div>
                  </div>
                </div>
                <div class="timeline_image-wrapper _08">
                  <img
                    src={Announce}
                    loading="lazy"
                    width="480"
                    sizes="(max-width: 479px) 38px, (max-width: 767px) 64px, (max-width: 991px) 34vw, (max-width: 1279px) 38vw, (max-width: 1439px) 480px, 477.5px"
                  />
                </div>
              </div>
            </div>
            <div class="overlay-fade-bottom"></div>
            <div class="overlay-fade-top"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="adopt-a-cat" class="section-7 FeelingLike">
    <div class="container-4">
      <div data-w-id="6d0d9e76-56eb-b9b6-0f3d-8d3645dd53dd" class="header">
        <div class="eggs-container position-relative d-flex justify-content-center">
          <img class="egg1" src={Ball1} />
          <img class="egg2" src={Ball2} />

          {/* <div className='player-wrapper'>
          <ReactPlayer
          playing
          className='react-player playerPos'
          url= {VideoMint}
          width='100%'
          height='430px'
         
          controls = {false}
          config={{ file: { attributes: {
            autoPlay: true,
            muted: true,
            loop: true
          }}}}
          />
      </div> */}


        </div>

        <div class="div-block-546">
          <h1 class="heading-2 cats-slider">
            FEELING LIKE A <span class="text-span-7">LUCKY GORILLA?</span>
          </h1>

          <p class="paragraph cats-slider">
          When you mint a DUNK NFT, you’ll have a chance to mint an extremely rare LEGENDARY or ALLSTAR gorilla.
          </p>

          <form class="range">
            <div class="form-group range__slider">
            <Range
                  // className="range-slider"
                  values={values}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  onChange={(values) => setValues(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      onMouseDown={props.onMouseDown}
                      onTouchStart={props.onTouchStart}
                      style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "100%"
                      }}
                    >
                      <div
                        ref={props.ref}
                        style={{
                          height: "8px",
                          width: "100%",
                          borderRadius: "4px",
                          background: getTrackBackground({
                            values,
                            colors: ["#311352", "#979da2"],
                            min: MIN,
                            max: MAX
                          }),
                          alignSelf: "center"
                        }}
                      >
                        {children}
                      </div>
                    </div>
                  )}
                  renderThumb={({ props, isDragged }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        backgroundColor: "#311352",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%"
                      }}
                    >
                      <div
                        className="range-slider-label"
                        style={{
                          position: "absolute",
                          top: "-40px",
                          color: "#311352",
                          fontWeight: "500",
                          fontSize: "16px",
                          background: "#fff",
                          padding: "4px",
                          borderRadius: "4px",
                          width: 48,
                          height: 32,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center"
                        }}
                      >
                        {values[0]}  
                      </div>
                      <div
                        style={{
                          // backgroundColor: "#548BF4",
                          left: "50%",
                          background: "#d84be1",
                          borderRadius: "50%",
                          width: 8,
                          height: 8,
                          backgroundColor: isDragged ? "#d84be1" : "#d84be1"
                        }}
                      />
                    </div>
                  )}
                />
            </div>
            <div class="form-group range__value">
              <label>1 DUNK = 1 SOL</label>
              <span>DUNK {values[0]}</span>
            </div>
          </form>


          <a href="#" target="_blank" class="link-block w-inline-block">
            <div class="div-block-537 div-block-lg width290">
              <div class="button-text headingFont">
                CONNECT WALLET TO MINT A GORILLA
              </div>
              <div class="div-block-547"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <div
    data-w-id="9b26fa49-2e6e-9436-7e8d-b46439196245"
    class="section-10 relative wf-section"
  >
    <div class="paddings">
      <div class="div-block-609">
        <div class="div-block-650">
          <img src={NFTImage} />
        </div>

        <div
          id="w-node-e169186a-fa5d-f3ab-0e12-763628c1ed96-4cec7203"
          class="div-block-610"
        >
          <h1 class="heading-11 transformClass">
            dynamic <span class="text-span-10">nature</span>
          </h1>
          <p class="paragraph-5 without-margin transformClass">
            One of the most interesting aspects of DAO governance is its
            dynamic nature. The rules, perimeters and boundaries are always
            in flux as they adapt to new technologies or changes in
            circumstances that help avoid otherwise inevitable corruptive
            influences.
          </p>
        </div>
      </div>
    </div>
  </div>

  <section class="Bgcolor">
    <div
      data-w-id="044c9a58-a94b-1bed-ac90-9c98ed0b784d"
      class="section-5 wf-section"
    >
      <div class="paddings fullscreen">
        <div class="div-block-580">
          <div class="divVideo">
          
            <div className='player-wrapper'>
            <ReactPlayer
            playing
            className='react-player playerPos'
            url= {Video}
            width='100%'
            height='430px'
           
            controls = {false}
            config={{ file: { attributes: {
              autoPlay: true,
              muted: true,
              loop: true
            }}}}
            />
        </div>


          </div>
          <div class="div-block-582">
            <div class="paddings fullscreen-paddings community">
              <div>
                <div class="text-block-18">Community </div>
                <h3 class="heading-4">
                  BECOME PART OF THE <span class="text-span-8">JUNGLE</span>
                </h3>
                <a href="#" class="link-block w-inline-block">
                  <div class="div-block-537 hero-btn">
                    <div class="button-text">Register Today</div>
                    <div class="div-block-547"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Our Team --> */}





  <section class="Bgcolor">
    <div
      data-w-id="e829ca5c-8269-be55-4f17-ebff9bfdfa08"
      class="section-13 wf-section"
    >
      <div class="paddings">
        <header class="section-7 paddingMobile">
          <div class="div-block-615">
            <div
              id="w-node-_6d523057-3411-57e4-85f4-1095c4c23d25-4cec7203"
              class="div-block-652"
            >
              <div class="text-block-34 transformClass ">
                At Gutter Cat Gang DAO, our strength lies in our diversity:
                our many talents constantly challenge themselves to master
                the art of talking to audiences. Together, they craft bold
                &amp; proprietary creative answers.
              </div>
            </div>
            <div
              id="w-node-ff9a4bc8-f13a-a76a-ce4b-828210563044-4cec7203"
              class="div-block-653"
            >
              <div class="text-block-35 transformClass">
                Meet our multi-skilled
              </div>
              <h1 class="heading-14 transformClass">team</h1>
            </div>
          </div>
          <div class="container-4">
            <div
              data-w-id="8f40bda2-8430-90eb-025d-9c0853eb798f"
              class="splide slider1"
            >
              <div class="splide__track w-dyn-list">
                <div role="list" class="splide__list w-dyn-items">
                 
                <Splide
        ref={ref}
        options={{
          rewind: false,
          perPage: 5,
          perMove: 5,
          gap: 0,
          padding: "1rem",
          pagination: false,
          breakpoints: {
            623: {
              perPage: 1,
              perMove: 1
            },
            935: {
              perPage: 3,
              perMove: 3
            },
            1247: {
              perPage: 4,
              perMove: 4
            }
          }
        }}
        onMounted={() => {
          console.log("mounted");
        }}
        onUpdated={() => {
          console.log("updated");
        }}
        onMoved={() => {
          console.log("moved");
        }}
        onVisible={(splide, slide) => {
          console.log("visible", slide.index);
        }}
      >

                 
                <SplideSlide>
 
                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={ImageSliderBall}
                          loading="lazy"
                          alt="Gutter Jonah"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter Jonah</h3>
                        <h3 class="sliders_text2-3">Sensei of the DAO</h3>
                      </div>
                    </div>
                  </div>
                    
  </SplideSlide>

  <SplideSlide>

                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={SliderBall1}
                          loading="lazy"
                          alt="Gutter Ric"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter Ric</h3>
                        <h3 class="sliders_text2-3">
                          Co-Founder of Gutter Cat Gang
                        </h3>
                      </div>
                    </div>
                  </div>
</SplideSlide>

 <SplideSlide>

                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={SliderBall2}
                          loading="lazy"
                          alt="Gutter Mitch"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter Mitch</h3>
                        <h3 class="sliders_text2-3">
                          Co-Founder of Gutter Cat Gang
                        </h3>
                      </div>
                    </div>
                  </div>
</SplideSlide>

<SplideSlide>

                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={SliderBall3}
                          loading="lazy"
                          alt="Gutter Dan"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter Dan</h3>
                        <h3 class="sliders_text2-3">
                          Co-Founder of Gutter Cat Gang
                        </h3>
                      </div>
                    </div>
                  </div>

</SplideSlide>
<SplideSlide>

                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={SliderBall4}
                          loading="lazy"
                          alt="Gutter Wang"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter Wang</h3>
                        <h3 class="sliders_text2-3">Gutter Consigliere</h3>
                      </div>
                    </div>
                  </div>

</SplideSlide>
<SplideSlide>
                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={SliderBall5}
                          loading="lazy"
                          alt="Gutter Ikarlee"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter Ikarlee</h3>
                        <h3 class="sliders_text2-3">
                          Gutter Branding Queen
                        </h3>
                      </div>
                    </div>
                  </div>
</SplideSlide>
<SplideSlide>
                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >


                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={SliderBall6}
                          loading="lazy"
                          alt="Big Stupid"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Big Stupid</h3>
                        <h3 class="sliders_text2-3">The Muscle</h3>
                      </div>
                    </div>
                  </div>
</SplideSlide>
<SplideSlide>
                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={SliderBall7}
                          loading="lazy"
                          alt="Gutter Popcaca"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter Popcaca</h3>
                        <h3 class="sliders_text2-3">The Muscle</h3>
                      </div>
                    </div>
                  </div>

</SplideSlide>
<SplideSlide>
                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={SliderBall8}
                          loading="lazy"
                          alt="Gutter World Peace"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter World Peace</h3>
                        <h3 class="sliders_text2-3">The Muscle</h3>
                      </div>
                    </div>
                  </div>
</SplideSlide>

<SplideSlide>
                  <div
                    role="listitem"
                    class="splide__slide five-cards w-dyn-item"
                  >
                    <div class="slider-tall">
                      <div class="slider-tall_img">
                        <img
                          src={Sailor}
                          loading="lazy"
                          alt="Gutter Sailor"
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 97vw, (max-width: 991px) 52vw, (max-width: 1279px) 36vw, (max-width: 1439px) 37vw, (max-width: 1919px) 531.13134765625px, 28vw"
                          class="slider-tall_photo"
                        />
                      </div>
                      <div class="text-opacity">
                        <h3 class="heading-13">Gutter Sailor</h3>
                        <h3 class="sliders_text2-3">The Muscle</h3>
                      </div>
                    </div>



                  </div>
</SplideSlide>
         
</Splide>
                </div>

            
              </div>
              <div class="splide__arrows-2">
                <div class="splide__embed-2 w-embed">
                  <button class="splide__arrow splide__arrow--prev"></button>
                </div>
                <div class="splide__embed-2 w-embed">
                  <button class="splide__arrow splide__arrow--next"></button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
    <div class="slider-css w-embed">
      <style></style>
    </div>
  </section>

  <section class="Bgcolor">
    <div
      data-w-id="dabaebf5-2627-f020-656e-ee8ea91ee93d"
      class="wf-section"
    >
      <div class="paddings">
        <div class="div-block-579">
          <div
            id="w-node-d8bd53d2-a5a9-26d3-be2e-4fffa5acd883-6aec71e4"
            class="div-block-661"
          >
            <div class="tabs">FAQ</div>
            <h1 class="heading-18">
              get the <span class="text-span-5">facts</span>
            </h1>
          </div>
          <div id="w-node-_6e06d152-e86c-e5d8-3621-00aeafbb3f19-6aec71e4">
            <div>
              <div class="div-block-52">
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e6e-6aec71e4"
                  class="splitter white"
                ></div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e6f-6aec71e4"
                  class="div-block-53"
                >
                  <div
                    data-click="faq"
                    id="w-node-ab8094d2-1672-ce00-6052-069e73082e70-6aec71e4"
                    class="c-faq-item"
                  >
                    <div class="c-faq-q">
                      <div class="c-faq-q-text">
                        <div class="text-block-17">
                          {" "}
                          Are you affiliated with the official NBA (National
                          Basketball Association)?
                        </div>
                      </div>
                      <div class="c-faq-icon">
                        <div class="_w-faq-icon">
                          <div class="faq-stripe-1"></div>
                          <div class="faq-stripe-2"></div>
                        </div>
                      </div>
                    </div>
                    <div class="c-faq-a">
                      <div class="c-faq-a-text">
                        <p
                          id="w-node-ab8094d2-1672-ce00-6052-069e73082e7b-6aec71e4"
                          class="normal-text-2 principle-paragraph"
                        >
                          {" "}
                          No, we are not affiliated with the NBA. NBA Dunk
                          is a fan-made project that celebrates the
                          excitement and athleticism of slam dunks. However,
                          we have many official partnerships with various
                          NBA players and teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e7d-6aec71e4"
                  class="splitter white"
                ></div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e7e-6aec71e4"
                  class="div-block-53"
                >
                  <div
                    data-click="faq"
                    id="w-node-ab8094d2-1672-ce00-6052-069e73082e7f-6aec71e4"
                    class="c-faq-item"
                  >
                    <div class="c-faq-q">
                      <div class="c-faq-q-text">
                        <div class="text-block-17">
                          {" "}
                          Why does NBA Dunks exist?
                        </div>
                      </div>
                      <div class="c-faq-icon">
                        <div class="_w-faq-icon">
                          <div class="faq-stripe-1"></div>
                          <div class="faq-stripe-2"></div>
                        </div>
                      </div>
                    </div>
                    <div class="c-faq-a">
                      <div class="c-faq-a-text">
                        <ol class="ol">
                          <li> Gorillas are cool.</li>
                          <li>
                            {" "}
                            We wanted to build something fun and unique that
                            tapped into the heart of the Solana NFT
                            community.
                          </li>
                          <li>
                            {" "}
                            We believe NFTs should represent more than a
                            JPEG in your wallet. This is a cultural
                            revolution. We have built the first ever passive
                            income generating NFTs on solana.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e8c-6aec71e4"
                  class="splitter white"
                ></div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e8d-6aec71e4"
                  class="div-block-53"
                >
                  <div
                    data-click="faq"
                    id="w-node-ab8094d2-1672-ce00-6052-069e73082e8e-6aec71e4"
                    class="c-faq-item"
                  >
                    <div class="c-faq-q">
                      <div class="c-faq-q-text">
                        <div class="text-block-17">
                          {" "}
                          Will there be multiple generations of this NFT
                          collection?
                        </div>
                      </div>
                      <div class="c-faq-icon">
                        <div class="_w-faq-icon">
                          <div class="faq-stripe-1"></div>
                          <div class="faq-stripe-2"></div>
                        </div>
                      </div>
                    </div>
                    <div class="c-faq-a">
                      <div class="c-faq-a-text">
                        <p
                          id="w-node-ab8094d2-1672-ce00-6052-069e73082e99-6aec71e4"
                          class="normal-text-2 principle-paragraph"
                        >
                          {" "}
                          Yes!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e9b-6aec71e4"
                  class="splitter white"
                ></div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e9c-6aec71e4"
                  class="div-block-53"
                >
                  <div
                    data-click="faq"
                    id="w-node-ab8094d2-1672-ce00-6052-069e73082e9d-6aec71e4"
                    class="c-faq-item"
                  >
                    <div class="c-faq-q">
                      <div class="c-faq-q-text">
                        <div class="text-block-17">
                          {" "}
                          How do I earn passive income rewards with my NFTs?
                        </div>
                      </div>
                      <div class="c-faq-icon">
                        <div class="_w-faq-icon">
                          <div class="faq-stripe-1"></div>
                          <div class="faq-stripe-2"></div>
                        </div>
                      </div>
                    </div>
                    <div class="c-faq-a">
                      <div class="c-faq-a-text">
                        <p
                          id="w-node-ab8094d2-1672-ce00-6052-069e73082ea8-6aec71e4"
                          class="normal-text-2 principle-paragraph"
                        >
                          {" "}
                          We will be releasing an NFT staking and farming
                          platform that will unlock the utility of DUNK NFTs
                          and supercharge holders' earning potential. Stay
                          tuned for more updates!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082eaa-6aec71e4"
                  class="splitter white"
                ></div>

                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e9c-6aec71e4"
                  class="div-block-53"
                >
                  <div
                    data-click="faq"
                    id="w-node-ab8094d2-1672-ce00-6052-069e73082e9d-6aec71e4"
                    class="c-faq-item"
                  >
                    <div class="c-faq-q">
                      <div class="c-faq-q-text">
                        <div class="text-block-17">
                          {" "}
                          Where can I sell my NFT?
                        </div>
                      </div>
                      <div class="c-faq-icon">
                        <div class="_w-faq-icon">
                          <div class="faq-stripe-1"></div>
                          <div class="faq-stripe-2"></div>
                        </div>
                      </div>
                    </div>
                    <div class="c-faq-a">
                      <div class="c-faq-a-text">
                        <p
                          id="w-node-ab8094d2-1672-ce00-6052-069e73082ea8-6aec71e4"
                          class="normal-text-2 principle-paragraph"
                        >
                          {" "}
                          After minting your NFT, it will be stored in your
                          wallet. You can then list it on NBA Dunk's
                          official marketplace,{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082eaa-6aec71e4"
                  class="splitter white"
                ></div>

                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082e9c-6aec71e4"
                  class="div-block-53"
                >
                  <div
                    data-click="faq"
                    id="w-node-ab8094d2-1672-ce00-6052-069e73082e9d-6aec71e4"
                    class="c-faq-item"
                  >
                    <div class="c-faq-q">
                      <div class="c-faq-q-text">
                        <div class="text-block-17">
                          {" "}
                          How can I contact the NBA Dunk team?
                        </div>
                      </div>
                      <div class="c-faq-icon">
                        <div class="_w-faq-icon">
                          <div class="faq-stripe-1"></div>
                          <div class="faq-stripe-2"></div>
                        </div>
                      </div>
                    </div>
                    <div class="c-faq-a">
                      <div class="c-faq-a-text">
                        <p
                          id="w-node-ab8094d2-1672-ce00-6052-069e73082ea8-6aec71e4"
                          class="normal-text-2 principle-paragraph"
                        >
                          {" "}
                          We are all super active on Discord and Telegram!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-ab8094d2-1672-ce00-6052-069e73082eaa-6aec71e4"
                  class="splitter white"
                ></div>
              </div>
            </div>
            <div
              data-duration-in="300"
              data-duration-out="100"
              data-current="eCommerce"
              data-easing="ease"
              class="tabs-2 w-tabs"
            >
              <div class="tabs-menu w-tab-menu">
                <a
                  data-w-tab="Corporate Website"
                  class="tab-link-tab-1 w-inline-block w-tab-link"
                >
                  <div class="tabs">FAQ</div>
                </a>
                <a
                  data-w-tab="eCommerce"
                  class="tab-link-tab-2 w-inline-block w-tab-link w--current"
                ></a>
              </div>
              <div class="tabs-content w-tab-content">
                <div data-w-tab="Corporate Website" class="w-tab-pane">
                  <div class="div-block-52">
                    <div
                      id="w-node-_0ad1210b-fd59-3b77-c1a0-0dd0d149cdad-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-_0ad1210b-fd59-3b77-c1a0-0dd0d149cdae-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-_0ad1210b-fd59-3b77-c1a0-0dd0d149cdaf-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              What is the Gutter Cat Gang?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-_0ad1210b-fd59-3b77-c1a0-0dd0d149cdc4-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              The Gutter Cat Gang is a collection of 3000
                              unique Gutter Cat NFTs who live in the
                              post-apocalyptic shatters of society on the
                              ETH blockchain. Ownership includes creative
                              &amp; commercial rights of your Gutter Cat as
                              well as initiation into the Gang.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_0ad1210b-fd59-3b77-c1a0-0dd0d149cdc6-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-_63301320-7809-3d03-2db1-5db123894a6f-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-_63301320-7809-3d03-2db1-5db123894a70-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">Wencatz?</div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-_63301320-7809-3d03-2db1-5db123894a7b-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              The Gutter Cat Gang is a collection of 3000
                              unique Gutter Cat NFTs who live in the
                              post-apocalyptic shatters of society on the
                              ETH blockchain. Ownership includes creative
                              &amp; commercial rights of your Gutter Cat as
                              well as initiation into the Gang.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_0a951441-8075-4c3d-fc1e-471728ad45e4-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-f79b5f43-7a73-b5d7-2df9-11df700c754e-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-f79b5f43-7a73-b5d7-2df9-11df700c754f-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              How much does a Gutter Cat cost?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-f79b5f43-7a73-b5d7-2df9-11df700c755a-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              The Gutter Cat Gang is a collection of 3000
                              unique Gutter Cat NFTs who live in the
                              post-apocalyptic shatters of society on the
                              ETH blockchain. Ownership includes creative
                              &amp; commercial rights of your Gutter Cat as
                              well as initiation into the Gang.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_4b54ec85-90ec-0a3b-5659-428f97505df1-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-_38124952-2a75-be23-c7eb-ee4849d3cfe5-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-_38124952-2a75-be23-c7eb-ee4849d3cfe6-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              How can I get a Gutter Cat?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-_38124952-2a75-be23-c7eb-ee4849d3cff1-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              The Gutter Cat Gang is a collection of 3000
                              unique Gutter Cat NFTs who live in the
                              post-apocalyptic shatters of society on the
                              ETH blockchain. Ownership includes creative
                              &amp; commercial rights of your Gutter Cat as
                              well as initiation into the Gang.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-a0e3af9e-7d25-49df-9a79-042f357ffff8-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-a23f092e-153b-5632-bd84-71f5a3a74e48-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-a23f092e-153b-5632-bd84-71f5a3a74e49-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              How were the Gutter Cats created?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-a23f092e-153b-5632-bd84-71f5a3a74e54-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              The Gutter Cat Gang is a collection of 3000
                              unique Gutter Cat NFTs who live in the
                              post-apocalyptic shatters of society on the
                              ETH blockchain. Ownership includes creative
                              &amp; commercial rights of your Gutter Cat as
                              well as initiation into the Gang.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-adbaa998-4591-9b42-dafd-a6c6f8c971e4-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-fe9c99eb-e0b8-c3f3-9181-82c64363ab99-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-fe9c99eb-e0b8-c3f3-9181-82c64363ab9a-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              What&#x27;s the Gutter Cat Gang&#x27;s origin?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-fe9c99eb-e0b8-c3f3-9181-82c64363aba5-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              The Gutter Cat Gang is a collection of 3000
                              unique Gutter Cat NFTs who live in the
                              post-apocalyptic shatters of society on the
                              ETH blockchain. Ownership includes creative
                              &amp; commercial rights of your Gutter Cat as
                              well as initiation into the Gang.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_3dc7d6a1-6ba6-5467-2ee8-faa8563b7c62-6aec71e4"
                      class="splitter white"
                    ></div>
                  </div>
                </div>
                <div
                  data-w-tab="eCommerce"
                  class="w-tab-pane w--tab-active"
                >
                  <div class="div-block-52">
                    <div
                      id="w-node-_43340987-b859-93db-28aa-4541cb8bb8fa-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-_43340987-b859-93db-28aa-4541cb8bb8fb-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-_43340987-b859-93db-28aa-4541cb8bb8fc-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              What is the Gutter Cat Gang?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-_43340987-b859-93db-28aa-4541cb8bb907-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              The Gutter Cat Gang is a collection of 3000
                              unique Gutter Cat NFTs who live in the
                              post-apocalyptic shatters of society on the
                              ETH blockchain. Ownership includes creative
                              &amp; commercial rights of your Gutter Cat as
                              well as initiation into the Gang.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_43340987-b859-93db-28aa-4541cb8bb909-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-_43340987-b859-93db-28aa-4541cb8bb928-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-_43340987-b859-93db-28aa-4541cb8bb929-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              How can I join the DAO?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-_43340987-b859-93db-28aa-4541cb8bb934-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              To enter the DAO you must hold at least one
                              Gutter Cat in your wallet. Gutter Cats can be
                              found for sale on nearly all NFT secondary
                              markets, with most being predominantly on
                              OpenSea.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_43340987-b859-93db-28aa-4541cb8bb936-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-_43340987-b859-93db-28aa-4541cb8bb937-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-_43340987-b859-93db-28aa-4541cb8bb938-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              How were the Gutter Cats created?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-_43340987-b859-93db-28aa-4541cb8bb943-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              Each Gutter Cat is algorithmically generated
                              by combining 123 properties with varying
                              rarities in nine categories (Furs,
                              Backgrounds, Eyes, Mouths, Shirts, Hats,
                              Earrings, Necklaces, &amp; Beards).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-_43340987-b859-93db-28aa-4541cb8bb945-6aec71e4"
                      class="splitter white"
                    ></div>
                    <div
                      id="w-node-_43340987-b859-93db-28aa-4541cb8bb946-6aec71e4"
                      class="div-block-53"
                    >
                      <div
                        data-click="faq"
                        id="w-node-_43340987-b859-93db-28aa-4541cb8bb947-6aec71e4"
                        class="c-faq-item"
                      >
                        <div class="c-faq-q">
                          <div class="c-faq-q-text">
                            <div class="text-block-17">
                              What&#x27;s the Gutter Cat Gang&#x27;s origin?
                            </div>
                          </div>
                          <div class="c-faq-icon">
                            <div class="_w-faq-icon">
                              <div class="faq-stripe-1"></div>
                              <div class="faq-stripe-2"></div>
                            </div>
                          </div>
                        </div>
                        <div class="c-faq-a">
                          <div class="c-faq-a-text">
                            <p
                              id="w-node-_43340987-b859-93db-28aa-4541cb8bb952-6aec71e4"
                              class="normal-text-2 principle-paragraph"
                            >
                              The year is 2050. Humans are an interplanetary
                              species &amp; have all but abandoned the
                              post-apocalyptic shatters of society on earth.
                              Cats have taken over. One crime-ridden,
                              nondescript inner city is inhabited by a group
                              of cats collectively known as the Gutter Cats.
                              This is their story.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="w-node-bca34dc3-8b41-5a16-51c1-1ecb85632e40-6aec71e4"
                      class="splitter white"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer/>
    </>
  );
}

export default Home;
