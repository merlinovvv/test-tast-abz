import type { JSX } from 'react';
import './Loading.scss';
import Preloader from './Preloader.tsx';

function Loading(): JSX.Element | null {
  return (
    <div className="loading">
      <Preloader />
    </div>
  );
}

export default Loading;
