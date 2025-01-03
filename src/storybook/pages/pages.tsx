import React from 'react';
import { Route, Routes } from 'react-router';
import { ButtonPage, ExtendedFabPage, FabPage } from './actions';
import {
  DurationPage,
  EasingPage,
  ElevationPage,
  PalettePage,
  RadiusPage,
  TypographyPage,
} from './base';
import { HomePage } from './home-page';

export const Pages: React.FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="palette" element={<PalettePage />} />
      <Route path="radius" element={<RadiusPage />} />
      <Route path="typography" element={<TypographyPage />} />
      <Route path="elevation" element={<ElevationPage />} />
      <Route path="duration" element={<DurationPage />} />
      <Route path="easing" element={<EasingPage />} />

      <Route path="actions">
        <Route path="button" element={<ButtonPage />} />
        <Route path="fab" element={<FabPage />} />
        <Route path="extended-fab" element={<ExtendedFabPage />} />
      </Route>
    </Routes>
  );
};
