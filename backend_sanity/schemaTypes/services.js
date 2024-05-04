export default{
    name:'services',
    title:'Services',
    type: 'document',
    fields:[
        {
            name:'serviceID',
            title:'Service ID',
            type:'string'
        },
        {
            name:'serviceName',
            title:'Service Name',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'Image',
            type:'image'
        },
        {
            name: 'des',
            title: 'Short Description',
            type: 'string'
        },
        {
            name:'introduction',
            title:'Introduction',
            type:'text'
        },
        {
            name:'target',
            title:'Target',
            type:'text'
        },
        {
            name:'roadMap',
            title:'Road Map',
            type:'text'
        },
        {
            name:'bonus',
            title:'Bonus',
            type:'text'
        },
        {
            name:'faq',
            title:'FQAs',
            type: 'array',
            of : [
                {
                    type: 'object',
                    fields: [
                        {
                            name:'question',
                            title:'Question',
                            type:'text'
                        },
                        {
                            name:'answer',
                            title:'Answer',
                            type:'text'
                        }
                    ]
                }
            ]
        },
        
    ]
}