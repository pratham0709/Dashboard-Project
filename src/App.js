import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from './redux/categoriesSlice';
import { setWidgets } from './redux/widgetsSlice';
import Category from './components/Category';
import AddWidgetForm from './components/AddWidgetForm';
import data from './data.json';
import HighlightText from './components/HighlightText';

function App() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const widgets = useSelector((state) => state.widgets);

  useEffect(() => {
    dispatch(setCategories(data.categories));
    dispatch(setWidgets(data.allWidgets));
  }, [dispatch]);

  return (
    <div className="bg-richblack-900 h-screen overflow-y-auto ">
      <div className=' h-screen text-white max-w-maxContent mx-auto '>
        <h1 className="flex items-center py-6 justify-center text-4xl font-inter font-bold "><HighlightText text={"Dashboard"} /></h1>
        <div className="flex justify-center items-center py-8 mb-3">
        <div className='flex flex-col gap-10'>
        {categories.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
        </div>
        <AddWidgetForm />
        <div className='h-[40px]'></div>
      </div>
    </div>
  );
}

export default App;

