// Mapowanie modów augmentowych do syndykatów
// Każdy syndykat oferuje mody dla określonych warframe'ów i broni

const SYNDICATE_MODS = {
  // Steel Meridian - Left alignment
  'Steel Meridian': [
    // Weapon Augments
    'scattered_justice',
    'justice_blades',
    'neutralizing_justice',
    'shattering_justice',
    
    // Warframe Augments - Atlas
    'path_of_statues',
    'tectonic_fracture',
    'ore_gaze',
    'titanic_rumbler',
    'rubble_heap',
    
    // Warframe Augments - Citrine
    'prismatic_companion',
    'recrystalize',
    
    // Warframe Augments - Ember
    'fireball_frenzy',
    'immolated_radiance',
    'healing_flame',
    'exothermic',
    
    // Warframe Augments - Excalibur
    'surging_dash',
    'radiant_finish',
    'furious_javelin',
    'chromatic_blade',
    
    // Warframe Augments - Frost
    'freeze_force',
    'ice_wave_impedance',
    'chilling_globe',
    'icy_avalanche',
    'biting_frost',
    
    // Warframe Augments - Garuda
    'dread_ward',
    'blood_forge',
    'blending_talons',
    
    // Warframe Augments - Grendel
    'gourmand',
    'hearty_nourishment',
    'catapult',
    'gastro',
    
    // Warframe Augments - Khora
    'accumulating_whipclaw',
    'venari_bodyguard',
    'pilfering_strangledome',
    
    // Warframe Augments - Kullervo
    'volatile_recompense',
    'wrath_of_ukko',
    
    // Warframe Augments - Mesa
    'ballistic_bullseye',
    'staggering_shield',
    'muzzle_flash',
    'mesas_waltz',
    
    // Warframe Augments - Nezha
    'pyroclastic_flow',
    'reaping_chakram',
    'safeguard',
    'divine_retribution',
    'controlled_slide',
    
    // Warframe Augments - Nidus
    'teeming_virulence',
    'larva_burst',
    'parasitic_vitality',
    'insatiable',
    'abundant_mutation',
    
    // Warframe Augments - Nova
    'neutron_star',
    'antimatter_absorb',
    'escape_velocity',
    'molecular_fission',
    
    // Warframe Augments - Oberon
    'smite_infusion',
    'hallowed_eruption',
    'phoenix_renewal',
    'hallowed_reckoning',
    
    // Warframe Augments - Qorvex
    'wrecking_wall',
    'fused_crucible',
    
    // Warframe Augments - Rhino
    'ironclad_charge',
    'iron_shrapnel',
    'piercing_roar',
    'reinforcing_stomp',
    
    // Warframe Augments - Saryn
    'venom_dose',
    'revealing_spores',
    'regenerative_molt',
    'contagion_cloud',
    
    // Warframe Augments - Voruna
    'prey_of_dynar',
    'ulfruns_endurance',
    
    // Warframe Augments - Xaku
    'vampiric_grasp',
    'the_relentless_lost',
    'untime_rift',
    
    // Syndicate Weapons
    'vaykor_hek',
    'vaykor_marelok',
    'vaykor_sydon',
  ],
  
  // Arbiters of Hexis - Right alignment
  'Arbiters of Hexis': [
    // Weapon Augments
    'gilded_truth',
    'blade_of_truth',
    'avenging_truth',
    'stinging_truth',
    
    // Warframe Augments - Ash
    'seeking_shuriken',
    'smoke_shadow',
    'teleport_rush',
    'rising_storm',
    
    // Warframe Augments - Baruuk
    'elusive_retribution',
    'endless_lullaby',
    'reactive_storm',
    
    // Warframe Augments - Equinox
    'duality',
    'calm_and_frenzy',
    'peaceful_provocation',
    'energy_transfer',
    
    // Warframe Augments - Excalibur
    'surging_dash',
    'radiant_finish',
    'furious_javelin',
    'chromatic_blade',
    
    // Warframe Augments - Excalibur Umbra
    'warriors_rest',
    
    // Warframe Augments - Gara
    'shattered_storm',
    'mending_splinters',
    'spectrosiphon',
    
    // Warframe Augments - Gauss
    'mach_crash',
    'thermal_transfer',
    
    // Warframe Augments - Gyre
    'conductive_sphere',
    'coil_recharge',
    'cathode_current',
    'reverse_rotorswell',
    
    // Warframe Augments - Harrow
    'tribunal',
    'warding_thurible',
    'lasting_covenant',
    
    // Warframe Augments - Inaros
    'desiccations_curse',
    'elemental_sandstorm',
    'negation_armor',
    
    // Warframe Augments - Jade
    'jades_judgment',
    
    // Warframe Augments - Koumei
    'omikujis_fortune',
    
    // Warframe Augments - Limbo
    'rift_haven',
    'rift_torrent',
    'cataclysmic_continuum',
    
    // Warframe Augments - Loki
    'savior_decoy',
    'damage_decoy',
    'hushed_invisibility',
    'safeguard_switch',
    'irradiating_disarm',
    
    // Warframe Augments - Mirage
    'hall_of_malevolence',
    'explosive_legerdemain',
    'total_eclipse',
    
    // Warframe Augments - Nyx
    'mind_freak',
    'pacifying_bolts',
    'chaos_sphere',
    'assimilate',
    
    // Warframe Augments - Protea
    'repair_dispensary',
    'temporal_artillery',
    'temporal_erosion',
    
    // Warframe Augments - Styanax
    'axios_javelineers',
    'tharros_lethality',
    'intrepid_stand',
    
    // Warframe Augments - Volt
    'shock_trooper',
    'shocking_speed',
    'transistor_shield',
    'capacitance',
    
    // Warframe Augments - Wukong
    'celestial_stomp',
    'enveloping_cloud',
    'primal_rage',
    
    // Syndicate Weapons
    'telos_akbolto',
    'telos_boltor',
    'telos_boltace',
  ],
  
  // Cephalon Suda - Right alignment
  'Cephalon Suda': [
    // Weapon Augments
    'entropy_spike',
    'entropy_flight',
    'entropy_detonation',
    'entropy_burst',
    
    // Warframe Augments - Banshee
    'sonic_fracture',
    'resonance',
    'savage_silence',
    'resonating_quake',
    
    // Warframe Augments - Caliban
    'razor_mortar',
    
    // Warframe Augments - Chroma
    'afterburn',
    'everlasting_ward',
    'vexing_retaliation',
    'guardian_armor',
    'guided_effigy',
    
    // Warframe Augments - Frost
    'freeze_force',
    'ice_wave_impedance',
    'chilling_globe',
    'icy_avalanche',
    'biting_frost',
    
    // Warframe Augments - Hildryn
    'balefire_surge',
    'blazing_pillage',
    'aegis_gale',
    
    // Warframe Augments - Hydroid
    'viral_tempest',
    'tidal_impunity',
    'rousing_plunder',
    'pilfering_swarm',
    
    // Warframe Augments - Ivara
    'empowered_quiver',
    'piercing_navigator',
    'infiltrate',
    'concentrated_arrow',
    
    // Warframe Augments - Limbo
    'rift_haven',
    'rift_torrent',
    'cataclysmic_continuum',
    
    // Warframe Augments - Mirage
    'hall_of_malevolence',
    'explosive_legerdemain',
    'total_eclipse',
    
    // Warframe Augments - Nezha
    'pyroclastic_flow',
    'reaping_chakram',
    'safeguard',
    'divine_retribution',
    'controlled_slide',
    
    // Warframe Augments - Nova
    'neutron_star',
    'antimatter_absorb',
    'escape_velocity',
    'molecular_fission',
    
    // Warframe Augments - Octavia
    'partitioned_mallet',
    'conductor',
    
    // Warframe Augments - Qorvex
    'wrecking_wall',
    'fused_crucible',
    
    // Warframe Augments - Revenant
    'thrall_pact',
    'mesmer_shield',
    'blinding_reave',
    
    // Warframe Augments - Sevagoth
    'shadow_haze',
    'dark_propagation',
    
    // Warframe Augments - Vauban
    'tesla_bank',
    'repelling_bastille',
    'photon_repeater',
    
    // Warframe Augments - Wisp
    'fused_reservoir',
    'critical_surge',
    'cataclysmic_gate',
    
    // Warframe Augments - Xaku
    'vampiric_grasp',
    'the_relentless_lost',
    'untime_rift',
    
    // Warframe Augments - Yareli
    'merulina_guardian',
    'loyal_merulina',
    'surging_blades',
    
    // Syndicate Weapons
    'synoid_gammacor',
    'synoid_simulor',
    'synoid_heliocor',
  ],
  
  // The Perrin Sequence - Right alignment
  'The Perrin Sequence': [
    // Weapon Augments
    'toxic-sequence',
    'deadly-sequence',
    'voltage-sequence',
    'sequence-burn',
    
    // Warframe Augments - Banshee
    'sonic-fracture',
    'resonance',
    'savage-silence',
    'resonating-quake',
    
    // Warframe Augments - Caliban
    'razor-mortar',
    
    // Warframe Augments - Chroma
    'afterburn',
    'everlasting-ward',
    'vexing-retaliation',
    'guardian-armor',
    'guided-effigy',
    
    // Warframe Augments - Dagath
    'spectral-spirit',
    
    // Warframe Augments - Gauss
    'mach-crash',
    'thermal-transfer',
    
    // Warframe Augments - Gyre
    'conductive-sphere',
    'coil-recharge',
    'cathode-current',
    'reverse-rotorswell',
    
    // Warframe Augments - Hildryn
    'balefire-surge',
    'blazing-pillage',
    'aegis-gale',
    
    // Warframe Augments - Inaros
    'desiccations-curse',
    'elemental-sandstorm',
    'negation-armor',
    
    // Warframe Augments - Ivara
    'empowered-quiver',
    'piercing-navigator',
    'infiltrate',
    'concentrated-arrow',
    
    // Warframe Augments - Mag
    'greedy-pull',
    'magnetized-discharge',
    'counter-pulse',
    'fracturing-crush',
    
    // Warframe Augments - Nekros
    'soul-survivor',
    'creeping-terrify',
    'despoil',
    'shield-of-shadows',
    
    // Warframe Augments - Nidus
    'teeming-virulence',
    'larva-burst',
    'parasitic-vitality',
    'insatiable',
    'abundant-mutation',
    
    // Warframe Augments - Protea
    'repair-dispensary',
    'temporal-artillery',
    'temporal-erosion',
    
    // Warframe Augments - Revenant
    'thrall-pact',
    'mesmer-shield',
    'blinding-reave',
    
    // Warframe Augments - Rhino
    'ironclad-charge',
    'iron-shrapnel',
    'piercing-roar',
    'reinforcing-stomp',
    
    // Warframe Augments - Trinity
    'pool-of-life',
    'vampire-leech',
    'abating-link',
    'champions-blessing',
    
    // Warframe Augments - Valkyr
    'swing-line',
    'eternal-war',
    'prolonged-paralysis',
    'hysterical-assault',
    'enraged',
    
    // Warframe Augments - Vauban
    'tesla-bank',
    'repelling-bastille',
    'photon-repeater',
    
    // Warframe Augments - Sevagoth
    'shadow-haze',
    'dark-propagation',
    
    // Syndicate Weapons
    'secura-dual-cestra',
    'secura-penta',
    'secura-lecta',
  ],
  
  // Red Veil - Left alignment
  'Red Veil': [
    // Weapon Augments
    'gleaming-blight',
    'eroding-blight',
    'stockpiled-blight',
    'toxic-blight',
    
    // Warframe Augments - Ash
    'seeking-shuriken',
    'smoke-shadow',
    'teleport-rush',
    'rising-storm',
    
    // Warframe Augments - Atlas
    'path-of-statues',
    'tectonic-fracture',
    'ore-gaze',
    'titanic-rumbler',
    'rubble-heap',
    
    // Warframe Augments - Citrine
    'prismatic-companion',
    'recrystalize',
    
    // Warframe Augments - Dagath
    'spectral-spirit',
    
    // Warframe Augments - Ember
    'fireball-frenzy',
    'immolated-radiance',
    'healing-flame',
    'exothermic',
    
    // Warframe Augments - Excalibur Umbra
    'warriors-rest',
    
    // Warframe Augments - Garuda
    'dread-ward',
    'blood-forge',
    'blending-talons',
    
    // Warframe Augments - Grendel
    'gourmand',
    'hearty-nourishment',
    'catapult',
    'gastro',
    
    // Warframe Augments - Harrow
    'tribunal',
    'warding-thurible',
    'lasting-covenant',
    
    // Warframe Augments - Jade
    'jades-judgment',
    
    // Warframe Augments - Khora
    'accumulating-whipclaw',
    'venari-bodyguard',
    'pilfering-strangledome',
    
    // Warframe Augments - Lavos
    'swift-bite',
    'valence-formation',
    'lingering-transmutation',
    
    // Warframe Augments - Loki
    'savior-decoy',
    'damage-decoy',
    'hushed-invisibility',
    'safeguard-switch',
    'irradiating-disarm',
    
    // Warframe Augments - Mesa
    'ballistic-bullseye',
    'staggering-shield',
    'muzzle-flash',
    'mesas-waltz',
    
    // Warframe Augments - Nekros
    'soul-survivor',
    'creeping-terrify',
    'despoil',
    'shield-of-shadows',
    
    // Warframe Augments - Saryn
    'venom-dose',
    'revealing-spores',
    'regenerative-molt',
    'contagion-cloud',
    
    // Warframe Augments - Titania
    'spellbound-harvest',
    'beguiling-lantern',
    'razorwing-blitz',
    'ironclad-flight',
    
    // Warframe Augments - Volt
    'shock-trooper',
    'shocking-speed',
    'transistor-shield',
    'capacitance',
    
    // Warframe Augments - Voruna
    'prey-of-dynar',
    'ulfruns-endurance',
    
    // Warframe Augments - Zephyr
    'target-fixation',
    'airburst-rounds',
    'jet-stream',
    'funnel-clouds',
    'anchored-glide',
    
    // Syndicate Weapons
    'rakta-ballistica',
    'rakta-cernos',
    'rakta-dark-dagger',
  ],
  
  // New Loka - Left alignment
  'New Loka': [
    // Weapon Augments
    'winds-of-purity',
    'disarming-purity',
    'bright-purity',
    'lasting-purity',
    
    // Warframe Augments - Baruuk
    'elusive-retribution',
    'endless-lullaby',
    'reactive-storm',
    
    // Warframe Augments - Equinox
    'duality',
    'calm-frenzy',
    'peaceful-provocation',
    'energy-transfer',
    
    // Warframe Augments - Gara
    'shattered-storm',
    'mending-splinters',
    'spectrosiphon',
    
    // Warframe Augments - Hydroid
    'viral-tempest',
    'tidal-impunity',
    'rousing-plunder',
    'pilfering-swarm',
    
    // Warframe Augments - Koumei
    'omikujis-fortune',
    
    // Warframe Augments - Kullervo
    'volatile-recompense',
    'wrath-of-ukko',
    
    // Warframe Augments - Lavos
    'swift-bite',
    'valence-formation',
    'lingering-transmutation',
    
    // Warframe Augments - Mag
    'greedy-pull',
    'magnetized-discharge',
    'counter-pulse',
    'fracturing-crush',
    
    // Warframe Augments - Nyx
    'mind-freak',
    'pacifying-bolts',
    'chaos-sphere',
    'assimilate',
    
    // Warframe Augments - Oberon
    'smite-infusion',
    'hallowed-eruption',
    'phoenix-renewal',
    'hallowed-reckoning',
    
    // Warframe Augments - Octavia
    'partitioned-mallet',
    'conductor',
    
    // Warframe Augments - Titania
    'spellbound-harvest',
    'beguiling-lantern',
    'razorwing-blitz',
    'ironclad-flight',
    
    // Warframe Augments - Styanax
    'axios-javelineers',
    'tharros-lethality',
    'intrepid-stand',
    
    // Warframe Augments - Trinity
    'pool-of-life',
    'vampire-leech',
    'abating-link',
    'champions-blessing',
    
    // Warframe Augments - Valkyr
    'swing-line',
    'eternal-war',
    'prolonged-paralysis',
    'hysterical-assault',
    'enraged',
    
    // Warframe Augments - Wisp
    'fused-reservoir',
    'critical-surge',
    'cataclysmic-gate',
    
    // Warframe Augments - Zephyr
    'target-fixation',
    'airburst-rounds',
    'jet-stream',
    'funnel-clouds',
    'anchored-glide',
    
    // Warframe Augments - Wukong
    'celestial-stomp',
    'enveloping-cloud',
    'primal-rage',
    
    // Warframe Augments - Yareli
    'merulina-guardian',
    'loyal-merulina',
    'surging-blades',
    
    // Syndicate Weapons
    'sancti-castanas',
    'sancti-tigris',
    'sancti-magistar',
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
