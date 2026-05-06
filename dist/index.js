"use strict";
class Reserva {
    constructor(numeroQuarto, nomeHospede, dataEntrada, dataSaida) {
        this.numeroQuarto = numeroQuarto;
        this.nomeHospede = nomeHospede;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
    }
}
class Hotel {
    constructor() {
        this.reservas = [];
    }
    registrarReserva(reserva) {
        this.reservas.push(reserva);
        console.log(`Reserva do quarto ${reserva.numeroQuarto} registrada para "${reserva.nomeHospede}".`);
    }
    buscarReserva(numeroQuarto) {
        return this.reservas.find(r => r.numeroQuarto === numeroQuarto);
    }
    cancelarReserva(numeroQuarto) {
        const reserva = this.buscarReserva(numeroQuarto);
        if (!reserva) {
            console.log(`Erro: nenhuma reserva encontrada para o quarto ${numeroQuarto}.`);
            return;
        }
        this.reservas = this.reservas.filter(r => r.numeroQuarto !== numeroQuarto);
        console.log(`Reserva do quarto ${numeroQuarto} cancelada com sucesso.`);
    }
    consultarStatusQuarto(numeroQuarto) {
        const reserva = this.buscarReserva(numeroQuarto);
        const status = reserva ? "Reservado" : "Disponível";
        console.log(`Quarto ${numeroQuarto}: ${status}.`);
        return status;
    }
}
const hotel = new Hotel();
const reserva1 = new Reserva(101, "Eduardo Silva", new Date("2026-05-10"), new Date("2026-05-15"));
const reserva2 = new Reserva(202, "Danilo Souza", new Date("2026-05-12"), new Date("2026-05-18"));
const reserva3 = new Reserva(303, "Gilmar Oliveira", new Date("2026-05-20"), new Date("2026-05-25"));
hotel.registrarReserva(reserva1);
hotel.registrarReserva(reserva2);
hotel.registrarReserva(reserva3);
hotel.cancelarReserva(202);
hotel.consultarStatusQuarto(101);
hotel.consultarStatusQuarto(202);
hotel.consultarStatusQuarto(303);
hotel.consultarStatusQuarto(404);
