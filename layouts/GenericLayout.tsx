import { getTypeOfLayout } from 'helpers'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StyledGenericLayout = styled.div`
  .grid {
    display: grid;
    grid-gap: 5px;
 
    header { grid-area: header; }
    nav { grid-area: nav; }
    section { grid-area: content; }
    footer { grid-area: footer; }
    aside { grid-area: aside; }
    article { grid-area: article; }
  }


  .grid-1 {
    grid-template-rows: 80px 1fr;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header header"
      "nav content";
  }

  .grid-2 {
    grid-template-rows: 80px 1fr 80px;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header header"
      "nav content"
      "footer footer";
  }

  .grid-3 {
    grid-template-rows: 80px 50px 1fr 80px;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header header"
      "nav nav"
      "aside content"
      "footer footer";
  }

  .grid-4 {
    grid-template-rows: 80px 50px 1fr 1fr 80px;
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header header"
      "nav nav"
      "aside content"
      "aside article"
      "footer footer";
  }

`

const GenericLayout = ({ children }: { children: JSX.Element }) => {
  const parentGenericLayoutRef = useRef<any>(null)
  const currentChildDom = parentGenericLayoutRef?.current
  const [typeOfGrid, setTypeOfGrid] = useState<number>(1)

  useEffect(() => {
    setTypeOfGrid( getTypeOfLayout( currentChildDom ) )
  }, [ children, currentChildDom ])

  return (
    <StyledGenericLayout className={`h-screen w-screen`}>
      <div ref={ parentGenericLayoutRef } className={`grid grid-${ typeOfGrid } h-screen w-screen`}>
        { children }
      </div>
    </StyledGenericLayout>
  )
}

export default GenericLayout
