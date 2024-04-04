import React from 'react'
import { render } from '@testing-library/react'
import {BaseSpinner} from 'components/spinner' 

describe('BaseSpinner component', () => {
  it('renders a spinner with default props', () => {
    const { getByTestId } = render(<BaseSpinner />)

     expect(getByTestId('spinner')).toBeInTheDocument()
 
  });

  it('renders spinner with custom props', () => {
    const customProps = {
      thickness: '3px',
      color: 'red.500',
      size: 'md',
    }

    const { getByTestId } = render(<BaseSpinner {...customProps} />)

     expect(getByTestId('spinner')).toBeInTheDocument()
 
  });
});