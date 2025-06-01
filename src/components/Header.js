import React from 'react'
import styled from 'styled-components'
import Headerimg from '../img/header.webp'

const HeaderAll = styled.div`
  /* outline: 1px dotted red; */
  width: 100%; height: 600px;
  /* margin: 0; */
  background-image: url(${Headerimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color:#fff;
  box-sizing: border-box;
  .headerInner{
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    .headerBtm{
      padding-top: 190px;
      text-align: center;
      .h2{
        font-size: 55px;
        font-weight: 700;
        margin: 0;
        padding: 0 15px;
        line-height: 70px;
      }
      p{
        margin-top: 50px;
        line-height: 30px;
        font-weight: 400;
        padding: 0 15px;
      }
    }

  }
  @media screen and (max-width:750px) {
    width: 100%; height: 600px;
  margin: 0 auto;
  background-image: url(${Headerimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color:#fff;
  .headerInner{
    /* outline: 1px dotted red; */
    margin: 0 auto;
    max-width: 1200px;
    height: 100%;
    .headerBtm{
      padding-top: 190px;
      text-align: center;
      .h2{
        font-size: 45px;
        word-break: keep-all;
        overflow-wrap: normal;
        white-space: normal;
        font-weight: 700;
        line-height: 70px;
      }
      p{
        margin-top: 50px;
        line-height: 30px;
        font-weight: 400;
      }
    }

  }
    
  }
  @media screen and (max-width:500px) {
    width: 100%; height: 600px;
  margin: 0 auto;
  background-image: url(${Headerimg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color:#fff;
  .headerInner{
    /* outline: 1px dotted red; */
    margin: 0 auto;
    max-width: 1200px !important;
    height: 100%;
    .headerBtm{
      padding-top: 190px;
      text-align: center;
      .h2{
        letter-spacing: -1px;
        font-size: 35px;
        word-break: keep-all;
        overflow-wrap: normal;
        white-space: normal;
        font-weight: 700;
        line-height: 70px;
      }
      p{
        margin-top: 50px;
        font-size: 12px;
        line-height: 30px;
        font-weight: 400;
      }
    }

  }
    
  }


`
const RealHeader = styled.div`
   /* outline: 1px dotted red; */
   position: fixed;
   left: 0;
   color: #000;
   z-index: 10;
   background-color: rgba(256,256,256,1);
   box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
      width: 100%; height: 60px;
      .realInner{
        max-width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex; justify-content: space-between;
        align-items: center;
        .logo{
          font-size: 20px;
          font-weight: 700;
          padding-left: 30px;
        }
        .topMenu{
          padding-right: 30px;
          display: flex;
          gap: 30px;
          
          li{
            
            &:hover{
              cursor: pointer;
            }
          }

          @media screen and (max-width:550px) {
            padding-right: 30px;
          display: flex;
          gap: 12px;
          font-size: 14px;
          
          li{
            
            &:hover{
              cursor: pointer;
            }
          }

          }
        }
      }
`

const Header = ({ scrollToSection, refs }) => {
  const { aboutRef, skillRef, projectRef } = refs;
  
  return (
    <>
      <RealHeader>
        <div className='realInner'>
            <div className='logo'>KSH's Portfolio</div>
              <ul className='topMenu'>
                <li  onClick={() => scrollToSection(aboutRef)}>About me</li>
                <li onClick={() => scrollToSection(skillRef)}>Skills</li>
                <li onClick={() => scrollToSection(projectRef)}>Projects</li>
              </ul>
          </div>
      </RealHeader>
      <HeaderAll>
        <div className='headerInner'>
       
          <div className='headerBtm'>
            <p className='h2'>- 김수환 -<br/>
                웹 UI 개발 포트폴리오
            </p>
            <p>안녕하세요.<br/>
               사용자 경험을 생각하며 웹 UI를 개발하는 김수환입니다.<br/>
               직관적이고 유연한 웹 인터페이스를 구현하는 데 집중하고 있습니다.
            </p>
          </div>
        </div>
      </HeaderAll>
    </>
  )
}

export default Header
