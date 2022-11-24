import React from 'react';
import Terminator from './Terminator';

const TerminatorList = ({models}) => {
  // if (true) {
  //   throw new Error("Hiba!");
  // }
    return (
        <div>
          {models.map((model) => {
            return (
              <Terminator
                key = {model.id}
                id = {model.id}
                name = {model.name}
                serialNumber = {model.phone}
              />
            );
          })}
        </div>
    );
};

export default TerminatorList;
