import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';

/**
 * Custom render function that includes providers
 * Add providers (Theme, Redux, etc.) here as needed
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
