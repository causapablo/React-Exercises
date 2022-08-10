import React, { useState } from 'react';

const SearchFilter = () => {
    const [input, setInput] = useState('');
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
    ];
    const handleOnChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    return (
        <div className='container w-1/2 bg-orange-400 h-screen mx-auto'>
            <h1 className='text-center font-bold text-6xl font-Playfair'>Search Form</h1>
            <form className='py-20'>
                <div className='flex justify-center'>
                    <input className='bg-cyan-800 rounded-lg text-center' type="text" name='fruit' value={input} onChange={handleOnChange} />
                </div>
            </form>

        </div>
    );
};

export default SearchFilter;