import { useContext, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { Button } from 'antd';
import "./index.scss";
import { DataContext } from '../../layout/LayoutDefault';

const SearchCountry = () => {
  const {selectCountry, handleChangeCountry, arrContinents, handleChangeContinents} = useContext(DataContext);
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const itemCountry = selectCountry.map(item => item.Country); // Danh sách gợi ý các nước
  const items = [...itemCountry, ...arrContinents]; //Danh sách gợi ý cho các nước và châu lục
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value) {
      const filteredSuggestions = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelect = (suggestion) => {
    setInput(suggestion);
    setShowSuggestions(false);
  };

  const handleButtonClick = () => {
    if(itemCountry.includes(input)){
      handleChangeCountry(input);
    }
    if(arrContinents.includes(input)){
      handleChangeContinents(input)
    }
  };

  const isMatch = items.includes(input); // Kiểm tra xem input có khớp với bất kỳ mục nào không

  return (
    <>
      <div className='search'>
        <div className='search_click'>
          <input className='input'
            type="text"
            value={input}
            onChange={handleChange}
            onClick={() => setShowSuggestions(true)}
            placeholder="Nhập tên nước, châu lục"
          />
          <Button className='button' type="primary" onClick={handleButtonClick} disabled={!isMatch}>
            <IoSearch />
          </Button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className='suggestions'>
            {suggestions.map((suggestion, index) => (
              <div
                className='suggestions-li'
                key={index}
                onClick={() => handleSelect(suggestion)}
                style={{
                  paddingLeft: '8px',
                  paddingTop: '7px',
                  borderRadius: '8px'
                }}
                onMouseDown={(e) => e.preventDefault()}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )
        }
      </div >
    </>
  );
};

export default SearchCountry;
