import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent {
  
  schedule = {
    date: '',
    time: '',
  };

  submitForm() {
    const selectedTime = this.schedule.time;
    if (this.isValidTime(selectedTime)) {
      console.log('Agendamento confirmado:', this.schedule);
      alert('Agendamento realizado com sucesso!');
    } else {
      alert('Por favor, escolha um horário entre 09:00 e 18:00.');
    }
  }

  isValidTime(time: string): boolean {
    const [hours, minutes] = time.split(':').map(Number);
    const selectedMinutes = hours * 60 + minutes;
    const minMinutes = 9 * 60; // 09:00 em minutos
    const maxMinutes = 18 * 60; // 18:00 em minutos

    return selectedMinutes >= minMinutes && selectedMinutes <= maxMinutes;
  }
}
