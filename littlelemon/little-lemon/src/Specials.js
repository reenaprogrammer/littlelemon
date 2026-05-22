import React from 'react';

function Specials() {
  const specialDishes = [
    { title: "Greek Salad", price: "$12.99", desc: "Crisp lettuce, peppers, olives, and authentic feta cheese." },
    { title: "Bruschetta", price: "$5.99", desc: "Grilled bread rubbed with garlic and topped with tomatoes." },
    { title: "Lemon Dessert", price: "$5.00", desc: "Fresh from our bakery, made with organic local lemons." }
  ];

  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="action-btn">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specialDishes.map((dish, idx) => (
          <div key={idx} className="dish-card">
            <h3>{dish.title} <span>{dish.price}</span></h3>
            <p>{dish.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;