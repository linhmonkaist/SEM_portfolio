/* 
rankUni: global rank
type: type of scholarship: full-ride, 100% for 4 years/ 2 years/1 year/ 1 semester, 
partial scholarship, admission
*/
export default {
    name: 'mentees',
    title: 'Mentees',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'rankUni',
            title: 'Rank of the Univeristy',
            type: 'number'
        },
        {
            name: 'type',
            title: 'Type of Scholarship',
            type: 'number'
        },
        {
            name: 'scholarship',
            title: 'Scholarship',
            type: 'string'
        },
        {
            name: 'university',
            title: 'University',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'countryTags',
            title: 'CountryTags',
            type: 'array',
            of: [
                {
                    name: 'countryTag',
                    title: 'CountryTag',
                    type: 'string'
                }
            ]
        },
    ]
}