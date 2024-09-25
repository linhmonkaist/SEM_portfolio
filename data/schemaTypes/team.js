export default{
    name:'team',
    title:'Team',
    type: 'document',
    fields:[
        {
            name:'id',
            title:'ID',
            type:'string'
        },
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'supportDes',
            title:'Support description',
            type:'string'
        },
        {
            name:'menteeRep',
            title:'Mentee Reputation',
            type:'text'
        },
        {
            name:'selfRep',
            title:'Individual Reputation',
            type:'text'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}