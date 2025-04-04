/**
 *
 * MobileNumberPicker
 *
 */

import React, { memo, useState } from 'react';
import data from './static';
import map from 'lodash/map';
import toUpper from 'lodash/toUpper';
import { CustomInput, Option, Select, SelectContainer } from './styles';

function MobileNumberPicker({ callback, val, error }) {
  // const [input, setInput] = useState('');
  const [select, setSelect] = useState('+91');

  return (
    <div style={{ display: 'flex' }}>
      <SelectContainer>
        <Select
          id="country_select"
          name="country"
          defaultValue="+91"
          value={select}
          onChange={e => {
            const iso = data.find(value => value.code === e.target.value);
            setSelect(e.target.value);
            callback(val, { iso2: iso.iso2, dialCode: e.target.value });
          }}>
          {map(data, val => {
            return (
              <Option key={val.name} value={val.code}>
                {val.code}&nbsp;{toUpper(val.name)}
              </Option>
            );
          })}
        </Select>
        <div style={{ position: 'absolute', right: 10, zIndex: 0, pointerEvents: 'none', color: '#2447ff' }}>
          <h2 style={{ fontSize: 20, paddingBottom: 10 }}>&#8964;</h2>
        </div>
      </SelectContainer>
      <CustomInput
        type="number"
        error={error}
        placeholder="Phone number"
        value={val}
        onChange={e => {
          const iso = data.find(value => value.code === select);
          // setVal(e.target.value);
          callback(e.target.value, { iso2: iso.iso2, dialCode: select });
        }}
      />
    </div>
  );
}

MobileNumberPicker.propTypes = { ...MobileNumberPicker };

export default memo(MobileNumberPicker);
