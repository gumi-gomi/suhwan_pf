import React from 'react'
import styled from 'styled-components'

const AboutWrap = styled.div`
  /* outline: 1px dotted red; */
  width: 100%;
  height: auto;

  @media screen and (max-width:916px) {
    height: 350px;
  }
  @media screen and (max-width:576px) {
    height: 510px;
  }
  


  .aboutInner{
    /* outline: 1px dotted red; */
    max-width: 1200px; height: auto;
    margin: 0 auto;

    .aboutTitle{
      /* outline: 1px dotted red; */
      height: 100px;
      h2{
        /* outline: 1px dotted red; */
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
    .aboutDetails{
      max-width: 1200px;
      height: 170px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 0px 120px;
      flex-wrap: wrap;
      margin-top: 30px;

      .detail{
        width: 220px;
        height: 60px;
        /* outline: 1px dotted red; */
        display: flex;
        
        .icon{
          /* outline: 1px dotted red; */
          width: 80px; height: 100%;
          font-size: 30px;
          text-align: center;

        }
        .text{
          p{
            &:nth-child(1){
              font-weight: 600;
              font-size: 18px;
              padding-bottom: 10px;
            }
            &:nth-child(2){
              font-size: 13px;
            }
          }
        }
      }
    }
  }
`

const About = () => {
  return (
    <>
      <AboutWrap>
        <div className='aboutInner'>
          <div className='aboutTitle'>
            <h2>ABOUT ME</h2>
          </div>
          <div className='aboutDetails'>
              <div className='detail'>
                <div className='icon'><i class="fa-solid fa-user"></i></div>
                <div className='text'>
                  <p>이름</p>
                  <p>김수환</p>
                </div>
              </div>
              <div className='detail'>
                <div className='icon'><i class="fa-solid fa-calendar-days"></i></div>
                <div className='text'>
                  <p>생년월일</p>
                  <p>95.05.19</p>
                </div>
              </div>
              <div className='detail'>
                <div className='icon'><i class="fa-solid fa-map"></i></div>
                <div className='text'>
                  <p>위치</p>
                  <p>대전광역시 서구</p>
                </div>
              </div>
              <div className='detail'>
                <div className='icon'><i class="fa-solid fa-phone"></i></div>
                <div className='text'>
                  <p>연락처</p>
                  <p>010-4948-6498</p>
                </div>
              </div>
              <div className='detail'>
                <div className='icon'><i class="fa-solid fa-envelope"></i></div>
                <div className='text'>
                  <p>이메일</p>
                  <p>ghjigf@gmail.com</p>
                </div>
              </div>
              <div className='detail'>
                <div className='icon'><i class="fa-solid fa-envelope"></i></div>
                <div className='text'>
                  <p>학력</p>
                  <p>한밭대학교(기계공학부)</p>
                </div>
              </div>
          </div>
        </div>
      </AboutWrap>
    </>
  )
}

export default About
