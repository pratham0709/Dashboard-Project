import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidgetFromCategory } from '../redux/categoriesSlice';
import { removeWidget } from '../redux/widgetsSlice';
import Widget from './Widget';

function Category({ category }) {
  const dispatch = useDispatch();

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidgetFromCategory({ categoryId: category.id, widgetId }));
    dispatch(removeWidget(widgetId));
  };

  return (
    <div className=" p-6 border-richblack-500 border rounded-lg">
      <h2 className="text-xl font-inter font-semibold py-3 ">{category.name}</h2>
      <ul className='flex gap-x-6 flex-wrap'>
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} onRemove={() => handleRemoveWidget(widget.id)} />
        ))}
      </ul>
    </div>
  );
}

export default Category;
