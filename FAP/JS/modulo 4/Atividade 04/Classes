
import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa{
    constructor(nome, cpf, sexo, email, matricula, curso) {
        super(nome, cpf, sexo, email);
        this.matricula = matricula;
        this.curso = curso;
    } 
}
export class Avaliacao{
    constructor(valor, aluno, disciplina){
        this.valor = valor;
        this.aluno = aluno;
        this.disciplina = disciplina;
    }
}
export class Pessoa{

    constructor(nome, cpf, sexo, email) {
        this.nome = nome;
        this.cpf = cpf;
        this.sexo = sexo;
        this.email = email;
    } 
}

import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa{
    constructor(nome, cpf, sexo, email, curso, disciplina, salario) {
        super(nome, cpf, sexo, email);
        this.curso = curso;
        this.disciplina = disciplina;
        this.salario = salario;
    } 
}

export class Disciplina {
    constructor(codigo, nome, ch, curso, professor){
        this.codigo = codigo;
        this.nome = nome;
        this.ch = ch;
        this.curso = curso;
        this.professor = professor;
        this.alunos = [];
        this.notas = [];
    }

    matricula(aluno){
        if(aluno.curso == this.curso){
            this.alunos.push(aluno);
        }else{
            console.log(aluno.nome + " não pode cursar essa disciplina, pois é de outro curso.");
        }
    }

    lancarNota(nota){
        if(nota.disciplina == this.codigo){
            this.notas.push(nota);
        }else{
            console.log(`Nota do ${nota.aluno.nome} não é dessa disciplina.`);
        }
    }

    calcularMedia(aluno){
        var media = 0.0;
        var i = 0;
        this.notas.forEach(nota => {
            if(nota.aluno == aluno.matricula){
                media += nota.valor;
                i++;
            }
        });
        if(i>0){
            return media /= i;
        }else{
            return media;
        }        
    }
}
