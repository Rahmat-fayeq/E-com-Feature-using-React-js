const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Red Strap',
            imageUrl: 'PTgQlim.png'
        },
        {
            styleName: 'Black Strap',
            imageUrl: 'iOeUBV7.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;