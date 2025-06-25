import { useMemo } from 'react';
import { optimizeImage } from '../utils/cloudinary';

/**
 * Custom hook to optimize multiple images using Cloudinary
 * @param {Array} imageIds - Array of image public IDs
 * @returns {Object} Object with optimized images keyed by their IDs
 */
export const useOptimizedImages = (imageIds) => {
  return useMemo(() => {
    return imageIds.reduce((acc, imageId) => {
      acc[imageId] = optimizeImage(imageId);
      return acc;
    }, {});
  }, [imageIds]);
};

/**
 * Custom hook to optimize images for categories
 * @param {Array} categories - Array of category objects with imageId property
 * @returns {Object} Object with optimized images keyed by category id
 */
export const useCategoryImages = (categories) => {
  return useMemo(() => {
    return categories.reduce((acc, category) => {
      acc[category.id] = optimizeImage(category.imageId);
      return acc;
    }, {});
  }, [categories]);
};
