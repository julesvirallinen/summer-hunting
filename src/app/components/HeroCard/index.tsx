
import * as React from 'react'
import { useState } from 'react';


import styled from 'styled-components'

import { HeroHeading, CardParagraph } from "../../components/Typography"
import { FaHeart, FaPlus } from 'react-icons/fa'
import {StatBar} from './StatBar'

interface IHeroCardProps {
  name: string
  imgUrl: string
  description: string
  backStory: string
  attributes: {
	  strength: number
	  intelligence: number
	  stamina: number
	  agility: number
	  speed: number
  }
  lifePower: {
	  healthpoints: number
	  mana: number
  }
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






export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgUrl, description, lifePower, attributes }) => {
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

  const footerBackground = (footer:number) => {
    if (footer===page) return { backgroundColor: '#21245d' }
    else return { backgroundColor: '#3b3f81' }
  }

  const header = (
  <CardHeader>
    <HeroHeading>{name}</HeroHeading>
  </CardHeader>)

  const footer = (
    <CardFooter>
      <FooterTab style={footerBackground(1)} onClick={() => setPage(1)}>
        <HeroHeading>main</HeroHeading>
      </FooterTab>
      <FooterTab style={footerBackground(2)} onClick={() => setPage(2)}>
          <HeroHeading>stats</HeroHeading>
      </FooterTab>
      <FooterTab style={footerBackground(3)} onClick={() => setPage(3)}>
        <HeroHeading>skills</HeroHeading>
      </FooterTab>
    </CardFooter>
  )

  const image = (
    <ImageContainer><HeroImage src={imgUrl} ></HeroImage></ImageContainer>
  )

  

  const page1 = (
    <Card>
    {header}
    {image}
    <CardContent>
      <LifePointsStats>
        <div><FaHeart  style={iconStyle}/> <HeroHeading>{lifePower.healthpoints}</HeroHeading></div>
        <div><FaPlus style={iconStyle}/> <HeroHeading>{lifePower.mana}</HeroHeading></div>
      </LifePointsStats>
      <TextBox style={heroStyle}>
        <CardParagraph>{description}</CardParagraph>
      </TextBox>
      </CardContent>
      {footer}
  </Card>
  )

  const page2 = (
    <Card>
    {header}
    {image}
    <CardContent>
      <StatBar color={heroColor[name]} stat={attributes.intelligence} name={'INT'}/>
      <StatBar color={heroColor[name]} stat={attributes.speed} name={'SPD'}/>
      <StatBar color={heroColor[name]} stat={attributes.stamina} name={'STA'}/>
      <StatBar color={heroColor[name]} stat={attributes.strength} name={'STR'}/>
      <StatBar color={heroColor[name]} stat={attributes.agility} name={'AGI'}/>
    </CardContent>
    {footer}
  </Card>
  )



  if (page === 1) return page1
  if (page === 2) return page2
  else return (<Card>{header}<CardContent></CardContent>{footer}</Card>)
}
