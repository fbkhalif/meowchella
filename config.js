// Multiplayer settings for the web version.
// The URL and the publishable key are MEANT to be public (they ship to every visitor's browser), so they are safe
// to commit. Never put the secret key (sb_secret_...) or a service_role key in this repo.
window.CATRAVE = {
  supabaseUrl: "https://nzosnvehlslkydzqrlwv.supabase.co",
  supabaseKey: "sb_publishable_lTqDZvpQnGqbc6mvbnToWA_fopi3PKK",
  room: "cat-rave-hall" // everyone with the same room name is on the same dance floor
};
