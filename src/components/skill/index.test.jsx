import React from 'react';
import { render } from '@testing-library/react';
import Skill from './Skill';

describe('Skill component', () => {
  it('should render the heading "Skills"', () => {
    const { getByText } = render(<Skill />);
    const headingElement = getByText('Skills');
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the image of a laptop', () => {
    const { getByAltText } = render(<Skill />);
    const imageElement = getByAltText('laptop');
    expect(imageElement).toBeInTheDocument();
  });

  it('should render six JavaScript icons', () => {
    const { getAllByAltText } = render(<Skill />);
    const jsIcons = getAllByAltText('JS');
    expect(jsIcons).toHaveLength(6);
  });

  it('should render one Bootstrap icon', () => {
    const { getByAltText } = render(<Skill />);
    const bootstrapIcon = getByAltText('Bootstrap');
    expect(bootstrapIcon).toBeInTheDocument();
  });
});
