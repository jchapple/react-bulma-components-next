import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Hero from 'react-bulma-components/lib/components/hero'
import Heading from 'react-bulma-components/lib/components/heading'
import Section from 'react-bulma-components/lib/components/section'
import Container from 'react-bulma-components/lib/components/container'

const Home = () => (
  <div>
    <Head title='Home' />
    <Nav />

    <Section>
      <Hero color='danger'>
        <Hero.Body>
          <Container>
            <Heading>Ask your MP to support a #peoplesvote on Brexit</Heading>
            <Heading subtitle size={3}>
              Takes two minutes. This simple tool helps you write a short letter
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
    </Section>
  </div>
)

export default Home
