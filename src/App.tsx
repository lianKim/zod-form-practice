import { Suspense } from 'react';
import GlobalStyle from '~styles/GlobalStyle';

export default function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <GlobalStyle />
    </Suspense>
  );
}
