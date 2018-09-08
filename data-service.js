const Sequelize = require('sequelize');

// set up sequelize to point to our postgres database
var sequelize = new Sequelize('**','**','**', {
    host: '**',     
    dialect: 'postgres',     
    port: 5432,     
    dialectOptions: {         
        ssl: true   
    },  
    operatorsAliases:false
});

//Define Course Model/Table
var Courses = sequelize.define('Courses', {
    code: {//courseCode
        type: Sequelize.TEXT,
        primaryKey: true
    },
    name: Sequelize.TEXT, //subjectTitle
    semester: Sequelize.INTEGER,//semester
    prerequisite: Sequelize.ARRAY(Sequelize.TEXT),//prerequisite 
    required: Sequelize.ARRAY(Sequelize.TEXT),//requiredCourse  
    recommendedProfessor: Sequelize.ARRAY(Sequelize.TEXT),//recommendedProf  
    isGeneral: Sequelize.BOOLEAN,//isGeneral
    desc: Sequelize.TEXT},
    {
        createdAt: false, // disable createdAt
        updatedAt: false // disable updatedAt
});

module.exports.getAll = () => {
    return new Promise((resolve,reject) => {
        Courses.findAll().then((data) => {
            global.arr = data.map((element) => {
                let newarr = {};
                newarr['code'] = element.code;
                newarr['name'] = element.name;
                newarr['semester'] = element.semester;
                newarr['prerequisite'] = element.prerequisite;
                newarr['required'] = element.required;
                newarr['recommendedProfessor'] = element.recommendedProfessor;
                newarr['isGeneral'] = element.isGeneral;
                newarr['desc'] = element.desc;
                return newarr;
            });
            resolve(arr);
        }).catch((err)=>{
            reject("unable to sync the database");
        });
    });
};
