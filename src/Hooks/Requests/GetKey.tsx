export const GetKey = () => {
    const YEK = "wqBztYuaGaBAMrA1FaB9.wqBzvOIaGaBeFbI2ROA4GVu1QrIoGLTeRbApQLddQOE5QbzbQbAoRaAkAfF1QaA6AbQ0QLXdRLWpGYEoQLI4EVWoELu3FYI1FUAkAfFbt3TduqA6OqBzuYdxueNzRUBvDUB2RPBrsO9mAbgpxI.Fvyt-Fyj7vZbNILZP4IFZ8fQ5MYyXpj8U7RFWFrA4Ic"

    function encrypt(text: string, shift:number) {
      let encryptedText = '';
      shift = parseInt(String.fromCharCode(shift))

      for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
          const code = text.charCodeAt(i);
          let encryptedCharCode;

          if (char === char.toUpperCase()) {
            encryptedCharCode = ((code - 65 + shift) % 26) + 65;
          } else {
            encryptedCharCode = ((code - 97 + shift) % 26) + 97;
          }

          char = String.fromCharCode(encryptedCharCode);
        }

        encryptedText += char;
      }

      return encryptedText;
    }

      return encrypt(YEK, 56);

}
