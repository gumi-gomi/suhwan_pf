import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gumigomiimg from '../img/gumigomiimg.webp'
import cardgameimg from '../img/cardgameimg.webp'
import kmongimg from '../img/kmongimg.webp'
import dentalimg from '../img/dentalimg.webp'
import sample1 from '../img/sample2.webp'
import sample3 from '../img/sample3.webp'

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
      .project{
        border-radius: 10px;
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
          padding: 8px 15px;
          border-radius: 5px;
          font-size: 14px;
          background-color: royalblue;
          color: #fff;
        }
        .date{
          font-size: 14px;
          color: rgba(0,0,0,0.6);
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
        .date{
          font-size: 14px;
          color: rgba(0,0,0,0.6);
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

// ------------------ 모달팝업 끝 -------------


const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
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




  return (
    <>
      <ProjectAll>
      <ProjectWrap>
      <div className='projectTitle'>
              <h2>PROJECTS</h2>
          </div>

          <div className='projectBtm'>

              {/* ----------------------1번프로젝트 */}
              <div className='project'>
                <div className='projectName'>GUMIGOMI-ILLUST(일러스트 판매 사이트)</div>
                <p className='date'>2024. 11</p>
                <div className='imgdiv'>
                  <img src={gumigomiimg} ></img>
                </div>
                <p className='detail'>Firebase / Kakao Pay api를 연동한 일러스트 판매 사이트</p>
                <ul className='list'>
                  <li>사이트 운영 경험을 목표로 개발</li>
                  <li>Firebase Auth, Database, Hosting 활용</li>
                  <li>Kakao Pay api를 활용한 온라인 결제서비스 구축</li>
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
                  {/* <li>Admin페이지를 만들어 회원들의 문의사항 관리가능 </li> */}
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

              {/* ------------------------------------ 요식업사이트 시작*/}
              <div className='project'>
              <div className='projectName'>요식업디자인 샘플</div>
                <p className='date'>2024. 12</p>
                <div className='imgdiv'>
                <img src={sample3} ></img>
                </div>
                <p className='detail'>요식업기업 페이지 디자인</p>
                <ul className='list'>
                  <li>기업형페이지 샘플 작업</li>
                  {/* <li>Admin페이지를 만들어 회원들의 문의사항 관리가능 </li> */}
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/pub3/build' target='_blank'><p>gumi-gomi.github.io/pub2_proj</p></a>
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


              {/* ------------------------------------ 요식업사이트 끝*/}

              {/* ---------------------------------------3번 프로젝트 */}
              <div className='project'>
              <div className='projectName'>크몽 외주작업 포트폴리오</div>
                <p className='date'>2024. 9</p>
                <div className='imgdiv'>
                <img src={kmongimg} ></img>
                </div>
                <p className='detail'>프리랜서 외주사이트 '크몽'의 작업 설명을 위한 페이지</p>
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
                <p className='date'>2024. 11</p>
                <div className='imgdiv'>
                <img src={cardgameimg} ></img>
                </div>
                <p className='detail'>R3F를 활용한 사이트 구현</p>
                <ul className='list'>
                  <li>REACT-THREE-FIBER를 활용한 3D웹 구현</li>
                  <li>Blender를 활용한 3D모델링 작업</li>
                  <li style={{color:'red'}}>&#8251; 윈도우와 안드로이드로 확인요망.(ios오류수정중)</li>
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


          </div>
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

      {/* ------------------------------ r3f 3d모델 모달 */}
      {isModalOpen2 && (
        <ModalBackground onClick={handleCloseModal2}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal2}>&times;</CloseButton>
            <h3>REACT-THREE-FIBER PROJECT</h3>
            <p className='date'>2024. 11</p>
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
                  <span style={{color:"red"}}>(현재 아이패드와 아이폰에서 노트북 화면을 구성하는 iframe의 위치가 달라지는 오류를 발견하여 수정중이기에 윈도우나 안드로이드로 확인바랍니다.)</span>

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
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal3}>&times;</CloseButton>
            <h3>크몽 외주작업 포트폴리오</h3>
            <p className='date'>2024. 11</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/kmong_pj/build/' target='_blank'><p>gumi-gomi.github.io/kmong-pj</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>프리랜서 외주사이트 '크몽'의 작업 설명을 위한 페이지</p>
                <ul className='list'>
                <li>Adobe AfterEffect, Photoshop을 이용한 애니메이션 작업</li>
                <li>keyframe을 활용한 요소 움직임 구현</li>
                </ul>
                <p className='background'>- Background -</p>
                <p className='backgroundDetail'>외주플랫폼에서 그림작업과, 간단한 랜딩페이지 작업을 하기위한 소개페이지가 필요해서 제작하게 되었습니다. </p>
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  &nbsp;외주작업을 위한 간단한 설명페이지가 필요해서 작업하였습니다.<br/> 시선을 끌기위해 구글에서 여러 이미지를 찾아 어도비의 After Effects에서 애니메이션작업 후 프레임마다 png로 저장한 뒤 Photoshop을 이용하여 움직이는 gif를 생성하고 화면에 추가하였습니다. 그림서비스는 크몽으로 바로가기 되도록 링크를 달았고, 페이지개발서비스는 Sample페이지에서 작업물을 확인할 수 있도록 구성했으며, 3가지의 작업물을 확인할 수 있습니다.<br/><br/>
                  &nbsp;이 작업들을 진행하면서 들었던 생각은 png, gif, jpg등 화면에 표현되는 이미지가 많아질 때 페이지 로딩속도와 그 이미지들을 불러오는 과정에서 사용되는 호스팅 비용이 많아질 것이라는 생각이 들었고, webp파일로 변환하여 적용하여 파일의 크기를 최대한 줄이고 빠르게 로드될 수 있도록 하였습니다.
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
                <a className='link' href='https://gumi-gomi.github.io/dental_proj/build/' target='_blank'><p>gumi-gomi.github.io/dental-proj</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>기업형 홈페이지 샘플 제작</p>
                <ul className='list'>
                <li>라우터를 사용한 페이지 전환</li>
                <li>홈페이지 퍼블리싱 작업</li>
                  {/* <li>Admin페이지를 만들어 회원들의 문의사항 관리가능 </li> */}
                </ul>
               {/*  <p className='background'>- Background -</p>
                <p className='backgroundDetail'>회원들의 문의사항을 관리하려면 어떻게 하는게 좋을까 생각하다가 답글을 달 수 있는 관리자페이지를 작업해보았습니다. </p> */}
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                 &nbsp;퍼블리싱을 연습하기위한 사이트입니다. React를 사용하였고 라우터를 이용하여 페이지 전환을 하였습니다.  
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


    </>
  )
}

export default Project
