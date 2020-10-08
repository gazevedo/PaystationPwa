import {TicketConfiguration} from "src/app/model/TicketConfiguration";

export class TerminalConfiguration{
        LocalId: number;
        EquipmentId: number;
        LocalFirstId: number;
        ToleranciaGlobal: string;
        PrinterService: string;
        HasBarrier: boolean;
        HasFlap: boolean;
        HasCamera: boolean;
        HasVoucher: boolean;
        HasVoip: boolean;
        HasCredits: boolean;
        HasDaily: boolean;
        HasTicketlost: boolean;
        WorksOffline: boolean;
        CheckPrint: boolean;
        RegistersAccessIn: boolean;
        RegistersAccessOut: boolean;
        HasCashRegister: boolean;
        MakesPayment: boolean;
        HasPrinter: boolean; 
        TicketSequence:  number;
        API_RECOGNITION: string;
        API_ACCESS: string;
        API_PAYMENT: string;
        API_REPORT: string;
        API_REGISTRATION: string;
        API_LPR: string;
        API_MONITORING: string;        
        Instalacao: string;
        AppVersion:  number;
        TicketConfiguration: TicketConfiguration;
        Movimentacao: Date;
        RecicladorG60: boolean;
        Paystation: boolean;
        RecivedCreditCard: boolean;
        RecivedDebitCard: boolean;
        UrlVoip: string;
        UrlTEF: string;
        PortaTEF: string;
        LojaTEF: string;
        TerminalTEF: string;
        UtilizaRPS: boolean;
        Affiliated: boolean;
        RpsSincrono: boolean;
        UtilizaSemParar: boolean;
        UtilizaMercadoPago: boolean;
        Voucher: boolean;
        HasDebitPOS: boolean;
        HasCreditPOS: boolean;
        PortaDisplay: string;
        RamalVoip: string;
        UtilizaDescontoIntegrado: boolean;
        TAS: boolean;
        TotemPagador: boolean;
        PagaFatura: boolean;
        ValidarAbono: boolean;
        MonitCassA: boolean;
        MonitCassB: boolean;
        MonitCassC: boolean;
        MonitCassD: boolean;
        NivelBaixoNotas:  number;
        MonitHopperA: boolean;
        MonitHopperB: boolean;
        MonitHopperC: boolean;
        NivelBaixoMoedas:  number;
        HasAntecipaHoras: boolean;
        AntecipaHorasValueBtn1: string;
        AntecipaHorasValueBtn2: string;
        AntecipaHorasTextBtn1: string;
        AntecipaHorasTextBtn2: string;
        PgtoTicketless: boolean;
        FundoDeCaixa: string;
}