export class Docentes {
  private id: string = Math.floor(Date.now() * Math.random()).toString(10);
  private nome: string;
  private data_nasc: number;
  private email: string;
  private turma_id: string;

  constructor(name: string, birth: number, email: string, address: string) {
    this.nome = name;
    this.data_nasc = birth;
    this.email = email;
    this.turma_id = address;
  }

  getId(): string {
    return this.id;
  }
  getNome(): string {
    return this.nome;
  }
  getdataNasc(): number {
    return this.data_nasc;
  }
  getEmail(): string {
    return this.email;
  }
  getTurmaId() {
    return this.turma_id;
  }
  transformarDataNasc(data: string): string | undefined {
    const testagem = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
    if (testagem.test(data)) {
      const dataEditada = data.split("/");
      return (dataEditada[2] +
        "-" +
        dataEditada[1] +
        "-" +
        dataEditada[0]) as string;
    }
  }
}
