import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to the RaspiKidd Learning Hub!
        </Heading>
        <p className="hero__subtitle">
        Explore fun, interactive STEM activities, resources, and tutorials to spark creativity and innovation.
        </p>
       <div style={{display: 'flex',justifyItems: 'center'}}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#">
              Parents Guide to the micro:bit
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#">
              Educators Guide to the micro:bit
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#">
              Kids Guide to the micro:bit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`RaspiKidd`}
      description="Explore fun, interactive STEM activities, resources, and tutorials to spark creativity 
      and innovation.">
      <HomepageHeader />
      <main>
        <Heading as="h2">
          Hardware
        </Heading>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
