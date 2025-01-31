import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MakeCodeFeatures from '../components/ProjectFeatures/makecode';

import styles from './index.module.css';

function PageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            MakeCode Projects
          </Heading>
        </div>
      </header>
    );
  }

  export default function microbit(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title="MakeCode Projects"
        description="MakeCode the drag and drop JavaScript editor">
        <PageHeader />
        <main>
            <MakeCodeFeatures />
        </main>
      </Layout>
    );
  }