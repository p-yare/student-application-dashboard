import React from 'react';
import './SummaryCards.css';

const SummaryCards = () => {
  const cards = [
    {
      id: 'conditional',
      number: 18,
      label: 'Conditional',
      buttonText: 'Offer letter',
      color: 'blue',
      numberColor: '#226CF5' // Blue
    },
    {
      id: 'unconditional',
      number: 22,
      label: 'Un-Conditional',
      buttonText: 'Offer letter',
      color: 'green',
      numberColor: '#41A155' // Light blue
    },
    {
      id: 'payment-received-1',
      number: 30,
      label: 'Payment Received',
      buttonText: 'All Country',
      color: 'yellow',
      numberColor: '#EBB925' // Green
    },
    {
      id: 'payment-received-2',
      number: 8,
      label: 'Payment Received',
      buttonText: 'Offer letter',
      color: 'red',
      numberColor: '#EC4899' // Pink
    },
    {
      id: 'visa-received',
      number: 8,
      label: 'VISA Received',
      buttonText: 'Offer letter',
      color: 'grey',
      numberColor: '#616262' // Dark blue
    }
  ];

  return (
    <div className="summary-cards-row">
      {cards.map((card) => (
        <div key={card.id} className="summary-card-wrapper">
          <div className={`summary-card-inner summary-card-${card.color}`}>
            <div className="summary-card-content">
              <div className="summary-card-number" style={{color: card.numberColor}}>{card.number}</div>
              <div className="summary-card-label">{card.label}</div>
            </div>
            <div className="summary-card-btn-container">
              <button
                className="summary-card-button"
                style={{color: card.numberColor}}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;


