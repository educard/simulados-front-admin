import React from 'react'

import './radio-group.scss'

const Radio = ({ name, value, checked, label, onChange }) => (
  <div className="radio">
    <input
      className="radio__bullet"
      type="radio"
      id={value}
      name={name}
      onChange={onChange}
      checked={checked}
    />
    <label className="radio__label" htmlFor={value}>
      {label}
    </label>
  </div>
)

const RadioGroup = ({ options, name, onChange }) => (
  <div className="radio-group">
    {options.map(option => (
      <Radio
        key={option.value}
        value={option.value}
        label={option.label}
        radioName={name}
        onChange={onChange}
        checked={option.checked}
      />
    ))}
  </div>
)

export default RadioGroup
