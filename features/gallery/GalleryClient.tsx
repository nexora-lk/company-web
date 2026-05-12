'use client';

import { useState, useCallback, useEffect } from 'react';
import ScrollAnimator from '@/components/ui/ScrollAnimator';
import { GALLERY_CATEGORIES } from '@/data/gallery';
import { useLightbox } from '@/features/gallery/Lightbox';

export default function GalleryClient() {
  const allItems = GALLERY_CATEGORIES.flatMap((cat) => cat.items);
  const openLightbox = useLightbox();
  
  let globalOffset = 0;

  return (
    <>
      {GALLERY_CATEGORIES.map((category) => {
        const startOffset = globalOffset;
        globalOffset += category.items.length;

        return (
          <ScrollAnimator key={category.title}>
            <div className="gallery-category">
              <div className="gallery-category-header">
                <h3>{category.title}</h3>
                <span className="count">{category.items.length} photos</span>
              </div>
              <div className="gallery-grid grid grid-4 gap-md">
                {category.items.map((item, i) => (
                  <div
                    key={`${category.title}-${i}`}
                    className="gallery-item"
                    onClick={() => openLightbox(startOffset + i)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={`gallery-thumb ${item.featured ? 'featured' : ''}`}>
                      📸
                    </div>
                    <p className="gallery-item-title">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimator>
        );
      })}

      {/* Load More */}
      <div className="load-more-section">
        <div className="progress-bar">
          <div className="fill" style={{ width: '40%' }} />
        </div>
        <p className="load-more-text">
          Showing {allItems.length} of {allItems.length}+ photos
        </p>
        <button className="btn btn-outline-green">Load More →</button>
      </div>
    </>
  );
}
