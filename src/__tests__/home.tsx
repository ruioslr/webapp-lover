import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Home from '../pages/home';

let container: Element = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('home页面', () => {
  it('是否渲染', () => {
    act(() => {
      render(<Home />, container);
    });
    expect(container.querySelector('div')).not.toBeNull();
  });
});
