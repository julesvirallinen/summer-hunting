// It is your job to implement this. More info in README

import * as React from 'react'
import { useState } from 'react';


import styled from 'styled-components'

import { HeroHeading, CardParagraph } from "../../components/Typography"
import { FaHeart, FaPlus } from 'react-icons/fa'


interface IHeroCardProps {
  name: string
  imgUrl: string
  description: string
  // extend this
}

const Card = styled.div`
  border: 1px solid #001147;
  border-radius: 10px;
  background-color: #21245d;

  height: 500px;
  width: 300px;
	@media (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;	}

  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  box-shadow: 10px 10px 5px grey;


`

const CardHeader = styled.div`
  width:100%;
  height: 50px;
  background-color: #001147;
  text-align:center;
  display: flex;
  `
const ImageContainer = styled.div`
  width:80%;
  margin:10px auto;
  border-radius: 10px;
  overflow: hidden;
  border: 2x solid #001147;
`

const HeroImage = styled.img`
  width:110%;
  margin: -10px;

`


const CardContent = styled.div`
  flex-grow: 1;
  width: 80%;
  align-self:center;
`

const LifePointsStats = styled.div`
  display:flex;
  justify-content: space-evenly;
  padding-bottom: 5px;
`

const TextBox = styled.div`
  height: 70%
  background-color: #f58168;
  padding: 5px;
  border-radius: 10px;

`

const CardFooter = styled.div`
  width: 100%;
  height: 30px;
  align-self: flex-end;
  display:flex;
  flex-direction: row
`

const FooterTab = styled.div`
  flex-grow:1;
  text-align:center;
  display: flex;

  border-radius: 0 0 10px 10px;

`




export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgUrl, description }) => {
  const [page, setPage] = useState(1);

  const heroColor = {
    Porcu:'#f58168',
    'Lisa McAllister':'#5ae6da',
    Gideon:'#f05c9b'
  }

  const heroStyle = {
    backgroundColor:heroColor[name]
  }
  const iconStyle = {
    color:heroColor[name]
  }

  const pageBackground = {
    1:'#21245d',
    2:'#f58168',
    3:'#5ae6da'
  }

  const header = (
  <CardHeader>
    <HeroHeading>{name}</HeroHeading>
  </CardHeader>)

  const footer = (
    <CardFooter>
      <FooterTab style={{ backgroundColor: '#21245d' }} onClick={() => setPage(1)}>
        <HeroHeading>main</HeroHeading>
      </FooterTab>
      <FooterTab style={{ backgroundColor: '#f58168' }} onClick={() => setPage(2)}>
          <HeroHeading>story</HeroHeading>
      </FooterTab>
      <FooterTab style={{ backgroundColor: '#5ae6da' }} onClick={() => setPage(3)}>
        <HeroHeading>stats</HeroHeading>
      </FooterTab>
    </CardFooter>
  )

  const page1 = (
    <Card style={{backgroundColor:pageBackground[page]}}>
    {header}
    <ImageContainer><HeroImage src={imgUrl} ></HeroImage></ImageContainer>
    <CardContent>
      <LifePointsStats>
        <div><FaHeart style={iconStyle}/> <HeroHeading>6</HeroHeading></div>
        <div><FaPlus style={iconStyle}/> <HeroHeading>1000</HeroHeading></div>
      </LifePointsStats>
      <TextBox style={heroStyle}>
        <CardParagraph>{description}</CardParagraph>
      </TextBox>
      </CardContent>
      {footer}
  </Card>
  )



  if (page === 1) return page1
}
