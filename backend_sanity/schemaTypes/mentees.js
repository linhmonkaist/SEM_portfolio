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
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'rank',
            title: 'Rank',
            type: 'number'
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