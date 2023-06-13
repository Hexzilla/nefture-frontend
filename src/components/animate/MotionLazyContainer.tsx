import { LazyMotion, m } from 'framer-motion';

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features.js').then((res) => res.default);

type Props = {
  children: React.ReactNode;
};

export default function MotionLazyContainer({ children }: Props) {
  return (
    <LazyMotion strict features={loadFeatures}>
      <m.div style={{ height: '100%', background: 'linear-gradient(rgb(45,51,65), rgb(41,41,41))' }}> {children} </m.div>
    </LazyMotion>
  );
}
