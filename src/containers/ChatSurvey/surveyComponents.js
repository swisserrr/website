import React, { useEffect, useState } from 'react';
import { CustomButtonSingle, MultiMultiSelectContainer, WrapContainer } from './styles';
import map from 'lodash/map';
import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

// eslint-disable-next-line react/prop-types
const MultiMultiSelectComponent = ({ mainFunc, heading, mapArray, subFunc, values, mainIndex, isOpen }) => {
  const [open, setOpen] = useState(isOpen);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <MultiMultiSelectContainer>
      <CustomButtonSingle
        onClick={() => {
          setOpen(!open);
          mainFunc(!open);
        }}
        toggle={open}>
        {heading}
      </CustomButtonSingle>
      {!open ? (
        <WrapContainer>
          {map(mapArray, (mapData, index) => {
            return (
              <CustomButtonSingle
                key={index}
                widthToggle
                widthToggleOnSmall
                onClick={() => {
                  subFunc(mapData);
                }}
                toggle={isEmpty(
                  filter(get(values, `array[${mainIndex}].mapped_array`), e => mapData.answer_uuid === e.answer_uuid)
                )}>
                {mapData.answers}
              </CustomButtonSingle>
            );
          })}
        </WrapContainer>
      ) : null}
    </MultiMultiSelectContainer>
  );
};

export default MultiMultiSelectComponent;
