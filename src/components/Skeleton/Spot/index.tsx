import React from 'react';
import { SkeletonImage, SkeletonWrapper } from './style';

export function SkeletonSpot() {
  return (
    <SkeletonWrapper>
      <SkeletonImage />
    </SkeletonWrapper>
  );
}
