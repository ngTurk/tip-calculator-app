import Index from '../Input';
import TipSelector from '../TipSelector';
import TipAmount from '../TipAmount';

import './card.scss';

export default function Card() {
  return (
    <div className="card-wrapper">
      <div className="content-column">
        <Index
          id="bill-amount"
          title="Bill"
          placeholder="0"
        />
        <TipSelector />
        <Index
          id="number-of-people"
          title="Number of people"
          placeholder="0"
        />
      </div>
      <div className="content-column bg-dark-cyan">
        <TipAmount />
        <TipAmount />
        <button className="reset-btn">RESET</button>
      </div>
    </div>
  )
}
