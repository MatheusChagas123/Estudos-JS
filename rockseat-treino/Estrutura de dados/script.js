const pacientes = [
  { 
    name: 'João', 
    age: 20,
    weight: 80, 
    height: 1.80
  },
  { 
    name: 'Maria', 
    age: 25,
    weight: 70, 
    height: 1.65
  },
  { 
    name: 'Josefa', 
    age: 30,
    weight: 60, 
    height: 1.70
  }
];

let nomesPacientes = [];
for (let paciente of pacientes) {
  const imc = (paciente.weight / (paciente.height ** 2)).toFixed(2);
  console.log(`Nome: ${paciente.name}, Idade: ${paciente.age}, IMC: ${imc}`);
  nomesPacientes.push(`Nome: ${paciente.name}, Idade: ${paciente.age} anos, IMC: ${imc}`);
}

alert(nomesPacientes.join('\n'));
