// It is your job to implement this. More info in README

import * as React from 'react'

import styled from 'styled-components'

import { HeroHeading } from "../../components/Typography"
import { GiBroadsword } from 'react-icons/gi';


interface IHeroCardProps {
  name: string
  imgUrl: string
  backStory: string
  // extend this
}

const Card = styled.div`
  border: 4px solid #001147;
  border-radius: 10px;
  background-color: #21245d;

  height: 400px;
  width: 300px;

  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
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



export const HeroCard: React.FC<IHeroCardProps> = ({ name, backStory, imgUrl }) => {
  return (
    <Card>
      <CardHeader>
        <HeroHeading>{name}</HeroHeading>
      </CardHeader>
      <ImageContainer><HeroImage src={imgUrl} ></HeroImage></ImageContainer>
      <div><GiBroadsword color='white'/> 5</div>
    </Card>
  )
}
