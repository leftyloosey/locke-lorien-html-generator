const manPrompts = [
    {
    type: 'input',
    name: 'maName',
    message: "Manager name?"
    },
    {
    type: 'input',
    name: 'manID',
    message: "Manager ID?"
    },
    {
    type: 'input',
    name: 'manEmail',
    message: "Manager email?"
    },
    {
    type: 'input',
    name: 'maNo',
    message: "Office Number?"
    },
    // {
    // type: 'list',
    // name: 'empType',
    // message: 'Add teammate:',
    // choices: ['Engineer',
    //             'Intern'
    //         ]
    // }
]

const engPrompts = [
    {
    type: 'input',
    name: 'engName',
    message: "Engineer name?",
    },
    {
    type: 'input',
    name: 'engID',
    message: 'ID Number?',
    },
    {
    type: 'input',
    name: 'engEmail',
    message: 'Email?',
    },
    {
    type: 'input',
    name: 'engGit',
    message: "GitHub username?",
    },
]

const intPrompts = [
    {
    type: 'input',
    name: 'intName',
    message: "Intern name?",
    },
    {
    type: 'input',
    name: 'intID',
    message: 'ID Number?'
    },
    {
    type: 'input',
    name: 'intSchool',
    message: "School?",
    },
]

const addPrompt = [
    {
    type: 'list',
    name: 'addAnother',
    message: 'Add teammate or finish?',
    choices: ['Engineer',
                'Intern',
                "Finish"
            ]
    }
]

exports.manPrompts = manPrompts
exports.addPrompt = addPrompt
exports.intPrompts = intPrompts
exports.engPrompts = engPrompts