import React, { useState, ChangeEvent } from 'react';

interface SizeSelectorProps {
  sizes: string[];
  onSelectSize: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes, onSelectSize }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    onSelectSize(newSize);
  };

  return (
    <div className="mt-4">
      <label htmlFor="size">Select Size:</label>
      <select
        id="size"
        name="size"
        value={selectedSize}
        onChange={handleSizeChange}
        className='border ml-2 p-2'
      >
        <option value="">Select size</option>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
