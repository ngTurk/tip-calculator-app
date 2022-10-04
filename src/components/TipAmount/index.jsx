import './tip-amount.scss';

export default function TipAmount() {
  return (
    <div className="tip-amount-wrapper">
        <span>
            <p>Tip Amount</p>
            <small>/ person</small>
        </span>
        <span className="tip-amount">
            $0.00
        </span>
    </div>
  )
}
