import * as React from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo-hooks'
import styled from 'styled-components'

import { TopBar } from '../../components/TopBar'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Footer } from '../../components/Footer'
import { HeroCard } from '../../components/HeroCard'

const HEROES_QUERY = gql`
	query {
		heroes {
			name
			imgUrl
			description
			backStory
			attributes {
				strength
				intelligence
				stamina
				agility
				speed
			}
			lifePower {
				healthpoints
				mana
			}
			resistance
			weakness
			skills {
				name
				damage
				element
				description
			}
		}
	}
`;

interface IHeroIndexProps {}

interface IHero {
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
	  name:string
	  damage:number
	  element: string
	  description: string
  }]
}

const HeroCardContainer = styled.div`
	display: flex;
	padding: 50px;
	align-self: center;
	max-width: 1150px;
	justify-content: flex-end;
	flex-wrap: wrap;
	@media (min-width: 1400px) {
		margin-left: auto;
		margin-right: auto;
	}
`

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
	const {
		data: { heroes },
		error,
		loading,
	} = useQuery<{ heroes: IHero[] }>(HEROES_QUERY);

	if (error) {
		return handleError(error.message);
	}

	if (loading) {
		return handleLoading();
	}

	return (
		<main>
			<TopBar />
			<Hero />
			<Section
				heading={'Hunter Index'}
				paragraph={`
          Professor Hoax gave us this Hunter Index -tool 
          so we can see how our heroes manage against evildoers!
        `}
			/>

			<HeroCardContainer>
				{heroes.map(hero => (
					<HeroCard key={hero.name} {...hero} />
				))}
			</HeroCardContainer>

			<Footer />
		</main>
	)
}
