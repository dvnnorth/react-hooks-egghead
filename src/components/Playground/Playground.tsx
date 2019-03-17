/// <reference path="./interfaces.d.ts" />

import React, { useState } from 'react';
import './Playground.css';

export default function Playground() {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <section className="Playground">
      <h1>Type Some Stuff!</h1>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <br />
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      <ul>
        <li>{text}</li>
        <li>{checked.toString()}</li>
      </ul>
    </section>
  );
}
