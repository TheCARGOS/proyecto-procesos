export const getTypeOfLayout = ( _params: any ): number => {
  const arrayOfChildrenTagNames = _params && [ ..._params?.children ].map(_domElement => _domElement.localName)
  let _type = 0

  if ( arrayOfChildrenTagNames ) {
    if ( arrayOfChildrenTagNames.includes("header") && arrayOfChildrenTagNames.includes("nav") && arrayOfChildrenTagNames.includes("section") ) {
      _type++
      if ( arrayOfChildrenTagNames.includes("footer") ) {
       _type++
        if ( arrayOfChildrenTagNames.includes("aside") ) {
          _type++
          if ( arrayOfChildrenTagNames.includes("article") ) { 
            _type++
          }
        }
      }
    }
  }

  console.log( _type )

  return _type
}