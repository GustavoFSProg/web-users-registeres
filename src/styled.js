import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  background: #e6ffff;
  padding-bottom: 20px;
    color: black;


  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 720px;
        color: black;

    
    /* width: 90vw; */
  }
`

export const ContainerRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #e6ffff;
  padding-bottom: 30px;
    color: black;


  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    color: black;
  height: 150vh;


    /* margin-top: -100px; */
    /* padding-bottom: 720px; */

    /* width: 90vw; */
  }
`

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  font-family: ' Work Sans 400';
  font-size: 17px;
  margin-bottom: 100px;
    color: black;


  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 22rem;
  height: 11rem;
  background: #9dd7fb;
  border-radius: 15px;
    color: black;


  box-shadow: 6px 6px 25px #23a5f6;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 18rem;
    margin-bottom: 50px ;
  }
`
export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 140px;
  margin-top: 100px;
    color: black;


  @media screen and (max-width: 700px) {
    margin-top: 70px;
    font-size: 2rem;
    margin-bottom: 90px;
  }
`
export const TitleRegister = styled.h1`
  font-size: 3rem;
  margin-bottom: 100px;
  margin-top: -130px;
    color: black;


  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
    margin-bottom: 90px;
    margin-top: -150px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background: pink ; */
`

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 40px;
  background:#ceebfd;
  border-radius: 8px;
  border: 1px solid #666666;
  padding-left: 13px;
  font-family: 'Source Sans Pro' ;
  font-size: 15px ;
    color: black;


  @media screen and (max-width: 700px) {
    width: 90%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  width: 100%;
  height: 40px;
    color: black;

`

export const Button = styled.button`
  width: 25.2rem;
  height: 3rem;
  background: #6cc3f9;
  color: #076cab;
  font-family: Work Sans 400;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  transition: ease 0.6s;

  &:hover {
    background: #00b3b3;
  }

  @media screen and (max-width: 700px) {
    width: 94%;
  }
`
export const Strong = styled.strong` 

margin-left: -324px; 
 margin-bottom: 5px;

 @media screen and (max-width: 700px){
 margin-bottom: 4px;
margin-left: -224px; 
 }
`