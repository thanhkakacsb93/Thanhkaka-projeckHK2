
import axios from 'axios'

// export const getAPI = () => {
//     return (
//         axios.get("https://64c481e967cfdca3b660cf14.mockapi.io/api/dataUsers")
//     )
// }

export const postAPI = (data) => {
    return (
        axios.post("https://64c481e967cfdca3b660cf14.mockapi.io/api/dataUsers", data)
    )
}
export const postAPIinformationProduct = (data) => {
    return (
        axios.post("64c9c30eb2980cec85c264cf.mockapi.io/api/informationProduct")
    )
}