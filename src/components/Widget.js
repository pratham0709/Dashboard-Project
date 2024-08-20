import React from 'react';

function Widget({ widget, onRemove }) {
  return (
    <li className="widget p-3 border border-richblack-500  rounded-lg flex justify-between items-center mb-2">
      <div className='flex flex-col px-3 py-3'>
        <h3 className="font-bold font-inter text-md text-richblack-50">{widget.name}</h3>
        <p className='text-richblack-400 font-inter text-sm font-bold'>{widget.text}</p>
      </div>
      <button onClick={onRemove} className="text-red-400">×</button>
    </li>
  );
}

export default Widget;
