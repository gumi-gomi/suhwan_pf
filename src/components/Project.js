import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import gumigomiimg from '../img/gumigomiimg.webp'
import cardgameimg from '../img/cardgameimg.webp'
import kmongimg from '../img/kmongimg.webp'
import dentalimg from '../img/dentalimg.webp'


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
                  <li>취미로 작업한 그림을 판매하려고 사이트 개발</li>
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
                    <i class="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
              </div>
        
              {/* -------------------------------------- 2번 프로젝트 */}
              <div className='project'>
              <div className='projectName'>바른이치과</div>
                <p className='date'>2024. 7</p>
                <div className='imgdiv'>
                <img src={dentalimg} ></img>
                </div>
                <p className='detail'>가상의 치과인 '바른이치과' 홈페이지 제작</p>
                <ul className='list'>
                  <li>Firebase를 이용한 문의사항 기능추가</li>
                  <li>Admin페이지를 만들어 모든 회원의 문의사항 관리가능 </li>
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/dental_proj/build/' target='_blank'><p>gumi-gomi.github.io/dental_proj</p></a>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS
                  </p>
                  </div>
                  <div style={{display:'flex'}}>

                  <div className='popup' onClick={handleOpenModal4}>
                    <i class="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
                  <div className='popup' style={{marginLeft:'15px',backgroundColor:'rgba(255,150,100,0.4)'}}>
                    <p style={{fontWeight:'700'}}>ADMIN PAGE</p>
                  </div>
                  </div>
              </div>

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
                    <i class="fa-solid fa-book"></i>
                    <p>README</p>
                  </div>
              </div>

              {/* --------------------------------------- 4번 프로젝트 */}

              
              <div className='project'>
              <div className='projectName'>카드 맞추기 게임</div>
                <p className='date'>2024. 9</p>
                <div className='imgdiv'>
                <img src={cardgameimg} ></img>
                </div>
                <p className='detail'>빠른 시간안에 같은 색의 카드를 뒤집는 카드게임</p>
                <ul className='list'>
                  <li>Local storage를 이용한 점수 저장 및 리셋기능</li>
                  <li>photoshop, Sai tool을 이용한 그림작업</li>
                </ul>
                <a className='link' href='https://gumi-gomi.github.io/card-game/build/' target='_blank'><p>gumi-gomi.github.io/card-game</p></a>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS, Sai
                  </p>
                  </div>
                  <div className='popup' onClick={handleOpenModal2}>
                    <i class="fa-solid fa-book"></i>
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
                  <li>취미로 작업한 그림을 판매하려고 사이트 개발</li>
                  <li>Firebase Auth, Database, Hosting 활용</li>
                  <li>Kakao Pay api를 활용한 온라인 결제서비스 구축</li>
                </ul>
                <p className='background'>- Background -</p>
                <p className='backgroundDetail'>저는 취미로 그림을 그리며 크몽에서 외주작업을 하고있습니다. 플랫폼의 높은 수수료와 구조에 답답함을 느꼈고, '독자적인 사이트를 구축하여 서비스해보면 어떨까'라는 생각을 하게 되었습니다. </p>
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  기능이 없는 페이지 구현만 해보던 저에게 큰 의미가 있는 작업이었습니다.<br/><br/>
                  작업하면서 재미있었던 것은 실제 사용 가능한 기능을 구현하려다보니 화면만 구성할 때 보지 못했던 오류들을 만나고 새로운 기능을 사용해본 것 입니다.<br/> Firebase를 사용할 때 나왔던 CORS에러를 특정 도메인에서만 요청을 허용하도록 Firebase 코드에서 CORS미들웨어를 호출하여 해결하였고, Firebase에서 Auth와 Database를 활용하여 각 회원마다 정보를 저장할 수 있도록 하며, 로그인 후 카카오페이 결제를 실행했을 때 로그인되어있는 회원의 정보와 상품페이지의 상품번호,이름을 활용하여 가격을 불러오고 결제 완료후 해당 상품의 다운로드 링크를 마이페이지에 추가되도록하는 작업도 하였습니다.<br/><br/> 또한 지금까지는 React로 작업한 작업물을 빌드하여 깃허브에 올려서 볼 수 있도록 했었는데 가비아에서 도메인을 구매하고 Firebase Hosting과 연결하여 해당 도메인으로 사이트에 접속할 수 있도록 하였습니다.<br/><br/> 이러한 과정을 거치며 페이지를 화면에 보이게하는것도 중요하지만, 서비스를 운영하기 위해서는 회원이 화면에서 하는 일련의 행동들에서 생기는 데이터를 저장하고 관리하는 것이 중요하다는 사실을 배웠습니다. 일단 서비스를 이용할 수 있도록 하는 필수적인 기능들만 사용했지만 사이트를 더 편하게 그리고 안정적으로 운영할 수 있도록 지속적으로 새로운 기능을 탐색하고 디자인을 수정하려고 합니다. 

                </p>
                <div className='usedskill'>
                  <p>
                    React, Scss, Firebase, Kakaopay api, PS, AE
                  </p>
                  </div>
          </ModalContent>
        </ModalBackground>
      )}

      {/* ------------------------------ 카드게임 모달 */}
      {isModalOpen2 && (
        <ModalBackground onClick={handleCloseModal2}>
          <ModalContent onClick={(e) => e.stopPropagation()}> {/* 모달 클릭 시 닫히지 않도록 */}
            <CloseButton onClick={handleCloseModal2}>&times;</CloseButton>
            <h3>카드 맞추기 게임</h3>
            <p className='date'>2024. 11</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/card-game/build/' target='_blank'><p>gumi-gomi.github.io/card-game</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>빠른 시간안에 같은 색의 카드를 뒤집는 카드게임</p>
                <ul className='list'>
                <li>Local storage를 이용한 점수 저장 및 리셋기능</li>
                <li>photoshop, Sai tool을 이용한 그림작업</li>
                </ul>
                <p className='background'>- Background -</p>
                <p className='backgroundDetail'>저의 형은 인디게임개발자입니다. 형과 대화를 하다가 요즘 html로 게임을 만드는 사람이 많아진다는 말을 듣고 게임이 만들어보고 싶어졌습니다.</p>
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  게임개발자인 형과 대화를 하던중 html게임에 대한 이야기를 하였습니다. 유니티로 개발을 하던 형이라 웹에서 동작이 어떻게 구현되는지 궁금해했습니다. 대단히 엄청난 게임은 아니지만 간단한 게임을 만들며 설명을 해주었고 같이 작업을 해볼 수 있을까 기대했지만 실행에 옮기지는 못했기에 아쉬웠던 기억이있습니다.<br/><br/>
                  게임에 들어가는 이미지는 Photoshop과 Sai라는 드로잉 프로그램으로 작업하였고, keyframe을 사용해서 각 요소들에 움직임을 주었습니다. 또한 localstorage를 사용한 첫 작업이었는데, 게임이 끝나고 점수의 저장과 리셋을 할 수 있도록 하였습니다. 이 작업에서 연습한 부분은 localstorage와 컴포넌트에서 상태관리를 하기 위한 기본 훅(Hook)인 useState와 useEffect에 대한 부분인데, 게임 실행시 시작되는 타이머를 useEffect를 사용하여 화면이 랜더링될때 시작하도록 설정하였고 게임진행시 카운트되는 시간과 뒤집힌카드의 상태를 저장하기 위해 useState를 사용했습니다.전문적인 게임 개발자가 아니라서 엉성한 부분도 있지만 연습하기에 좋은 작업이었습니다.

                </p>
                <div className='usedskill'>
                  <p>
                    React, Scss, PS 
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
                  외주작업을 위한 간단한 설명페이지가 필요해서 작업하였습니다.<br/> 시선을 끌기위해 여러 이미지를 어도비의 After Effects에서 애니메이션작업 후 프레임마다 png로 저장한 뒤 Photoshop을 이용하여 움직이는 gif를 생성하고 화면에 추가하였습니다. 그림서비스는 크몽으로 바로가기 되도록 링크를 달았고, 페이지개발서비스는 SAMPLE페이지에서 작업물을 확인할 수 있도록 구성했습니다.<br/><br/> 샘플페이지에는 가상의 치과사이트와 원두판매사이트를 볼 수 있는데요. 가상의 치과사이트에서는 병원의 진료가능목록 소개페이지와 Firebase를 이용한 회원가입/로그인, 마이페이지에서 문의사항기능을 넣었고, 회원들이 마이페이지에 남긴 문의사항은 Admin 페이지를 만들어 모든 회원의 문의사항을 관리하도록 하였습니다.<br/><br/>
                  원두판매사이트에서는 구글맵 Api를 사용했습니다. 실제로 있는 장소가 아니기 때문에 대전시청의 위치로 설정해 두었고, 그 과정에서 구글맵 Api의 사용법에 대해서 알아볼 수 있는 작업이었습니다.<br/><br/>
                  이 작업들을 진행하면서 들었던 생각은 png,gif,jpg등 화면에 표현되는 이미지가 많아질 때 페이지 로딩속도와 그 이미지들을 불러오는 과정에서 사용되는 호스팅 비용이 많아질 것이라는 생각이 들었습니다. 이미지파일의 화질이 저하되지 않는 선에서 해상도와 확장자를 선택하고 최대한 용량을 줄이는 방향을 생각해봐야할것 같습니다.
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
            <h3>바른이치과 홈페이지</h3>
            <p className='date'>2024. 11</p>
                <p className='url'>- Homepage URL -</p>
                <a className='link' href='https://gumi-gomi.github.io/dental_proj/build/' target='_blank'><p>gumi-gomi.github.io/dental-proj</p></a>
                <p className='summary'>- Summary -</p>
                <p className='detail'>가상의 치과인 '바른이치과' 홈페이지 제작</p>
                <ul className='list'>
                <li>Firebase를 이용한 문의사항 기능추가</li>
                  <li>Admin페이지를 만들어 모든 회원의 문의사항 관리가능 </li>
                </ul>
                <p className='background'>- Background -</p>
                <p className='backgroundDetail'>구직활동을 하던 중, 회사홈페이지와 관리자페이지를 따로 만들어 관리하는 작업을 한다는 문구를 보고 작업하게 되었습니다. </p>
                <p className='meaning'>- Detail - </p>
                <p className='meaningDetail'>
                  저의 하루는 포트폴리오를 수정하고 사람인에 들어가 구직활동을하는 루틴으로 이루어져 있습니다. 구직활동을 하던중 어느 회사의 구직글을 보니 입사를 하게되면 새롭게 회사의 홈페이지와 관리자페이지를 만드는 작업을 하게 될 것이라는 내용이었습니다. 정확하게 어떤 홈페이지이고 어떤 내용을 관리하는 페이지를 제작한다는 내용은 없었지만, 내름대로 페이지를 제작해보자고 마음먹었습니다.<br/><br/>
                  먼저 가상의 치과인 '바른이치과'의 홈페이지를 만들고 Firebase의 회원가입 기능을 넣은 뒤, 회원마다 마이페이지에서 문의사항을 남길 수 있도록 하였습니다. 또한 관리자페이지는 Admin계정으로만 접속 할 수 있게 하였고, 관리자페이지에서 모든 회원의 문의사항을 보고 답글을 달 수 있도록 하였습니다.
                  홈페이지의 구성은 메인페이지와 회원가입/로그인 치료관련 상세페이지로 구성하였습니다. 디자인은 필요한 정보를 제공하는 쪽으로 간단하게 구성해봤고, 반응형으로 제작하였습니다.
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
