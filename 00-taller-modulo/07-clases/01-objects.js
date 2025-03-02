const person ={
    name: 'Duvan',
    age: 21,
    hobbies: ['Codigo', 'running'],
    saludar: function(){
        return 'Hola ' + this.name + 'como estas?';
    }
};

function saludar(name){
    return 'Hello' + name + '!';
}
const message = saludar (person.name);