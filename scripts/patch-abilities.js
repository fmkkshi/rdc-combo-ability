Hooks.once("init", () => {
  // 1) Duplique o config original
  const abilities = foundry.utils.duplicate(CONFIG.DND5E.abilities);

  // 2) Adicione todas as combinações de 2 habilidades (média)
  abilities["str_dex_avg"] = "Str + Dex (÷2)";
  abilities["str_con_avg"] = "Str + Con (÷2)";
  abilities["str_int_avg"] = "Str + Int (÷2)";
  abilities["str_wis_avg"] = "Str + Wis (÷2)";
  abilities["str_cha_avg"] = "Str + Cha (÷2)";

  abilities["dex_con_avg"] = "Dex + Con (÷2)";
  abilities["dex_int_avg"] = "Dex + Int (÷2)";
  abilities["dex_wis_avg"] = "Dex + Wis (÷2)";
  abilities["dex_cha_avg"] = "Dex + Cha (÷2)";

  abilities["con_int_avg"] = "Con + Int (÷2)";
  abilities["con_wis_avg"] = "Con + Wis (÷2)";
  abilities["con_cha_avg"] = "Con + Cha (÷2)";

  abilities["int_wis_avg"] = "Int + Wis (÷2)";
  abilities["int_cha_avg"] = "Int + Cha (÷2)";

  abilities["wis_cha_avg"] = "Wis + Cha (÷2)";

  // 3) Sobrescreva o config com o novo objeto abilities
  mergeObject(CONFIG.DND5E, { abilities });
});
