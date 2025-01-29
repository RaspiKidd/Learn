import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'micro:bit',
    Svg: require('@site/static/img/microbit.svg').default,
    description: (
      <>
        The BBC micro:bit is a pocket-sized programmable computer designed to teach coding and electronics 
        through fun, interactive projects for beginners.
      </>
    ),
  },
  /*{
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/RaspberryPi.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/pico.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
  }}>
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg"
                to="#">
            <Heading as="h3">{title}</Heading>
          </Link>
        </div>
        <p>{description}</p>
      </div>
    </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
