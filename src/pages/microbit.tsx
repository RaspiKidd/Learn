import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeFeatures from '@site/src/components/CodeFeatures';

import styles from './index.module.css';

function PageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            micro:bit
          </Heading>
        </div>
      </header>
    );
  }

  export default function microbit(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="micro:bit"
      description="About the BBC micro:bit">
      <PageHeader />
      <main>
        <div className="row">
            <div className="column">
                <p>
                    The micro:bit is a small device about half the size of a credit card. It is packed full 
                    of features aimed at getting children into computer programming and technology. Note that 
                    you still need a computer or tablet to program it - it is a microcomputer not a full 
                    computer. 
                </p>
                <p>
                    The micro:bit was created by the BBC and other partners in the UK in 2015. In 2016 they 
                    gave away one million free micro:bits to schools within the UK to support the teaching of 
                    computer coding. Many other countries followed the UK's foot steps.
                </p>
                <p>
                    The micro:bit is now available for sale around the world.  
                </p>
            </div>
            <div className="column">
                <img src="/img/microbitCover.png" />
            </div>
        </div>
        <Heading as="h2">
            Projects
        </Heading>
        <CodeFeatures />

      </main>
    </Layout>
  );
}