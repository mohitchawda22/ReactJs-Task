import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPrice } from '../../redux/actions/products';
import { ThemeContext } from '../../context/ThemeProvider';

function Filter() {
    const dispatch = useDispatch();
    const { categories, selectedCategory, priceRange } = useSelector(
        (state) => state.productReducer
    );
    const {theme}=useContext(ThemeContext)

    return (
        <div className={`filter-box shadow-sm p-4 rounded mb-4 ${theme==="dark"?"dark":"light"}`}>
            <div className="row gy-3 align-items-center">
                <div className="col-md-6 col-lg-4">
                    <label className="fw-bold mb-1">Filter by Category</label>
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

                <div className="col-md-6 col-lg-4">
                    <label className="fw-bold mb-1">
                        Price: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <input
                        type="range"
                        className="form-range"
                        min={0}
                        max={1000}
                        value={priceRange[1]}
                        onChange={(e) =>
                            dispatch(setPrice([0, Number(e.target.value)]))
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Filter;
