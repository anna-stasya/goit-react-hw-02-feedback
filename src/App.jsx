import React from 'react';
//components
import { Container } from './components/container/Container';
import { Feedback } from './components/Feedback/Feedback';
//css
import s from 'components/container/Container.module.css';

export default function App() {
  return (
    <Container className={s.container}>
      <Feedback />
    </Container>
  );
}
