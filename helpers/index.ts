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
  return _type
}

export interface IProduct {
  name: string,
  price: number,
  status: boolean,
  description: string
}

export const LIST_PRODUCTOS = [
  { name: "Producto #001", price: 5, status: true, description: "lorem ipsum dolor sit." },
  { name: "Producto #002", price: 3.5, status: true, description: "lorem ipsum dolor sit." },
  { name: "Producto #003", price: 20, status: true, description: "lorem ipsum dolor sit." },
  { name: "Producto #004", price: 15, status: true, description: "lorem ipsum dolor sit." },
  { name: "Producto #005", price: 13, status: false, description: "lorem ipsum dolor sit." },
  { name: "Producto #006", price: 5, status: true, description: "lorem ipsum dolor sit." },
  { name: "Producto #007", price: 8, status: true, description: "lorem ipsum dolor sit." },
  { name: "Producto #008", price: 9, status: false, description: "lorem ipsum dolor sit." },
  { name: "Producto #009", price: 9.5, status: true, description: "lorem ipsum dolor sit." },
  { name: "Producto #010", price: .5, status: true, description: "lorem ipsum dolor sit." },
  { name: "Producto #011", price: .8, status: false, description: "lorem ipsum dolor sit." },
  { name: "Producto #012", price: 13, status: true, description: "lorem ipsum dolor sit." },

]

export const deleteItemFromList = ( _list: any, indexOfItem: number ) => {
  return _list.splice(indexOfItem, 1)
}