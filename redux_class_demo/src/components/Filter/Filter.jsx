import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCategory, setPrice } from '../../redux/actions/products'

class Filter extends Component {
  handleCategoryChange = (e) => {
    this.props.setCategory(e.target.value)
  }

  handlePriceChange = (e) => {
    this.props.setPrice([0, Number(e.target.value)])
  }

  render() {
    const {
      categories = [],
      selectedCategory = 'all',
      priceRange = [0, 1000],
    } = this.props

    return (
      <div className='row mb-4 align-items-center '>
        <div className='col-md-4'>
          <label className='fw-bold'>Filter by Category</label>
          <select
            value={selectedCategory}
            className='form-select'
            onChange={this.handleCategoryChange}
          >
            {categories.map((cat, index) => (
              <option value={cat} key={index}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className='col-md-4'>
          <label className='fw-bold'>
            Price: ${priceRange[0]} - ${priceRange[1]}
          </label>
          <input
            type='range'
            className='form-range'
            min={0}
            max={1000}
            value={priceRange[1]}
            onChange={this.handlePriceChange}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  selectedCategory: state.selectedCategory,
  priceRange: state.priceRange,
})

export default connect(mapStateToProps, { setCategory, setPrice })(Filter)
