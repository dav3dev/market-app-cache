// Mapowanie modów augmentowych do syndykatów
// Każdy syndykat oferuje mody dla określonych warframe'ów i broni

const SYNDICATE_MODS = {
  // Steel Meridian - Left alignment
  'Steel Meridian': [
    // Warframe Augments
    'iron_shrapnel',
    'fireball_frenzy',
    'freeze_force',
    'smite_infusion',
    'shock_trooper',
    'venom_dose',
    
    // Weapon Augments
    'scattered_justice', // Hek
    'justice_blades', // Burston Prime
    
    // Syndicate Weapons
    'vaykor_hek',
    'vaykor_marelok',
  ],
  
  // Arbiters of Hexis - Right alignment
  'Arbiters of Hexis': [
    // Warframe Augments
    'freeze_force',
    'smite_infusion',
    'shocking_speed',
    'power_donation',
    'lightning_rod',
    
    // Weapon Augments
    'sequence_burn',
    
    // Syndicate Weapons
    'telos_akbolto',
    'telos_boltor',
  ],
  
  // Cephalon Suda - Right alignment
  'Cephalon Suda': [
    // Warframe Augments
    'antimatter_absorb',
    'molecular_fission',
    'repelling_bastille',
    'pool_of_life',
    'chilling_globe',
    
    // Weapon Augments
    'entropy_spike',
    'entropy_burst',
    
    // Syndicate Weapons
    'synoid_gammacor',
    'synoid_heliocor',
    'synoid_simulor',
  ],
  
  // The Perrin Sequence - Right alignment
  'The Perrin Sequence': [
    // Warframe Augments
    'molecular_fission',
    'repelling_bastille',
    'Tesla_Bank',
    'chroma_afterburn',
    'spectrosiphon',
    
    // Weapon Augments
    'sequence_burn',
    'electromagnetic_shielding',
    
    // Syndicate Weapons
    'secura_dual_cestra',
    'secura_lecta',
    'secura_penta',
  ],
  
  // Red Veil - Left alignment
  'Red Veil': [
    // Warframe Augments
    'fireball_frenzy',
    'smite_infusion',
    'sonic_fracture',
    'ore_gaze',
    'eternal_war',
    'despoil',
    
    // Weapon Augments
    'deadly_sequence',
    'hemorrhage',
    
    // Syndicate Weapons
    'rakta_ballistica',
    'rakta_cernos',
    'rakta_dark_dagger',
  ],
  
  // New Loka - Left alignment
  'New Loka': [
    // Warframe Augments
    'shock_trooper',
    'venom_dose',
    'peaceful_provocation',
    'phoenix_renewal',
    'regenerative_molt',
    'savior_decoy',
    
    // Weapon Augments
    'purifying_flames',
    'winds_of_purity',
    
    // Syndicate Weapons
    'sancti_castanas',
    'sancti_magistar',
    'sancti_tigris',
  ],
};

// Stwórz odwrotne mapowanie: mod -> syndykat
const MOD_TO_SYNDICATE = {};
for (const [syndicate, mods] of Object.entries(SYNDICATE_MODS)) {
  mods.forEach(mod => {
    MOD_TO_SYNDICATE[mod] = syndicate;
  });
}

module.exports = {
  SYNDICATE_MODS,
  MOD_TO_SYNDICATE,
};
