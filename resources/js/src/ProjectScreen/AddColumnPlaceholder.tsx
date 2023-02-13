import React from 'react';
import { Plus } from "phosphor-react";

export default class AddColumnPlaceholder extends React.Component {
    render() {
      return <div className="add-column-placeholder h-full px-20 flex flex-col justify-center cursor-pointer rounded hover:bg-pink-lightest transition">
          <Plus size={42} weight="bold" className="self-center justify-self-center"/>
          <p className="text-xs text-center mt-1">New Column</p>
      </div>;
    }
  }