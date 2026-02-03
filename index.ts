export default function(settings: any) {
  console.log("Plugin HockeyPista A1 avviato!");
  console.log("Settings ricevuti:", settings);
  return {
    players: [], // qui più avanti metterai i giocatori del database
    matches: []
  };
}
