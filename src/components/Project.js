import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gumigomiimg from '../img/gumigomiimg.webp'
// import prompicimg from '../img/prompicimg.webp'
import h3llo from "../img/H3LLO.webp"
import card from "../img/card.webp"
import cardgameimg from '../img/cardgameimg.webp'
import kmongimg from '../img/kmongimg.webp'
// import dentalimg from '../img/dentalimg.webp'
import sample1 from '../img/sample2.webp'
import sample3 from '../img/sample3.webp'
import sample5 from '../img/sample5.webp'
import sample7 from '../img/sample7.webp'

import edito1 from '../img/edito1.webp'
import edito2 from '../img/edito2.webp'
import edito3 from '../img/edito3.webp'
import edito4 from '../img/edito4.webp'
import edito5 from '../img/edito5.webp'

import modalImg1 from '../img/design_modal1.webp';
import modalImg2 from '../img/design_modal2.webp';
import modalImg3 from '../img/design_modal3.webp';
import modalImg4 from '../img/design_modal4.webp';
import modalImg5 from '../img/design_modal5.webp';

const designModals = [modalImg1, modalImg2, modalImg3, modalImg4, modalImg5];


const ProjectAll = styled.div`
 width: 100%;
 height: auto;
 background-color: rgba(0,0,0,0.1);
`
const ProjectWrap = styled.div`
  max-width: 1200px !important;
  height: auto;
  margin: 0 auto;
  

  .projectTitle{
      h2{
        /* outline: 1px dotted red; */
        color: #000;
        display: inline-block;
        border-bottom: 1px solid rgba(0,0,0,0.5);
        padding-bottom: 10px;
        text-align: center;
        font-size: 35px;
        font-weight: 700;
        padding-top: 40px;
        margin-left: 50%; transform: translateX(-50%);
      }
    }
    .projectBtm{
      margin-top: 50px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
        transition: opacity 0.3s ease-in-out;
          opacity: 1;

            &.fade-out {
                opacity: 0;
            }
      .project{
        border-radius: 10px;
        /* width: 550px; */
        max-width: 550px;
        height: 800px;
        box-shadow: 0px 0px 8px rgba(0,0,0,0.3);
        background-color: #fff;
        padding: 40px;
        box-sizing: border-box;
        margin-bottom: 40px;

        @media screen and (max-width: 500px) {
          padding: 20px;
        }
        &.designbox{
          height: auto;
        }

        .imgdiv{
          outline: 1px solid rgba(0,0,0,0.1);
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          height: auto;
          background-position: center;
          background-size: contain;
          margin-bottom: 10px;
          box-shadow: 0px 0px 5px rgba(0,0,0,0.5);

           img {
              max-width: 100%;
              height: auto;    
              scale: 1.02;
            }
        }
        .projectName{
          /* outline: 1px dotted red; */
          display: inline-block;
          padding: 8px 10px;
          border-radius: 5px;
          font-size: 14px;
          background-color: royalblue;
          color: #fff;
        }
        .date{
          font-size: 14px;
          color: #fff;
          line-height: 35px;
          /* border-bottom: 1px solid rgba(0,0,0,0.2); */
        }
        .detail{
          font-size: 17px;
          font-weight: 700;
          line-height: 40px;
          @media screen and (max-width:550px) {
            font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 40px;
          }
          @media screen and (max-width:470px) {
            /* outline: 1px dotted red; */
            font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 20px;
          word-break: keep-all;
          white-space: normal;
          overflow-wrap: normal;
          text-decoration: underline;
          text-underline-offset: 5px;
          padding-bottom: 10px;
          }
        }
        .list{
          margin-top: 5px;
          margin-left: 20px;
          list-style: disc;
          li{
            margin-bottom: 8px;
            font-weight: 400;
            font-size: 14px;
            word-break: keep-all;
          white-space: normal;
          overflow-wrap: normal;

          @media screen and (max-width:430px) {
            font-size: 12px;
          }
          }
        }
        .link{
          color: royalblue;
          text-decoration: none;
          line-height: 20px;
          
          p{
            display: inline-block;
            /* outline: 1px dotted red; */
            padding-left: 8px;
            border-left: 4px solid royalblue;
            margin-top: 15px;
            margin-bottom: 25px;
            
            &:hover{
              color: gray;
              cursor: pointer;
            }

          }
        }
        .usedskill{
          outline: 1px solid rgba(65,105,225,0.5);
          width: 95%; height: auto;
          border-radius: 10px;
          padding: 10px;
          font-size: 14px;
          background-color: rgba(65,105,225,0.4);
        }
        .popup{
          box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
          outline: 1px solid rgba(0,0,0,0.2);
          margin-top: 20px;
          border-radius: 8px;
          width: 100px; height: 30px;
          display: flex;
          align-items: center;
          font-size: 12px;
          justify-content: center;

          &:hover{
            cursor: pointer;
          }

          p{
            margin-left: 5px;
          }
        }
      }
    }

`
// ------------------ 모달팝업 -------------
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); /* 검은색 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 1000px;
  max-width: 1000px;
  max-height: 80vh; /* 화면 높이의 80%로 제한 */
  overflow-y: auto; /* 내용이 넘칠 경우 스크롤 표시 */
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  position: relative;
  margin-left:50px;
  margin-right: 50px;

  h3{
    padding-top: 25px;
    font-weight: 700;
    font-size: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    @media screen and (max-width:700px) {
      padding-top: 25px;
    font-weight: 700;
    font-size: 20px !important;
    padding-bottom: 30px;
    letter-spacing: -0.5px;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    }
  }

  .projectName{
          /* outline: 1px dotted red; */
          display: inline-block;
          padding: 8px 15px;
          border-radius: 5px;
          font-size: 14px;
          background-color: royalblue;
          color: #fff;
          
        }
        .projectAnd{
          /* outline: 1px dotted red; */
          display: inline-block;
          padding: 8px 15px;
          border-radius: 5px;
          font-size: 14px;
          background-color: royalblue;
          color: #fff;
          
        }
        .date{
          font-size: 14px;
          color: #fff;
          line-height: 35px;
          /* border-bottom: 1px solid rgba(0,0,0,0.2); */
        }
        .detail{
          font-size: 17px;
          font-weight: 700;
          line-height: 40px;
          @media screen and (max-width:700px) {
            font-size: 15px;
            letter-spacing: -0.5px;
            line-height: 22px;
            text-decoration: underline;
            text-underline-offset: 4px;
          }
        }
        .url{
          margin-top: 20px;
          font-size: 22px;
          font-weight: 700;
        }
        .list{
          margin-top: 5px;
          margin-left: 20px;
          list-style: disc;
          margin-bottom: 50px;
          li{
            margin-bottom: 20px;
            font-weight: 400;
            font-size: 14px;
            @media screen and (max-width:550px) {
            line-height: 22px;
            margin-bottom: 0px;
          }
          }
        }
        .link{
          color: royalblue;
          text-decoration: none;
          line-height: 20px;
          
          p{
            display: inline-block;
            /* outline: 1px dotted red; */
            padding-left: 8px;
            border-left: 4px solid royalblue;
            margin-top: 15px;
            margin-bottom: 25px;
            
            &:hover{
              color: gray;
              cursor: pointer;
            }

          }
        }
        .summary{
          margin-top: 20px;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .background{
          margin-top: 20px;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 40px;
        }
       
        .backgroundDetail{
          margin-bottom: 40px;
          line-height: 25px;
          @media screen and (max-width:550px) {
            font-size: 14px;
            line-height: 22px;
          }
        }
        .meaning{
          margin-top: 20px;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 40px;
        }
        .meaningDetail{
          margin-bottom: 40px;
          line-height: 25px;
          @media screen and (max-width:550px) {
            font-size: 14px;
            line-height: 22px;
          }
        }
        .usedskill{
          outline: 1px solid rgba(65,105,225,0.5);
          width: 95%; height: auto;
          border-radius: 10px;
          padding: 10px;
          font-size: 14px;
          background-color: rgba(65,105,225,0.4);
        }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const FadeWrap = styled.div`
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  &.fade-out {
    opacity: 0;
  }
`;

const DesignModalContent = styled.div`
   background-color: white;
  padding: 0;
  border-radius: 10px;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;

const Illust = styled.div`
margin-top: 80px;
margin-bottom: 100px;
/* outline: 1px dotted red; */
h2{
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
}
a{
  display: block;
  width: 100%;
  outline: 1px solid rgba(0,0,0,0.1);
  padding: 15px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  color: rgba(54,54,54,1);
  font-weight: 700;
  transition: 0.2s;

 &:hover{
  scale: 1.02;
 }
}

`

// ------------------ 모달팝업 끝 -------------


const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen0, setIsModalOpen0] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [isModalOpen6, setIsModalOpen6] = useState(false);
  const [isModalOpen7, setIsModalOpen7] = useState(false);
  const [isModalOpen20, setIsModalOpen20] = useState(false);

   const [activeTab, setActiveTab] = useState('web');
   const [fadeClass, setFadeClass] = useState('');
   const [activeDesignModalIndex, setActiveDesignModalIndex] = useState(null);
  const [designModalIndex, setDesignModalIndex] = useState(null);

   const handleDesignModalOpen = (index) => {
  setDesignModalIndex(index);
};

const handleDesignModalClose = () => {
  setDesignModalIndex(null);
};

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleOpenModal0 = () => {
    setIsModalOpen0(true);
  };
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOpenModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOpenModal4 = () => {
    setIsModalOpen4(true);
  };
  const handleOpenModal5 = () => {
    setIsModalOpen5(true);
  };
  const handleOpenModal6 = () => {
    setIsModalOpen6(true);
  };
  const handleOpenModal7 = () => {
    setIsModalOpen7(true);
  };
  const handleOpenModa20 = () => {
    setIsModalOpen20(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
   const handleCloseModal0 = () => {
    setIsModalOpen0(false);
  };
  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };
  const handleCloseModal3 = () => {
    setIsModalOpen3(false);
  };
  const handleCloseModal4 = () => {
    setIsModalOpen4(false);
  };
  const handleCloseModal5 = () => {
    setIsModalOpen5(false);
  };
  const handleCloseModal6 = () => {
    setIsModalOpen6(false);
  };
  const handleCloseModal7 = () => {
    setIsModalOpen7(false);
  };
   const handleCloseModa20 = () => {
    setIsModalOpen20(false);
  };



  

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // 모달이 열리면 배경 스크롤 잠금
    } else {
      document.body.style.overflow = 'auto'; // 모달이 닫히면 배경 스크롤 해제
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시에도 스크롤 해제
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen2) {
      document.body.style.overflow = 'hidden'; // 모달이 열리면 배경 스크롤 잠금
    } else {
      document.body.style.overflow = 'auto'; // 모달이 닫히면 배경 스크롤 해제
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시에도 스크롤 해제
    };
  }, [isModalOpen2]);

  useEffect(() => {
    if (isModalOpen3) {
      document.body.style.overflow = 'hidden'; // 모달이 열리면 배경 스크롤 잠금
    } else {
      document.body.style.overflow = 'auto'; // 모달이 닫히면 배경 스크롤 해제
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시에도 스크롤 해제
    };
  }, [isModalOpen3]);

  useEffect(() => {
    if (isModalOpen4) {
      document.body.style.overflow = 'hidden'; // 모달이 열리면 배경 스크롤 잠금
    } else {
      document.body.style.overflow = 'auto'; // 모달이 닫히면 배경 스크롤 해제
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시에도 스크롤 해제
    };
  }, [isModalOpen4]);

  useEffect(() => {
    if (isModalOpen6) {
      document.body.style.overflow = 'hidden'; // 모달이 열리면 배경 스크롤 잠금
    } else {
      document.body.style.overflow = 'auto'; // 모달이 닫히면 배경 스크롤 해제
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시에도 스크롤 해제
    };
  }, [isModalOpen4]);

  useEffect(() => {
    if (isModalOpen20) {
      document.body.style.overflow = 'hidden'; // 모달이 열리면 배경 스크롤 잠금
    } else {
      document.body.style.overflow = 'auto'; // 모달이 닫히면 배경 스크롤 해제
    }

    return () => {
      document.body.style.overflow = 'auto'; // 컴포넌트 언마운트 시에도 스크롤 해제
    };
  }, [isModalOpen20]);


 const handleTabChange = (tab) => {
  if (tab === activeTab) return;
  setFadeClass('fade-out');
  setTimeout(() => {
    setActiveTab(tab);
    setFadeClass('');
  }, 300); // transition 시간
};

  return (
    <>
      <ProjectAll>
               <div style={{ marginBottom: '30px', textAlign: 'center',paddingTop:'40px' }}>
        <button
          onClick={() => handleTabChange('web')}
          
          style={{
            fontWeight: activeTab === 'web' ? 'bold' : 'normal',
            // textDecoration: activeTab === 'web' ? 'underline' : 'none',
            fontSize: '20px',
            marginRight: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          WEB PROJECTS
        </button>
        <button
          onClick={() => handleTabChange('design')}
          style={{
            fontWeight: activeTab === 'design' ? 'bold' : 'normal',
            // textDecoration: activeTab === 'design' ? 'underline' : 'none',
            fontSize: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          DESIGN PROJECTS
        </button>
      </div>
      <ProjectWrap>
      <div className='projectTitle'>
          <h2>{activeTab === 'web' ? 'WEB PROJECTS' : 'DESIGN PROJECTS'}</h2>
      </div>

          <FadeWrap className={fadeClass}>

        
          <div className='projectBtm'>
            {activeTab === 'web' ?(
              <>

                
              {/* ------------------------------------------- ai프로젝트 */}

               <div className='project'>
                <div className='projectName'style={{marginRight:'5px'}}>H3LLOWORLD</div>
                {/* <a href='https://drive.google.com/uc?export=download&id=1coFOwb4NtsLsKA4SP08AqeewrlWyFR1e' target='_blank'></a> */}
                <p className='date'>2024. 11</p>
                <div className='imgdiv'>
                  <img src={h3llo} ></img>
                </div>
                <p className='detail'>랜딩페이지 디자인</p>
                <ul className='list'>
                  {/* <li>사이트 운영 경험을 목표로 개발</li> */}
                  <li>html, css, js를 활용한 페이지 구현</li>
                  <li>AI를 활용한 이미지 생성 & 활용</li>
                  
                  {/* <li style={{color:'red', fontWeight:'700'}}>리액트 네이티브(어플)와 연동을 위해 현재 결제로직 수정중</li> */}
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/h3lloworld/' target='_blank'><p>https://h3lloworld.kr</p></a>
                <div className='usedskill'>
                  <p>
                    React, Firebase, AI
                  </p>
                  </div>
                  <div className='popup' onClick={handleOpenModal0}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
              </div>

             


            {/* -------------------------------------- 2번 프로젝트 */}
              <div className='project'>
              <div className='projectName'>기업형페이지디자인 샘플</div>
                <p className='date'>2024. 12</p>
                <div className='imgdiv'>
                <img src={sample1} ></img>
                </div>
                <p className='detail'>기업형 페이지 디자인</p>
                <ul className='list'>
                  <li>기업형페이지 샘플 작업</li>
                  <li>반응형페이지</li>
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/pub_sample2/build/' target='_blank'><p>gumi-gomi.github.io/pub2_proj</p></a>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS
                  </p>
                  </div>
                  <div style={{display:'flex'}}>

                  <div className='popup' onClick={handleOpenModal4}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
                   {/*  <a href='https://naver.com' target='_blank' style={{textDecoration:'none',color:'#000'}}>
                  <div className='popup' style={{marginLeft:'15px',backgroundColor:'rgba(255,150,100,0.4)'}}>
                    <p style={{fontWeight:'700'}}>ADMIN PAGE</p>
                  </div>
                    </a> */}
                  </div>
              </div>

               {/* -------------------------------- cardfactory 시작 */}
        
                 <div className='project'>
                <div className='projectName'style={{marginRight:'5px'}}>기업형페이지디자인 샘플3</div>
                {/* <a href='https://drive.google.com/uc?export=download&id=1coFOwb4NtsLsKA4SP08AqeewrlWyFR1e' target='_blank'></a> */}
                <p className='date'>2024. 11</p>
                <div className='imgdiv'>
                  <img src={card} ></img>
                </div>
                <p className='detail'>기업형 페이지 디자인</p>
                <ul className='list'>
                  {/* <li>사이트 운영 경험을 목표로 개발</li> */}
                  <li>react를 활용한 페이지 구현</li>
                  {/* <li>AI를 활용한 이미지 생성 & 활용</li> */}
                  
                  {/* <li style={{color:'red', fontWeight:'700'}}>리액트 네이티브(어플)와 연동을 위해 현재 결제로직 수정중</li> */}
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/cardfactory/build/' target='_blank'><p>https://cardfactory.co.kr</p></a>
                <div className='usedskill'>
                  <p>
                    React
                  </p>
                  </div>
                  <div className='popup' onClick={handleOpenModa20}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
              </div>


              {/* ----------------------1번프로젝트 */}
              <div className='project'>
                <div className='projectName'style={{marginRight:'5px'}}>GG-ILLUST (일러스트판매)</div>
                <a href='https://drive.google.com/uc?export=download&id=1coFOwb4NtsLsKA4SP08AqeewrlWyFR1e' target='_blank'>
                {/* <div className='projectName' style={{ backgroundColor:'lightcoral',color:'#fff',boxShadow:'0px 0px 10px rgba(0,0,0,0.4)',cursor:'pointer'}}>Android 어플 다운</div> */}
                </a>
                <p className='date'>2024. 11</p>
                <div className='imgdiv'>
                  <img src={gumigomiimg} ></img>
                </div>
                <p className='detail'>일러스트 판매 사이트 (GG-ILLUST)</p>
                <ul className='list'>
                  {/* <li>사이트 운영 경험을 목표로 개발</li> */}
                  {/* <li>Firebase Auth, Database, Hosting 활용</li> */}
                  <li>일러스트 판매 컨셉의 사이트 디자인</li>
                  <li>결제와 회원가입 기능 추가</li>
                  {/* <li>React-native를 이용한 어플 연동</li> */}
                  {/* <li style={{color:'red', fontWeight:'700'}}>리액트 네이티브(어플)와 연동을 위해 현재 결제로직 수정중</li> */}
                </ul>
                <a className='link' href='https://gumigomi-illust.com' target='_blank'><p>https://gumigomi-illust.com</p></a>
                <div className='usedskill'>
                  <p>
                    React, Scss, Firebase, Kakaopay api, PS, AI
                  </p>
                  </div>
                  <div className='popup' onClick={handleOpenModal}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
              </div>

                     {/* ------------------------------------ 요식업사이트 시작*/}
              <div className='project'>
              <div className='projectName'>요식업디자인 샘플</div>
                <p className='date'>2025. 1</p>
                <div className='imgdiv'>
                <img src={sample3} ></img>
                </div>
                <p className='detail'>요식업기업 페이지 디자인</p>
                <ul className='list'>
                  <li>요식업페이지지 샘플 작업</li>
                  <li>반응형페이지</li>
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/pub3/build' target='_blank'><p>gumi-gomi.github.io/pub3_proj</p></a>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS
                  </p>
                  </div>
                  <div style={{display:'flex'}}>

                  <div className='popup' onClick={handleOpenModal6}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
                   {/*  <a href='https://naver.com' target='_blank' style={{textDecoration:'none',color:'#000'}}>
                  <div className='popup' style={{marginLeft:'15px',backgroundColor:'rgba(255,150,100,0.4)'}}>
                    <p style={{fontWeight:'700'}}>ADMIN PAGE</p>
                  </div>
                    </a> */}
                  </div>
              </div>


              {/* ------------------------------------ 요식업사이트 끝*/}


              

              {/* --------------------------------- brander */}
              <div className='project'>
              <div className='projectName'>기업형페이지디자인 샘플2</div>
                <p className='date'>2024. 12</p>
                <div className='imgdiv'>
                <img src={sample5} ></img>
                </div>
                <p className='detail'>기업형 페이지 디자인2</p>
                <ul className='list'>
                  <li>기업형페이지 샘플 작업</li>
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/pub4/build' target='_blank'><p>gumi-gomi.github.io/pub4_proj</p></a>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS
                  </p>
                  </div>
                  <div style={{display:'flex'}}>

                  <div className='popup' onClick={handleOpenModal5}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
                   {/*  <a href='https://naver.com' target='_blank' style={{textDecoration:'none',color:'#000'}}>
                  <div className='popup' style={{marginLeft:'15px',backgroundColor:'rgba(255,150,100,0.4)'}}>
                    <p style={{fontWeight:'700'}}>ADMIN PAGE</p>
                  </div>
                    </a> */}
                  </div>
              </div>
              {/* --------------------------------- brander 끝 */}

             

              {/* ------------------------ 랜딩페이지 시작 */}
              <div className='project'>
              <div className='projectName'>랜딩페이지지 샘플</div>
                <p className='date'>2024. 12</p>
                <div className='imgdiv'>
                <img src={sample7} ></img>
                </div>
                <p className='detail'>랜딩페이지 디자인</p>
                <ul className='list'>
                  <li>랜딩페이지 샘플 작업</li>
                  <li>반응형페이지</li>
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/pub1/build/' target='_blank'><p>gumi-gomi.github.io/design_proj</p></a>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS
                  </p>
                  </div>
                  <div style={{display:'flex'}}>

                  <div className='popup' onClick={handleOpenModal7}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
                   {/*  <a href='https://naver.com' target='_blank' style={{textDecoration:'none',color:'#000'}}>
                  <div className='popup' style={{marginLeft:'15px',backgroundColor:'rgba(255,150,100,0.4)'}}>
                    <p style={{fontWeight:'700'}}>ADMIN PAGE</p>
                  </div>
                    </a> */}
                  </div>
              </div>

              {/* ------------------------ 랜딩페이지 끝 */}
      

              {/* ---------------------------------------3번 프로젝트 */}
              <div className='project'>
              <div className='projectName'>랜딩페이지 샘플 2</div>
                <p className='date'>2024. 9</p>
                <div className='imgdiv'>
                <img src={kmongimg} ></img>
                </div>
                <p className='detail'>랜딩페이지 디자인2</p>
                <ul className='list'>
                  <li>Adobe AfterEffect, Photoshop을 이용한 애니메이션 작업</li>
                  <li>keyframe을 활용한 요소 움직임 구현</li>
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/kmong_pj/build/' target='_blank'><p>gumi-gomi.github.io/kmong-pj</p></a>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS, Sai
                  </p>
                  </div>
                  <div className='popup' onClick={handleOpenModal3}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
              </div>

              {/* --------------------------------------- 4번 프로젝트 */}

              
              <div className='project'>
              <div className='projectName'>REACT-THREE-FIBER</div>
                <p className='date'>2024. 12</p>
                <div className='imgdiv'>
                <img src={cardgameimg} ></img>
                </div>
                <p className='detail'>R3F를 활용한 사이트 구현</p>
                <ul className='list'>
                  <li>REACT-THREE-FIBER를 활용한 3D웹 구현</li>
                  <li>Blender를 활용한 3D모델링 작업</li>
                  <li style={{color:'red'}}>&#8251; 윈도우와 안드로이드로 확인요망.</li>
                </ul>
                <a className='link' href=' https://gumi-gomi.github.io/r3f-notebook/build/' target='_blank'><p>gumi-gomi.github.io/r3f-notebook</p></a>
                <div className='usedskill'>
                  <p>
                  R3F, Blender, PS, Sai
                  </p>
                  </div>
                  <div className='popup' onClick={handleOpenModal2}>
                    <i className="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
              </div>


              </>
            ) : (
              <>
                {[edito1, edito2, edito3, edito4, edito5].map((img, index) => (
                  <div key={index}>
                    <div
      className="project designbox"
      style={{ padding: '0px', cursor: 'pointer' }}
      onClick={() => handleDesignModalOpen(index)}
    >
      <img
        src={img}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderRadius: '10px',
        }}
      />
    </div>
  </div>
))}
{designModalIndex !== null && (
  <ModalBackground onClick={handleDesignModalClose}>
    <DesignModalContent onClick={(e) => e.stopPropagation()}>
      <CloseButton onClick={handleDesignModalClose}>&times;</CloseButton>
      <div
        style={{
          maxHeight: '80vh',
          maxWidth: '90vw',
          overflow: 'auto',
        }}
      >
        <img
          src={designModals[designModalIndex]}
          alt={`Design Modal ${designModalIndex + 1}`}
          style={{
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            display: 'block',
          }}
        />
      </div>
    </DesignModalContent>
  </ModalBackground>
)}
{/* <Illust>
  <h2>character illust</h2>
  <a href="https://www.instagram.com/gumi_gomi/" target='_blank'>Instagram - gumi_gomi</a>
</Illust> */}
              </>
            )}

            

          </div>
              </FadeWrap>

        
      </ProjectWrap>
      </ProjectAll>
      
      {/* -------------------------------------- 일러스트사이트 모달 */}
      {isModalOpen && (
        <ModalBackground onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <h3>GUMIGOMI-ILLUST (일러스트 판매 사이트)</h3>
            <p className='date'>2024. 11</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumigomi-illust.com' target='_blank'><p>https://gumigomi-illust.com</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>Firebase / Kakao Pay api를 연동한 일러스트 판매 사이트</p>
                <ul className='list'>
                  <li>사이트 운영경험을 목표로 개발 </li>
                  <li>Firebase Auth, Database, Hosting 활용</li>
                  <li>Kakao Pay api를 활용한 온라인 결제서비스 구축</li>
                </ul>
                <p className='background'>- Background -</p>
                <p className='backgroundDetail'>회원가입, 로그인부터 상품의 판매, 도메인 연결과 호스팅까지 전부 작업하여 실제로 운영할 수 있는 사이트를 만들어보자는 목표를 가지고 작업하게 되었습니다.</p>
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  기능이 없는 페이지 구현만 하다가 새로운 기능들을 사용해 볼 수 있어서 좋았습니다.<br/><br/>
                  Firebase에서 Auth와 Database를 활용하여 각 회원마다 정보를 저장할 수 있도록 하며, 로그인 후 카카오페이 결제를 실행했을 때 로그인되어있는 회원의 정보와 상품페이지의 상품번호,이름을 활용하여 가격을 불러오고 결제 완료후 해당 상품의 다운로드 링크를 마이페이지에 추가되도록하는 작업도 하였습니다.<br/><br/> 또한 지금까지는 React로 작업한 작업물을 빌드하여 깃허브에 올려서 볼 수 있도록 했었는데 가비아에서 도메인을 구매하고 Firebase Hosting과 연결하여 해당 도메인으로 사이트에 접속할 수 있도록 하였습니다.<br/><br/> 이러한 과정을 거치며 페이지를 화면에 보이게하는것도 중요하지만, 서비스를 운영하기 위해서는 회원이 화면에서 하는 일련의 행동들에서 생기는 데이터를 저장하고 관리하는 것이 중요하다는 사실을 배웠습니다. 일단 서비스를 이용할 수 있도록 하는 필수적인 기능들만 사용했지만 사이트를 더 편하게 그리고 안정적으로 운영할 수 있도록 지속적으로 새로운 기능을 탐색하고 디자인을 수정하려고 합니다. <br/><br/>
                  {/* <span style={{color:'rgba(256,0,0,1)',fontWeight:"700"}}>(현재 카카오페이 가맹점 심사중이라서 실제 거래는 할 수 없고 회원가입 후 테스트결제로 확인할 수 있습니다.)</span> */}

                </p>
                <div className='usedskill'>
                  <p>
                    React, Scss, Firebase, Kakaopay api, PS, AE
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}
      {/* -------------------------------------------- H3LLOWORLD 모달 */}
      {isModalOpen0 && (
        <ModalBackground onClick={handleCloseModal0}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal0}>&times;</CloseButton>
            <h3>H3LLOWORLD</h3>
            <p className='date'>2024. 11</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/h3lloworld/' target='_blank'><p>https://h3lloworld.kr</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>디자인 페이지 샘플</p>
                <ul className='list'>
                  {/* <li>사이트 운영경험을 목표로 개발 </li> */}
                  <li>html, css, js를 활용한 페이지 구현</li>
                  <li>AI를 활용한 이미지 생성 & 활용</li>
                </ul>
                {/* <p className='background'>- Background -</p> */}
                {/* <p className='backgroundDetail'>Open api를 사용해서 사이트를 만들어보고 싶어서 진행하게 되었습니다.</p> */}
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  자유로운 디자인의 페이지를 html, css(scss) ,js를 사용하여 페이지를 구현하였습니다.
                  {/* <span style={{color:'rgba(256,0,0,1)',fontWeight:"700"}}>(현재 카카오페이 가맹점 심사중이라서 실제 거래는 할 수 없고 회원가입 후 테스트결제로 확인할 수 있습니다.)</span> */}

                </p>
                <div className='usedskill'>
                  <p>
                    HTML, CSS, SCSS, JS, PS
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}

      {/* -------------------------- cardfactory 모달 */}

       {isModalOpen20 && (
        <ModalBackground onClick={handleCloseModa20}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModa20}>&times;</CloseButton>
            <h3>기업형 페이지 디자인</h3>
            <p className='date'>2024. 11</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/cardfactory/build/' target='_blank'><p>https://cardfactory.kr</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>기업형 디자인 페이지 샘플</p>
                <ul className='list'>
                  {/* <li>사이트 운영경험을 목표로 개발 </li> */}
                  <li>React를 활용한 페이지 구현</li>
                  {/* <li>AI를 활용한 이미지 생성 & 활용</li> */}
                </ul>
                {/* <p className='background'>- Background -</p> */}
                {/* <p className='backgroundDetail'>Open api를 사용해서 사이트를 만들어보고 싶어서 진행하게 되었습니다.</p> */}
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  REACT + R3F를 사용하여 카드사페이지를 제작하였습니다. <br/>
                  메인페이지 작업 후 먼저 github 업로드 하였으며, 상세페이지 제작중입니다.
                  {/* <span style={{color:'rgba(256,0,0,1)',fontWeight:"700"}}>(현재 카카오페이 가맹점 심사중이라서 실제 거래는 할 수 없고 회원가입 후 테스트결제로 확인할 수 있습니다.)</span> */}

                </p>
                <div className='usedskill'>
                  <p>
                    React, Ps
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}


      {/* ------------------------------ r3f 3d모델 모달 */}
      {isModalOpen2 && (
        <ModalBackground onClick={handleCloseModal2}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal2}>&times;</CloseButton>
            <h3>REACT-THREE-FIBER PROJECT</h3>
            <p className='date'>2024. 12</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href=' https://gumi-gomi.github.io/r3f-notebook/build/' target='_blank'><p>gumi-gomi.github.io/r3f-notebook</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>Blender와 R3F를 활용한 3D사이트 구현</p>
                <ul className='list'>
                <li>REACT-THREE-FIBER를 활용한 3D웹 구현</li>
                <li>Blender를 활용한 3D모델링 작업</li>
                </ul>
                <p className='background'>- Background -</p>
                <p className='backgroundDetail'>평소에 3D모델링에 관심이 있어서 Blender 설치 후 모델링 해보던 중에 웹에서 만든 3D모델을 적용해서 사이트를 구현할 수 있다는 것을 보게 되었고, 간단하게 노트북 모델을 만들어서 작업 해보았습니다.</p>
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  &nbsp;저는 평소에 3D 모델링에 관심이 있었습니다. 그래서 무료로 사용할 수 있는 Blender라는 프로그램으로 모델링을 해보던중에 3D로 만든 모델을 웹에 적용할 수 있는 REACT-THREE-FIBER라는 것을 보게되었고, 관련 정보를 찾아보면서 작업하였습니다.<br/><br/>
                  &nbsp;BLENDER와 R3F는 처음 써봐서 복잡한 작업은 못하였지만, 노트북처럼 보이도록 상판과 하판을 따로 작업하여 적용하였고, 노트북 모델 뒤의 그림과 상판 위의 손모양은 아이패드와 포토샵으로 드로잉하여 적용하였습니다.<br/><br/>
                  &nbsp;평소에 평면으로 된 작업만 하다가 Z축까지 사용하는 3D를 적용하는 작업을 하게되니 카메라의 위치, 3D모델의 위치, 빛의 위치 등 생각해야 할 부분들이 많았고, 처음보는 태그들도 많아서 검색해가면서 작업하였습니다.
                  노트북이 열린 뒤에 보이는 화면은 iframe을 사용하여 제가 작업한 사이트를 로드하도록 하였습니다.<br/><br/>
                  &nbsp;또한 R3F에서 물리효과를 사용할 수 있다는 설명을 보고 다음 작업은 간단한 웹게임을 만들어보면 좋겠다는 생각을 했습니다.
                  중력, 충돌 감지, 속도 및 관성, 질량, 마찰 등 물리법칙을 사용하면 재미있는 작업물을 만들 수 있을 것 같습니다.<br/><br/>
                  {/* <span style={{color:"red"}}>(현재 아이패드와 아이폰에서 노트북 화면을 구성하는 iframe의 위치가 달라지는 오류를 발견하여 수정중이기에 윈도우나 안드로이드로 확인바랍니다.)</span> */}

                </p>
                <div className='usedskill'>
                  <p>
                    R3F, Blender, PS 
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}

      {/* ----------------------------------------- 크몽 외주작업 포폴 */}


      {isModalOpen3 && (
        <ModalBackground onClick={handleCloseModal3}>
          <ModalContent onClick={(e) => e.stopPropagation()}> 
            <CloseButton onClick={handleCloseModal3}>&times;</CloseButton>
            <h3>랜딩페이지 샘플 2</h3>
            <p className='date'>2024. 11</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/kmong_pj/build/' target='_blank'><p>gumi-gomi.github.io/kmong-pj</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>키프레임 애니메이션 연습을 위한 페이지</p>
                <ul className='list'>
                <li>Adobe AfterEffect, Photoshop을 이용한 애니메이션 작업</li>
                <li>keyframe을 활용한 요소 움직임 구현</li>
                </ul>
                <p className='background'>- Background -</p>
                <p className='backgroundDetail'>외주플랫폼에서 그림작업과, 간단한 랜딩페이지 작업을 하기위한 소개페이지가 필요해서 제작하게 되었습니다. </p>
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  시선을 끌기위해 구글에서 여러 이미지를 찾아 어도비의 After Effects에서 애니메이션작업 후 프레임마다 png로 저장한 뒤 Photoshop을 이용하여 움직이는 gif를 생성하고 화면에 추가하였습니다. 그림서비스는 하단의 인스타그램링크로 바로가기 하도록 하였고, 페이지개발서비스는 Sample페이지에서 작업물을 확인할 수 있도록 구성했습니다.<br/><br/>
                
                </p>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS, Sai
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}
     
      
      {/* --------------------------------------------- 4번쨰 모달 */}
      {isModalOpen4 && (
        <ModalBackground onClick={handleCloseModal4}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal4}>&times;</CloseButton>
            <h3>기업형 홈페이지 디자인 샘플</h3>
            <p className='date'>2024. 12</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/pub_sample2/build/' target='_blank'><p>gumi-gomi.github.io/pub2-proj</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>기업형 홈페이지 샘플 제작</p>
                <ul className='list'>
                <li>라우터를 사용한 페이지 전환</li>
                <li>홈페이지 퍼블리싱 작업</li>
                  <li>반응형페이지로 작업</li>
                </ul>
               {/*  <p className='background'>- Background -</p>
                <p className='backgroundDetail'>회원들의 문의사항을 관리하려면 어떻게 하는게 좋을까 생각하다가 답글을 달 수 있는 관리자페이지를 작업해보았습니다. </p> */}
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                 &nbsp;퍼블리싱을 연습하기위한 사이트입니다. React로 작업하였고 react-route를 사용하여 페이지를 전환하였습니다.<br/>또한 반응형으로 제작하여 화면크기에 맞게 화면이 구성되도록 하였습니다.
                 {/* <br/><br/> */}
                </p>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS, Sai
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}


      {/* ---------------------- 요식업 모달 시작 */}
      {isModalOpen6 && (
        <ModalBackground onClick={handleCloseModal6}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal6}>&times;</CloseButton>
            <h3>요식업 페이지 디자인 샘플</h3>
            <p className='date'>2025. 1</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/pub3/build/' target='_blank'><p>gumi-gomi.github.io/pub3-proj</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>요식업업페이지 샘플 제작</p>
                <ul className='list'>
                <li>라우터를 사용한 페이지 전환</li>
                <li>홈페이지 퍼블리싱 작업</li>
                  <li>반응형페이지로 작업</li>
                </ul>
               {/*  <p className='background'>- Background -</p>
                <p className='backgroundDetail'>회원들의 문의사항을 관리하려면 어떻게 하는게 좋을까 생각하다가 답글을 달 수 있는 관리자페이지를 작업해보았습니다. </p> */}
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                 &nbsp;퍼블리싱을 연습하기위한 사이트입니다. React로 작업하였고 react-route를 사용하여 페이지를 전환하였습니다.<br/>또한 반응형으로 제작하여 화면크기에 맞게 화면이 구성되도록 하였습니다.
                 {/* <br/><br/> */}
                </p>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS, Sai
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}
      {/* ---------------------- 요식업 모달 끝 */}
      {/* ------------------------------------------- brander modal */}
      {isModalOpen5 && (
        <ModalBackground onClick={handleCloseModal5}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal5}>&times;</CloseButton>
            <h3>기업형 홈페이지 디자인 샘플2</h3>
            <p className='date'>2024. 12</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/pub4/build/' target='_blank'><p>gumi-gomi.github.io/pub4-proj</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>기업형 홈페이지 샘플 제작</p>
                <ul className='list'>
                <li>라우터를 사용한 페이지 전환</li>
                <li>홈페이지 퍼블리싱 작업</li>
                  <li>AI를 이용한 움직이는 배경화면 생성</li>
                </ul>
               {/*  <p className='background'>- Background -</p>
                <p className='backgroundDetail'>회원들의 문의사항을 관리하려면 어떻게 하는게 좋을까 생각하다가 답글을 달 수 있는 관리자페이지를 작업해보았습니다. </p> */}
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                 &nbsp;퍼블리싱을 연습하기위한 사이트입니다. React로 작업하였고 react-route를 사용하여 페이지를 전환하였습니다.<br/>AI를 이용해 움직이는 배경화면을 생성해 메인페이지에 적용하였고 KEYFRAME을 이용하여 요소의 움직임을 구현하였습니다.
                 {/* <br/><br/> */}
                </p>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS, Sai
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}

      {/* ------------------------------------------- brander modal 끝 */}

      {/* ---------------------------- 랜딩페이지 시작 */}

      {isModalOpen7 && (
        <ModalBackground onClick={handleCloseModal7}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal7}>&times;</CloseButton>
            <h3>랜딩페이지 디자인 샘플</h3>
            <p className='date'>2024. 12</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/pub1/build/' target='_blank'><p>gumi-gomi.github.io/design-proj</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>간단한 랜딩페이지 샘플 제작</p>
                <ul className='list'>
                {/* <li>라우터를 사용한 페이지 전환</li> */}
                <li>홈페이지 퍼블리싱 작업</li>
                  <li>Photoshop을 이용한 이미지 편집과 일러스트생성, 이미지 삽입</li>
                </ul>
               {/*  <p className='background'>- Background -</p>
                <p className='backgroundDetail'>회원들의 문의사항을 관리하려면 어떻게 하는게 좋을까 생각하다가 답글을 달 수 있는 관리자페이지를 작업해보았습니다. </p> */}
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                 &nbsp;원페이지로 작업한 소개페이지입니다.<br/>
                  취미로 작업했던 일러스트와 구글에서 캡쳐한 이미지로 일러스트레이터 소개페이지를 간략하게 만들었습니다. Keyframe을 이용해서 이미지의 움직임을 구현했고 반응형으로 제작하였습니다.
                 {/* <br/><br/> */}
                </p>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS, Sai
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}


      {/* ---------------------------- 랜딩페이지 끝 */}


    </>
  )
}

export default Project
