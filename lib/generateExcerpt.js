export function generateExcerpt(htmlContent, maxLength = 150) {
  if (!htmlContent) {
    return "";
  }

  const plainText = htmlContent.replace(/<[^>]+>/g, "");

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + "...";
}
