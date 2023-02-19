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
  description: string,
  id: number
}

export const LIST_PRODUCTOS = [
  { name: "Producto #001", price: 5, status: true, description: "lorem ipsum dolor sit.", id: 1 },
  { name: "Producto #002", price: 3.5, status: true, description: "lorem ipsum dolor sit.", id: 2 },
  { name: "Producto #003", price: 20, status: true, description: "lorem ipsum dolor sit.", id: 3 },
  { name: "Producto #004", price: 15, status: true, description: "lorem ipsum dolor sit.", id: 4 },
  { name: "Producto #005", price: 13, status: false, description: "lorem ipsum dolor sit.", id: 5 },
  { name: "Producto #006", price: 5, status: true, description: "lorem ipsum dolor sit.", id: 6 },
  { name: "Producto #007", price: 8, status: true, description: "lorem ipsum dolor sit.", id: 7 },
  { name: "Producto #008", price: 9, status: false, description: "lorem ipsum dolor sit.", id: 8 },
  { name: "Producto #009", price: 9.5, status: true, description: "lorem ipsum dolor sit.", id: 9 },
  { name: "Producto #010", price: .5, status: true, description: "lorem ipsum dolor sit.", id: 10 },
  { name: "Producto #011", price: .8, status: false, description: "lorem ipsum dolor sit.", id: 11 },
  { name: "Producto #012", price: 13, status: true, description: "lorem ipsum dolor sit.", id: 12 },
]

export const deleteItemFromListById = ( _array: any[], _id: number ) => _array.filter( (_item: any, _index: number) => _item.id !== _id  )