class Reserva {
  public numeroQuarto: number;
  public nomeHospede: string;
  public dataEntrada: Date;
  public dataSaida: Date;

  constructor(
    numeroQuarto: number,
    nomeHospede: string,
    dataEntrada: Date,
    dataSaida: Date
  ) {
    this.numeroQuarto = numeroQuarto;
    this.nomeHospede = nomeHospede;
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
  }
}

class Hotel {
  private reservas: Reserva[] = [];

  public registrarReserva(reserva: Reserva): void {
    this.reservas.push(reserva);
    console.log(`Reserva do quarto ${reserva.numeroQuarto} registrada para "${reserva.nomeHospede}".`);
  }

  private buscarReserva(numeroQuarto: number): Reserva | undefined {
    return this.reservas.find(r => r.numeroQuarto === numeroQuarto);
  }

  public cancelarReserva(numeroQuarto: number): void {
    const reserva = this.buscarReserva(numeroQuarto);

    if (!reserva) {
      console.log(`Erro: nenhuma reserva encontrada para o quarto ${numeroQuarto}.`);
      return;
    }

    this.reservas = this.reservas.filter(r => r.numeroQuarto !== numeroQuarto);
    console.log(`Reserva do quarto ${numeroQuarto} cancelada com sucesso.`);
  }

  public consultarStatusQuarto(numeroQuarto: number): string {
    const reserva = this.buscarReserva(numeroQuarto);
    const status = reserva ? "Reservado" : "Disponível";
    console.log(`Quarto ${numeroQuarto}: ${status}.`);
    return status;
  }
}


const hotel = new Hotel();

const reserva1 = new Reserva(
  101,
  "Eduardo Silva",
  new Date("2026-05-10"),
  new Date("2026-05-15")
);

const reserva2 = new Reserva(
  202,
  "Danilo Souza",
  new Date("2026-05-12"),
  new Date("2026-05-18")
);

const reserva3 = new Reserva(
  303,
  "Gilmar Oliveira",
  new Date("2026-05-20"),
  new Date("2026-05-25")
);

hotel.registrarReserva(reserva1);
hotel.registrarReserva(reserva2);
hotel.registrarReserva(reserva3);

hotel.cancelarReserva(202);

hotel.consultarStatusQuarto(101);
hotel.consultarStatusQuarto(202); 
hotel.consultarStatusQuarto(303); 
hotel.consultarStatusQuarto(404); 