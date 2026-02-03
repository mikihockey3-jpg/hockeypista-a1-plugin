// index.ts - Hockey Pista Serie A1 Plugin
import { Player, LeaguePlugin } from './types';

const hockeyPistaA1: LeaguePlugin = {
  id: "hockeypista-a1", // ID unico del plugin
  name: "Hockey Pista Serie A1",
  description: "Plugin per creare leghe personalizzate di Hockey Pista Serie A1",
  version: "1.0.0",

  // Funzione principale per ottenere i giocatori
  getPlayers: async () => {
    // QUI inserirai il tuo database di giocatori manuale
    const players: Player[] = [
      // Esempio di struttura corretta
      // {
      //   id: "1",
      //   name: "Mario Rossi",
      //   team: "HC Milano",
      //   points: 0,       // numeri
      //   lastMatch: 0,    // numeri
      //   total: 0,        // numeri
      //   photo: "https://link-immagine.jpg"
      // }
    ];

    // Assicurati che tutti i valori siano stringhe o numeri
    return players.map(player => ({
      id: String(player.id || ""),          // sempre stringa
      name: player.name || "",              // stringa
      team: player.team || "",              // stringa
      points: Number(player.points || 0),   // numero
      lastMatch: Number(player.lastMatch || 0), // numero
      total: Number(player.total |
