export const filterdata = (restaurant, searchtxt) => {
    return restaurant.filter((reto) => {
        return reto.info.name.toLowerCase().includes(searchtxt.toLowerCase())
    })

}