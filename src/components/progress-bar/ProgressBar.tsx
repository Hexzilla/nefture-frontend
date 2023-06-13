import { memo, useEffect } from 'react';
import NProgress from 'nprogress';
// next
import { useRouter } from 'next/router';
//
import StyledProgressBar from './styles';

// ----------------------------------------------------------------------

function ProgressBar() {
  const router = useRouter();

  NProgress.configure({ showSpinner: false, minimum: 0.2 });

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleStart = () => {
      timeout = setTimeout(() => NProgress.start(), 100);
    };

    const handleStop = () => {
      NProgress.done();
      timeout && clearTimeout(timeout);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
      timeout && clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <StyledProgressBar />;
}

export default memo(ProgressBar);
