import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TrainingFeatures from '@site/src/components/TrainingFeatures';

import styles from './index.module.css';

function PageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Running Code Clubs in Your Library
          </Heading>
        </div>
      </header>
    );
  }

  export default function microbit(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Code Club Training"
      description="A coprehensive training course for running code clubs in your library">
      <PageHeader />
      <main>
        <div className="row">
            <div className="column">
                <p>
                   Welcome to the exciting world of coding in libraries! You're about to embark on a journey that transforms your 
                   library into a vibrant hub of digital creativity and learning.
                </p>
                <Heading as="h2">
                    Why Code Clubs in Libraries?
                </Heading>
                <p>
                    Libraries have always been centres of learning and discovery. Code clubs are a natural extension of this mission, 
                    offering young people the chance to develop essential 21st-century skills whilst having tremendous fun. As a 
                    librarian, you're perfectly positioned to facilitate these sessions—you already know how to make learning 
                    accessible, engaging, and inclusive.
                </p>
                
            </div>
            <div className="column">
                <img src="/img/CodeClub.jpg" alt="Image of kids coding" />
            </div>
        </div>
        <Heading as="h2">
            Essential Resources for Success
        </Heading>
        <TrainingFeatures />

      </main>
    </Layout>
  );
}