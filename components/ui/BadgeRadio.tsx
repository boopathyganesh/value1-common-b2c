import React from 'react';

interface BadgeRadioProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const BadgeRadio: React.FC<BadgeRadioProps> = ({ label, name, value, checked, onChange }) => {
  return (
    <label className={`inline-flex text-xs font-medium items-center cursor-pointer px-3 py-2 rounded-full transition-colors ${checked ? 'bg-solid text-secondary' : 'bg-light_bg text-secondary'} `}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="hidden"
      />
      {label}
    </label>
  );
};

export default BadgeRadio;
