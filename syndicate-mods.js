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
    'toxic_sequence',
    'deadly_sequence',
    'voltage_sequence',
    'sequence_burn',
    
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
    
    // Warframe Augments - Dagath
    'spectral_spirit',
    
    // Warframe Augments - Gauss
    'mach_crash',
    'thermal_transfer',
    
    // Warframe Augments - Gyre
    'conductive_sphere',
    'coil_recharge',
    'cathode_current',
    'reverse_rotorswell',
    
    // Warframe Augments - Hildryn
    'balefire_surge',
    'blazing_pillage',
    'aegis_gale',
    
    // Warframe Augments - Inaros
    'desiccations_curse',
    'elemental_sandstorm',
    'negation_armor',
    
    // Warframe Augments - Ivara
    'empowered_quiver',
    'piercing_navigator',
    'infiltrate',
    'concentrated_arrow',
    
    // Warframe Augments - Mag
    'greedy_pull',
    'magnetized_discharge',
    'counter_pulse',
    'fracturing_crush',
    
    // Warframe Augments - Nekros
    'soul_survivor',
    'creeping_terrify',
    'despoil',
    'shield_of_shadows',
    
    // Warframe Augments - Nidus
    'teeming_virulence',
    'larva_burst',
    'parasitic_vitality',
    'insatiable',
    'abundant_mutation',
    
    // Warframe Augments - Protea
    'repair_dispensary',
    'temporal_artillery',
    'temporal_erosion',
    
    // Warframe Augments - Revenant
    'thrall_pact',
    'mesmer_shield',
    'blinding_reave',
    
    // Warframe Augments - Rhino
    'ironclad_charge',
    'iron_shrapnel',
    'piercing_roar',
    'reinforcing_stomp',
    
    // Warframe Augments - Trinity
    'pool_of_life',
    'vampire_leech',
    'abating_link',
    'champions_blessing',
    
    // Warframe Augments - Valkyr
    'swing_line',
    'eternal_war',
    'prolonged_paralysis',
    'hysterical_assault',
    'enraged',
    
    // Warframe Augments - Vauban
    'tesla_bank',
    'repelling_bastille',
    'photon_repeater',
    
    // Warframe Augments - Sevagoth
    'shadow_haze',
    'dark_propagation',
    
    // Syndicate Weapons
    'secura_dual_cestra',
    'secura_penta',
    'secura_lecta',
  ],
  
  // Red Veil - Left alignment
  'Red Veil': [
    // Weapon Augments
    'gleaming_blight',
    'eroding_blight',
    'stockpiled_blight',
    'toxic_blight',
    
    // Warframe Augments - Ash
    'seeking_shuriken',
    'smoke_shadow',
    'teleport_rush',
    'rising_storm',
    
    // Warframe Augments - Atlas
    'path_of_statues',
    'tectonic_fracture',
    'ore_gaze',
    'titanic_rumbler',
    'rubble_heap',
    
    // Warframe Augments - Citrine
    'prismatic_companion',
    'recrystalize',
    
    // Warframe Augments - Dagath
    'spectral_spirit',
    
    // Warframe Augments - Ember
    'fireball_frenzy',
    'immolated_radiance',
    'healing_flame',
    'exothermic',
    
    // Warframe Augments - Excalibur Umbra
    'warriors_rest',
    
    // Warframe Augments - Garuda
    'dread_ward',
    'blood_forge',
    'blending_talons',
    
    // Warframe Augments - Grendel
    'gourmand',
    'hearty_nourishment',
    'catapult',
    'gastro',
    
    // Warframe Augments - Harrow
    'tribunal',
    'warding_thurible',
    'lasting_covenant',
    
    // Warframe Augments - Jade
    'jades_judgment',
    
    // Warframe Augments - Khora
    'accumulating_whipclaw',
    'venari_bodyguard',
    'pilfering_strangledome',
    
    // Warframe Augments - Lavos
    'swift_bite',
    'valence_formation',
    'lingering_transmutation',
    
    // Warframe Augments - Loki
    'savior_decoy',
    'damage_decoy',
    'hushed_invisibility',
    'safeguard_switch',
    'irradiating_disarm',
    
    // Warframe Augments - Mesa
    'ballistic_bullseye',
    'staggering_shield',
    'muzzle_flash',
    'mesas_waltz',
    
    // Warframe Augments - Nekros
    'soul_survivor',
    'creeping_terrify',
    'despoil',
    'shield_of_shadows',
    
    // Warframe Augments - Saryn
    'venom_dose',
    'revealing_spores',
    'regenerative_molt',
    'contagion_cloud',
    
    // Warframe Augments - Titania
    'spellbound_harvest',
    'beguiling_lantern',
    'razorwing_blitz',
    'ironclad_flight',
    
    // Warframe Augments - Volt
    'shock_trooper',
    'shocking_speed',
    'transistor_shield',
    'capacitance',
    
    // Warframe Augments - Voruna
    'prey_of_dynar',
    'ulfruns_endurance',
    
    // Warframe Augments - Zephyr
    'target_fixation',
    'airburst_rounds',
    'jet_stream',
    'funnel_clouds',
    'anchored_glide',
    
    // Syndicate Weapons
    'rakta_ballistica',
    'rakta_cernos',
    'rakta_dark_dagger',
  ],
  
  // New Loka - Left alignment
  'New Loka': [
    // Weapon Augments
    'winds_of_purity',
    'disarming_purity',
    'bright_purity',
    'lasting_purity',
    
    // Warframe Augments - Baruuk
    'elusive_retribution',
    'endless_lullaby',
    'reactive_storm',
    
    // Warframe Augments - Equinox
    'duality',
    'calm_frenzy',
    'peaceful_provocation',
    'energy_transfer',
    
    // Warframe Augments - Gara
    'shattered_storm',
    'mending_splinters',
    'spectrosiphon',
    
    // Warframe Augments - Hydroid
    'viral_tempest',
    'tidal_impunity',
    'rousing_plunder',
    'pilfering_swarm',
    
    // Warframe Augments - Koumei
    'omikujis_fortune',
    
    // Warframe Augments - Kullervo
    'volatile_recompense',
    'wrath_of_ukko',
    
    // Warframe Augments - Lavos
    'swift_bite',
    'valence_formation',
    'lingering_transmutation',
    
    // Warframe Augments - Mag
    'greedy_pull',
    'magnetized_discharge',
    'counter_pulse',
    'fracturing_crush',
    
    // Warframe Augments - Nyx
    'mind_freak',
    'pacifying_bolts',
    'chaos_sphere',
    'assimilate',
    
    // Warframe Augments - Oberon
    'smite_infusion',
    'hallowed_eruption',
    'phoenix_renewal',
    'hallowed_reckoning',
    
    // Warframe Augments - Octavia
    'partitioned_mallet',
    'conductor',
    
    // Warframe Augments - Titania
    'spellbound_harvest',
    'beguiling_lantern',
    'razorwing_blitz',
    'ironclad_flight',
    
    // Warframe Augments - Styanax
    'axios_javelineers',
    'tharros_lethality',
    'intrepid_stand',
    
    // Warframe Augments - Trinity
    'pool_of_life',
    'vampire_leech',
    'abating_link',
    'champions_blessing',
    
    // Warframe Augments - Valkyr
    'swing_line',
    'eternal_war',
    'prolonged_paralysis',
    'hysterical_assault',
    'enraged',
    
    // Warframe Augments - Wisp
    'fused_reservoir',
    'critical_surge',
    'cataclysmic_gate',
    
    // Warframe Augments - Zephyr
    'target_fixation',
    'airburst_rounds',
    'jet_stream',
    'funnel_clouds',
    'anchored_glide',
    
    // Warframe Augments - Wukong
    'celestial_stomp',
    'enveloping_cloud',
    'primal_rage',
    
    // Warframe Augments - Yareli
    'merulina_guardian',
    'loyal_merulina',
    'surging_blades',
    
    // Syndicate Weapons
    'sancti_castanas',
    'sancti_tigris',
    'sancti_magistar',
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
