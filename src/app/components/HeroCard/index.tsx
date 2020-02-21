
import * as React from 'react'
import { useState } from 'react';


import styled from 'styled-components'

import { HeroHeading, CardParagraph, Paragraph } from "../../components/Typography"
import { FaHeart, FaMagic } from 'react-icons/fa'
import { GiSmallFire } from 'react-icons/gi'
import { StatBar } from './StatBar'
import { Skills } from './Skills'

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
  skills: [{
    name: string
    damage: number
    element: string
    description: string
  }]
}



const Card = styled.div`
  border: 1px solid #001147;
  border-radius: 10px;
  background-color: #21245d;

  height: 530px;
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

const StatBars = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly
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
  text-align: center;
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
  cursor:pointer;

  border-radius: 0 0 10px 10px;

`





export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgUrl, description, lifePower, attributes, skills }) => {
  const [page, setPage] = useState(3);

  const heroColor = {
    Porcu: '#f58168',
    'Lisa McAllister': '#5ae6da',
    Gideon: '#f05c9b'
  }

  const heroStyle = {
    backgroundColor: heroColor[name]
  }
  const iconStyle = {
    color: heroColor[name]
  }


  const footerBackground = (footer: number) => {
    if (footer === page) return { backgroundColor: '#21245d' }
    else return { backgroundColor: '#3b3f81' }
  }

  const menuOptions = ['main', 'stats', 'skills']

  const header = (
    <CardHeader>
      <HeroHeading>{name}</HeroHeading>
    </CardHeader>)

  const footer = (
    <CardFooter>
      {menuOptions.map((option, index) => (
        <FooterTab key={option} style={footerBackground(index + 1)} onClick={() => setPage(index + 1)}>
          <HeroHeading>{option}</HeroHeading>
        </FooterTab>
      ))}
    </CardFooter>
  )

  const image = (
    <ImageContainer><HeroImage src={imgUrl} ></HeroImage></ImageContainer>
  )



  const page1 = (
    <CardContent>
      <LifePointsStats>
        <div><FaHeart style={iconStyle} /> <HeroHeading>{lifePower.healthpoints}</HeroHeading></div>
        <div><FaMagic style={iconStyle} /> <HeroHeading>{lifePower.mana}</HeroHeading></div>
      </LifePointsStats>
      <TextBox style={heroStyle}>
        <CardParagraph>{description}</CardParagraph>
      </TextBox>
    </CardContent>
  )

  const page2 = (
    <StatBars>
      <StatBar color={heroColor[name]} stat={attributes.intelligence} name={'INT'} />
      <StatBar color={heroColor[name]} stat={attributes.speed} name={'SPD'} />
      <StatBar color={heroColor[name]} stat={attributes.stamina} name={'STA'} />
      <StatBar color={heroColor[name]} stat={attributes.strength} name={'STR'} />
      <StatBar color={heroColor[name]} stat={attributes.agility} name={'AGI'} />
    </StatBars>
  )

  const page3 = (
    <CardContent>
      <Skills skills={skills} color={heroColor[name]}></Skills>

    </CardContent >
  )


  return (
    <Card>
      {header}
      {image}
      {(page === 1) ? page1 : (page === 2) ? page2 : page3}
      {footer}
    </Card>
  )
}
