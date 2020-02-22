
import * as React from 'react'
import { HeroHeading } from "../../components/Typography"


import styled from 'styled-components'

interface IStatBar  {
  color:string
  stat:number
  name: string
}

const Bar = styled.div`
  background-color: black;
  border-radius: 13px;
  padding: 3px
  width: 80%
`
const BarContent = styled.div`
  height: 20px;
  border-radius: 10px;
`

const Container = styled.div`
  display: flex;
  margin-bottom: 5px;
`



export const StatBar: React.FC<IStatBar> = ({ color, stat, name }) => {

  const style = {
    backgroundColor: color,
    width:`${stat}%`
  }

  return (
    <Container>
      <HeroHeading>{name}</HeroHeading>
      <Bar>
        <BarContent style={style}></BarContent>
      </Bar>
    </Container>
  )
}