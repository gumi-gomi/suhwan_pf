import React from 'react'
import styled from 'styled-components'
import Languageimg from '../img/languageimg.png'
import Htmlimg from '../img/htmlimg.png'
import Backendimg from '../img/backendimg.png'
import Certiimg from '../img/certiimg.webp'


const SkillWrap = styled.div`
  width: 100%; height: 450px;
  margin: 0 auto;
  background-color: royalblue;


  @media screen and (max-width:870px) {
      height:500px;
    }

 
  .skillInner{
    max-width: 1200px;
    height: 100%;
    /* outline: 1px dotted red; */
    margin: 0 auto;
    padding-left: 30px;
    padding-right: 30px;

    
    .skillTitle{
      h2{
        /* outline: 1px dotted red; */
        color: #FFF;
        display: inline-block;
        border-bottom: 1px solid rgba(256,256,256,0.5);
        padding-bottom: 10px;
        text-align: center;
        font-size: 35px;
        font-weight: 700;
        padding-top: 40px;
        margin-left: 50%; transform: translateX(-50%);
      }
    }
    .skills{
      position: relative;
      max-width: 1200px;
      height: 250px;
      background-color: #fff;
      margin-top: 40px;
      border-radius: 15px;
      box-shadow: 5px 5px 20px rgba(0,0,0,0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media screen and (max-width:870px) {
        height: 300px;
      }
      /* .skillWrap{
        background-color: red;
        max-width:700px !important;
        border-radius: 20px;
      } */
      .skill{
        /* outline: 1px dotted red; */
        position: relative;
        height: 30px;
        display: flex;
        margin-bottom: 20px;
      

        .languageImg{
          width: 30px; height: 30px;
          background-image: url(${Languageimg});
          background-position: center;
          background-size: cover;
        }
        .frontendImg{
          width: 30px; height: 30px;
          background-image: url(${Htmlimg});
          background-position: center;
          background-size: cover;
        }
        .backendImg{
          width: 30px; height: 30px;
          background-image: url(${Backendimg});
          background-position: center;
          background-size: cover;
        }
        .certiImg{
          width: 30px; height: 30px;
          background-image: url(${Certiimg});
          background-position: center;
          background-size: cover;
        }

        p{
          padding-left: 20px;
          line-height: 30px;
          /* outline: 1px dotted red; */
          width: 150px;
          font-weight: 700;
        }

        ul{
          
          /* outline: 1px dotted red; */
          width: 400px;
          margin: 0 auto;
          display: flex;
          li{
            /* outline: 1px dotted red; */
            line-height: 30px;
            width: 120px;
            text-align: center;
            margin-left: 10px;
            border-radius: 10px;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
            
          }
        }

        @media screen and (max-width:870px) {
          display: block;
          height: 45px;

          .languageImg, .frontendImg, .backendImg, .certiImg{
            display: none;
        } 


        p{
          /* padding-left: 20px; */
          /* outline: 1px dotted red; */
          text-align: center;
          line-height: 30px;
          width: 550px !important;
          font-weight: 700;
          padding-bottom: 0px;
        }

        ul{
          
          /* outline: 1px dotted red; */
          display: flex;
          justify-content: center;
          li{
            /* outline: 1px dotted red; */
            line-height: 25px;
            width: 80px;
            font-size: 14px;
            text-align: center;
            margin-left: 8px;
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
          }
          .certi{
            width: 120px;
          }
        }
        }
        @media screen and (max-width:550px) {
          display: block;
          height: 45px;

          .languageImg, .frontendImg, .backendImg{
            display: none;
        } 


        p{
          /* padding-left: 20px; */
          /* outline: 1px dotted red; */
          text-align: center;
          line-height: 30px;
          max-width: 200px !important;
          font-weight: 700;
          padding-bottom: 10px;
          margin: 0 auto;
        }

        ul{
          
          /* outline: 1px dotted red; */
          display: flex;
          justify-content: center;
          li{
            /* outline: 1px dotted red; */
            line-height: 25px;
            width: 55px;
            padding: 0 1px;
            font-size: 12px;
            text-align: center;
            margin-left: 8px;
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
          }
          .certi{
            width: 120px;
          }
        }
        }
      }
    }
  }
  
`

const Skill = () => {
  return (
    <>
      <SkillWrap>
        <div className='skillInner'>
          <div className='skillTitle'>
              <h2>SKILLS</h2>
          </div>
          <div className='skills'>

            {/* <div className='skillWrap'> */}

            <div className='skill'>
              <div className='frontendImg'></div>
              <p>Frontend</p>
              <ul>
                <li style={{backgroundColor:'rgba(0,0,0,0.8)',color:'#fff'}}>React</li>
                <li style={{backgroundColor:'royalblue', color:'#Fff'}}>Html</li>
                <li style={{backgroundColor:'yellow'}}>JS</li>
                <li style={{backgroundColor:'yellowgreen'}}>css</li>
                <li style={{backgroundColor:'lightcoral'}}>SCSS</li>
              </ul>
            </div>

            <div className='skill'>
              <div className='backendImg'></div>
              <p>Backend</p>
              <ul>
                <li style={{backgroundColor:'rgba(210,80,23,1)',color:'#fff'}}>Firebase</li>
              </ul>
            </div>

            <div className='skill'>
              <div className='languageImg'></div>
              <p>Design</p>
              <ul>
                <li style={{backgroundColor:'lightblue'}}>PS</li>
                <li style={{backgroundColor:'orange'}}>AI</li>
              </ul>
            </div>

            <div className='skill'>
              <div className='certiImg'></div>
              <p>Certificate</p>
              <ul>
                <li className='certi' style={{backgroundColor:'lightblue',fontSize:'12px',fontWeight:'600'}}>컴퓨터그래픽스기능사</li>
                <li className='certi' style={{backgroundColor:'orange',fontSize:'12px',fontWeight:'600'}}>웹디자인기능사</li>
              </ul>
            </div>

            </div>

          </div>

        {/* </div> */}
      </SkillWrap>
    </>
  )
}

export default Skill
