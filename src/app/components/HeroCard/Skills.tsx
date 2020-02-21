
import * as React from 'react'
import { useState } from 'react';

import { GiDeathSkull, GiBrain } from 'react-icons/gi'
import styled from 'styled-components'
import { Hero } from 'src/server/entities/hero'
import { HeroHeading, CardParagraph } from "../../components/Typography"

interface ISkills {
  skills: [{
    name: string
    damage: number
    element: string
    description: string
  }]
  color: string

}

const Skill = styled.div`
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
`




export const Skills: React.FC<ISkills> = ({ skills, color }) => {
  const [expanded, setExpanded] = useState('')

  const toggleExpanded = (name) => {
    if (expanded === name) setExpanded('')
    else (setExpanded(name))
  }

  const skillList = skills.map((skill, index) => (
    <Skill style={{ backgroundColor: color }} onClick={() => toggleExpanded(skill.name)}>
      <HeroHeading>{skill.name}<span style={{ color: 'black' }}>{' '}{skill.damage}</span></HeroHeading>
      {expanded === skill.name ?
        (<CardParagraph>
          <HeroHeading>{skill.element} {'  '}</HeroHeading>
          {skill.description}
        </CardParagraph>)
        : ''}
    </Skill>
  ))
  return (
    <div>
      {skillList}
    </div>
  )
}