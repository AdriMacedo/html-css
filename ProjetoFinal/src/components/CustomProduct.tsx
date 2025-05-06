import { useState } from 'react';

import './CustomProduct.scss';
import Button from './Button';

type CustomProductProps = {
  label: string | 'Fabric Color - Navy Blue';
  price: number;
  colors: {
    name: string;
    hex: string;
  }[];
  upgrades: {
    id: string;
    name: string;
    price: number;
  }[];
};

function CustomProduct({ label, price, colors, upgrades }: CustomProductProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);

  const handleColorClick = (color: { name: string; hex: string }) => {
    setSelectedColor(color);
  };

  const handleUpgradeChange = (id: string) => {
    setSelectedUpgrades((prev) => (prev.includes(id) ? prev.filter((upgradeId) => upgradeId !== id) : [...prev, id]));
  };

  return (
    <div className="custom-product">
      <h2 className="custom-product__title">{label}</h2>
      <p>${price}+ Free Shipping</p>
      <p>
        <strong>Fabric Color -</strong> {selectedColor.name}
      </p>
      <div className="colors">
        {colors.map((color) => (
          <button
            key={color.name + color.hex}
            onClick={() => handleColorClick(color)}
            title={color.name}
            className={`color-button ${selectedColor.hex === color.hex ? 'selected' : ''}`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
      <div className="upgrades">
        <h4 className="upgrades__title">Upgrades</h4>
        {upgrades.map((upgrade) => (
          <div key={upgrade.id}>
            <input
              type="checkbox"
              id={upgrade.id}
              checked={selectedUpgrades.includes(upgrade.id)}
              onChange={() => handleUpgradeChange(upgrade.id)}
            />
            <label htmlFor={upgrade.id}>
              {upgrade.name} + ${upgrade.price}
            </label>
          </div>
        ))}
      </div>
      <div className="add-to-cart">
        <Button variant={'shop'} label="ADD TO CARD" onClick={() => {}} />
      </div>
    </div>
  );
}
export default CustomProduct;
