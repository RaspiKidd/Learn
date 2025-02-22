import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string; 
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  Label: string;
  src: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Shake, Code & Battle: micro:bit Rock Paper Scissors',
    Svg: require('@site/static/img/ProjectCovers/RockPaperScissors.svg').default,
    description: (
      <>
        Shake, battle, and code your way to victory as you transform your micro:bit into the ultimate Rock 
        Paper Scissors champion that fits right in your pocket!
      </>
    ),
    Label: 'Go to Project',
    src: '/docs/MakeCode-Projects/Rock-Paper-Scissors/Overview'
  },
  {
    title: 'Micro:fit - Your DIY Step Counter',
    Svg: require('@site/static/img/ProjectCovers/StepCounter.svg').default,
    description: (
      <>
        Create your own wearable step counter using a micro:bit's accelerometer to track and display your 
        daily steps, just like a FitBit but built and coded by you!
      </>
    ),
    Label: 'Go to Project',
    src: '/docs/MakeCode-Projects/FitBit-Clone/Overview'
  }, 
  {
    title: 'Sensing the Environment',
    Svg: require('@site/static/img/ProjectCovers/EnviroSensing.svg').default,
    description: (
      <>
        Exploring your environment by using the temperature sensor, light sensor and 
        compass on the micro:bit.
      </>
    ),
    Label: 'Go to Project',
    src:'/docs/MakeCode-Projects/Sensing-the-Environment/Overview'
  },
 {
    title: 'Signal Builder: DIY Traffic Lights',
    Svg: require('@site/static/img/ProjectCovers/TrafficLights.svg').default,
    description: (
      <>
        Create your own traffic lights add-on board for the micro:bit.
      </>
    ),
    Label: 'Go to Project',
    src:'/docs/MakeCode-Projects/DIY-Traffic-Lights/Overview'
  },
  /*{
    title: 'Throw a Ghost',
    Svg: require('@site/static/img/ProjectCovers/ThrowGhostCover.svg').default,
    description: (
      <>
        Exploring the micro:bit radio function by throwing a ghost bewtween two micro:bits
      </>
    ),
    Label: 'Go to Project',
    src:'#'
  }*/
];


function Feature({title, Svg, description, Label, src}: FeatureItem) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
        <div className={styles.buttons} style={{display: 'flex',justifyContent: 'center'}}>
          <Link
            className="button button--secondary button--lg"
            to={src}>
            {Label}
          </Link>
        </div>
      </div>
  );
}

export default function MakeCodeFeatures(): ReactNode {
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
