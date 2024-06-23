import React from 'react'

import { css } from 'styled-components'
const Responsive = (props) => {
  return css`
        @media  only screen and (max-width:380px ){
            ${props}
        }
  `
}

export default Responsive