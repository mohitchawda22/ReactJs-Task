import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPrice } from '../../redux/actions/products';
import { ThemeContext } from '../../context/ThemeProvider';

function Filter() {
  const dispatch = useDispatch();
  const { categories, selectedCategory, priceRange } = useSelector(
    (state) => state.product
  );
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`filter-box shadow-sm p-4 rounded ${
        theme === "dark" ? "bg-dark text-white" : "bg-light"
      }`}
      style={{
        width: "250px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        minHeight: "200px",
      }}
    >
      {/* Category Filter */}
      <div>
        <label className="form-label fw-semibold mb-2">Category</label>
        <select
          value={selectedCategory}
          className="form-select"
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          {categories.map((cat, index) => (
            <option value={cat} key={index}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div>
        <label className="form-label fw-semibold mb-2">
          Price: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          className="form-range"
          min={0}
          max={1000}
          value={priceRange[1]}
          onChange={(e) => dispatch(setPrice([0, Number(e.target.value)]))}
        />
      </div>
    </div>
  );
}

export default Filter;
