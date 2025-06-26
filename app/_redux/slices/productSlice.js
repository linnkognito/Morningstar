import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleSelection } from '@/app/_utils/handleSelections';
import { applyProductFilters } from '@/app/_utils/applyProductFilters';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products`);

      if (!res.ok) throw new Error('Failed to fetch products');

      const products = await res.json();
      return products.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (categoryName, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/products/category/${categoryName}`
      );

      if (!res.ok) throw new Error('Failed to fetch products');

      const products = await res.json();
      return products.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/${id}`);

      if (!res.ok) throw new Error('Failed to fetch product data');

      const product = await res.json();
      return product.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  products: [],
  filters: {
    sizes: [],
    maxPrice: 120,
    colors: [],
  },
  currentCategory: null,
  currentProduct: null,
  selections: {
    size: [],
    color: [],
    quantity: 1,
  },
  status: 'idle',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Selections
    clearSelections: (state) => {
      state.selections = { size: [], color: [], quantity: 1 };
    },
    setSizeSelection: (state, action) => {
      const { size, isMultiSelect } = action.payload;

      state.selections.size = handleSelection(
        state.selections.size,
        size,
        isMultiSelect
      );
    },
    setColorSelection: (state, action) => {
      const { color, isMultiSelect } = action.payload;
      state.selections.color = handleSelection(
        state.selections.color,
        color,
        isMultiSelect
      );
    },
    incQuantity: (state) => {
      state.selections.quantity++;
    },
    decQuantity: (state) => {
      if (state.selections.quantity === 1) return;
      state.selections.quantity--;
    },

    // Filters
    applyFilters: (state) => {
      state.products = applyProductFilters(state.products, state.filters);
    },
    setSizeFilter: (state, action) => {
      const { size, isMultiSelect } = action.payload;

      state.filters.sizes = handleSelection(
        state.filters.sizes,
        size,
        isMultiSelect
      );
    },
    setMaxPriceFilter: (state, action) => {
      state.filters = { ...state.filters, maxPrice: action.payload };
    },
    setColorFilter: (state, action) => {
      const { color, isMultiSelect } = action.payload;
      state.filters.colors = handleSelection(
        state.filters.colors,
        color,
        isMultiSelect
      );
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },

    // Sorting
    sortLowestPriceFirst: (state) => {
      state.products = [...state.products].sort((a, b) => a.price - b.price);
    },
    sortHighestPriceFirst: (state) => {
      state.products = [...state.products].sort((a, b) => b.price - a.price);
    },

    // Current product
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.currentCategory = null;
        state.status = 'idle';
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = 'error';
      })

      // Fetch by category
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.currentCategory = action.meta.arg;
        state.status = 'idle';
      })
      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.status = 'error';
      })

      // Fetch by product ID
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const getProducts = (state) => state.products.products;

export const getFilteredProducts = (state) => {
  const { products, filters } = state.products;
  const { sizes: filterSizes, maxPrice, colors: filterColors } = filters;

  return products.filter((product) => {
    if (filterSizes.length) return filterSizes.includes(product.size);
    if (filterColors.length) return filterColors.includes(product.color);
    if (maxPrice) return product.price < maxPrice;

    return true;
  });
};

export const {
  incStockCount,
  decStockCount,
  clearSelections,
  setSizeSelection,
  setColorSelection,
  incQuantity,
  decQuantity,
  applyFilters,
  setSizeFilter,
  setColorFilter,
  setMaxPriceFilter,
  clearFilters,
  sortLowestPriceFirst,
  sortHighestPriceFirst,
  clearCurrentProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
