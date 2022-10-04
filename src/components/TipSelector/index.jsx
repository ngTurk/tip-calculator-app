import { useState } from 'react';

import './tip-selector.scss';

export default function TipSelector() {
  const tips = [5, 10, 15, 25, 50];
  const [selected, setSelected] = useState(null);

  return (
    <div className="tip-selector">
        <p className="tip-selector__title">Select Tip %</p>
        <div className="tip-selector__btns">
            {tips.map((tip, i) => (
                <button
                  key={tip}
                  className={`${selected === i ? 'tip-selector__btn--selected' : ''} tip-selector__btn`}
                  onClick={() => setSelected(i)}
                >
                  {tip}%
                </button>
            ))}
            <input
                className="tip-selector__btn btn-custom-input"
                placeholder="Custom"
                onFocus={() => setSelected(null)}
            />
        </div>
    </div>
  )
}
