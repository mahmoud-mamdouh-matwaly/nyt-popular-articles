import React from 'react'

import { Spinner, SpinnerProps } from '@chakra-ui/react'

export function BaseSpinner(props: SpinnerProps) {
  return <Spinner thickness='5px' color='blue.400' size='xl' {...props} />
}
