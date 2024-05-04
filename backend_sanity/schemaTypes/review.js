export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'packet',
            title: 'Mentor Packet',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotsp: true, 
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        }
    ],
}