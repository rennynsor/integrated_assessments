const { Sequelize } = require('sequelize');
const sequelize= new Sequelize(
    'aa',
    'root',
    '',{
    host:'localhost',
    dialect:'mysql',
}
);
sequelize.authenticate()
.then(()=>{
    console.log('connection established successfully');
})
.catch((err)=>{
    console.log('connnection failed',error

    );
});



module.exports=sequelize;