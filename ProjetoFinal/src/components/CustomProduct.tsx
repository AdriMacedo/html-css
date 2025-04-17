import { useState } from 'react';
import Title from './Title';

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
    <>
      <Title>{label}</Title>
      <p>${price}+ Free Shipping</p>
      <p>Fabric Color - {selectedColor.name}</p>
      <div>
        {colors.map((color) => (
          <button key={color.name} onClick={() => handleColorClick(color)} title={color.name} />
        ))}
      </div>
      <div>
        <span>Upgrades</span>
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
    </>
  );
}
export default CustomProduct;
