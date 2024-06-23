export function base64ToBlob(base64: string, mimeType: string) {
  const byteCharacters = atob(base64); // Converting base64 string into individual bytes
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}
