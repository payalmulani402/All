import React from 'react'

const List = [
    'payal mulani',
    'vibhuti vavaliya',
    'daya bhalala',
    'komal kordiya',
    'kushi surani',
    'jeni shiyani',
    'mahi parmar',
    'ravina savaliya'
]

const Listrender1 = () => {

    const ListItem = List.map(List => <td className='border-2 border-red-600'>{List}</td>);

    return (
        <tr>
            {ListItem}
        </tr>
    )
}

export default Listrender1
