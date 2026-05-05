import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gera horários disponíveis entre 11:30 e 15:00
 * considerando um intervalo de 20 minutos de preparo.
 */
export function generateAvailableTimes() {
  const times: string[] = [];
  const startInMinutes = 11 * 60 + 30; // 11:30
  const endInMinutes = 15 * 60;        // 15:00
  const preparationTime = 20;          // Margem de 20min

  const now = new Date();
  // Obtém a hora atual em minutos (ajustado para o fuso local)
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  // O primeiro horário disponível deve respeitar o início do atendimento 
  // E o tempo de preparo a partir de AGORA.
  const firstAvailableSlot = Math.max(startInMinutes, currentMinutes + preparationTime);

  // Loop de 15 em 15 minutos
  for (let i = startInMinutes; i <= endInMinutes; i += 15) {
    if (i >= firstAvailableSlot) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      times.push(formattedTime);
    }
  }

  return times;
}