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
    title: 'MakeCode',
    Svg: require('@site/static/img/MakeCodeIcon.svg').default,
    description: (
      <>
        All projects coded in the MakeCode drag and drop JavaScript editor.
      </>
    ),
    Label: 'MakeCode Projects',
    src: '/MakeCodeProjects'
  },
  {
    title: 'EduBlocks',
    Svg: require('@site/static/img/EduBlocksIcon.svg').default,
    description: (
      <>
        All projects coded in the eduBlocks drag and drop Python Editor.
      </>
    ),
    Label: 'EduBlocks Projects',
    src: '/EduBlocksProjects'
  },
  {
    title: 'microPython',
    Svg: require('@site/static/img/PythonIcon.svg').default,
    description: (
      <>
        All projects written in microPython and will work with the micro:bit online
        Python editor.
      </>
    ),
    Label: 'microPython Projects',
    src:'PythonProjects'
  },
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

export default function CodeFeatures(): ReactNode {
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
