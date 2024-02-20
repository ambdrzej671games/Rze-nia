import { FC } from 'react';
import Przycisk from './Przycisk';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1 class="naglowek1">Wybierz</h1>
      <Przycisk />
    </div>
  );
};
