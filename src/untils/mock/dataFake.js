const component = [{
    name: "fristName",
    lable: "First Name",
    type: "Input",
    rules: [{
        type: 'email',
        message: 'The input is not valid E-mail!',
    },
    {
        required: true,
        message: 'Please input your E-mail!',
    }]
},
{
    name: "typeCustom",
    lable: "Test check box",
    type: "Checkbox",
    rules: []
},

];
export default component;