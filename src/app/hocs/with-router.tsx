import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

/**
 * @hoc Инициализация роутера с провайдером для работы с get-параметрами
 */
export const withRouter = (component: Component) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>{component()}</Suspense>
    </BrowserRouter>
  );
};
