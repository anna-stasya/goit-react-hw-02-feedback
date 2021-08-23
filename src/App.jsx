import React from 'react';
//components
import { Feedback } from './components/Feedback/Feedback';

import s from 'components/container/Container.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <Feedback />
    </div>
  );
}
