const name = ['jewel','nasima','toshiba','sumai','kholil'];
//now destructure each name.
const [jewel,nasima="my name is absent here",toshiba,...other] = name;
console.log(nasima);
