export interface Player {
  id: number;           // ID unico del giocatore
  name: string;         // Nome del giocatore
  team: string;         // Nome della squadra
  position: string;     // Ruolo (es: attaccante, difensore, portiere)
  photo?: string;       // URL della foto (opzionale)
  stats?: Record<string, number>; // Statistiche opzionali, es: gol, assist
}

export interface PluginSettings {
  sample?: string; // Puoi aggiungere qui altre impostazioni che vuoi far configurare
}
