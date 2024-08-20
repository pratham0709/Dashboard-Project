import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidgetToCategory } from '../redux/categoriesSlice';
import { addWidget } from '../redux/widgetsSlice';

function AddWidgetForm() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now().toString(), // Generate a unique ID
      name,
      text
    };
    dispatch(addWidget(newWidget));
    dispatch(addWidgetToCategory({ categoryId, widget: newWidget }));
    setName('');
    setText('');
    setCategoryId('');
  };

  return (
    <div className="p-6 border border-richblack-500 rounded-lg mb-8">
      <h2 className="text-xl font-inter font-semibold ">Add New Widget</h2>
      <div className='flex flex-col py-4 gap-2'>
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 my-4 w-full text-white bg-richblack-700 border-none rounded-md"
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 mb-2 w-full  text-white bg-richblack-700 border-none rounded-md "
        />
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border p-2 mb-2 w-full  text-white bg-richblack-700 border-none rounded-md"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
      </select>
      </div>
      <button onClick={handleAddWidget} className="text-center text-[13px] px-6 py-3 rounded-md font-bold bg-yellow-50 text-black
       hover:scale-95 transition-all duration-200">
        Add Widget
      </button>
    </div>
  );
}

export default AddWidgetForm;
