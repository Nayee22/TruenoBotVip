let handler = async (m, {conn, text}) => {
  let name = await conn.getName(m.sender);

  conn.sendButton(
    m.chat,
    "*[ ⚠ ️] No etiquetes a Ezequiel creador del bot, si es algo urgente contacta con el a su chat privado*",
    wm3,
    [["📋 TERMINOS Y CONDICIONES", `#terminos`]],
    m
  );
  let mentionedJid = [m.sender];
};
handler.customPrefix =/i;
handler.command = new RegExp();

export default handler;
