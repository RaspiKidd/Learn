import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import PythonFeatures from '../components/ProjectFeatures/python';

import styles from './index.module.css';

function PageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Python Projects
          </Heading>
        </div>
      </header>
    );
  }

  export default function microbit(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title="EduBlocks Projects"
        description="EduBlocks the drag and drop Python editor">
        <PageHeader />
        <main>
            <PythonFeatures />
        </main>
      </Layout>
    );
  }