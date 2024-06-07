import { Suspense } from 'react';
import GlobalStyles from '~styles/GlobalStyles';

export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <GlobalStyles />
    </Suspense>
  );
}
