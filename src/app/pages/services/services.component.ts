import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Servico {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  tempoEstimado: string;
  disponivel: boolean;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private router: Router){}
  
  servicos: Servico[] = [
    {
      id: 1,
      nome: 'Troca de Óleo',
      descricao: 'Troca completa de óleo do motor com produtos de primeira linha',
      preco: 150.00,
      tempoEstimado: '1 hora',
      disponivel: true
    },
    {
      id: 2,
      nome: 'Alinhamento e Balanceamento',
      descricao: 'Alinhamento computadorizado e balanceamento das rodas',
      preco: 120.00,
      tempoEstimado: '2 horas',
      disponivel: true
    },
    {
      id: 3,
      nome: 'Revisão Completa',
      descricao: 'Checagem de todos os sistemas do veículo',
      preco: 350.00,
      tempoEstimado: '4 horas',
      disponivel: true
    },
    {
      id: 4,
      nome: 'Troca de Pastilhas de Freio',
      descricao: 'Substituição das pastilhas de freio dianteiras e traseiras',
      preco: 200.00,
      tempoEstimado: '2 horas',
      disponivel: true
    },
    {
      id: 5,
      nome: 'Higienização do Ar Condicionado',
      descricao: 'Limpeza completa do sistema de ar condicionado',
      preco: 180.00,
      tempoEstimado: '3 horas',
      disponivel: true
    }
  ];

  servicosFiltrados: Servico[] = this.servicos;
  filtro: string = '';

  filtrarServicos() {
    this.servicosFiltrados = this.servicos.filter(servico =>
      servico.nome.toLowerCase().includes(this.filtro.toLowerCase()) ||
      servico.descricao.toLowerCase().includes(this.filtro.toLowerCase())
    );

}
agendarServico(servico: Servico) {
  // Aqui você pode implementar a lógica de agendamento
  console.log(`Agendando serviço: ${servico.nome}`);
  this.router.navigate(['/agendamento']);
  // Exemplo: emitir evento, abrir modal, navegar para página de agendamento, etc.

}
}